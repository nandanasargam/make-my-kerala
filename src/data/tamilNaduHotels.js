// src/data/tamilNaduHotels.js
// Aggregated dataset of all 30 Tamil Nadu hotels across 3 destinations

import { maduraiHotels } from "./maduraiHotels.js";
import { kanyakumariHotels } from "./kanyakumariHotels.js";
import { rameshwaramHotels } from "./rameshwaramHotels.js";

export { maduraiHotels, kanyakumariHotels, rameshwaramHotels };

export const allTamilNaduHotels = [
  ...maduraiHotels,
  ...kanyakumariHotels,
  ...rameshwaramHotels
];

export function getMaduraiHotels() {
  return maduraiHotels;
}

export function getKanyakumariHotels() {
  return kanyakumariHotels;
}

export function getRameshwaramHotels() {
  return rameshwaramHotels;
}

export function getAllTamilNaduHotels() {
  return allTamilNaduHotels;
}

export const tamilNaduDestinations = [
  {
    id: "madurai",
    slug: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    tagline: "The historic Athens of the East & home to magnificent Meenakshi Amman Temple",
    count: 10,
    heroImage: "/images/destinations/madurai-hero.webp",
    description: "One of the oldest continuously inhabited cities in the world, renowned for Dravidian architectural grandeur, sacred gopurams, and vibrant heritage markets."
  },
  {
    id: "kanyakumari",
    slug: "kanyakumari",
    name: "Kanyakumari",
    state: "Tamil Nadu",
    tagline: "The sacred southern tip of India where three oceans meet at sunrise",
    count: 10,
    heroImage: "/images/destinations/kanyakumari-hero.webp",
    description: "The dramatic confluence of the Arabian Sea, Indian Ocean, and Bay of Bengal, featuring the iconic Vivekananda Rock Memorial and 133-foot Thiruvalluvar Statue."
  },
  {
    id: "rameshwaram",
    slug: "rameshwaram",
    name: "Rameshwaram",
    state: "Tamil Nadu",
    tagline: "Sacred island pilgrimage, legendary Ramanathaswamy Temple & Dhanushkodi ghost town",
    count: 10,
    heroImage: "/images/destinations/rameshwaram-hero.webp",
    description: "A revered island sanctuary linked by the monumental Pamban Bridge, home to 22 sacred teertham wells, ancient corridors, and the pristine sands of Dhanushkodi."
  }
];
