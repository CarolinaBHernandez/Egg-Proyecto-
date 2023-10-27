import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className="col-12 col-lg-auto mb-3 mb-lg-0 d-flex align-items-center">
                        <img
                          className="App-logo"
                          style={{ height: "50px", width: "auto" }}
                          src="dog.png"
                          alt="perro-giratorio"
                        />
                        {/* Usamos el componente Link para enlazar a UserForm */}
                        <Link to="/user-form" className="nav-link px-2 text-white">Formulario</Link>
                    </div>

                    <div className="col-12 col-lg-auto text-end d-flex align-items-center">
                        <form className="d-flex me-2">
                            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                        </form>
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;





