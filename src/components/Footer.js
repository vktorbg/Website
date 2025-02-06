import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Contenedor principal */}
      <div style={styles.content}>
        {/* Enlaces rápidos */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          <ul style={styles.linksList}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/services" style={styles.link}>Services</a></li>
            <li><a href="/about-me" style={styles.link}>About Me</a></li>
            <li><a href="/blog" style={styles.link}>Blog</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Iconos de redes sociales */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Follow Me</h3>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <img src="https://via.placeholder.com/30" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <img src="https://via.placeholder.com/30" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <img src="https://via.placeholder.com/30" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <img src="https://via.placeholder.com/30" alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Información legal */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Legal Information</h3>
          <ul style={styles.linksList}>
            <li><a href="/privacy-policy" style={styles.link}>Privacy Policy</a></li>
            <li><a href="/terms-of-service" style={styles.link}>Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Derechos de autor */}
      <div style={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Español con Vic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

// Estilos
const styles = {
  footer: {
    backgroundColor: "#282c34",
    color: "#fff",
    padding: "2rem",
    marginTop: "4rem",
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: "2rem",
  },
  section: {
    textAlign: "center",
    margin: "1rem",
    flex: "1 1 200px",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  linksList: {
    listStyle: "none",
    padding: "0",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    display: "block",
    marginBottom: "0.5rem",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  socialIcon: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    overflow: "hidden",
  },
  copyright: {
    borderTop: "1px solid #444",
    paddingTop: "1rem",
    textAlign: "center",
    fontSize: "0.9rem",
  },
};