import React, { useState } from 'react';
import { Layout, Input } from 'components';
import { useProdutoService } from '@/app/services';
import { Produto } from '@/app/models/produtos';
import Link from 'next/link';

export const CadastroProdutos: React.FC = () => {

    const service = useProdutoService()
    const [sku, setSku] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [cadastro, setCadastro] = useState<string>('');

    const submit = () => {
        const produto: Produto = {
            id,
            sku,
            preco: parseFloat(preco),
            nome,
            descricao,
        }

        if (id) {
            service.atualizar(produto)
                .then(response => console.log("atualizado"))
        } else {
            service
                .salvar(produto)
                .then(produtoResposta => {
                    setId(produtoResposta.id)
                    setCadastro(produtoResposta.cadastro)
                })
        }
    }

    return (
        <Layout titulo='Cadastro de Produtos '>
            <div className='columns'>
                <Input label='Código'
                    columnClasses='if-half'
                    value={id}
                    id="inputId"
                    disabled />

                <Input
                    label='Data de cadastro'
                    columnClasses='if-half'
                    value={cadastro}
                    id="inputDataCadastro"
                    disabled />
            </div>

            <div className='columns'>
                <Input label='SKU: *'
                    columnClasses='if-half'
                    onChange={setSku}
                    value={sku}
                    id={sku}
                    placeholder="Digite o SKU" />

                <Input
                    label='Preço: *'
                    columnClasses='if-half'
                    onChange={setPreco}
                    value={preco}
                    id={preco}
                    placeholder="Digite o preço"
                />
            </div>

            <Input
                label='Nome: *'
                columnClasses='if-half'
                onChange={setNome}
                value={nome}
                id={nome}
                placeholder="Digite o nome"
            />

            <Input
                label='Descrição: *'
                columnClasses='if-half'
                onChange={setDescricao}
                value={descricao}
                id={descricao}
                placeholder="Digite a descrição"
            />

            <div className="buttons">
                <button className="button is-primary" onClick={submit}>
                    {id ? 'Atualizar' : 'Salvar'}
                </button>
                <Link href="/consultas/produtos">
                <button className="button is-link">Voltar</button>
                </Link>
            </div>
        </Layout >
    )
}