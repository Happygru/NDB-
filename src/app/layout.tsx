import './globals.css'

export const metadata = {
  title: "NANO | Diamond Battery",
  description:
    "Transforming nuclear waste into never-recharge cell phones and watches",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
