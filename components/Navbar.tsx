import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-xl font-bold">SpendWisely</a>
        </Link>
        <div className="flex space-x-4">
          <Link href="/dashboard">
            <a className="text-white">Dashboard</a>
          </Link>
          <Link href="/profile">
            <a className="text-white">Profile</a>
          </Link>
          <Link href="/settings">
            <a className="text-white">Settings</a>
          </Link>
          <Link href="/chat">
            <a className="text-white">Chat</a>
          </Link>
          <Link href="/signin">
            <a className="text-white">Sign In</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
