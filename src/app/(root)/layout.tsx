import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">        
      SIDEBAR
      {children}
    </main>
  );
}
// LAYOUT for pages which will share the Sidebars