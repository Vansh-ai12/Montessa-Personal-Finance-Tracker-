export default function KPI({ title, value, color }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "20px 30px",
        border: `1px solid #e1e3e6`,
        minWidth: "200px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <h3 style={{ color: "#1e1e2f", fontSize: "16px", marginBottom: "10px" }}>{title}</h3>
      <p style={{ fontSize: "24px", fontWeight: "600", color }}>{value}</p>
    </div>
  );
}
