const Footer = () => {
    return (
        <footer className="text-center text-white fixed-bottom" style={{ backgroundColor: '#212529' }}>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © {new Date().getFullYear()} Copyright: &nbsp;
                <a className="text-white" href="https://github.com/emanuelceballos">Ema Ceballos</a>
                &nbsp; - v1.0.0
            </div>

        </footer>
    )
}

export default Footer
