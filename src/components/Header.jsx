const Header = ({ handleSearch }) => {

    const assetsPath = process.env.PUBLIC_URL + '/assets';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand m-2" href="./">
                <img src={`${assetsPath}/matech-logo.svg`} width="30" height="30" className="d-inline-block align-top" alt="" />
                Recordatorio de servicios
            </a>
            <form className="form-inline m-2 w-100">
                <input onChange={handleSearch} className="form-control mr-sm-2" type="search" placeholder="Buscar servicio" aria-label="Buscar servicio" />
            </form>
        </nav>
    )
}

export default Header
