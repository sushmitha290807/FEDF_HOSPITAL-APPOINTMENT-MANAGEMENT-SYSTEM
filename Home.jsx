function Home() {
  const doctors = [
    {
      name: "Dr. Rajesh",
      specialization: "Cardiologist",
    },
    {
      name: "Dr. Priya",
      specialization: "Dermatologist",
    },
    {
      name: "Dr. Kumar",
      specialization: "Orthopedic",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Doctors</h2>

      {doctors.map((doctor, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{doctor.name}</h3>
          <p>{doctor.specialization}</p>
          <button>Book Appointment</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
