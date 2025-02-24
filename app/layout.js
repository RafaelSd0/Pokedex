import "./globals.css";

export const metadata = {
  title: "Pokedex",
  description: "pokémon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >
        {children}
      </body>
    </html>
  );
}
