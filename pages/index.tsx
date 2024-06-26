import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto text-center p-10">
      <h1 className="text-4xl font-bold my-10">Welcome to SpendWisely</h1>
      <Link href="/signin">
        <a className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</a>
      </Link>
    </div>
  );
};

export default Home;
