import React from "react";

const Menu: React.FC = () => {
    return (
        <aside className="collumn is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">Minhas vendas</p>
            <ul className="menu-list">
                <li>
                    <a href="#">
                        <span className="icon"></span> Home
                    </a>
                </li>
            </ul>
        </aside>
    )
}