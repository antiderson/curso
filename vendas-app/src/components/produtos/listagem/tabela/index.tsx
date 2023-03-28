import { Produto } from "@/app/models/produtos"

interface TabelaProdutoProps {
    produtos: Array<Produto>;
}

export const TabelaProdutos: React.FC<TabelaProdutoProps> = ({
    produtos
}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>SKU</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {
                        produtos.map( produto => <ProdutoRow key={produto.id} produto={produto} />) 
                    }
                </tr>
            </tbody>
        </table>
    )
}

interface ProdutoRowProprs {
    produto: Produto;
}
const ProdutoRow: React.FC<ProdutoRowProprs> = ({
    produto
}) => {
    return (
        <tr>
            <td>{produto.id}</td>
            <td>{produto.sku}</td>
            <td>{produto.nome}</td>
            <td>{produto.preco}</td>
            <td><button className="button is-primary">Editar</button></td>
        </tr>
    )
}