import React from "react";

export const Menu: React.FC = () => {
    return (
        <aside className="collumn is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">Minhas vendas</p>
            <ul className="menu-list">
                <li>
                    <a href="#">
                        <span className="icon"></span> Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"></span> Cadastros
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"></span> Config
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"></span> Sair
                    </a>
                </li>
            </ul>
        </aside>
    )
}


interface MenuItemProps {
    href?: string,
    label?: string,
    onClick?: () => void
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
    return (
        <li>
            <link rel="stylesheet" href="{props.href}">
                <a onClick={props.onClick} href=""></a>
            </link>
        </li>
    )
}