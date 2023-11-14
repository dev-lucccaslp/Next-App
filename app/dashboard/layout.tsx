export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
       <h2>Sub Layout do Dashboard</h2>
       {children}
    </>
  )
}