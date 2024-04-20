import "./globals.css";

export const metadata = {
  title: "Next Form WEB3",
  description: "TD WEB3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}