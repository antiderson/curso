import { Cliente } from "@/app/models/clientes"
import { useFormik } from "formik";

interface ClienteFormProps {
    cliente: Cliente;
    onSubmit: (cliente: Cliente) => void;
}

const formSchema: Cliente = {
    cadastro: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    endereco: '',
    id: '',
    nome: '',
    telefone: ''
}

export const ClienteForm: React.FC<ClienteFormProps> = ({
    cliente,
    onSubmit
}) => {

    const formik = useFormik<Cliente>({
        initialValues: { ...cliente, ...formSchema },
        onSubmit,
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <input value={formik.values.nome}
                onChange={formik.handleChange}
                id="nome"
                name="nome" />
            <input value={formik.values.cpf}
                onChange={formik.handleChange}
                id="cpf"
                name="cpf" />
            <button type="submit">enviar</button>
        </form>
    )
} 