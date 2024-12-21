// import React from 'react'

// export default async function SingleData({ params }: { params: { id: string } }) {
//   const { id } = await params;
//   const fetchData = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
//   const response = await fetchData.json();

//   return(
//     <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8">
//       <h1>Book Details</h1>
//       <p>ID: {response.id}</p>
//       <p>Name: {response.name}</p>
//       <p>Author: {response.author}</p>
//       <p>Type: {response.type}</p>
//       <p>Available: {response.available ? 'Yes' : 'No'}</p>
//     </div>
//   )
// }

import React from "react";
import Link from "next/link";

interface Params {
  params: Promise<{ id: string }>;
}

export default async function SingleData({ params }: Params) {
  const id = (await params).id;
  const fetchData = await fetch(
    `https://simple-books-api.glitch.me/books/${id}`
  );
  const response = await fetchData.json();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-6">Book Details</h1>
          <ul className="space-y-4 text-white">
            <li className="flex items-center">
              <h3 className="font-medium mr-2">ID:</h3> {response.id}
            </li>

            <li className="flex items-center">
              <h3 className="font-medium mr-2">Name:</h3> {response.name}
            </li>
            <li className="flex items-center">
              <h3 className="font-medium mr-2">Author:</h3> {response.author}
            </li>
            <li className="flex items-center">
              <h3 className="font-medium mr-2">Type:</h3> {response.type}
            </li>
            <li className="flex items-center">
              <h3 className="font-medium mr-2">Available:</h3>
              {response.available ? "Yes" : "No"}
            </li>
          </ul>
          <Link
            href="/"
            className="mt-8 inline-block bg-white text-purple-600 hover:text-white hover:bg-gradient-to-l from-purple-400 to-pink-500 font-semibold py-2 px-8 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            Back
          </Link>
        </div>
      </div>
    </main>
  );
}

// import React from 'react'

// export default async function Page({ params }: { params: { id: string } }) {
//   // Make sure to await the params object if necessary (this is typically done in Next.js
//   const id = await params.id;
//   //const { id } = await params; // Await params to resolve its value
//   const fetchData = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
//   const response = await fetchData.json();

//   return(
//     <div>
//       <h1>Book Details</h1>
//       <p>ID: {response.id}</p>
//       <p>Name: {response.name}</p>
//       <p>Author: {response.author}</p>
//       <p>Type: {response.type}</p>
//       <p>Available: {response.available ? 'Yes' : 'No'}</p>
//     </div>
//   )
// }
