import React, { useState } from 'react';
import { Layout, Input } from 'components';

export const CadastroProdutos: React.FC = () => {

    const [SKU, setSku] = useState('');
    const [Preco, setPreco] = useState('');
    const [Nome, setNome] = useState('');
    const [Descricao, setDescricao] = useState('');

    const submit = () => {
        const produto = {
            SKU,
            Preco,
            Nome,
            Descricao
        }
        console.log(produto)
    }

    return (
        <Layout titulo='Cadastro de Produtos'>
            <div className='columns'>
                <Input label='SKU: *'
                    columnClasses='if-half'
                    onChange={setSku}
                    value={SKU}
                    id={SKU}
                    placeholder="Digite o SKU" />

                <Input 
                    label='Preço: *'
                    columnClasses='if-half'
                    onChange={setPreco}
                    value={Preco}
                    id={Preco}
                    placeholder="Digite o preço"
                />
            </div>

            <Input
                label='Nome: *'
                columnClasses='if-half'
                onChange={setNome}
                value={Nome}
                id={Nome}
                placeholder="Digite o nome"
            />
            
            <Input
                label='Descrição: *'
                columnClasses='if-half'
                onChange={setDescricao}
                value={Descricao}
                id={Descricao}
                placeholder="Digite a descrição"
                />
            
            <div className="buttons">
                <button className="button is-primary" onClick={submit}>Cadastrar</button>
                <button className="button is-link">Voltar</button>
            </div>
        </Layout >
    )
}