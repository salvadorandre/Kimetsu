import "../Estilos/Footer.css"; 
import { FaFacebook, FaTelegram, FaInstagram, FaTwitter } from "react-icons/fa"
function Footer() { 

    return(
        <footer className="pie">
            <div className="redes-sociales">
                <FaFacebook className="icon"></FaFacebook>
                <FaTelegram className="icon"></FaTelegram>
                <FaInstagram className="icon"></FaInstagram>
                <FaTwitter className="icon"></FaTwitter>
            </div>
        </footer>
    )
}

export default Footer; 