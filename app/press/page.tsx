import React from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

// This needs to be a Server Component to read files
async function getPressReleases() {
  const pressReleases = [
    {
      id: 1,
      title: "MetaGro Announces Revolutionary Farming Technology",
      date: "2024-01-15",
      summary: "MetaGro unveils new sustainable farming solutions that promise to revolutionize agricultural practices.",
      link: "#",
      image: "/images/press/farmers.jpg"
    },
    {
      id: 2,
      title: "Partnership with Leading Agricultual Organizations (FPOs)",
      date: "2024-12-20",
      summary: "MetaGro forms strategic partnership to advance research in sustainable agriculture.",
      link: "#",
      image: "/images/press/harvesting.jpg"
    },
    {
        id: 3,
        title: "News Clip",
        date: "2023-12-20",
        summary: "Announcements from the Government organizations regaring upcoming farming techniques",
        link: "#",
        image: "/images/press/newsclip.jpg"
      },
      {
        id: 4,
        title: "Packaging Machine",
        date: "2024-11-10",
        summary: "Made in India machine for wrapping paper production for mangoes",
        link: "#",
        image: "/images/press/machinery.jpg"
      },
  ];

  return pressReleases;
}

export default async function PressPage() {
  const pressReleases = await getPressReleases();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Press Releases</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {pressReleases.map((press) => (
            <article 
              key={press.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={press.image}
                  alt={press.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{press.date}</time>
                <h2 className="text-2xl font-semibold mt-2 mb-3">{press.title}</h2>
                <p className="text-gray-600 mb-4">{press.summary}</p>
                <a 
                  href={press.link} 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
