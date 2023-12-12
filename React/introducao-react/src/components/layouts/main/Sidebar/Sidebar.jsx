import { Link } from "react-router-dom";

export function Navbar() {

    return (
        <nav className="w-2/12 border bg-white">
            <ul className="px-4 flex flex-col gap-3">
                <li className="text-lg font-semibold"><Link to="/">Home</Link></li>
                <li className="text-lg font-semibold"><Link to="/usuarios">Usuários</Link></li>
                <li className="text-lg font-semibold"><Link to="/produtos">Produtos</Link></li>
                <li className="text-lg font-semibold"><Link to="/clientes">Clientes</Link></li>
            </ul>
        </nav>
    )

}