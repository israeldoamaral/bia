import React, { useState, useEffect } from "react";
import { useLog } from "../contexts/LogContext.jsx";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";

const Version = () => {
  const [version, setVersion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { logApiRequest, logApiResponse, logApiError } = useLog();

  const fetchVersion = async () => {
    const url = `${apiUrl}/api/versao`;
    logApiRequest("GET", url);

    try {
      const res = await fetch(url);
      const data = await res.text();

      logApiResponse("GET", url, res.status, data);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      setVersion(data);
    } catch (err) {
      logApiError("GET", url, err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVersion();
  }, []);

  if (loading) return <div className="empty-state"><p>Carregando versão...</p></div>;
  if (error) return <div className="empty-state"><p>Erro ao carregar versão: {error}</p></div>;

  return (
    <div className="about-page">
      <div className="about-content">
        <div className="feature-grid">
          <div className="feature-card highlight">
            <p style={{ fontSize: "0.875rem" }}>🔧 Versão da Aplicação</p>
            <p style={{ fontSize: "inherit" }}>{version}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version;
