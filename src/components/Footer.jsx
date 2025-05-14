import { useState } from 'react';
import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add newsletter logic here
        setEmail('');
        alert('¡Gracias por suscribirte!');
    };

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>SeriesHub</h3>
                    <p>Tu destino favorito para descubrir y seguir las mejores series.</p>
                </div>

                <div className="footer-section">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#series">Series</a></li>
                        <li><a href="#favoritos">Favoritos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SeriesHub. Todos los derechos reservados.</p>
                <div className="social-links">
                    <a href="#" aria-label="Facebook">📱</a>
                    <a href="#" aria-label="Twitter">🐦</a>
                    <a href="#" aria-label="Instagram">📸</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;