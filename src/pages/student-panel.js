import React, { useEffect, useState } from "react";
import { auth, firestore } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase Storage functions
import { storage } from "../firebase"; // Ensure you export `storage` from your Firebase config

const StudentDashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [studentData, setStudentData] = useState(null);

  // Cargar datos del estudiante desde Firestore
  useEffect(() => {
    if (user) {
      const fetchStudentData = async () => {
        const studentRef = doc(firestore, "students", user.uid);
        const studentSnap = await getDoc(studentRef);
        if (studentSnap.exists()) {
          setStudentData(studentSnap.data());
        }
      };
      fetchStudentData();
    }
  }, [user]);

  // Manejar la subida de una nueva foto de perfil
  const handleProfilePictureUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const storageRef = ref(storage, `profile-pictures/${user.uid}`); // Use `ref` to create a reference
      await uploadBytes(storageRef, file); // Upload the file
      const downloadURL = await getDownloadURL(storageRef); // Get the download URL

      // Actualizar la URL de la foto en Firestore
      const studentRef = doc(firestore, "students", user.uid);
      await updateDoc(studentRef, { profilePicture: downloadURL });
      setStudentData((prev) => ({ ...prev, profilePicture: downloadURL }));
    }
  };

  // Cambiar de plan
  const handleChangePlan = async (newPlan) => {
    const studentRef = doc(firestore, "students", user.uid);
    await updateDoc(studentRef, { plan: newPlan });
    setStudentData((prev) => ({ ...prev, plan: newPlan }));
  };

  // Pausar plan
  const handlePausePlan = async () => {
    const studentRef = doc(firestore, "students", user.uid);
    await updateDoc(studentRef, { planStatus: "paused" });
    setStudentData((prev) => ({ ...prev, planStatus: "paused" }));
  };

  if (loading) return <p>Cargando...</p>;
  if (!user) return <p>Debes iniciar sesión para acceder a esta página.</p>;

  return (
    <div style={styles.container}>
      {/* Encabezado */}
      <h1 style={styles.title}>Bienvenido, {studentData?.name || "Estudiante"}!</h1>

      {/* Sección de Perfil */}
      <section style={styles.profileSection}>
        <div style={styles.profileCard}>
          <img
            src={studentData?.profilePicture || "https://via.placeholder.com/150"}
            alt="Perfil"
            style={styles.profilePicture}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureUpload}
            style={styles.fileInput}
          />
          <button style={styles.uploadButton}>Cambiar Foto</button>
          <p style={styles.profileName}>{studentData?.name}</p>
          <p style={styles.profileEmail}>{user.email}</p>
        </div>
      </section>

      {/* Sección de Plan */}
      <section style={styles.planSection}>
        <h2 style={styles.sectionTitle}>Tu Plan Actual</h2>
        <div style={styles.planCard}>
          <h3>{studentData?.plan || "Sin plan activo"}</h3>
          <p>Beneficios:</p>
          <ul>
            <li>Clases personalizadas</li>
            <li>Acceso a recursos exclusivos</li>
            <li>Reportes de progreso semanales</li>
          </ul>
          <button onClick={() => handleChangePlan("Premium")} style={styles.planButton}>
            Cambiar a Premium
          </button>
          <button onClick={handlePausePlan} style={styles.pauseButton}>
            Pausar Plan
          </button>
        </div>
      </section>

      {/* Sección de Reportes */}
      <section style={styles.reportsSection}>
        <h2 style={styles.sectionTitle}>Tu Progreso</h2>
        <div style={styles.reportCard}>
          <p>Nivel actual: {studentData?.level || "Principiante"}</p>
          <p>Progreso semanal: {studentData?.weeklyProgress || "0%"} completado</p>
          <progress value={studentData?.weeklyProgress || 0} max="100" style={styles.progressBar}></progress>
          <p>Comentarios del profesor:</p>
          <blockquote>{studentData?.teacherFeedback || "¡Sigue así!"}</blockquote>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;

// Estilos
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "#007bff",
  },
  profileSection: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  profileCard: {
    display: "inline-block",
    textAlign: "center",
  },
  profilePicture: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
  },
  fileInput: {
    display: "none",
  },
  uploadButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  profileName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  profileEmail: {
    fontSize: "1rem",
    color: "#666",
  },
  planSection: {
    marginBottom: "4rem",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  planCard: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  planButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#ffc107",
    color: "#333",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "1rem",
  },
  pauseButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  reportsSection: {
    marginBottom: "4rem",
  },
  reportCard: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  progressBar: {
    width: "100%",
    height: "10px",
    borderRadius: "5px",
    marginBottom: "1rem",
  },
};