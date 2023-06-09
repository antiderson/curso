import React, { ReactNode } from "react";
import { Menu } from './menu'

interface layoutProps {
    titulo?: string,
    children?: ReactNode
}

export const Layout: React.FC<layoutProps> = (props: layoutProps) => {
    return (
        <div className="app">
            <section className="main-content columns is-fullheight">
                <Menu />
                <div className="column is-10">
                    <div className="section">
                        <div className="card">
                            <div className="card-header">
                                <p className="card-header-title">
                                    {props.titulo}
                                </p>
                            </div>
                            <div className="card-content">
                                <div className="content">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}