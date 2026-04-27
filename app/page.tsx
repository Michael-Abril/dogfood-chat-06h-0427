export default function ChatPage() {
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '40px auto', padding: '0 20px' }}>
      <h1>Chat App</h1>
      <p>Real-time messaging powered by WebSocket.</p>
      <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, minHeight: 300, background: '#f9f9f9' }}>
        <p style={{ color: '#888' }}>Messages will appear here...</p>
      </div>
      <div style={{ display: 'flex', marginTop: 12, gap: 8 }}>
        <input type="text" placeholder="Type a message..." style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
        <button style={{ padding: '8px 16px', background: '#0070f3', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Send</button>
      </div>
    </main>
  )
}
