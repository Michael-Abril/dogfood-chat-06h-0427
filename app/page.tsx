"use client";
import { useState, useEffect, useRef } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<{id:number;text:string;from:string}[]>([
    { id: 1, text: "Welcome to Dogfood Chat!", from: "system" },
  ]);
  const [input, setInput] = useState("");
  const [connected, setConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // WebSocket connection (demo — server not required for deploy test)
    setConnected(true);
    return () => { wsRef.current?.close(); };
  }, []);

  function sendMessage() {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), text: input, from: "user" }]);
    setInput("");
  }

  return (
    <main style={{ maxWidth: 600, margin: "40px auto", fontFamily: "system-ui" }}>
      <h1>Chat App</h1>
      <p style={{ color: connected ? "green" : "gray" }}>● {connected ? "Connected" : "Connecting..."}</p>
      <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, minHeight: 300, marginBottom: 16 }}>
        {messages.map(m => (
          <div key={m.id} style={{ marginBottom: 8, textAlign: m.from === "user" ? "right" : "left" }}>
            <span style={{ background: m.from === "user" ? "#0070f3" : "#f0f0f0", color: m.from === "user" ? "#fff" : "#000", padding: "6px 12px", borderRadius: 16, display: "inline-block" }}>
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="Type a message..." style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px solid #ddd" }} />
        <button onClick={sendMessage} style={{ padding: "8px 20px", background: "#0070f3", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>Send</button>
      </div>
    </main>
  );
}
