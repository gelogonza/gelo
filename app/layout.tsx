import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export const metadata = {
  title: "Angelo Gonzalez",
  description: "Portfolio website for showcasing my work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*-- Standard Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* High-resolution favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/*-- Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/*-- Android Chrome */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-navy text-white">
        {/* Navbar at the top obviously */}
        <Navbar />
        <CustomCursor />
        {/* Page stuff */}
        <main>{children}</main>

        {/* Footer at the bottom obv */}
        <Footer />
      </body>
    </html>
  );
}
