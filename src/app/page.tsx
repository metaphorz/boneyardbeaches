import Image from "next/image";
import Link from "next/link";
import { beaches } from "@/data/beaches";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/botany-bay.jpg"
            alt="Boneyard Beach at Botany Bay"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Discover America's Boneyard Beaches
          </h1>
          <p className="text-xl max-w-3xl mb-8 text-white drop-shadow-md">
            Explore the haunting beauty of coastal erosion where fallen trees create stunning natural sculptures along America's shorelines.
          </p>
          <Link
            href="/beaches"
            className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors shadow-md"
          >
            Explore Beaches
          </Link>
        </div>
      </section>

      {/* Featured Beaches */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Boneyard Beaches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beaches.slice(0, 3).map((beach) => (
            <Link
              href={`/beaches/${beach.id}`}
              key={beach.id}
              className="bg-white rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition-shadow"
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
                <h3 className="text-xl font-bold mb-2">{beach.name}</h3>
                <p className="text-gray-600 mb-2">{beach.location.state}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">{beach.description}</p>
                <span className="text-blue-600 font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Boneyard Beaches */}
      <section className="w-full bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What Are Boneyard Beaches?</h2>
              <p className="text-gray-700 mb-4">
                Boneyard beaches are coastal areas where erosion has caused trees to die, leaving behind skeletal-looking tree trunks and roots on the shoreline. These beaches get their name from the appearance of the dead trees, which resemble a "boneyard."
              </p>
              <p className="text-gray-700 mb-6">
                They're often the result of coastal erosion, sea level rise, or changes in coastal dynamics. These natural phenomena create hauntingly beautiful landscapes that attract photographers, nature lovers, and tourists.
              </p>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more about coastal erosion →
              </Link>
            </div>
            <div className="mt-10 lg:mt-0 h-64 relative rounded-lg overflow-hidden">
              <Image
                src="/images/botany-bay.jpg"
                alt="Boneyard Beach at Botany Bay Plantation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
