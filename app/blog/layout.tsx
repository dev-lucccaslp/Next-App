export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <>
      <h1 className="bg-green-600">Menu Adicional de blog</h1>
      {children}
    </>
  )
}