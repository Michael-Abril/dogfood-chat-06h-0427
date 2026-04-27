export const metadata = { title: 'Dogfood Chat', description: 'Real-time chat app' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
