import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Encabezado */}
      <Header />

      {/* Sección de Bienvenida */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Learn Spanish with Confidence</h1>
          <p style={styles.heroText}>
            Personalized classes tailored to your needs. Start your journey to fluency today!
          </p>
          <button style={styles.ctaButton}>Join Now</button>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Find the Plan That Works for You</h2>
        <div style={styles.plansGrid}>
          <div style={styles.planCard}>
            <h3>Basic Plan</h3>
            <p>$50/month</p>
            <ul style={styles.planFeatures}>
              <li>5 Classes per Month</li>
              <li>Personalized Feedback</li>
              <li>Access to Resources</li>
            </ul>
            <button style={styles.planButton}>Select Plan</button>
          </div>
          <div style={styles.planCard}>
            <h3>Premium Plan</h3>
            <p>$80/month</p>
            <ul style={styles.planFeatures}>
              <li>10 Classes per Month</li>
              <li>Weekly Progress Reports</li>
              <li>Priority Support</li>
            </ul>
            <button style={styles.planButton}>Select Plan</button>
          </div>
          <div style={styles.planCard}>
            <h3>Pro Plan</h3>
            <p>$120/month</p>
            <ul style={styles.planFeatures}>
              <li>Unlimited Classes</li>
              <li>Daily Feedback</li>
              <li>Custom Learning Path</li>
            </ul>
            <button style={styles.planButton}>Select Plan</button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Students Say</h2>
        <div style={styles.testimonialsGrid}>
          <div style={styles.testimonialCard}>
            <p>"The best Spanish classes I've ever taken!"</p>
            <p>- Maria G.</p>
          </div>
          <div style={styles.testimonialCard}>
            <p>"Vic is patient and dedicated. Highly recommend!"</p>
            <p>- John P.</p>
          </div>
          <div style={styles.testimonialCard}>
            <p>"I've improved so much in such a short time."</p>
            <p>- Anna L.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;

// Estilos
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  heroSection: {
    backgroundImage: "url('https://via.placeholder.com/1200x400')", // Imagen temporal
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "4rem 2rem",
    textAlign: "center",
    color: "#fff",
  },
  heroContent: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  heroText: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  ctaButton: {
    padding: "0.8rem 2rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  servicesSection: {
    padding: "4rem 2rem",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  plansGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  planCard: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  planFeatures: {
    listStyle: "none",
    padding: "0",
    margin: "1rem 0",
  },
  planButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  testimonialsSection: {
    padding: "4rem 2rem",
    textAlign: "center",
  },
  testimonialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  testimonialCard: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};