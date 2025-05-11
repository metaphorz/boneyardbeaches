import Link from "next/link";
import Image from "next/image";
import { beaches } from "@/data/beaches";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boneyard Beaches | Browse All Beaches",
  description: "Browse our comprehensive list of boneyard beaches across the United States. Find information on location, features, and conservation status.",
};

export default function BeachesPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Boneyard Beaches in the United States</h1>

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-4">
          Explore our catalog of boneyard beaches across the United States. These unique coastal areas showcase the dramatic effects of erosion, creating haunting landscapes of fallen trees and driftwood.
        </p>
        <p className="text-lg text-gray-700">
          Click on any beach to learn more about its location, features, and conservation status.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {beaches.map((beach) => (
          <Link
            href={`/beaches/${beach.id}`}
            key={beach.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow block"
          >
            <div className="h-48 w-full relative">
              <Image
                src={beach.images.main}
                alt={`${beach.name} - a boneyard beach in ${beach.location.state}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{beach.name}</h2>
              <p className="text-gray-600 mb-2">{beach.location.state} • Near {beach.location.nearestCity}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">{beach.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 text-xs font-semibold rounded">
                  {beach.features.erosionType}
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 text-xs font-semibold rounded">
                  {beach.conservationStatus}
                </span>
              </div>
              <span className="text-blue-600 font-medium inline-flex items-center">
                View details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
