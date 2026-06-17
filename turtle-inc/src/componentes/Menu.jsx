import { Link } from "react-router-dom"

function Menu() {
    return (
        <div className="Menu">

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">turtle-inc</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-Link active" aria-current="page" to="/contacto">contacto</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-Link" to="/registro">registros</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-Link disabled" aria-disabled="true" to="/inicio">inicio</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Menu