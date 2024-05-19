export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>        
      SIDEBAR
      {children}
    </main>
  );
}
// LAYOUT for pages which will share the Sidebars