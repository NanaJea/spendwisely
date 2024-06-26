import { useState } from 'react';
import { useSession } from 'next-auth/react';

const Settings = () => {
  const { data: session } = useSession();
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
    document.body.style.backgroundColor = e.target.value;
  };

  if (!session) {
    return <p>Access Denied</p>;
  }

  return (
    <div className="container mx-auto max-w-md mt-10">
      <h1 className="text-2xl font-bold mb-5">Settings</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Background Color</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={handleColorChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* FR Ajoutez d'autres paramètres ici
        EN Add more parameters here */}
      </div>
    </div>
  );
};

export default Settings;
