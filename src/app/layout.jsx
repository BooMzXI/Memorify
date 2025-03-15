import "./globals.css";

export const metadata = {
  title: "Memorify",
  description: "Memorify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
