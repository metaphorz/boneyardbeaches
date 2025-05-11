import { beaches } from "@/data/beaches";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const beach = beaches.find((beach) => beach.id === params.id);

  if (!beach) {
    return {
      title: "Beach Not Found",
    };
  }

  return {
    title: `${beach.name} | Boneyard Beaches`,
    description: beach.description,
  };
}

export default function BeachPage({ params }: Props) {
  const beach = beaches.find((beach) => beach.id === params.id);

  if (!beach) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link href="/beaches" className="text-blue-600 hover:text-blue-800">
          ← Back to all beaches
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-96 w-full relative">
          <Image
            src={beach.images.main}
            alt={`${beach.name} - a boneyard beach in ${beach.location.state}`}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2">{beach.name}</h1>
          <p className="text-gray-600 mb-6">{beach.location.state} • Near {beach.location.nearestCity}</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-4">About this Beach</h2>
              <p className="text-gray-700 mb-6">{beach.description}</p>

              {beach.additionalInfo && (
                <>
                  {beach.additionalInfo.historicalContext && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Historical Context</h3>
                      <p className="text-gray-700">{beach.additionalInfo.historicalContext}</p>
                    </div>
                  )}

                  {beach.additionalInfo.geologicalInfo && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Geological Information</h3>
                      <p className="text-gray-700">{beach.additionalInfo.geologicalInfo}</p>
                    </div>
                  )}

                  {beach.additionalInfo.wildlifeInfo && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Wildlife</h3>
                      <p className="text-gray-700">{beach.additionalInfo.wildlifeInfo}</p>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Beach Information</h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-700">
                  {beach.location.state}<br />
                  Near {beach.location.nearestCity}<br />
                  Coordinates: {beach.location.coordinates.latitude}, {beach.location.coordinates.longitude}
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Erosion Type: {beach.features.erosionType}</li>
                  {beach.features.treeSpecies && (
                    <li>Tree Species: {beach.features.treeSpecies.join(", ")}</li>
                  )}
                  <li>Accessibility: {beach.features.accessibility}</li>
                  <li>Best Time to Visit: {beach.features.bestTimeToVisit.join(", ")}</li>
                  {beach.features.amenities && (
                    <li>Amenities: {beach.features.amenities.join(", ")}</li>
                  )}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Conservation</h3>
                <p className="text-gray-700">{beach.conservationStatus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
