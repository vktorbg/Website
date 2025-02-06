import React from "react";
import { auth } from "../firebase"; // Importa Firebase para la autenticación
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "gatsby"; // Para enlaces internos

const Header = () => {
  // Función para manejar el inicio de sesión con Google
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Login successful!");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <header style={styles.header}>
      {/* Logo temporal */}
      <div style={styles.logo}>
        <Link to="/">Español con Vic</Link>
      </div>

      {/* Menú de navegación */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/services" style={styles.navLink}>Services</Link>
        <Link to="/about-me" style={styles.navLink}>About Me</Link>
        <Link to="/blog" style={styles.navLink}>Blog</Link>
        <Link to="/contact" style={styles.navLink}>Contact</Link>
      </nav>

      {/* Botón de Inicio de Sesión/Sign Up */}
      <button onClick={handleLogin} style={styles.loginButton}>
        Sign In / Sign Up
      </button>
    </header>
  );
};

export default Header;

// Estilos
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "1rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  },
  loginButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};