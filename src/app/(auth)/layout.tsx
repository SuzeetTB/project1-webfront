export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      AUTH ROUTES
        {children}
    </main>
  );
}
// LAYOUT for login, signup, sign in