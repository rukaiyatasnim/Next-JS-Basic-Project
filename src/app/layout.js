/** @format */

// layout.js (server component)
import "./globals.css";
import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"
import SessionWrapper from "../Components/SessionWrapper.jsx";

export const metadata = {
  title: "TechNest",
  description: "Next.js 15 + NextAuth.js Demo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SessionWrapper>
            <Navbar/>
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
