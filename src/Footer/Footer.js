import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer__text">
                <p className="text title">TESTAR O PREMIUM DE GRAÇA</p>
                <p className="text subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito</p>
            </div>
            <div className="button">
                <button className="footer__button">Inscreva-se grátis</button>
            </div>
        </footer>
        </>
    )
}

export default Footer;