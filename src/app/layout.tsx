import "./global.css";

export const metadata = {
  title: "Neorank",
  description:
    "A sleek and minimal version of Hacker News made with love by Jorge Reyes.",
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
