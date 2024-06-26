import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const { data: session } = useSession()

  if (!session) {
    return <p>Access Denied</p>
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-5">Dashboard</h1>
      {/* FR Ajouter des composants pour les dépenses, les graphiques, etc. 
      
      /* EN Add components for expenses, graphics, etc. */}
    </div>
  )
}

export default Dashboard
