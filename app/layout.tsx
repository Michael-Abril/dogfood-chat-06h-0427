export const metadata = { title: "Dogfood Chat App", description: "Regression test: Chat app with WebSocket" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
