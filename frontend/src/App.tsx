import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState<string>('Loading...')
  const [health, setHealth] = useState<string>('unknown')

  useEffect(() => {
    fetch('/api/')
      .then(r => r.text())
      .then(html => {
        setMessage('Backend responded')
      })
      .catch(() => setMessage('Backend not reachable'))

    fetch('/api/health')
      .then(r => r.json())
      .then(({ status }) => setHealth(status))
      .catch(() => setHealth('down'))
  }, [])

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif', padding: 24 }}>
      <h1>Vite + React Frontend</h1>
      <p>Backend: {message}</p>
      <p>Health: {health}</p>
      <p>
        This page is served by Nginx and proxies /api to the Node.js backend.
      </p>
    </div>
  )
}

export default App
