export default function AppLayout({ children }) {
  return (
    <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </main>
  );
}
