import "@/styles/index.scss";
import "@/styles/global.css";

export const metadata = {
  title: "ASTI ACADEMY",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
        {/* <title>ASTI Academy</title> */}
      </head>

      <body>{children}</body>
    </html>
  );
}
