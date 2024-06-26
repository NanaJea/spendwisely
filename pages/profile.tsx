import { useSession } from 'next-auth/react'
import { useState } from 'react'

const Profile = () => {
  const { data: session } = useSession()
  const [name, setName] = useState(session?.user?.name || '')
  const [bio, setBio] = useState('')

  const handleSave = () => {
    // Mettre à jour le profil de l'utilisateur
    // Update user profile
  }

  if (!session) {
    return <p>Access Denied</p>
  }

  return (
    <div className="container mx-auto max-w-md mt-10">
      <h1 className="text-2xl font-bold mb-5">Profile</h1>
      <form className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  )
}

export default Profile
