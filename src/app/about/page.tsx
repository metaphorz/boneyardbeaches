import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Boneyard Beaches | Coastal Erosion Information",
  description: "Learn about boneyard beaches, coastal erosion, and the natural processes that create these unique landscapes.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">About Boneyard Beaches</h1>

      <div className="prose prose-lg max-w-none">
        <h2>What Are Boneyard Beaches?</h2>
        <p>
          Boneyard beaches are coastal areas where erosion has caused trees to die, leaving behind skeletal-looking tree trunks and roots on the shoreline. These beaches get their name from the appearance of the dead trees, which resemble a "boneyard." They're often the result of coastal erosion, sea level rise, or changes in coastal dynamics.
        </p>

        <div className="my-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Image placeholder</p>
        </div>

        <h2>The Science of Coastal Erosion</h2>
        <p>
          Coastal erosion is a natural process that shapes and reshapes shorelines over time. It occurs when the forces of waves, currents, and tides wear away land along the coast. This process can be accelerated by:
        </p>
        <ul>
          <li>Storm events and hurricanes</li>
          <li>Sea level rise due to climate change</li>
          <li>Human activities such as development and removal of natural barriers</li>
          <li>Changes in sediment supply from rivers and streams</li>
        </ul>

        <p>
          When erosion occurs in forested coastal areas, trees that once grew safely inland can end up on the beach as the shoreline recedes. Salt water intrusion can kill these trees, leaving behind the bleached, weathered remains that create the distinctive "boneyard" appearance.
        </p>

        <h2>Conservation and Preservation</h2>
        <p>
          Many boneyard beaches are protected as part of state parks, national seashores, or other conservation areas. These protections help preserve these unique landscapes for future generations to enjoy and study. Conservation efforts often focus on:
        </p>
        <ul>
          <li>Monitoring erosion rates and patterns</li>
          <li>Protecting natural barriers like dunes and wetlands</li>
          <li>Managing visitor access to prevent damage to sensitive areas</li>
          <li>Educating the public about coastal processes and climate change</li>
        </ul>

        <h2>Visiting Boneyard Beaches Responsibly</h2>
        <p>
          When visiting boneyard beaches, it's important to follow these guidelines to help preserve these special places:
        </p>
        <ul>
          <li>Stay on designated trails and beach access points</li>
          <li>Do not climb on or remove driftwood</li>
          <li>Pack out all trash</li>
          <li>Observe wildlife from a distance</li>
          <li>Be aware of tide schedules, as some beaches may be inaccessible at high tide</li>
          <li>Follow all park rules and regulations</li>
        </ul>

        <h2>About This Website</h2>
        <p>
          This website was created to catalog and provide information about boneyard beaches across the United States. Our goal is to raise awareness about these unique natural features, promote their conservation, and help people plan visits to experience their beauty firsthand.
        </p>
        <p>
          If you know of a boneyard beach that isn't included in our database, or if you have photos or information to share, please contact us.
        </p>
      </div>
    </div>
  );
}
