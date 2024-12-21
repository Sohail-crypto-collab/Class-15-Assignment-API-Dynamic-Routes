import { Key } from "react";
import Link from "next/link";
import GetData from "./DynamicRoute";
export default async function Home() {
  //const fetchData = await fetch("https://simple-books-api.glitch.me/books");
  //const responce = await fetchData.json();
  //console.log("Books:", responce);

  //Dynamic function
  const data = await GetData("https://simple-books-api.glitch.me/books");
  console.log("Books:", data);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12  ">
        Application Programming Interface
      </h1>
      <div>
      <h1 className="text-3xl font-extrabold text-black">Class 15:</h1>
      <h1 className="text-black font-bold">Base URL: </h1>
      <a href="https://simple-books-api.glitch.me/books" className="text-blue-700 hover:underline">https://simple-books-api.glitch.me/books</a>
      <p>Goto Resources section and choose any route you want.</p>
      <p>Fetch single data by id in Dynamic Route.</p>
      <p className="font-bold text-2xl text-black">Click ID to get dynamic Data.</p>
      </div>
        
      <br />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((bookdata: any) => (
          <ul
            key={bookdata.id}
            className=" bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg transform transition duration-500 hover:scale-105 space-y-2 text-white"
          >
            <Link
              href={`/books/${bookdata.id}`}
              className="text-blue-200 hover:text-blue-100 hover:underline"
            >
              <li className="text-xl font-semibold text-white ">
                ID: {bookdata.id}
              </li>
            </Link>
            <li className="text-xl font-semibold text-white ">
              NAME: {bookdata.name}
            </li>
            <li className="text-xl font-semibold text-white ">
              TYPE: {bookdata.type}
            </li>
          </ul>
        ))}
      </div>
    </main>
  );
}
