import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://makas-academie.vercel.app/"),

  title: {
    default: "MAKAS ACADÉMIE | Centre de formation à Goma",
    template: "%s | MAKAS ACADÉMIE",
  },
  verification: {
  google: "DejlA8nuV40vdE7H-ZZJcurCLbFJ5Sdejv1CbBQ7HQM",
},
  
  description:
    "MAKAS ACADÉMIE : centre de formation professionnelle en informatique, réseaux, intelligence artificielle, développement web, applications mobiles, desktop et génie logiciel.",

  keywords: [
    "MAKAS ACADÉMIE",
    "formation informatique",
    "formation professionnelle",
    "intelligence artificielle",
    "réseaux informatiques",
    "développement web",
    "applications mobiles",
    "génie logiciel",
    "MAKAS ACADÉMIE Goma",
    "centre de formation informatique à Goma",
    "formation professionnelle à Turunga",
    "formation informatique Nord-Kivu",
  ],

  openGraph: {
    title: "MAKAS ACADÉMIE",
    description:
      "Formez-vous aujourd'hui. Innovez demain.",
    locale: "fr_FR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}