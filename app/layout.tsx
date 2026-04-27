import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { siteUrl } from "@/data/site"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pedro Dias da Cunha | Desenvolvedor Front-end",
    template: "%s | Pedro Dias da Cunha",
  },
  description:
    "Portfólio de Pedro Dias da Cunha, desenvolvedor front-end focado em React, JavaScript, CSS, APIs REST e boas práticas de desenvolvimento.",
  keywords: [
    "Pedro Dias da Cunha",
    "desenvolvedor front-end",
    "React",
    "JavaScript",
    "Next",
    "portfolio",
    "frontend",
  ],
  authors: [{ name: "Pedro Dias da Cunha" }],
  creator: "Pedro Dias da Cunha",
  openGraph: {
    title: "Pedro Dias da Cunha | Desenvolvedor Front-end",
    description:
      "Projetos, tecnologias e contatos de Pedro Dias da Cunha, desenvolvedor front-end.",
    url: siteUrl,
    siteName: "Pedro Dias da Cunha",
    images: [
      {
        url: "/assets/projects.png",
        width: 1200,
        height: 630,
        alt: "Ilustração de projetos front-end",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Dias da Cunha | Desenvolvedor Front-end",
    description:
      "Portfólio com projetos de estudo em React, JavaScript e APIs REST.",
    images: ["/assets/projects.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  )
}
