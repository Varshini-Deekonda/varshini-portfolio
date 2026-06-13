import './globals.css'
 
export const metadata = {
  title: 'Varshini Deekonda - Portfolio',
  description: 'Data Engineer Portfolio',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
