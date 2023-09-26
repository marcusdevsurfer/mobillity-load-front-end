import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Transporte App</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/search-page">Busqueda</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Perfil</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/register">Registrate</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>

    )
}
