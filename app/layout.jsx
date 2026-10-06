import "./globals.css";

export const metadata = {
  title: "Ahad Car Company — The Future Is Responsive",
  description: "A cinematic scroll-driven car experience for Ahad Car Company, built with Next.js, Tailwind and GSAP ScrollTrigger.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
