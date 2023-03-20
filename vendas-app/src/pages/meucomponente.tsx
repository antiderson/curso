import React from "react"

function Mensagem(props: any) {

    return (
        <div>
            {props.mensagem}
        </div>
    )
}

export default function MeuComponente() {
    return (
        <div>
            < Mensagem mensagem="Componente" />
        </div>
    )
}


