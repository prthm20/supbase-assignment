import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-900 text-white">
      <div className="space-y-6 space-x-3">
        <button className="w-72 h-16 bg-blue-600 text-white text-2xl font-semibold rounded-lg shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out">
        <Link href={'/Home'}>
         Home
        </Link> 
        </button>
        <button className="w-72 h-16 bg-green-600 text-white text-2xl font-semibold rounded-lg shadow-xl hover:bg-green-700 transition-all duration-300 ease-in-out">
        <Link href={'/Pricing'}>
          Pricing
        </Link> 
        </button>
        <button className="w-72 h-16 bg-purple-600 text-white text-2xl font-semibold rounded-lg shadow-xl hover:bg-purple-700 transition-all duration-300 ease-in-out">
        <Link href={'/Dashboard/Projects'}> 
          Dashboard/Projects
        </Link> 
        </button>
      </div>
    </main>
  );
}
