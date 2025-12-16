import "../css/Footer.css";

const Footer = ({ scrollToSection }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    
                    <div className="footer-divider"></div>

                    <div className="footer-copyright">
                        <p>
                            © {currentYear} <span className="highlight">Putri Geraldine Sihombing</span>.
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
