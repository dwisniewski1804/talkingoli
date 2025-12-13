import { useEffect, useState } from 'react';

type HealthStatus = {
  status: string;
  service: string;
  timestamp?: string;
};

const apiBase = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000';

export function Health() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchHealth() {
      try {
        const response = await fetch(`${apiBase}/health`);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = (await response.json()) as HealthStatus;
        if (isMounted) {
          setHealth(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown error');
          setHealth(null);
        }
      }
    }

    fetchHealth();
    const interval = setInterval(fetchHealth, 5000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const statusText = health?.status === 'ok' && !error ? 'Operational' : 'Unavailable';

  return (
    <div className="card">
      <h1>TalkingOli Health</h1>
      <p>The frontend polls the API every 5 seconds to ensure the baseline stack is healthy.</p>
      <div className="status">
        <span className={error ? 'error' : 'ok'}>
          {error ? `Error: ${error}` : `${health?.service ?? 'talkingoli-api'} — ${statusText}`}
        </span>
      </div>
      <small>API Base URL: {apiBase}</small>
    </div>
  );
}
