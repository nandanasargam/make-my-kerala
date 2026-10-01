// src/data/munnarHotels.js
// Verified dataset of 15 premier Munnar hotels & resorts curated by MakeMyKerala

export const munnarHotels = [
  // 1. TEA CASTLE
  {
    id: "tea-castle",
    slug: "tea-castle",
    name: "Tea Castle Munnar",
    tagline: "Rolling tea garden vistas and mountain breezes in Chithirapuram",
    category: "Hill Station Nature Resort",
    starRating: 3,
    userRating: 4.2,
    reviewsCount: 380,
    startingPrice: "₹2,900",
    priceLabel: "Starting from ₹2,900 / night",
    locality: "Chithirapuram",
    address: "Chithirapuram P.O., Near Power House, Munnar, Kerala 685565",
    phone: "+91 4865 263 200",
    email: "reservations@teacastlemunnar.com",
    website: "https://teacastlemunnar.com",
    heroImage: "/images/hotels/tea-castle/exterior.webp",
    heroImageSm: "/images/hotels/tea-castle/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/tea-castle/exterior.webp",
        alt: "Tea Castle Munnar dusk exterior facade",
        caption: "Welcoming hillside facade surrounded by misty mountain air"
      },
      {
        src: "/images/hotels/tea-castle/exterior-detail.webp",
        alt: "Tea Castle entrance signage detail",
        caption: "Resort arrival and reception in scenic Chithirapuram"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Emerald tea plantations of Munnar hills",
        caption: "Surrounding tea garden terraces and Western Ghats valleys"
      }
    ],
    overview: "Nestled along the scenic hillside slopes of Chithirapuram, approximately 7 km before Munnar town, Tea Castle Munnar offers a refreshing escape amidst crisp mountain air and sweeping tea plantations. Built with terraced vantage points that overlook misty ravines, the resort combines comfortable accommodations with warm Kerala hospitality. Whether enjoying evening campfires on the terrace or stepping directly onto village walking trails, guests experience genuine hillside tranquility without commercial congestion.",
    quickFacts: [
      { label: "Hotel Class", value: "3-Star Hill Resort" },
      { label: "Total Keys", value: "30 Mountain View Rooms" },
      { label: "Check-in / Check-out", value: "12:00 PM / 11:00 AM" },
      { label: "Location", value: "Chithirapuram (7 km from Munnar)" },
      { label: "Nearest Transit", value: "Munnar Central Bus Stand (8 km)" },
      { label: "Cochin Airport", value: "98 km (3.5 hrs scenic drive)" }
    ],
    rooms: [
      {
        name: "Standard Deluxe Room",
        description: "Cozy room with large windows framing verdant valley hillsides, warm wooden furnishings, and contemporary ensuite shower.",
        size: "240 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed",
        amenities: ["Free Wi-Fi", "LED TV with DTH", "Tea & Coffee Maker", "Ensuite Rain Shower", "Intercom", "Daily Mineral Water"]
      },
      {
        name: "Executive Valley View Room",
        description: "Spacious hillside room featuring a dedicated seating balcony that overlooks emerald tea terraces and valley mist.",
        size: "300 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Private Balcony", "Free Wi-Fi", "40\" LED TV", "Work Desk", "Coffee Setup", "Hot Water 24/7"]
      },
      {
        name: "Club Mountain Suite",
        description: "Premier suite offering sweeping dual-aspect mountain panoramas, plush lounge seating, and bespoke room service.",
        size: "420 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed + Extra Bed Option",
        amenities: ["Panoramic Mountain View", "Separate Lounge Corner", "Smart TV", "Mini Fridge", "Plush Linens", "Express Room Service"]
      }
    ],
    facilities: [
      { icon: "wifi", title: "High-Speed Wi-Fi", description: "Complimentary wireless internet access across public areas and rooms" },
      { icon: "dining", title: "Rooftop Restaurant", description: "All-day multi-cuisine dining with open hillside vantage points" },
      { icon: "nature", title: "Campfire Evenings", description: "Organized nightly campfire and musical gatherings under mountain skies" },
      { icon: "trekking", title: "Tea Walk Assistance", description: "Guided walking trails through adjacent spice and tea plantations" },
      { icon: "parking", title: "Valet & Guest Parking", description: "Secure on-premises vehicle parking with 24-hour surveillance" },
      { icon: "desk", title: "24-Hour Front Desk", description: "Dedicated travel assistance, jeep safari bookings, and sight planning" }
    ],
    dining: [
      {
        name: "Cloud Nine Rooftop Restaurant",
        cuisine: "Kerala, North Indian, Chinese & Continental",
        type: "All-Day Multi-Cuisine Dining",
        timing: "07:00 AM - 10:30 PM",
        description: "Elevated dining venue serving fresh traditional Kerala delicacies like Karimeen Pollichathu and Appam with Stew alongside hearty tandoori platters and comforting soups."
      }
    ],
    specialties: [
      "Tranquil Chithirapuram setting away from central town traffic",
      "Panoramic views of tea garden valleys and cascading mountain mists",
      "Nightly open-air campfires with customized barbecue options",
      "Direct foot access to scenic spice walks and village vistas"
    ],
    highlights: [
      "Rooftop multi-cuisine restaurant",
      "Private balconies with valley perspectives",
      "Organized evening campfire",
      "Guided tea plantation walks",
      "Warm family-friendly hospitality"
    ],
    locationHighlights: [
      { place: "Chithirapuram Viewpoint", distance: "1.2 km", time: "4 min drive", note: "Sunset valley vistas" },
      { place: "Pallivasal Tea Falls", distance: "4.5 km", time: "10 min drive", note: "Scenic cascading stream" },
      { place: "Munnar Town & Market", distance: "8.0 km", time: "18 min drive", note: "Spice bazaars & tea shops" },
      { place: "Attukad Waterfalls", distance: "9.5 km", time: "22 min drive", note: "Trekking and photography" },
      { place: "Eravikulam National Park", distance: "17 km", time: "40 min drive", note: "Nilgiri Tahr habitat" }
    ],
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not permitted on the premises",
    cancellationNote: "Free cancellation up to 48 hours before check-in on MakeMyKerala packages",
    mapQuery: "Tea Castle Munnar, Chithirapuram, Kerala",
    makeMyKeralaPerks: [
      "Guaranteed best package pricing with zero hidden surcharges",
      "Complimentary breakfast buffet throughout your stay",
      "Chauffeured private AC vehicle for all Munnar sightseeing",
      "Dedicated 24/7 MakeMyKerala on-trip concierge assistance"
    ]
  },

  // 2. GREEN RIDGE
  {
    id: "green-ridge",
    slug: "green-ridge",
    name: "Green Ridge Holiday Home",
    tagline: "Central town convenience nestled amidst Munnar’s misty heights",
    category: "Town & Transit Leisure Stay",
    starRating: 3,
    userRating: 4.1,
    reviewsCount: 490,
    startingPrice: "₹2,600",
    priceLabel: "Starting from ₹2,600 / night",
    locality: "Munnar Town",
    address: "NH Road, Near CSI Church, Munnar, Idukki District, Kerala 685612",
    phone: "+91 4865 230 438",
    email: "info@greenridgehotels.com",
    website: "https://greenridgemunnar.com",
    heroImage: "/images/hotels/green-ridge/exterior.webp",
    heroImageSm: "/images/hotels/green-ridge/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/green-ridge/exterior.webp",
        alt: "Green Ridge Holiday Home Munnar exterior facade",
        caption: "Main facade along the prime Munnar town highway road"
      },
      {
        src: "/images/hotels/green-ridge/exterior-detail.webp",
        alt: "Green Ridge entrance and parking portico",
        caption: "Front entrance and convenient roadside transit access"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Munnar tea clad valleys and winding hills",
        caption: "Iconic hills of Munnar accessible right from the town center"
      }
    ],
    overview: "Conveniently situated along the primary NH thoroughfare near Munnar's historic CSI Christ Church, Green Ridge Holiday Home offers the ultimate base for travelers prioritizing accessibility. Guests can stroll directly into Munnar’s lively spice bazaars, artisanal chocolate outlets, and tea sampling shops while retreating to quiet, comfortable rooms framed by mountain silhouettes. Featuring reliable amenities, dedicated parking, and a multi-cuisine restaurant, it is an optimal choice for budget-conscious families and transit vacationers.",
    quickFacts: [
      { label: "Hotel Class", value: "3-Star Leisure Hotel" },
      { label: "Total Keys", value: "48 Well-Appointed Rooms" },
      { label: "Check-in / Check-out", value: "12:00 PM / 11:00 AM" },
      { label: "Location", value: "Central Munnar Town (NH Road)" },
      { label: "Nearest Transit", value: "KSRTC Bus Station (900 m)" },
      { label: "Aluva Railway", value: "105 km (3.5 hrs drive)" }
    ],
    rooms: [
      {
        name: "Standard Deluxe Room",
        description: "Well-ventilated room with modern bedding, clean ensuite bathroom, and street or hillside views.",
        size: "220 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed",
        amenities: ["Free Wi-Fi", "Satellite TV", "Intercom", "24-hr Hot Water", "Daily Housekeeping"]
      },
      {
        name: "Executive Deluxe Room",
        description: "Enhanced living space featuring upgraded hardwood furnishings, seating chairs, and scenic view windows.",
        size: "280 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Free Wi-Fi", "LED Television", "Coffee Maker", "Attached Bath with Toiletries", "Luggage Rack"]
      },
      {
        name: "Family Suite",
        description: "Two interconnected spaces designed for family comfort with dual beds, seating area, and town view.",
        size: "400 sq.ft",
        capacity: "4 Adults",
        bed: "Two Queen Beds",
        amenities: ["Spacious Layout", "Wardrobe", "Two Televisions", "High-Speed Wi-Fi", "Room Service Support"]
      }
    ],
    facilities: [
      { icon: "dining", title: "Drizzle Restaurant", description: "Multi-cuisine dining room offering regional Kerala meals, tandoori, and Chinese dishes" },
      { icon: "parking", title: "Dedicated Parking", description: "Safe on-site covered and open parking for cars and tourist coaches" },
      { icon: "wifi", title: "Complimentary Wi-Fi", description: "Reliable internet connectivity in public lounges and rooms" },
      { icon: "desk", title: "Travel Desk", description: "Tour advice, jeep hire for Kolukkumalai sunrise, and sightseeing arrangements" },
      { icon: "security", title: "24-Hour Security", description: "Round-the-clock front desk and security surveillance" }
    ],
    dining: [
      {
        name: "Drizzle Restaurant",
        cuisine: "Kerala, North Indian & Chinese",
        type: "Multi-Cuisine Dining",
        timing: "07:00 AM - 10:00 PM",
        description: "Serving authentic Kerala sadya accompaniments, malabari biryanis, fresh vegetable thalis, and quick Chinese noodles for active sightseers."
      }
    ],
    specialties: [
      "Prime walkability to Munnar town shops, fruit markets, and spice stalls",
      "Immediate proximity to the historic 1910 CSI Christ Church",
      "Generous on-site parking rare for central town properties",
      "Dependable hot water and courteous travel assistance"
    ],
    highlights: [
      "Walking distance to Munnar Market & CSI Church",
      "In-house multi-cuisine restaurant",
      "Spacious Family Suites",
      "Dedicated on-site vehicle parking",
      "Economical rates with reliable service"
    ],
    locationHighlights: [
      { place: "CSI Christ Church", distance: "300 m", time: "4 min walk", note: "Historic British-era church" },
      { place: "Munnar Town Market & Spice Hub", distance: "600 m", time: "7 min walk", note: "Spices, tea, homemade chocolates" },
      { place: "KDHP Tea Museum", distance: "2.1 km", time: "6 min drive", note: "Historic tea processing machinery" },
      { place: "Pothamedu Viewpoint", distance: "3.5 km", time: "10 min drive", note: "Sunset & plantation overlook" },
      { place: "Mattupetty Dam", distance: "11 km", time: "25 min drive", note: "Speedboating & lake views" }
    ],
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not allowed",
    cancellationNote: "Cancellations up to 48 hours before check-in receive a full refund",
    mapQuery: "Green Ridge Holiday Home, NH Road, Munnar, Kerala",
    makeMyKeralaPerks: [
      "Verified tariff with no booking service fees",
      "Chauffeured pickup from Kochi Airport or Ernakulam Station",
      "Priority check-in on MakeMyKerala holiday bookings",
      "24/7 customer support line during your entire trip"
    ]
  },

  // 3. GAP VALLEY RESORT
  {
    id: "gap-valley-resort",
    slug: "gap-valley-resort",
    name: "Gap Valley Resort",
    tagline: "Infinity pool reflections and panoramic vistas over Lockhart Gap",
    category: "Valley View Leisure Resort",
    starRating: 4,
    userRating: 4.4,
    reviewsCount: 310,
    startingPrice: "₹4,200",
    priceLabel: "Starting from ₹4,200 / night",
    locality: "Devikolam / Gap Road",
    address: "Gap Road, Devikolam, Munnar, Kerala 685613",
    phone: "+91 94470 12345",
    email: "bookings@gapvalleyresort.com",
    website: "https://gapvalleyresort.com",
    heroImage: "/images/hotels/gap-valley-resort/exterior.webp",
    heroImageSm: "/images/hotels/gap-valley-resort/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/gap-valley-resort/exterior.webp",
        alt: "Gap Valley Resort entrance and hillside chalets",
        caption: "Arrival gateway along the famed Gap Road scenic corridor"
      },
      {
        src: "/images/hotels/gap-valley-resort/exterior-detail.webp",
        alt: "Gap Valley Resort signage detail",
        caption: "Signage against dramatic rock walls and misty skies"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Lockhart Gap rolling valley slopes",
        caption: "Breathtaking vistas across Devikolam tea estates"
      }
    ],
    overview: "Perched dramatically along the renowned Gap Road near Devikolam, Gap Valley Resort commands unobstructed views of the famed Lockhart Gap canyon. Famous for its cliff-edge outdoor infinity pool that mirrors passing highland clouds, the resort delivers an exhilarating communion with high-altitude nature. Guests wake to mist cascading down steep slopes, spend afternoons unwinding on private balconies, and dine in a panoramic glass restaurant celebrating Kerala flavors.",
    quickFacts: [
      { label: "Hotel Class", value: "4-Star Mountain Resort" },
      { label: "Total Keys", value: "28 Valley-Facing Rooms" },
      { label: "Check-in / Check-out", value: "01:00 PM / 11:00 AM" },
      { label: "Location", value: "Gap Road, Devikolam" },
      { label: "Altitude", value: "1,600+ Meters Above Sea Level" },
      { label: "Munnar Town", value: "12 km (25 min scenic drive)" }
    ],
    rooms: [
      {
        name: "Deluxe Valley Room",
        description: "Chic contemporary room with large French glass windows overlooking the dramatic mountain gorge.",
        size: "260 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed",
        amenities: ["Valley View", "High-speed Wi-Fi", "LED TV", "Tea/Coffee Maker", "Premium Bath Amenities"]
      },
      {
        name: "Premium Balcony Suite",
        description: "Elevated suite with private wooden-deck balcony commanding sweeping views of Lockhart Gap.",
        size: "340 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Private View Deck", "Smart TV", "Mini Bar", "Work Desk", "Plush Bathrobes & Slippers"]
      },
      {
        name: "Honeymoon Valley Villa",
        description: "Romantic chalet with glass-walled views, bespoke mood lighting, and complimentary welcome cake.",
        size: "450 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed",
        amenities: ["Unobstructed Gap View", "Luxury Soaking Shower", "Romantic Decor Setup", "Express In-Room Dining"]
      }
    ],
    facilities: [
      { icon: "pool", title: "Cliff-Edge Infinity Pool", description: "Breathtaking outdoor infinity pool looking out over Lockhart Gap valley" },
      { icon: "dining", title: "The Valley Restaurant", description: "Panoramic dining venue serving Kerala seafood, curries, and continental fare" },
      { icon: "nature", title: "Campfire & Music", description: "Evening bonfires organized on the stone terrace under starry skies" },
      { icon: "wifi", title: "Complimentary Wi-Fi", description: "High-speed internet available throughout the property" },
      { icon: "parking", title: "Private Parking", description: "Gated parking area on the mountain hillside" }
    ],
    dining: [
      {
        name: "Lockhart View Restaurant",
        cuisine: "Kerala, Tandoor & Pan-Asian",
        type: "Panoramic All-Day Dining",
        timing: "07:30 AM - 10:30 PM",
        description: "Features floor-to-ceiling glass windows where diners can watch mountain clouds drift past while savoring fresh Kerala fish curry, Malabar parottas, and sizzling sizzlers."
      }
    ],
    specialties: [
      "Stunning cliffside infinity pool overlooking the entire Lockhart Gap",
      "High altitude location ensuring refreshing, cool temperatures all year",
      "Direct access to Gap Road photographic viewpoints and hiking ridges",
      "Custom honeymoon candlelit dinners arranged on the valley terrace"
    ],
    highlights: [
      "Infinity pool with Lockhart Gap vistas",
      "Private balconies in all premium rooms",
      "High-altitude misty mountain setting",
      "Evening bonfires & music",
      "Ideal for romantic & photography stays"
    ],
    locationHighlights: [
      { place: "Lockhart Gap Viewpoint", distance: "1.5 km", time: "3 min drive", note: "Famed photo stop" },
      { place: "Devikolam Lake (Sita Devi Lake)", distance: "5.0 km", time: "12 min drive", note: "Mineral springs & tea slopes" },
      { place: "Chinnakanal & Anayirangal Dam", distance: "9.0 km", time: "20 min drive", note: "Scenic boating reservoir" },
      { place: "Munnar Town Center", distance: "12 km", time: "25 min drive", note: "Shopping and dining hub" }
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not permitted",
    cancellationNote: "Full refund for cancellations made up to 72 hours prior to arrival",
    mapQuery: "Gap Valley Resort, Gap Road, Devikolam, Munnar",
    makeMyKeralaPerks: [
      "Best tariff assurance on all valley view categories",
      "Complimentary chef's welcome treat on arrival",
      "Seamless private transfer coordination from Kochi",
      "Full 24/7 on-call travel assistance"
    ]
  },

  // 4. BELLMOUNT RESORT
  {
    id: "bellmount-resorts",
    slug: "bellmount-resorts",
    name: "Bellmount Resort",
    tagline: "Heart-of-town comfort with scenic mountain terrace perspectives",
    category: "Town & Transit Leisure Stay",
    starRating: 3,
    userRating: 4.0,
    reviewsCount: 520,
    startingPrice: "₹2,500",
    priceLabel: "Starting from ₹2,500 / night",
    locality: "Old Munnar",
    address: "N.H. Road, Old Munnar, Idukki District, Kerala 685612",
    phone: "+91 4865 230 401",
    email: "info@bellmountresorts.com",
    website: "https://bellmountresorts.com",
    heroImage: "/images/hotels/bellmount-resorts/exterior.webp",
    heroImageSm: "/images/hotels/bellmount-resorts/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/bellmount-resorts/exterior.webp",
        alt: "Bellmount Resort Old Munnar exterior facade",
        caption: "Classic facade along the Aluva-Munnar main thoroughfare"
      },
      {
        src: "/images/hotels/bellmount-resorts/exterior-detail.webp",
        alt: "Bellmount Resort entrance arch and signage",
        caption: "Welcoming entrance in the heart of Old Munnar"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Munnar high range mist and mountains",
        caption: "Munnar's iconic mountain ranges visible from the terrace"
      }
    ],
    overview: "Located on the NH Road in Old Munnar, Bellmount Resort is a dependable, established hospitality landmark catering to leisure families, honeymooners, and group travelers. Combining spacious, neatly furnished rooms with a multi-cuisine restaurant, banquet hall, and rooftop mountain views, it delivers prime convenience for exploring the regional highlights of Munnar without long transit times.",
    quickFacts: [
      { label: "Hotel Class", value: "3-Star Leisure Resort" },
      { label: "Total Keys", value: "46 Rooms & Suites" },
      { label: "Check-in / Check-out", value: "12:00 PM / 11:00 AM" },
      { label: "Location", value: "Old Munnar (NH Road)" },
      { label: "Nearest Bus Stand", value: "Munnar KSRTC (1.1 km)" },
      { label: "Nearest Airport", value: "Cochin International (106 km)" }
    ],
    rooms: [
      {
        name: "Standard Deluxe Room",
        description: "Well-appointed room featuring comfortable double bed, wooden dressing mirror, and ensuite bathroom.",
        size: "220 sq.ft",
        capacity: "2 Adults",
        bed: "Double Bed",
        amenities: ["Free Wi-Fi", "LED TV", "Direct Dial Phone", "Hot Water Facility", "Room Service"]
      },
      {
        name: "Super Deluxe Room",
        description: "Spacious room with large windows facing the mountain backdrop, upgraded linens, and seating armchairs.",
        size: "280 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Mountain View Windows", "Coffee Maker", "High-speed Wi-Fi", "Writing Table", "Complimentary Water"]
      },
      {
        name: "Super Galaxy Suite",
        description: "Luxurious suite designed for families, featuring a plush living area, king bed, and panoramic town view.",
        size: "420 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed + Sofa Bed",
        amenities: ["Living Lounge", "Two TVs", "Mini Fridge", "Spacious Bath with Tub Option", "Express Check-in"]
      }
    ],
    facilities: [
      { icon: "dining", title: "Silver Spoon Restaurant", description: "Multi-cuisine restaurant serving South Indian, North Indian, and Chinese dishes" },
      { icon: "meetings", title: "Conference & Banquet Hall", description: "Equipped hall suitable for corporate gatherings and group functions of up to 100 guests" },
      { icon: "wifi", title: "Free Wi-Fi", description: "Wireless connectivity in all guestrooms and lobby areas" },
      { icon: "parking", title: "On-site Parking", description: "Spacious private parking area with security monitoring" },
      { icon: "desk", title: "Travel & Tour Desk", description: "Sightseeing cabs, jeep safaris, and Munnar trekking packages" }
    ],
    dining: [
      {
        name: "Silver Spoon Restaurant",
        cuisine: "Kerala, Tandoor & Chinese",
        type: "Multi-Cuisine Dining",
        timing: "07:00 AM - 10:30 PM",
        description: "A family-favorite dining spot in Old Munnar offering authentic Kerala breakfast staples, aromatic chicken biryani, paneer butter masala, and sizzlers."
      }
    ],
    specialties: [
      "Walking distance to Old Munnar commercial stalls, tea shops, and bus stops",
      "Diverse room categories ranging from Deluxe to executive Galaxy Suites",
      "Full banquet and conference capabilities for family reunions and groups",
      "24-hour running hot water essential for cold Munnar mornings"
    ],
    highlights: [
      "Prime Old Munnar town highway location",
      "Multi-cuisine Silver Spoon restaurant",
      "Spacious Super Galaxy family suites",
      "On-site conference hall for 100 guests",
      "Secure on-premises vehicle parking"
    ],
    locationHighlights: [
      { place: "Old Munnar Town Center", distance: "400 m", time: "5 min walk", note: "Shops, cafes & bakeries" },
      { place: "KDHP Tea Museum", distance: "1.8 km", time: "5 min drive", note: "Factory demonstration & tea tasting" },
      { place: "Pothamedu Viewpoint", distance: "3.2 km", time: "8 min drive", note: "Sunset viewpoint" },
      { place: "Blossom International Park", distance: "2.4 km", time: "7 min drive", note: "Riverfront gardens & flowers" }
    ],
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are strictly not allowed",
    cancellationNote: "Full refund for cancellations made 48 hours prior to scheduled arrival",
    mapQuery: "Bellmount Resorts, Old Munnar, Kerala",
    makeMyKeralaPerks: [
      "Verified tariff assurance on all bookings",
      "Complimentary breakfast package options",
      "Chauffeured sedan or SUV included with tour package",
      "Round-the-clock on-call MakeMyKerala assistance"
    ]
  },

  // 5. SILVERTIPS
  {
    id: "silvertips",
    slug: "silvertips",
    name: "The Silvertips",
    tagline: "Classic cinema heritage meets 4-star boutique luxury in Munnar",
    category: "Cinema-Themed Boutique Resort",
    starRating: 4,
    userRating: 4.4,
    reviewsCount: 850,
    startingPrice: "₹4,800",
    priceLabel: "Starting from ₹4,800 / night",
    locality: "Old Munnar",
    address: "Aluva - Munnar Highway, Old Munnar, Idukki, Kerala 685612",
    phone: "+91 4865 230 707",
    email: "info@thesilvertips.com",
    website: "https://thesilvertips.com",
    heroImage: "/images/hotels/silvertips/exterior.webp",
    heroImageSm: "/images/hotels/silvertips/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/silvertips/exterior.webp",
        alt: "The Silvertips Munnar illuminated entrance facade",
        caption: "Iconic illuminated cinema-themed facade on the Munnar Highway"
      },
      {
        src: "/images/hotels/silvertips/exterior-detail.webp",
        alt: "The Silvertips entrance arch detail",
        caption: "Boutique entrance portico and illuminated neon marquee"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Munnar mountain ridge panoramic view",
        caption: "Surrounding misty peaks of Munnar visible from guest rooms"
      }
    ],
    overview: "A one-of-a-kind experiential property in Kerala, The Silvertips is a luxurious 4-star boutique hotel celebrating the magic of Indian and international cinema. Each of its 60 guestrooms is artfully tribute-themed after iconic motion pictures—from Mughal-e-Azam and Sholay to The Sound of Music. Nestled in Old Munnar, the property features a private movie screening theatre, multiple specialty restaurants, an Ayurvedic wellness center, and refined hospitality that delights film lovers and leisure travelers alike.",
    quickFacts: [
      { label: "Hotel Class", value: "4-Star Boutique Hotel" },
      { label: "Total Keys", value: "60 Cinema-Themed Rooms" },
      { label: "Check-in / Check-out", value: "01:00 PM / 11:00 AM" },
      { label: "Theme", value: "Classic World & Indian Cinema" },
      { label: "Amenities", value: "Private Movie Theatre & Spa" },
      { label: "Cochin Airport", value: "105 km (3.5 hrs drive)" }
    ],
    rooms: [
      {
        name: "Executive Movie Room",
        description: "Elegantly styled room adorned with curated movie memorabilia, premium wood finishes, and luxury ensuite bath.",
        size: "260 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed",
        amenities: ["Themed Decor", "High-speed Wi-Fi", "43\" Smart TV", "Electronic Safe", "Minibar", "Luxury Toiletries"]
      },
      {
        name: "Premiere Cinema Suite",
        description: "Expanded boutique suite with a dedicated seating lounge, vintage movie posters, and scenic mountain views.",
        size: "380 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Separate Living Corner", "Smart TV", "Minibar Setup", "Tea/Coffee Maker", "Bathrobe & Slippers"]
      },
      {
        name: "Director's Suite",
        description: "The flagship luxury suite featuring dual bedrooms, bespoke cinematic artistry, and panoramic hill vistas.",
        size: "520 sq.ft",
        capacity: "4 Adults",
        bed: "King Bed + Queen Bed",
        amenities: ["Two Full Bedrooms", "Two Bathrooms with Tub", "Surround Sound Setup", "Butler Service", "VIP Amenities"]
      }
    ],
    facilities: [
      { icon: "theatre", title: "Private Miniplex Cinema", description: "Exclusive in-house movie screening theatre screening classic and contemporary films for guests" },
      { icon: "spa", title: "Ayur Wellness Spa", description: "Ayurvedic therapy suites offering abhyanga massages, steam baths, and wellness rejuvenation" },
      { icon: "dining", title: "Mayabazar Restaurant", description: "Multi-cuisine dining hall decorated with rare cinematic photographs and vintage projectors" },
      { icon: "dining", title: "Majilis Arabic Rooftop", description: "Rooftop open-air restaurant serving authentic Middle Eastern kebabs and grills" },
      { icon: "cafe", title: "Sound of Music Cafe", description: "Charming 24-hour coffee shop and pastry lounge" }
    ],
    dining: [
      {
        name: "Mayabazar Restaurant",
        cuisine: "Kerala, North Indian, Continental & Chinese",
        type: "Cinema-Themed Multi-Cuisine",
        timing: "07:00 AM - 10:30 PM",
        description: "Surrounded by classic cinema photographs and posters, savor an extensive menu ranging from rich Kerala mutton stew to authentic tandoori and continental steaks."
      },
      {
        name: "Majilis Rooftop Grill",
        cuisine: "Middle Eastern & Barbecue",
        type: "Rooftop Grill Lounge",
        timing: "07:00 PM - 11:00 PM",
        description: "Open-air starlit dining serving tender shawarma platters, shish taouk, grilled seafood, and fragrant Arabic rice."
      }
    ],
    specialties: [
      "Unique cinema theme with every room named and styled after an iconic movie",
      "Private air-conditioned miniplex screening nightly films for residents",
      "Multiple dining outlets including Mayabazar, Majilis Arabic, and 24-hr Cafe",
      "Full-service Ayurvedic spa with certified wellness therapists"
    ],
    highlights: [
      "Unique cinema-themed 4-star boutique hotel",
      "Private in-house movie theatre",
      "Three distinct restaurants & cafes",
      "Full-service Ayurvedic wellness spa",
      "Prime Old Munnar highway location"
    ],
    locationHighlights: [
      { place: "KDHP Tea Museum", distance: "1.5 km", time: "4 min drive", note: "Colonial tea processing artifacts" },
      { place: "Munnar Town Center", distance: "1.2 km", time: "3 min drive", note: "Shopping and local cuisine" },
      { place: "Blossom Hydel Park", distance: "2.0 km", time: "5 min drive", note: "Boating, bird watching & floral walks" },
      { place: "Pothamedu Sunset View", distance: "3.5 km", time: "10 min drive", note: "Stunning valley panoramas" }
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not permitted on the premises",
    cancellationNote: "Cancellations up to 48 hours prior to arrival receive a full refund",
    mapQuery: "The Silvertips, Aluva - Munnar Highway, Old Munnar, Kerala",
    makeMyKeralaPerks: [
      "Complimentary upgrade to higher movie suite category subject to availability",
      "Free entry to nightly film screenings at the in-house miniplex",
      "All meals and airport transfers coordinated in your MakeMyKerala tour",
      "24/7 on-tour customer support"
    ]
  },

  // 6. ELYSIUM GARDEN
  {
    id: "elysium-garden",
    slug: "elysium-garden",
    name: "Elysium Garden Hill Resorts",
    tagline: "Colonial-style hillside cottages framed by blooming floral gardens",
    category: "Garden & Cottage Hill Resort",
    starRating: 3,
    userRating: 4.2,
    reviewsCount: 440,
    startingPrice: "₹2,800",
    priceLabel: "Starting from ₹2,800 / night",
    locality: "Ikka Nagar, Munnar",
    address: "Top Station Road, Ikka Nagar, Munnar, Kerala 685612",
    phone: "+91 4865 230 505",
    email: "elysiumgarden@gmail.com",
    website: "https://elysiumgarden.com",
    heroImage: "/images/hotels/elysium-garden/exterior.webp",
    heroImageSm: "/images/hotels/elysium-garden/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/elysium-garden/exterior.webp",
        alt: "Elysium Garden Hill Resorts white colonial cottage facade",
        caption: "British colonial cottage architecture framed by floral dahlias"
      },
      {
        src: "/images/hotels/elysium-garden/exterior-detail.webp",
        alt: "Elysium Garden entrance and manicured courtyard",
        caption: "Peaceful stone courtyard and flower garden lawns"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Munnar tea hill horizons",
        caption: "Picturesque hill terrain surrounding Top Station Road"
      }
    ],
    overview: "Set on Top Station Road in the tranquil Ikka Nagar enclave of Munnar, Elysium Garden Hill Resorts evokes the elegance of British colonial hill stations. Featuring gabled white timbered facades, stone verandas, and sprawling manicured flower gardens, the resort offers private cottage chalets and executive suites. Away from highway congestion yet just minutes from town, it is a haven for guests seeking birdsong, fresh air, and lush botanic serenity.",
    quickFacts: [
      { label: "Hotel Class", value: "3-Star Nature Resort" },
      { label: "Total Keys", value: "34 Cottage Rooms & Chalets" },
      { label: "Check-in / Check-out", value: "12:00 PM / 11:00 AM" },
      { label: "Architecture", value: "British Colonial Cottage Style" },
      { label: "Location", value: "Ikka Nagar, Top Station Road" },
      { label: "Munnar Market", value: "1.5 km (5 min drive)" }
    ],
    rooms: [
      {
        name: "Standard Garden Room",
        description: "Charming cottage room with polished wood accents, clean attached bathroom, and direct garden access.",
        size: "240 sq.ft",
        capacity: "2 Adults",
        bed: "Double Bed",
        amenities: ["Free Wi-Fi", "LED TV", "Tea/Coffee Facility", "Hot Water", "Garden View"]
      },
      {
        name: "Executive Suite",
        description: "Spacious suite featuring private sit-out overlooking the floral lawns and pine-studded hills.",
        size: "320 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Private Balcony", "Wardrobe", "Work Desk", "Plush Linen", "Room Service"]
      },
      {
        name: "Colonial Family Cottage",
        description: "Independent multi-room cottage ideal for families, offering ultimate privacy amidst floral landscaping.",
        size: "460 sq.ft",
        capacity: "4 Adults",
        bed: "Two King Beds",
        amenities: ["Private Cottage Entrance", "Living Lounge", "Two Bathrooms", "Smart TV", "Garden Terrace"]
      }
    ],
    facilities: [
      { icon: "garden", title: "Botanical Lawns & Garden", description: "Sprawling landscaped floral gardens with dahlias, marigolds, and quiet wooden benches" },
      { icon: "dining", title: "The Blossom Restaurant", description: "Multi-cuisine dining offering Kerala, Pan-Indian, and Chinese dishes with garden views" },
      { icon: "nature", title: "Evening Bonfires", description: "Campfire arrangements with musical backdrop on the manicured garden terrace" },
      { icon: "wifi", title: "Complimentary Wi-Fi", description: "Available across all guestrooms and lounge spaces" },
      { icon: "parking", title: "Secure Parking", description: "Dedicated paved parking for private vehicles" }
    ],
    dining: [
      {
        name: "The Blossom Restaurant",
        cuisine: "Kerala, South Indian & Pan-Indian",
        type: "Garden-Facing Restaurant",
        timing: "07:30 AM - 10:00 PM",
        description: "Serving piping-hot Kerala parotta with chicken roast, fragrant ghee rice, rich dal makhani, and freshly brewed Nilgiri tea with views of blooming flowerbeds."
      }
    ],
    specialties: [
      "Quaint British colonial cottage architecture and white timbered chalets",
      "Serene Ikka Nagar neighborhood away from commercial town horns",
      "Meticulously maintained floral dahlia and rose gardens",
      "Nightly open-air bonfires for resident vacationers"
    ],
    highlights: [
      "British colonial cottage style architecture",
      "Beautifully manicured flower gardens",
      "Multi-cuisine restaurant with garden views",
      "Independent family cottages",
      "Peaceful Ikka Nagar hill setting"
    ],
    locationHighlights: [
      { place: "Munnar Town Market", distance: "1.5 km", time: "5 min drive", note: "Spice emporiums & fruit stalls" },
      { place: "CSI Christ Church", distance: "1.8 km", time: "6 min drive", note: "Historic stained glass church" },
      { place: "Photo Point", distance: "4.5 km", time: "12 min drive", note: "Iconic pine trees and tea gardens" },
      { place: "Mattupetty Dam", distance: "9.5 km", time: "22 min drive", note: "Lake cruises and elephants" }
    ],
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not allowed",
    cancellationNote: "Full refund on cancellations made at least 48 hours prior to check-in",
    mapQuery: "Elysium Garden Hill Resorts, Top Station Road, Munnar, Kerala",
    makeMyKeralaPerks: [
      "Exclusive negotiated tariffs on all cottage categories",
      "Complimentary daily breakfast spread included",
      "Dedicated Kerala travel specialist on call throughout your trip",
      "Hassle-free private transportation from Kochi"
    ]
  },

  // 7. GOKULAM PARK MUNNAR
  {
    id: "gokulam-park",
    slug: "gokulam-park",
    name: "Gokulam Park Munnar",
    tagline: "Panoramic hillside luxury, Ayurvedic rejuvenation & valley views",
    category: "4-Star Hill Station Resort",
    starRating: 4,
    userRating: 4.3,
    reviewsCount: 680,
    startingPrice: "₹4,100",
    priceLabel: "Starting from ₹4,100 / night",
    locality: "South Chithirapuram",
    address: "Power House Road, South Chithirapuram, Munnar, Kerala 685565",
    phone: "+91 4865 263 700",
    email: "reservations.gpm@gokulampark.com",
    website: "https://gokulamhotels.com",
    heroImage: "/images/hotels/gokulam-park/exterior.webp",
    heroImageSm: "/images/hotels/gokulam-park/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/gokulam-park/exterior.webp",
        alt: "Gokulam Park Munnar twilight architectural facade",
        caption: "Contemporary illuminated facade perched on South Chithirapuram hillside"
      },
      {
        src: "/images/hotels/gokulam-park/exterior-detail.webp",
        alt: "Gokulam Park entrance and lobby portico",
        caption: "Grand glass portico entrance and welcoming arrival lounge"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Chithirapuram lush green tea hills",
        caption: "Sweeping tea terrace horizons surrounding Power House Road"
      }
    ],
    overview: "Set high upon the verdant ridges of South Chithirapuram along Power House Road, Gokulam Park Munnar (formerly known as Orchid Highlands) is a sophisticated 4-star leisure destination. Featuring 71 well-appointed keys with expansive picture windows overlooking the valley, the property combines modern luxury with authentic Kerala hospitality. With its renowned Oottupura multi-cuisine restaurant, Ayurvedic spa center, games room, and banquet facilities, it is a premier choice for upscale family holidays and corporate retreats.",
    quickFacts: [
      { label: "Hotel Class", value: "4-Star Hill Resort" },
      { label: "Total Keys", value: "71 Premium Rooms & Suites" },
      { label: "Check-in / Check-out", value: "02:00 PM / 11:00 AM" },
      { label: "Location", value: "South Chithirapuram (Power House Rd)" },
      { label: "Amenities", value: "Ayurvedic Spa & Games Lounge" },
      { label: "Cochin Airport", value: "95 km (3 hrs scenic drive)" }
    ],
    rooms: [
      {
        name: "Superior Valley Room",
        description: "Contemporary air-conditioned room with wide double-glazed windows capturing valley views, workspace, and glass rain shower.",
        size: "260 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed",
        amenities: ["Free Wi-Fi", "42\" Smart TV", "Electronic Safe", "Minibar", "Tea/Coffee Maker", "Premium Toiletries"]
      },
      {
        name: "Premium Valley View Room",
        description: "Upgraded room on higher floors featuring a private sit-out balcony with panoramic views over emerald tea slopes.",
        size: "320 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Private Balcony", "Valley Panorama", "High-speed Wi-Fi", "Coffee Setup", "Bathrobes & Slippers"]
      },
      {
        name: "Executive Suite",
        description: "Luxurious corner suite offering a dedicated living salon, master bedroom, panoramic glass windows, and luxury bathroom.",
        size: "460 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed",
        amenities: ["Separate Living Area", "Dual Smart TVs", "Minibar", "Bathtub & Rain Shower", "Express Check-in"]
      }
    ],
    facilities: [
      { icon: "spa", title: "Ayurvedic Wellness Spa", description: "Holistic therapy center offering traditional Kerala Abhyanga, Shirodhara, and steam baths" },
      { icon: "dining", title: "Oottupura Multi-Cuisine", description: "All-day dining restaurant serving traditional Kerala feasts, pure veg options, and international dishes" },
      { icon: "games", title: "Activity & Games Lounge", description: "Indoor recreation center featuring billiards, table tennis, board games, and kids play corner" },
      { icon: "meetings", title: "Banquet & Conference Hall", description: "Modern audio-visual equipped hall accommodating up to 150 conference delegates" },
      { icon: "ev", title: "EV Charging Station", description: "Dedicated electric vehicle charging station on-premises for eco-friendly travelers" }
    ],
    dining: [
      {
        name: "Oottupura Restaurant",
        cuisine: "Authentic Kerala, North Indian, Continental & Pure Veg",
        type: "All-Day Multi-Cuisine",
        timing: "07:00 AM - 10:30 PM",
        description: "Oottupura celebrates Kerala's culinary heritage with signature fish curry meals, Malabari biryani, and extensive vegetarian thalis, complemented by Pan-Asian and continental specialties."
      }
    ],
    specialties: [
      "Commanding hillside position offering crisp clean air and valley panoramas",
      "71-key inventory capable of hosting large family groups and corporate retreats",
      "Certified Ayurvedic wellness center for restorative Kerala therapies",
      "On-site electric vehicle (EV) charging facilities for modern travelers"
    ],
    highlights: [
      "4-star luxury property with 71 well-appointed keys",
      "Oottupura multi-cuisine restaurant with pure veg options",
      "Ayurvedic spa & wellness treatments",
      "Indoor games lounge & kids recreation area",
      "Electric Vehicle (EV) charging available"
    ],
    locationHighlights: [
      { place: "Chithirapuram Viewpoint", distance: "2.0 km", time: "5 min drive", note: "Panoramic valley scenery" },
      { place: "Pallivasal Falls", distance: "3.8 km", time: "8 min drive", note: "Scenic mountain cascade" },
      { place: "Munnar Town Center", distance: "8.5 km", time: "20 min drive", note: "Local markets and shopping" },
      { place: "Attukad Waterfalls", distance: "9.0 km", time: "22 min drive", note: "Dramatic waterfall treks" }
    ],
    checkIn: "02:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not allowed on the property",
    cancellationNote: "Free cancellation up to 48 hours prior to check-in on MakeMyKerala packages",
    mapQuery: "Gokulam Park Munnar, Power House Road, South Chithirapuram, Kerala",
    makeMyKeralaPerks: [
      "Guaranteed best tariff with no hidden taxes or fees",
      "Complimentary buffet breakfast included daily",
      "Private AC vehicle with experienced local chauffeur",
      "24/7 MakeMyKerala on-call support throughout your holiday"
    ]
  },

  // 8. THE FOG RESORT & SPA
  {
    id: "the-fog",
    slug: "the-fog",
    name: "The Fog Munnar Resort & Spa",
    tagline: "Mist-shrouded 5-star mountain sanctuary with infinity pool & Ayurvedic spa",
    category: "5-Star Luxury Mountain Resort",
    starRating: 5,
    userRating: 4.6,
    reviewsCount: 1120,
    startingPrice: "₹6,500",
    priceLabel: "Starting from ₹6,500 / night",
    locality: "Eatty City, Chithirapuram",
    address: "Eatty City Road, Chithirapuram P.O., Munnar, Kerala 685565",
    phone: "+91 4865 263 888",
    email: "reservations@thefogmunnar.com",
    website: "https://thefogmunnar.com",
    heroImage: "/images/hotels/the-fog/exterior.webp",
    heroImageSm: "/images/hotels/the-fog/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/the-fog/exterior.webp",
        alt: "The Fog Resort Munnar infinity pool and mountain cottages",
        caption: "Breathtaking outdoor infinity pool with water fountains overlooking the misty mountains"
      },
      {
        src: "/images/hotels/the-fog/exterior-detail.webp",
        alt: "The Fog Resort sun loungers and valley view pool deck",
        caption: "Poolside terrace framed by rolling Western Ghats peaks"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Misty mountains and tea gardens around Chithirapuram",
        caption: "Serene green tea valley landscape surrounding Eatty City"
      }
    ],
    overview: "Nestled in the tranquil hills of Eatty City, Chithirapuram, The Fog Munnar Resort & Spa is a premier 5-star mountain retreat renowned for its misty morning ambiance and luxurious villas. Centered around a stunning outdoor swimming pool complete with water fountains and expansive mountain viewpoints, the resort offers private stand-alone cottages, the Bodhi Tree Ayurvedic Spa, and fine dining at Alaska Restaurant. It delivers an unforgettable sanctuary for luxury vacationers and honeymoon couples seeking privacy and refined pampering.",
    quickFacts: [
      { label: "Hotel Class", value: "5-Star Luxury Resort" },
      { label: "Total Keys", value: "40 Luxury Villas & Suites" },
      { label: "Check-in / Check-out", value: "02:00 PM / 11:00 AM" },
      { label: "Location", value: "Eatty City, Chithirapuram" },
      { label: "Highlights", value: "Infinity Pool with Fountains & Bodhi Tree Spa" },
      { label: "Cochin Airport", value: "96 km (3 hrs scenic drive)" }
    ],
    rooms: [
      {
        name: "Fog Villa",
        description: "Independent cottage villa with private balcony looking out onto rolling mist, premium wooden floorings, and luxury bath.",
        size: "380 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed",
        amenities: ["Private View Balcony", "High-speed Wi-Fi", "43\" Smart TV", "Mini Bar", "Luxury Bathrobes", "Tea/Coffee Maker"]
      },
      {
        name: "Villa Suite",
        description: "Expansive luxury villa featuring an attached living salon, master bedroom, panoramic glass windows, and designer bathroom.",
        size: "520 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Separate Living Area", "Two Smart TVs", "Mini Bar", "Espresso Maker", "Premium Toiletries", "Dedicated Butler"]
      },
      {
        name: "Honeymoon Romantica Suite",
        description: "Curated romantic sanctuary featuring Jacuzzi bath, breathtaking valley panoramas, and special evening setups.",
        size: "460 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed",
        amenities: ["Private Jacuzzi", "Valley Panorama", "Romantic Decor Setup", "Express In-Room Dining", "VIP Amenities"]
      }
    ],
    facilities: [
      { icon: "pool", title: "Infinity Pool with Fountains", description: "Signature outdoor swimming pool featuring fountain jets, children's splash pool, and sun loungers" },
      { icon: "spa", title: "Bodhi Tree Ayurvedic Spa", description: "World-class wellness center offering authentic Kerala Ayurvedic therapies, steam, and herbal massages" },
      { icon: "dining", title: "Alaska Multi-Cuisine", description: "Fine-dining restaurant serving curated Kerala specialties, North Indian delicacies, and continental fare" },
      { icon: "games", title: "Indoor Activity Center", description: "Games room with billiards, table tennis, foosball, and board games" },
      { icon: "nature", title: "Campfire & Barbecue", description: "Nightly campfire evenings with outdoor barbecue grills under the starry sky" }
    ],
    dining: [
      {
        name: "Alaska Restaurant",
        cuisine: "Kerala, Pan-Indian, Continental & Oriental",
        type: "Fine-Dining Multi-Cuisine",
        timing: "07:00 AM - 10:30 PM",
        description: "An elegant all-day restaurant featuring illuminated poolside seating by night and panoramic mountain vistas by day, serving gourmet Kerala seafood curries, grilled tender meats, and artisanal desserts."
      }
    ],
    specialties: [
      "Scenic infinity swimming pool with active water fountains overlooking the misty valley",
      "Private luxury villas and honeymoon suites with standalone seclusion",
      "Renowned Bodhi Tree Ayurvedic Spa providing rejuvenating Kerala wellness rituals",
      "Peaceful Eatty City location away from tourist bus traffic"
    ],
    highlights: [
      "5-star luxury mountain resort & spa",
      "Signature outdoor infinity pool with water jets",
      "Bodhi Tree Ayurvedic Spa & wellness center",
      "Independent Fog Villas & Honeymoon suites",
      "Fine-dining at Alaska Restaurant"
    ],
    locationHighlights: [
      { place: "Eatty City Viewpoint", distance: "800 m", time: "2 min drive", note: "Stunning valley horizon" },
      { place: "Chithirapuram Spice Farms", distance: "2.5 km", time: "6 min drive", note: "Cardamom and pepper walks" },
      { place: "Munnar Town Center", distance: "9.5 km", time: "22 min drive", note: "Markets, tea shops, shopping" },
      { place: "Attukad Waterfalls", distance: "11 km", time: "25 min drive", note: "Famous natural falls" }
    ],
    checkIn: "02:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not allowed on the premises",
    cancellationNote: "Full refund for cancellations made 72 hours prior to arrival",
    mapQuery: "The Fog Munnar Resort & Spa, Eatty City Road, Chithirapuram, Kerala",
    makeMyKeralaPerks: [
      "Exclusive negotiated 5-star tariffs with zero hidden fees",
      "Complimentary breakfast buffet included with all bookings",
      "Chauffeured private luxury AC cab for all tours",
      "24/7 dedicated MakeMyKerala concierge assistance"
    ]
  },

  // 9. THE LEAF MUNNAR
  {
    id: "the-leaf",
    slug: "the-leaf",
    name: "The Leaf Munnar",
    tagline: "Sprawling tea garden sanctuary featuring panoramic pool villas",
    category: "Luxury Valley & Pool Villa Resort",
    starRating: 4,
    userRating: 4.6,
    reviewsCount: 1450,
    startingPrice: "₹5,200",
    priceLabel: "Starting from ₹5,200 / night",
    locality: "Anachal / Chithirapuram",
    address: "Chithirapuram P.O., Aamakandam – Anachal, Munnar, Kerala 685565",
    phone: "+91 4865 263 600",
    email: "info@theleafmunnar.com",
    website: "https://theleafmunnar.com",
    heroImage: "/images/hotels/the-leaf/exterior.webp",
    heroImageSm: "/images/hotels/the-leaf/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/the-leaf/exterior.webp",
        alt: "The Leaf Munnar infinity pool and scenic tea mountains",
        caption: "Breathtaking infinity pool with iconic The Leaf Munnar swing sign overlooking mountain peaks"
      },
      {
        src: "/images/hotels/the-leaf/exterior-detail.webp",
        alt: "The Leaf Munnar pool deck and blue waters",
        caption: "Crystal-clear infinity waters mirroring the azure Kerala sky"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Anachal tea plantations and rolling mountains",
        caption: "Serene green tea plantation vistas surrounding Anachal"
      }
    ],
    overview: "Tucked gracefully into the tranquil Aamakandam heights of Anachal near Chithirapuram, The Leaf Munnar is a renowned 4-star luxury resort set amidst organic gardens and tea hills. Famous for its infinity pool featuring an iconic wooden swing frame against an endless mountain backdrop, the property offers everything from comfortable Green Leaf rooms to lavish private pool villas. Guests enjoy glass-paneled dining at Bouquet Garni, mini-golf, indoor sports, and immersive nature walks.",
    quickFacts: [
      { label: "Hotel Class", value: "4-Star Luxury Nature Resort" },
      { label: "Total Keys", value: "54 Rooms, Suites & Pool Villas" },
      { label: "Check-in / Check-out", value: "02:00 PM / 11:00 AM" },
      { label: "Location", value: "Aamakandam – Anachal, Chithirapuram" },
      { label: "Signature Feature", value: "Infinity Pool with Mountain Swing & Private Pool Villas" },
      { label: "Cochin Airport", value: "95 km (3 hrs drive)" }
    ],
    rooms: [
      {
        name: "Green Leaf Room",
        description: "Elegant cozy room designed for two, featuring comfortable king bed, modern bathroom, and garden hill views.",
        size: "240 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed",
        amenities: ["Free High-speed Wi-Fi", "LED Television", "Coffee Maker", "Attached Shower", "Safe", "Mineral Water"]
      },
      {
        name: "Silver Leaf Deluxe Room",
        description: "Spacious deluxe room with private balcony framing tea plantation vistas and mist-clad ridges.",
        size: "450 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Private Balcony", "Tea Garden View", "43\" Smart TV", "Mini Fridge", "Work Station", "Premium Toiletries"]
      },
      {
        name: "Golden Leaf Suite",
        description: "Premium expansive suite featuring a separate living salon, luxury furnishings, and panoramic valley glass windows.",
        size: "500 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed",
        amenities: ["Living Lounge", "Two Smart TVs", "Minibar", "Bathtub & Rain Shower", "Express Service"]
      },
      {
        name: "Family Pool Villa",
        description: "Exclusive luxury villa with its own private swimming pool, two expansive bedrooms, and private garden patio.",
        size: "1,200 sq.ft",
        capacity: "4 Adults + 2 Children",
        bed: "Two King Beds",
        amenities: ["Private Swimming Pool", "Two Master Bedrooms", "Living Lounge", "Private Garden", "Butler Service"]
      }
    ],
    facilities: [
      { icon: "pool", title: "Scenic Infinity Pool", description: "World-class infinity pool with the signature 'The Leaf Munnar' swing photo point overlooking the valley" },
      { icon: "dining", title: "Bouquet Garni Restaurant", description: "Glass-walled multi-cuisine dining venue with panoramic views of the Western Ghats" },
      { icon: "golf", title: "Mini-Golf Course", description: "Charming on-premises mini-golf putting green for adults and children" },
      { icon: "games", title: "Recreation & Kids Play Area", description: "Billiards, table tennis, children's outdoor playground, and indoor games" },
      { icon: "spa", title: "Wellness & Yoga", description: "Morning yoga sessions and relaxing spa therapies amidst pure mountain breezes" }
    ],
    dining: [
      {
        name: "Bouquet Garni Restaurant",
        cuisine: "Kerala, Arabic, Continental, Italian & Chinese",
        type: "Panoramic Glass-Paneled Fine Dining",
        timing: "07:30 AM - 10:30 PM",
        description: "Dine high above the valley with floor-to-ceiling glass paneling, enjoying signature Malabari fish curry, wood-fired style pizzas, delicate dim sums, and tender kebabs prepared with fresh local produce."
      }
    ],
    specialties: [
      "Iconic infinity pool with swing sign framing panoramic mountain peaks",
      "Exclusive private pool villas offering absolute privacy for families and honeymooners",
      "Bouquet Garni panoramic glass restaurant with international culinary breadth",
      "Extensive leisure amenities including mini-golf, organic herb gardens, and kids park"
    ],
    highlights: [
      "World-class infinity pool with mountain swing",
      "Exclusive private pool villas available",
      "Bouquet Garni panoramic glass restaurant",
      "Mini-golf course & children's play area",
      "Over 1,400+ top-rated guest reviews"
    ],
    locationHighlights: [
      { place: "Anachal Town & Market", distance: "2.0 km", time: "5 min drive", note: "Local cafes & bakeries" },
      { place: "Chengulam Dam & Boating", distance: "5.5 km", time: "14 min drive", note: "Pedal boating & speedboating" },
      { place: "Munnar Town Center", distance: "11 km", time: "25 min drive", note: "Central shopping hub" },
      { place: "Attukad Waterfalls", distance: "12 km", time: "28 min drive", note: "Picturesque waterfalls" }
    ],
    checkIn: "02:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not allowed on the property",
    cancellationNote: "Cancellations made 72 hours prior to arrival are fully refundable",
    mapQuery: "The Leaf Munnar, Aamakandam, Anachal, Chithirapuram, Kerala",
    makeMyKeralaPerks: [
      "Guaranteed best tariff with complimentary room upgrade when available",
      "Daily breakfast spread included at Bouquet Garni",
      "Private AC vehicle with expert local chauffeur for all transfers",
      "24/7 dedicated MakeMyKerala on-trip assistance"
    ]
  },

  // 10. AMBER DALE
  {
    id: "amber-dale",
    slug: "amber-dale",
    name: "Amber Dale Luxury Hotel & Spa",
    tagline: "5-star elegance, private Jacuzzi terraces & sweeping meadow views",
    category: "5-Star Luxury Retreat",
    starRating: 5,
    userRating: 4.5,
    reviewsCount: 980,
    startingPrice: "₹6,800",
    priceLabel: "Starting from ₹6,800 / night",
    locality: "Pallivasal",
    address: "KSEB Tunnel Road, Pallivasal, Munnar, Kerala 685565",
    phone: "+91 4865 263 900",
    email: "reservations@amberdalemunnar.com",
    website: "https://kondodyhotels.com/amber-dale-munnar",
    heroImage: "/images/hotels/amber-dale/exterior.webp",
    heroImageSm: "/images/hotels/amber-dale/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/amber-dale/exterior.webp",
        alt: "Amber Dale Munnar stone entrance signage wall",
        caption: "Signature natural stone arrival monument framed by manicured cypress shrubs"
      },
      {
        src: "/images/hotels/amber-dale/exterior-detail.webp",
        alt: "Amber Dale Munnar landscape and mountain setting",
        caption: "Serene hillside sanctuary in the pristine Pallivasal hills"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Pallivasal rolling tea terraces and valleys",
        caption: "Emerald tea slopes and cloud-kissed peaks of Pallivasal"
      }
    ],
    overview: "Poised majestically along KSEB Tunnel Road in the peaceful enclave of Pallivasal, Amber Dale Luxury Hotel & Spa by Kondody Hotels is a 5-star haven of mountain luxury. With 57 masterfully crafted rooms and Jacuzzi suites opening onto sweeping panoramas of mist-kissed highlands, the resort delivers sophisticated comfort. Guests indulge in holistic Ayurveda treatments, open-air campfire evenings, a modern fitness centre, and fine multi-cuisine dining.",
    quickFacts: [
      { label: "Hotel Class", value: "5-Star Luxury Retreat" },
      { label: "Total Keys", value: "57 Luxury Rooms & Jacuzzi Suites" },
      { label: "Check-in / Check-out", value: "02:00 PM / 11:00 AM" },
      { label: "Location", value: "Pallivasal (KSEB Tunnel Road)" },
      { label: "Highlights", value: "Private Balcony Jacuzzis & Luxury Spa" },
      { label: "Cochin Airport", value: "96 km (3 hrs drive)" }
    ],
    rooms: [
      {
        name: "Deluxe Nature Room",
        description: "Spacious luxury room with floor-to-ceiling glass windows framing verdant valley slopes, fine hardwood furnishings, and rain shower.",
        size: "320 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed",
        amenities: ["Valley View", "High-speed Wi-Fi", "43\" Smart TV", "Electronic Safe", "Coffee Maker", "Luxury Bath Products"]
      },
      {
        name: "Premium Valley Jacuzzi Room",
        description: "Signature luxury room featuring a private open-air Jacuzzi tub on the balcony overlooking the mist-filled valley.",
        size: "420 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed",
        amenities: ["Private Balcony Jacuzzi", "Valley View", "Smart TV", "Minibar", "Bathrobes & Slippers", "Express Service"]
      },
      {
        name: "Amber Presidential Suite",
        description: "The crown jewel suite offering an expansive living room, separate master bedroom, dual private balconies, and Jacuzzi.",
        size: "650 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed",
        amenities: ["Separate Living Lounge", "Private Jacuzzi", "Two Smart TVs", "Walk-in Wardrobe", "Butler Service"]
      }
    ],
    facilities: [
      { icon: "spa", title: "Ayurvedic Wellness Spa", description: "Dedicated therapy rooms offering authentic Kerala herbal treatments, body wraps, and steam" },
      { icon: "dining", title: "Valley View Restaurant", description: "Fine-dining restaurant and coffee shop serving international buffets and regional delicacies" },
      { icon: "fitness", title: "Modern Fitness Centre", description: "Equipped gymnasium with panoramic glass windows overlooking the mountain terrain" },
      { icon: "nature", title: "Bonfire & Lawn Lounge", description: "Complimentary evening bonfire experiences with acoustic music and stargazing" },
      { icon: "games", title: "Recreation Centre", description: "Indoor games room with board games, foosball, table tennis, and kids corner" }
    ],
    dining: [
      {
        name: "Amber Multi-Cuisine Restaurant",
        cuisine: "Kerala, Pan-Indian, Continental & Oriental",
        type: "All-Day Fine Dining",
        timing: "07:00 AM - 10:30 PM",
        description: "An elegant dining venue featuring lavish breakfast buffets, authentic Syrian Christian beef fry and appams, continental grills, and delicate Chinese delicacies."
      },
      {
        name: "The Valley Coffee Shop",
        cuisine: "Artisan Coffee, Pastries & Finger Foods",
        type: "Scenic Lounge Cafe",
        timing: "10:00 AM - 10:00 PM",
        description: "Panoramic cafe offering freshly brewed plantation espresso, herbal teas, warm brownies, and light evening savories."
      }
    ],
    specialties: [
      "Private outdoor Jacuzzi rooms overlooking the breathtaking Pallivasal valley",
      "Full 5-star luxury standards managed by the renowned Kondody Hotels group",
      "Serene location nestled along KSEB Tunnel Road away from busy highways",
      "Complimentary nightly campfire experiences under cool starry skies"
    ],
    highlights: [
      "5-star luxury hotel with 57 premium rooms & suites",
      "Private balcony Jacuzzis with mountain views",
      "Ayurvedic wellness spa & fitness centre",
      "Fine multi-cuisine dining & valley coffee shop",
      "Complimentary evening bonfires"
    ],
    locationHighlights: [
      { place: "Pallivasal Tea Falls", distance: "2.8 km", time: "6 min drive", note: "Picturesque mountain stream" },
      { place: "Attukad Waterfalls", distance: "6.5 km", time: "16 min drive", note: "Famous waterfall viewpoint" },
      { place: "Pothamedu Viewpoint", distance: "7.0 km", time: "18 min drive", note: "Sunset panorama" },
      { place: "Munnar Town Center", distance: "8.5 km", time: "20 min drive", note: "Bazaars, tea outlets & dining" }
    ],
    checkIn: "02:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not allowed on the property",
    cancellationNote: "Full refund for cancellations made 72 hours prior to arrival date",
    mapQuery: "Amber Dale Luxury Hotel & Spa, Pallivasal, Munnar, Kerala",
    makeMyKeralaPerks: [
      "Guaranteed best package pricing on Jacuzzi and luxury suites",
      "Complimentary daily multi-cuisine breakfast buffet",
      "Private AC chauffeur vehicle for seamless arrival and touring",
      "24/7 dedicated MakeMyKerala concierge assistance"
    ]
  },




  // 12. VIBE RESORT & SPA
  {
    id: "vibe-resort",
    slug: "vibe-resort",
    name: "Vibe Munnar Resort & Spa",
    tagline: "Grand colonial architecture, rooftop infinity pool & Kerala's premier hammam",
    category: "5-Star Grand Luxury Resort",
    starRating: 5,
    userRating: 4.6,
    reviewsCount: 890,
    startingPrice: "₹7,200",
    priceLabel: "Starting from ₹7,200 / night",
    locality: "Eatty City, Chithirapuram",
    address: "Eatty City Road, Chithirapuram P.O., Munnar, Kerala 685565",
    phone: "+91 4865 264 000",
    email: "info@vibemunnar.com",
    website: "https://vibemunnar.com",
    heroImage: "/images/hotels/vibe-resort/exterior.webp",
    heroImageSm: "/images/hotels/vibe-resort/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/vibe-resort/exterior.webp",
        alt: "Vibe Munnar Resort & Spa grand colonial facade",
        caption: "Grand colonial architecture framed by Western Ghats ridges"
      },
      {
        src: "/images/hotels/vibe-resort/exterior-detail.webp",
        alt: "Vibe Munnar rooftop pool and resort landscape",
        caption: "Expansive rooftop infinity pool and recreation terraces"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Eatty City tea covered hills",
        caption: "Misty mountain views surrounding Eatty City and Chithirapuram"
      }
    ],
    overview: "Set amidst the rolling highland forests of Eatty City, Chithirapuram, Vibe Munnar Resort & Spa is a majestic 5-star destination property. Boasting grand colonial architecture and over 200 luxury rooms and Jacuzzi suites, Vibe Munnar is celebrated for hosting one of Kerala’s largest dedicated wellness spas—including a traditional Turkish hammam. With a heated rooftop infinity pool, the 200-seat High Range Club dining hall, and extensive banquet facilities, it represents high-altitude opulence at its finest.",
    quickFacts: [
      { label: "Hotel Class", value: "5-Star Grand Luxury Resort" },
      { label: "Total Keys", value: "200 Luxury Rooms & Suites" },
      { label: "Check-in / Check-out", value: "02:00 PM / 11:00 AM" },
      { label: "Location", value: "Eatty City Road, Chithirapuram" },
      { label: "Wellness", value: "Largest Spa in Kerala with Turkish Hammam" },
      { label: "Cochin Airport", value: "96 km (3 hrs scenic drive)" }
    ],
    rooms: [
      {
        name: "Hamilton Regalia Deluxe",
        description: "Opulent colonial-style guestroom with plush king bedding, private balcony overlooking the valley, and marble bath.",
        size: "360 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed",
        amenities: ["Valley Balcony", "High-speed Wi-Fi", "55\" Smart TV", "Minibar", "Electronic Safe", "Luxury Toiletries"]
      },
      {
        name: "Vibe Legacy Jacuzzi Suite",
        description: "Expansive luxury suite featuring an in-room or private terrace Jacuzzi, panoramic valley glass, and designer lounge.",
        size: "727 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Private Jacuzzi", "Separate Living Lounge", "Two Smart TVs", "Minibar Setup", "Bathrobes & Slippers", "Butler Service"]
      },
      {
        name: "Grand Royal Suite",
        description: "Presidential-scale suite with two bedrooms, expansive living salon, dining area, and 360-degree mountain panoramas.",
        size: "1,100 sq.ft",
        capacity: "4 Adults",
        bed: "Two King Beds",
        amenities: ["Two Master Bedrooms", "Private Dining Table", "Dual Jacuzzis", "VIP Butler Service", "Complimentary Spa Session"]
      }
    ],
    facilities: [
      { icon: "pool", title: "Rooftop Heated Infinity Pool", description: "Stunning rooftop infinity swimming pool overlooking cloud-wrapped valleys, plus kids splash pool" },
      { icon: "spa", title: "The Grand Spa & Hammam", description: "One of Kerala's largest wellness spas featuring authentic Turkish hammam baths, Ayurvedic therapies, and steam" },
      { icon: "dining", title: "The High Range Club", description: "200-seat colonial-style dining room serving international buffets, tandoor, and regional feasts" },
      { icon: "fitness", title: "Health Club & Gym", description: "Fully equipped modern fitness center with cardio and strength equipment" },
      { icon: "meetings", title: "Banquet & Convention Hall", description: "High-capacity convention hall suitable for large destination weddings and corporate retreats" }
    ],
    dining: [
      {
        name: "The High Range Club",
        cuisine: "Kerala, Pan-Indian, Continental, Chinese & Arabic",
        type: "Grand Multi-Cuisine Dining Hall",
        timing: "07:00 AM - 11:00 PM",
        description: "A grand 200-seat restaurant evoking British colonial high-range clubs, featuring live cooking counters, lavish buffets, authentic Syrian Christian curries, and gourmet continental mains."
      }
    ],
    specialties: [
      "Home to one of the largest wellness spas in Kerala featuring a traditional Turkish hammam",
      "Heated rooftop infinity pool commanding dramatic mountain horizon views",
      "Over 200 luxury rooms, Jacuzzi suites, and royal family suites",
      "Grand colonial architectural aesthetics with state-of-the-art modern comforts"
    ],
    highlights: [
      "5-star grand luxury resort in Eatty City",
      "Rooftop heated infinity pool & kids pool",
      "Largest Kerala spa with Turkish Hammam",
      "Vibe Legacy suites with private Jacuzzis",
      "The High Range Club 200-seat dining hall"
    ],
    locationHighlights: [
      { place: "Eatty City Valley Trails", distance: "500 m", time: "2 min walk", note: "Scenic hiking paths" },
      { place: "Chithirapuram Viewpoint", distance: "2.5 km", time: "6 min drive", note: "Sunset viewpoint" },
      { place: "Munnar Town Center", distance: "9.8 km", time: "22 min drive", note: "Shopping and dining hub" },
      { place: "Attukad Waterfalls", distance: "11 km", time: "25 min drive", note: "Iconic waterfalls" }
    ],
    checkIn: "02:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are strictly not permitted on property",
    cancellationNote: "Full refund for cancellations made 72 hours prior to arrival date",
    mapQuery: "Vibe Munnar Resort & Spa, Eatty City Road, Chithirapuram, Kerala",
    makeMyKeralaPerks: [
      "Guaranteed best tariff with no hidden markups",
      "Complimentary daily breakfast spread at The High Range Club",
      "Chauffeured private AC luxury cab for seamless tours",
      "24/7 dedicated MakeMyKerala on-trip customer service"
    ]
  },

  // 13. BLANKET HOTEL & SPA
  {
    id: "blanket-resort",
    slug: "blanket-resort",
    name: "Blanket Hotel & Spa",
    tagline: "Eco-luxury sanctuary poised directly above the dramatic Attukad Waterfalls",
    category: "5-Star Eco-Luxury Waterfall Resort",
    starRating: 5,
    userRating: 4.7,
    reviewsCount: 1250,
    startingPrice: "₹7,800",
    priceLabel: "Starting from ₹7,800 / night",
    locality: "Attukad Waterfalls, Pallivasal",
    address: "Attukad Waterfalls Road, Pallivasal, Munnar, Kerala 685565",
    phone: "+91 4865 263 444",
    email: "reservations@blanketmunnar.com",
    website: "https://blanketmunnar.com",
    heroImage: "/images/hotels/blanket-resort/exterior.webp",
    heroImageSm: "/images/hotels/blanket-resort/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/blanket-resort/exterior.webp",
        alt: "Blanket Hotel & Spa exterior overlooking Attukad Waterfalls",
        caption: "Poised dramatically over the valley of the cascading Attukad Waterfalls"
      },
      {
        src: "/images/hotels/blanket-resort/exterior-detail.webp",
        alt: "Blanket Hotel infinity pool and valley terrace",
        caption: "Valley-facing infinity pool with direct views of natural mountain cascades"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Attukad Waterfalls and tea plantations",
        caption: "Lush green rainforests and dramatic waterfalls of Pallivasal"
      }
    ],
    overview: "Poised spectacularly on the cliffside directly overlooking the renowned Attukad Waterfalls in Pallivasal, Blanket Hotel & Spa is one of Munnar’s most celebrated 5-star eco-luxury sanctuaries. Offering 42 exquisitely designed rooms and suites where the soothing sound of rushing cascades provides nature’s soundtrack, the resort features an infinity swimming pool overlooking the river ravine, the Thulasi Ayurveda Spa, open-air dining, and curated waterfall treks.",
    quickFacts: [
      { label: "Hotel Class", value: "5-Star Eco-Luxury Resort" },
      { label: "Total Keys", value: "42 Luxury Waterfall-View Rooms" },
      { label: "Check-in / Check-out", value: "02:00 PM / 11:00 AM" },
      { label: "Location", value: "Attukad Waterfalls Road, Pallivasal" },
      { label: "Highlight", value: "Direct Panorama of Attukad Waterfalls" },
      { label: "Munnar Town", value: "7.5 km (18 min drive)" }
    ],
    rooms: [
      {
        name: "Blanket Camellia",
        description: "Sophisticated luxury room with private balcony offering sweeping views of the river valley and tea estates.",
        size: "350 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed",
        amenities: ["River Valley Balcony", "High-speed Wi-Fi", "43\" Smart TV", "Minibar", "Electronic Safe", "Luxury Toiletries"]
      },
      {
        name: "Blanket Valley Club",
        description: "Premium room with direct vantage views of the roaring Attukad Waterfalls, warm hardwood finishes, and glass rain shower.",
        size: "420 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Direct Waterfall View", "Private Balcony", "Smart TV", "Coffee Maker", "Bathrobes & Slippers"]
      },
      {
        name: "Honeymoon Pavilion Suite",
        description: "Romantic suite with glass-walled views of the waterfalls, bespoke private whirlpool tub, and champagne breakfast option.",
        size: "550 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed",
        amenities: ["Private Whirlpool Tub", "Unobstructed Waterfall View", "Romantic Floral Setup", "Express In-Room Dining"]
      },
      {
        name: "Presidential Suite",
        description: "The pinnacle of high-range luxury featuring dual bedrooms, spacious living salon, and private viewing terrace.",
        size: "850 sq.ft",
        capacity: "4 Adults",
        bed: "Two King Beds",
        amenities: ["Two Master Bedrooms", "Separate Living Lounge", "Private Viewing Deck", "Butler Service", "VIP Check-in"]
      }
    ],
    facilities: [
      { icon: "pool", title: "Valley-Facing Infinity Pool", description: "Heated infinity pool poised directly above the ravine with sound of the rushing falls" },
      { icon: "spa", title: "Thulasi Ayurveda Spa", description: "Authentic Kerala Ayurvedic therapy suites providing customized panchakarma and wellness rituals" },
      { icon: "dining", title: "Falls View Restaurant", description: "Multi-cuisine fine dining venue and open-air bistro with direct waterfall perspectives" },
      { icon: "trekking", title: "Guided Waterfall Treks", description: "Complimentary guided trekking expeditions through tea estates to Attukad Waterfalls" },
      { icon: "fitness", title: "State-of-the-Art Gym", description: "Fully equipped modern fitness center with floor-to-ceiling views of the valley" }
    ],
    dining: [
      {
        name: "Falls View Restaurant",
        cuisine: "Kerala, Pan-Indian, Continental & Oriental",
        type: "All-Day Fine Dining & Bistro",
        timing: "07:00 AM - 10:30 PM",
        description: "Savor award-winning culinary presentations from traditional Malabar seafood to roasted duck curries and continental mains, while listening to the distant roar of Attukad Waterfalls."
      }
    ],
    specialties: [
      "Direct unobstructed vantage view of the dramatic Attukad Waterfalls",
      "Infinity pool cantilevered over the misty valley ravine",
      "Thulasi Ayurveda Spa offering verified Kerala healing traditions",
      "Guided private waterfall and plantation trekking trails for guests"
    ],
    highlights: [
      "5-star eco-luxury resort over Attukad Falls",
      "Valley-facing infinity swimming pool",
      "Thulasi Ayurveda Spa & wellness center",
      "Private whirlpool tubs in honeymoon suites",
      "Consistently rated 4.7+ by over 1,200 travelers"
    ],
    locationHighlights: [
      { place: "Attukad Waterfalls", distance: "200 m", time: "2 min walk", note: "Direct trail from property" },
      { place: "Pallivasal Tea Garden", distance: "2.5 km", time: "7 min drive", note: "Emerald tea slopes" },
      { place: "Pothamedu Viewpoint", distance: "5.5 km", time: "14 min drive", note: "Sunset valley outlook" },
      { place: "Munnar Town Center", distance: "7.5 km", time: "18 min drive", note: "Local markets and shopping" }
    ],
    checkIn: "02:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not permitted",
    cancellationNote: "Cancellations up to 72 hours prior to arrival receive a full refund",
    mapQuery: "Blanket Hotel & Spa, Attukad Waterfalls, Pallivasal, Munnar, Kerala",
    makeMyKeralaPerks: [
      "Best contracted rates on waterfall-view rooms and honeymoon pavilions",
      "Complimentary breakfast buffet included throughout your stay",
      "Private chauffeured AC vehicle for all transfers and excursions",
      "24/7 dedicated MakeMyKerala on-trip concierge assistance"
    ]
  },

  // 14. THE MUNNAR QUEEN
  {
    id: "munnar-queen",
    slug: "munnar-queen",
    name: "The Munnar Queen Resort & Spa",
    tagline: "Commanding eagle-eye ridge panoramas, rooftop leisure & serene comfort",
    category: "Panoramic Ridge View Resort",
    starRating: 4,
    userRating: 4.3,
    reviewsCount: 760,
    startingPrice: "₹3,900",
    priceLabel: "Starting from ₹3,900 / night",
    locality: "Chithirapuram / Pallivasal",
    address: "VIII-479, Chithirapuram, Anachal, Pallivasal, Munnar, Kerala 685565",
    phone: "+91 90485 33333",
    email: "info@themunnarqueen.in",
    website: "https://themunnarqueen.in",
    heroImage: "/images/hotels/munnar-queen/exterior.webp",
    heroImageSm: "/images/hotels/munnar-queen/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/munnar-queen/exterior.webp",
        alt: "The Munnar Queen Resort perched on high ridge",
        caption: "Commanding high ridge perch with unobstructed valley panoramas"
      },
      {
        src: "/images/hotels/munnar-queen/exterior-detail.webp",
        alt: "The Munnar Queen rooftop deck and swimming pool",
        caption: "Rooftop observation deck and leisure swimming pool"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Chithirapuram misty valleys and mountains",
        caption: "Panoramic vistas stretching across Chithirapuram and Pallivasal valleys"
      }
    ],
    overview: "Elevated high above the valleys of Chithirapuram near Anachal, The Munnar Queen Resort & Spa commands panoramic eagle-eye views of the Western Ghats. Known for its rooftop viewpoints and infinity pool where clouds drift below eye level, the 4-star resort offers spacious luxury rooms, multi-cuisine dining, a wellness spa, and an indoor games center. It provides an invigorating, peaceful mountain escape within easy reach of both Munnar town and regional sightseeing attractions.",
    quickFacts: [
      { label: "Hotel Class", value: "4-Star Ridge View Resort" },
      { label: "Total Keys", value: "48 Mountain-Facing Rooms" },
      { label: "Check-in / Check-out", value: "01:00 PM / 11:00 AM" },
      { label: "Location", value: "Chithirapuram / Pallivasal Ridge" },
      { label: "Key Amenity", value: "Rooftop Pool & Panoramic View Deck" },
      { label: "Munnar Town", value: "8.5 km (20 min drive)" }
    ],
    rooms: [
      {
        name: "Executive View Room",
        description: "Modern room featuring large view windows overlooking the mountain valley, comfortable bedding, and rain shower.",
        size: "260 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed",
        amenities: ["Valley View", "Free Wi-Fi", "LED Television", "Tea/Coffee Maker", "Hot Water 24/7", "Safe"]
      },
      {
        name: "Premium Valley Suite",
        description: "Spacious suite with private balcony framing mist-covered hills, seating lounge, and upgraded bath amenities.",
        size: "350 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Private Balcony", "Smart TV", "Minibar", "Work Desk", "Bathrobes & Slippers"]
      },
      {
        name: "Queen Royal Suite",
        description: "Top-tier suite offering sweeping 180-degree valley panoramas, plush living quarters, and VIP service.",
        size: "480 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed",
        amenities: ["Panoramic Ridge View", "Separate Living Lounge", "Two Smart TVs", "Mini Bar Setup", "Express Check-in"]
      }
    ],
    facilities: [
      { icon: "pool", title: "Rooftop Swimming Pool", description: "Elevated outdoor swimming pool and kids pool with 360-degree ridge panoramas" },
      { icon: "dining", title: "Viewpoint Multi-Cuisine", description: "All-day dining restaurant serving South Indian, North Indian, Chinese, and continental dishes" },
      { icon: "spa", title: "Queen Wellness Spa", description: "Ayurvedic massage and relaxation therapies by trained wellness experts" },
      { icon: "games", title: "Games & Activity Room", description: "Indoor recreation space with table tennis, carrom, chess, and board games" },
      { icon: "parking", title: "Valet & Guest Parking", description: "Secure on-premises vehicle parking with security staff" }
    ],
    dining: [
      {
        name: "The Viewpoint Restaurant",
        cuisine: "Kerala, South Indian, Tandoori & Chinese",
        type: "Ridge-Facing Multi-Cuisine",
        timing: "07:30 AM - 10:00 PM",
        description: "Enjoy dining with misty views from the high ridge, with a menu featuring traditional Kerala appam and stew, spicy pepper chicken, fresh vegetable curries, and sizzlers."
      }
    ],
    specialties: [
      "High ridge elevation providing breathtaking unobstructed valley views",
      "Rooftop swimming pool and observation terrace for cloud-watching",
      "Spacious rooms and suites with private mountain balconies",
      "Dedicated tour desk providing jeep safari arrangements"
    ],
    highlights: [
      "Commanding high ridge viewpoint location",
      "Rooftop swimming pool & observation deck",
      "Multi-cuisine Viewpoint Restaurant",
      "Ayurvedic spa & indoor activity room",
      "Spacious private balcony suites"
    ],
    locationHighlights: [
      { place: "Chithirapuram Viewpoint", distance: "1.5 km", time: "4 min drive", note: "Sunset panorama" },
      { place: "Anachal Town", distance: "3.2 km", time: "8 min drive", note: "Local shops & dining" },
      { place: "Pallivasal Falls", distance: "4.5 km", time: "10 min drive", note: "Waterfall stream" },
      { place: "Munnar Town Center", distance: "8.5 km", time: "20 min drive", note: "Tea stalls and spice shops" }
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not allowed",
    cancellationNote: "Full refund for cancellations made 48 hours prior to check-in",
    mapQuery: "The Munnar Queen, Chithirapuram, Anachal, Munnar, Kerala",
    makeMyKeralaPerks: [
      "Verified tariff with zero hidden agency markups",
      "Complimentary breakfast buffet included daily",
      "Chauffeured private AC cab for all Munnar sightseeing",
      "24/7 dedicated MakeMyKerala on-trip assistance"
    ]
  },

  {
    "id": "star-emirates",
  "slug": "star-emirates",
  "name": "Star Emirates",
  "tagline": "Tranquil mountain resort with panoramic valley views and landscaped garden lawns",
  "category": "3-Star Mountain Resort",
  "starRating": 3,
  "userRating": 4.3,
  "reviewsCount": 380,
  "startingPrice": "₹3,200",
  "priceLabel": "Starting from ₹3,200 / night",
  "locality": "Anachal / Chithirapuram, Munnar",
  "address": "Anachal, Chithirapuram P.O., Munnar, Idukki, Kerala 685565",
  "phone": "+91 4865 263 111",
  "email": "info@staremiratesmunnar.com",
  "website": "https://staremiratesmunnar.com",
  "destination": "munnar",
  "destinationName": "Munnar",
  "heroImage": "/images/hotels/munnar/star-emirates/exterior.webp",
  "heroImageSm": "/images/hotels/munnar/star-emirates/exterior-sm.webp",
  "gallery": [
    {
      "src": "/images/hotels/munnar/star-emirates/exterior.webp",
      "alt": "Star Emirates Munnar exterior facade and lawns",
      "caption": "Multi-tiered hillside property with lush landscaped surroundings"
    },
    {
      "src": "/images/hotels/munnar/star-emirates/exterior-sm.webp",
      "alt": "Star Emirates scenic mountain setting",
      "caption": "Panoramic mountain viewpoints and serene valley atmosphere"
    }
  ],
  "overview": "Set against the emerald hillsides of the Western Ghats near Anachal, Star Emirates delivers a peaceful mountain holiday retreat. Boasting multi-tiered gabled architecture, expansive lawns, fish spa, children's play area, and panoramic tea valley vistas, it offers an idyllic hillside stay for families, leisure travelers, and couples.",
  "quickFacts": [
    {
      "label": "Hotel Class",
      "value": "3-Star Mountain Resort"
    },
    {
      "label": "Total Keys",
      "value": "35 Mountain View Rooms"
    },
    {
      "label": "Check-in / Check-out",
      "value": "12:00 PM / 11:00 AM"
    },
    {
      "label": "Munnar Town",
      "value": "12 km (20 mins drive)"
    },
    {
      "label": "Cochin Airport",
      "value": "98 km (3 hrs drive)"
    }
  ],
  "rooms": [
    {
      "type": "Deluxe Mountain View Room",
      "size": "24 sq.m",
      "occupancy": "2 Adults",
      "view": "Valley & Mountain View",
      "bedding": "King Bed",
      "amenities": [
        "Free Wi-Fi",
        "LED TV",
        "Balcony View",
        "Ensuite Rain Shower",
        "24-hr Hot Water",
        "Room Service"
      ],
      "description": "Comfortable hillside room featuring a private balcony overlooking rolling tea valleys and green mountain slopes."
    },
    {
      "type": "Family Suite",
      "size": "36 sq.m",
      "occupancy": "2-4 Adults",
      "view": "Panoramic Hill View",
      "bedding": "Two Queen Beds",
      "amenities": [
        "High-speed Wi-Fi",
        "Balcony",
        "Coffee Maker",
        "Living Area",
        "Attached Bathroom"
      ],
      "description": "Spacious family accommodations designed for group comfort with scenic mountain outlooks."
    }
  ],
  "facilities": [
    {
      "name": "Multi-Cuisine Restaurant",
      "description": "In-house restaurant serving traditional Kerala sadhya, coastal curries, and Indian favorites.",
      "icon": "dining"
    },
    {
      "name": "Landscaped Garden & Lawn",
      "description": "Spacious outdoor lawns with play area and seating to enjoy cool mountain breezes.",
      "icon": "nature"
    },
    {
      "name": "24-Hour Front Desk",
      "description": "Round-the-clock reception assistance, luggage storage, and wake-up service.",
      "icon": "concierge"
    },
    {
      "name": "Free Wi-Fi",
      "description": "Wireless internet access in rooms and public areas.",
      "icon": "wifi"
    },
    {
      "name": "Travel Desk & Sightseeing",
      "description": "Guided tea garden tours, jeep safari bookings, and airport transfers.",
      "icon": "transport"
    },
    {
      "name": "Secure Parking",
      "description": "Ample on-site parking for private vehicles and tour coaches.",
      "icon": "parking"
    }
  ],
  "dining": [
    {
      "name": "Emirates Dine",
      "type": "All-Day Restaurant",
      "cuisine": "Kerala, South Indian & North Indian",
      "timing": "7:00 AM – 10:30 PM",
      "description": "Warm restaurant serving hearty South Indian breakfasts, traditional meals, and flavorful regional dishes."
    }
  ],
  "specialties": [
    "Panoramic Valley Views",
    "Spacious Lawn & Play Area",
    "Family-Friendly Hill Retreat",
    "Convenient Anachal Location"
  ],
  "nearbyAttractions": [
    {
      "place": "Ripple Tea Point",
      "distance": "4 km",
      "time": "8 mins drive",
      "note": "Scenic tea tasting spot"
    },
    {
      "place": "Munnar Town Center",
      "distance": "12 km",
      "time": "20 mins drive",
      "note": "Local bazaars & spice shops"
    },
    {
      "place": "Attukad Waterfalls",
      "distance": "10 km",
      "time": "18 mins drive",
      "note": "Picturesque cascading falls"
    }
  ],
  "policies": [
    "Government photo ID required at check-in",
    "Check-in at 12:00 PM; check-out at 11:00 AM"
  ],
  "mapQuery": "Star Emirates, Anachal, Munnar, Kerala",
  "highlights": [
    "Panoramic Valley Views",
    "Children's Play Area",
    "Multi-Cuisine Dining",
    "Free Parking"
  ],
  "makeMyKeralaPerks": [
    "Verified MakeMyKerala partner rates",
    "Complimentary breakfast",
    "24/7 dedicated on-trip helpline"
  ]
},
  {
  "id": "windernote",
  "slug": "windernote",
  "name": "Windernote",
  "tagline": "Boutique hillside retreat surrounded by mist-laden forests and tranquil mountain air",
  "category": "Boutique Hill Resort",
  "starRating": 3,
  "userRating": 4.2,
  "reviewsCount": 290,
  "startingPrice": "₹2,800",
  "priceLabel": "Starting from ₹2,800 / night",
  "locality": "Misty Valley, Munnar",
  "address": "Misty Valley, Chithirapuram Road, Munnar, Idukki, Kerala 685565",
  "phone": "+91 4865 252 888",
  "email": "reservations@windernotemunnar.com",
  "website": "https://windernotemunnar.com",
  "destination": "munnar",
  "destinationName": "Munnar",
  "heroImage": "/images/hotels/munnar/windernote/exterior.webp",
  "heroImageSm": "/images/hotels/munnar/windernote/exterior-sm.webp",
  "gallery": [
    {
      "src": "/images/hotels/munnar/windernote/exterior.webp",
      "alt": "Windernote Munnar illuminated hillside facade",
      "caption": "Contemporary multi-story architecture nestled in misty hills"
    },
    {
      "src": "/images/hotels/munnar/windernote/exterior-sm.webp",
      "alt": "Windernote mountain valley retreat",
      "caption": "Tranquil nature setting shielded from city noise"
    }
  ],
  "overview": "Nestled into a lush forested slope in the Munnar hills, Windernote offers a secluded mountain hideaway characterized by contemporary multi-story architecture, crisp clean valley breezes, and scenic balcony perspectives. The property provides modern comfort and serene nature immersion.",
  "quickFacts": [
    {
      "label": "Hotel Class",
      "value": "Boutique Nature Resort"
    },
    {
      "label": "Total Keys",
      "value": "24 Valley View Rooms"
    },
    {
      "label": "Check-in / Check-out",
      "value": "1:00 PM / 11:00 AM"
    },
    {
      "label": "Munnar Town",
      "value": "11 km (20 mins drive)"
    },
    {
      "label": "Cochin Airport",
      "value": "96 km (3 hrs drive)"
    }
  ],
  "rooms": [
    {
      "type": "Deluxe Valley View Room",
      "size": "22 sq.m",
      "occupancy": "2 Adults",
      "view": "Valley & Forest View",
      "bedding": "Queen Bed",
      "amenities": [
        "Wi-Fi",
        "LED TV",
        "Balcony",
        "Hot Water",
        "Room Service"
      ],
      "description": "Quiet room with private balcony looking out onto mist-covered mountain trees."
    },
    {
      "type": "Mountain Chalet Room",
      "size": "28 sq.m",
      "occupancy": "2-3 Adults",
      "view": "Panoramic View",
      "bedding": "King Bed",
      "amenities": [
        "High-speed Wi-Fi",
        "Tea Maker",
        "Balcony",
        "Attached Bathroom"
      ],
      "description": "Spacious accommodation offering peaceful mountain views and comfortable interiors."
    }
  ],
  "facilities": [
    {
      "name": "In-House Dining",
      "description": "Freshly prepared South Indian and Kerala homestyle food.",
      "icon": "dining"
    },
    {
      "name": "24-Hour Helpdesk",
      "description": "Dedicated front desk assistance and local travel advice.",
      "icon": "concierge"
    },
    {
      "name": "Free Wi-Fi",
      "description": "Complimentary wireless internet access across all rooms.",
      "icon": "wifi"
    },
    {
      "name": "Ample Parking",
      "description": "Convenient vehicle parking on the property grounds.",
      "icon": "parking"
    }
  ],
  "dining": [
    {
      "name": "Windernote Dining Hall",
      "type": "Homestyle Restaurant",
      "cuisine": "Kerala & South Indian",
      "timing": "7:30 AM – 10:00 PM",
      "description": "Homestyle dining serving hot Kerala breakfasts, vegetarian feasts, and dinner specialties."
    }
  ],
  "specialties": [
    "Serene Forested Setting",
    "Private Mountain Balconies",
    "Crisp Mountain Air & Mist",
    "Attentive Personalized Hospitality"
  ],
  "nearbyAttractions": [
    {
      "place": "Pothamedu Viewpoint",
      "distance": "9 km",
      "time": "18 mins drive",
      "note": "Sweeping valley outlook"
    },
    {
      "place": "Sengulam Dam Boating",
      "distance": "6 km",
      "time": "12 mins drive",
      "note": "Boating & watersports"
    }
  ],
  "policies": [
    "Government photo ID required at check-in",
    "Check-in at 1:00 PM; check-out at 11:00 AM"
  ],
  "mapQuery": "Windernote, Chithirapuram, Munnar, Kerala",
  "highlights": [
    "Forest Hillside Setting",
    "Private Balconies",
    "Clean Modern Rooms",
    "Free Parking"
  ],
  "makeMyKeralaPerks": [
    "Best rate assurance",
    "Complimentary breakfast",
    "Dedicated 24/7 travel support"
  ]
},
  {
  "id": "valle-munnar",
  "slug": "valle-munnar",
  "name": "Valle Munnar",
  "tagline": "Luxury nature resort with handcrafted timber architecture and sweeping mountain horizons",
  "category": "4-Star Luxury Nature Resort",
  "starRating": 4,
  "userRating": 4.6,
  "reviewsCount": 460,
  "startingPrice": "₹5,500",
  "priceLabel": "Starting from ₹5,500 / night",
  "locality": "Pallivasal / Tea Valley, Munnar",
  "address": "Pallivasal Tea Estate Road, Munnar, Idukki, Kerala 685612",
  "phone": "+91 4865 278 999",
  "email": "experience@vallemunnar.com",
  "website": "https://vallemunnar.com",
  "destination": "munnar",
  "destinationName": "Munnar",
  "heroImage": "/images/hotels/munnar/valle-munnar/exterior.webp",
  "heroImageSm": "/images/hotels/munnar/valle-munnar/exterior-sm.webp",
  "gallery": [
    {
      "src": "/images/hotels/munnar/valle-munnar/exterior.webp",
      "alt": "Valle Munnar architectural entrance and stone facade",
      "caption": "Striking high-gabled timber portico overlooking lush valley gardens"
    },
    {
      "src": "/images/hotels/munnar/valle-munnar/exterior-sm.webp",
      "alt": "Valle Munnar panoramic valley views",
      "caption": "Pristine mountain horizons and luxury leisure surroundings"
    }
  ],
  "overview": "Perched gracefully above tea-carpeted slopes, Valle Munnar stands out with its grand high-gabled timber lobby, natural stone facades, and glass atrium framing breathtaking sunsets. Designed for high-end leisure and romantic holidays, the resort combines world-class hospitality with pristine wilderness scenery.",
  "quickFacts": [
    {
      "label": "Hotel Class",
      "value": "4-Star Nature Resort"
    },
    {
      "label": "Total Keys",
      "value": "38 Luxury Chalets & Suites"
    },
    {
      "label": "Check-in / Check-out",
      "value": "2:00 PM / 11:00 AM"
    },
    {
      "label": "Attukad Falls",
      "value": "5 km (10 mins drive)"
    },
    {
      "label": "Munnar Town",
      "value": "8 km (15 mins drive)"
    }
  ],
  "rooms": [
    {
      "type": "Valley View Luxury Room",
      "size": "32 sq.m",
      "occupancy": "2 Adults",
      "view": "Unobstructed Valley View",
      "bedding": "King Bed",
      "amenities": [
        "Air Conditioning",
        "Private Balcony",
        "Smart TV",
        "Mini Fridge",
        "Ensuite Rain Shower",
        "Wi-Fi"
      ],
      "description": "Designer luxury room with custom teak furnishings and large glass doors opening to scenic mountain panoramas."
    },
    {
      "type": "Plantation Suite",
      "size": "45 sq.m",
      "occupancy": "2-3 Adults",
      "view": "Sunset Mountain Panorama",
      "bedding": "King Bed",
      "amenities": [
        "Living Lounge",
        "Espresso Machine",
        "Soaking Tub",
        "High-speed Wi-Fi",
        "Scenic Balcony"
      ],
      "description": "Generous suite with dedicated lounge area, premium bathtub, and sunset vistas."
    }
  ],
  "facilities": [
    {
      "name": "Fine-Dining Restaurant",
      "description": "Artfully prepared regional Kerala dishes, Asian delights, and continental delicacies.",
      "icon": "dining"
    },
    {
      "name": "Scenic Viewing Deck",
      "description": "Elevated outdoor promenade offering unobstructed views of morning clouds and sunset horizons.",
      "icon": "nature"
    },
    {
      "name": "Ayurvedic Spa & Wellness",
      "description": "Rejuvenating therapies and traditional herbal oil massages.",
      "icon": "spa"
    },
    {
      "name": "High-Speed Wi-Fi",
      "description": "Broadband Wi-Fi throughout rooms and public lounge areas.",
      "icon": "wifi"
    },
    {
      "name": "Concierge & Valet",
      "description": "Full-service valet parking and curated destination excursions.",
      "icon": "concierge"
    }
  ],
  "dining": [
    {
      "name": "Valle Vista Restaurant",
      "type": "Panoramic Fine-Dining",
      "cuisine": "Kerala, Continental & Pan-Asian",
      "timing": "7:00 AM – 11:00 PM",
      "description": "Elegant restaurant featuring floor-to-ceiling glass windows with breathtaking mountain gorge outlooks."
    }
  ],
  "specialties": [
    "Stunning Timber & Stone Architecture",
    "Panoramic Gorge & Valley Vistas",
    "Luxury Spa & Fine-Dining",
    "Romantic Sunset Decks"
  ],
  "nearbyAttractions": [
    {
      "place": "Attukad Waterfalls",
      "distance": "5 km",
      "time": "10 mins drive",
      "note": "Scenic jungle cascade"
    },
    {
      "place": "Pallivasal Tea Falls",
      "distance": "3 km",
      "time": "7 mins drive",
      "note": "Historic hydro-electric region"
    }
  ],
  "policies": [
    "Government photo ID required at check-in",
    "Check-in at 2:00 PM; check-out at 11:00 AM"
  ],
  "mapQuery": "Valle Munnar, Pallivasal, Munnar, Kerala",
  "highlights": [
    "Architectural Landmark",
    "Panoramic Viewing Deck",
    "Luxury Spa & Wellness",
    "Fine-Dining Cuisine"
  ],
  "makeMyKeralaPerks": [
    "Exclusive MakeMyKerala partner rates",
    "Complimentary gourmet breakfast",
    "Welcome tea plantation beverage on arrival",
    "24/7 VIP on-trip assistance"
  ]
},
  {
  "id": "hill-view",
  "slug": "hill-view",
  "name": "Hill View",
  "tagline": "Prominent highway landmark with expansive tea garden views and Ayurvedic spa wellness",
  "category": "3-Star Landmark Hill Hotel",
  "starRating": 3,
  "userRating": 4.2,
  "reviewsCount": 820,
  "startingPrice": "₹3,400",
  "priceLabel": "Starting from ₹3,400 / night",
  "locality": "Near KSRTC / Headworks Dam, Munnar",
  "address": "Aluva - Munnar Highway, Near Headworks Dam, Munnar, Idukki, Kerala 685612",
  "phone": "+91 4865 230 567",
  "email": "booking@hotelhillview.com",
  "website": "https://hotelhillview.com",
  "destination": "munnar",
  "destinationName": "Munnar",
  "heroImage": "/images/hotels/munnar/hill-view/exterior.webp",
  "heroImageSm": "/images/hotels/munnar/hill-view/exterior-sm.webp",
  "gallery": [
    {
      "src": "/images/hotels/munnar/hill-view/exterior.webp",
      "alt": "Hotel Hill View exterior facade on Munnar highway",
      "caption": "Well-established multistory landmark facing emerald tea hills"
    },
    {
      "src": "/images/hotels/munnar/hill-view/exterior-sm.webp",
      "alt": "Hotel Hill View architecture detail",
      "caption": "Comfortable rooms, conference facilities, and Ayurvedic wellness"
    }
  ],
  "overview": "Hotel Hill View is a well-established hospitality landmark situated along the Munnar highway overlooking lush green hills and rolling tea gardens. With its distinctive architecture, Samruthy multi-cuisine restaurant, Ayurvedic wellness spa, and versatile conference facilities, it is a favored choice for vacationers and corporate travelers.",
  "quickFacts": [
    {
      "label": "Hotel Class",
      "value": "3-Star Landmark Hotel"
    },
    {
      "label": "Total Keys",
      "value": "50 Well-Furnished Rooms"
    },
    {
      "label": "Check-in / Check-out",
      "value": "12:00 PM / 11:00 AM"
    },
    {
      "label": "Munnar KSRTC",
      "value": "1.5 km (4 mins drive)"
    },
    {
      "label": "Blossom Park",
      "value": "1 km (3 mins walk)"
    }
  ],
  "rooms": [
    {
      "type": "Deluxe Valley View Room",
      "size": "24 sq.m",
      "occupancy": "2 Adults",
      "view": "Tea Valley View",
      "bedding": "King Bed or Twin Beds",
      "amenities": [
        "Free Wi-Fi",
        "LED TV",
        "Tea/Coffee Maker",
        "Attached Shower",
        "Room Service"
      ],
      "description": "Comfortable room facing the lush Kannan Devan tea plantations along the hillside."
    },
    {
      "type": "Super Deluxe Room",
      "size": "30 sq.m",
      "occupancy": "2-3 Adults",
      "view": "Panoramic Hill View",
      "bedding": "King Bed",
      "amenities": [
        "Sitting Area",
        "Smart TV",
        "Wi-Fi",
        "Direct Dial Phone",
        "24-hr Hot Water"
      ],
      "description": "Spacious corner room with large glass windows and picturesque plantation views."
    }
  ],
  "facilities": [
    {
      "name": "Samruthy Restaurant",
      "description": "Multi-cuisine restaurant known for authentic Kerala buffets and North Indian specialties.",
      "icon": "dining"
    },
    {
      "name": "Ayurvedic Spa",
      "description": "Traditional massage therapies and rejuvenation treatments by certified practitioners.",
      "icon": "spa"
    },
    {
      "name": "Conference & Banquet Hall",
      "description": "Equipped meeting halls for seminars, retreats, and private parties.",
      "icon": "events"
    },
    {
      "name": "Coffee Shop",
      "description": "Cozy café serving fresh tea, coffee, and light snacks.",
      "icon": "dining"
    },
    {
      "name": "Ample Parking",
      "description": "Secure open and sheltered parking space.",
      "icon": "parking"
    }
  ],
  "dining": [
    {
      "name": "Samruthy Multi-Cuisine Restaurant",
      "type": "Fine Dining & Buffet",
      "cuisine": "Kerala, South Indian, North Indian & Chinese",
      "timing": "7:00 AM – 10:30 PM",
      "description": "Renowned restaurant offering tasty Kerala curries, appams, fresh river catch, and varied vegetarian meals."
    }
  ],
  "specialties": [
    "Prime Highway & Blossom Park Locale",
    "Direct View of Tea Hills",
    "Ayurvedic Rejuvenation Spa",
    "Samruthy Family Dining"
  ],
  "nearbyAttractions": [
    {
      "place": "Blossom Hydel Park",
      "distance": "1 km",
      "time": "3 mins walk",
      "note": "Landscaped gardens & flowers"
    },
    {
      "place": "Headworks Dam",
      "distance": "500 m",
      "time": "2 mins walk",
      "note": "Historic hydel landmark"
    },
    {
      "place": "Tea Museum",
      "distance": "3.5 km",
      "time": "8 mins drive",
      "note": "Century-old tea history"
    }
  ],
  "policies": [
    "Government photo ID required at check-in",
    "Check-in at 12:00 PM; check-out at 11:00 AM"
  ],
  "mapQuery": "Hotel Hill View, Aluva - Munnar Highway, Munnar, Kerala",
  "highlights": [
    "Highway & Town Proximity",
    "Tea Hill Views",
    "Ayurvedic Spa",
    "Samruthy Restaurant"
  ],
  "makeMyKeralaPerks": [
    "Direct partner rates",
    "Complimentary breakfast",
    "24/7 dedicated support"
  ]
},
  {
  "id": "eastend",
  "slug": "eastend",
  "name": "Eastend",
  "tagline": "Sprawling heritage resort with lush landscaped gardens, tree houses, and cottage chalets",
  "category": "3-Star Garden & Heritage Resort",
  "starRating": 3,
  "userRating": 4.4,
  "reviewsCount": 960,
  "startingPrice": "₹4,200",
  "priceLabel": "Starting from ₹4,200 / night",
  "locality": "Silent Valley Road, Munnar Town",
  "address": "Silent Valley Road, Near Munnar Town, Idukki, Kerala 685612",
  "phone": "+91 4865 230 451",
  "email": "reservation@eastend.in",
  "website": "https://eastend.in",
  "destination": "munnar",
  "destinationName": "Munnar",
  "heroImage": "/images/hotels/munnar/eastend/exterior.webp",
  "heroImageSm": "/images/hotels/munnar/eastend/exterior-sm.webp",
  "gallery": [
    {
      "src": "/images/hotels/munnar/eastend/exterior.webp",
      "alt": "Hotel Eastend Munnar exterior entrance and gardens",
      "caption": "Sprawling heritage garden resort surrounded by pine trees"
    },
    {
      "src": "/images/hotels/munnar/eastend/exterior-sm.webp",
      "alt": "Hotel Eastend cottages and flower pathways",
      "caption": "Picturesque cottage chalets and landscaped grounds"
    }
  ],
  "overview": "Set amidst sprawling, flower-filled gardens in the heart of Munnar, Hotel Eastend offers a tranquil oasis with traditional charm. Featuring independent chalets, tree-house accommodations, well-tended lawns, and evening campfires, Eastend allows guests to enjoy town proximity while feeling enveloped in serene mountain flora.",
  "quickFacts": [
    {
      "label": "Hotel Class",
      "value": "3-Star Garden Resort"
    },
    {
      "label": "Total Keys",
      "value": "45 Cottage & Chalet Keys"
    },
    {
      "label": "Check-in / Check-out",
      "value": "1:00 PM / 11:00 AM"
    },
    {
      "label": "Munnar Town Center",
      "value": "600 m (8 mins walk)"
    },
    {
      "label": "Mattupetty Dam",
      "value": "11 km (22 mins drive)"
    }
  ],
  "rooms": [
    {
      "type": "Deluxe Cottage Room",
      "size": "26 sq.m",
      "occupancy": "2 Adults",
      "view": "Garden & Flower Lawn View",
      "bedding": "King Bed",
      "amenities": [
        "Wi-Fi",
        "LED TV",
        "Garden Sit-out",
        "Tea/Coffee Maker",
        "Hot Water"
      ],
      "description": "Cozy garden cottage room with warm wooden details and direct veranda access."
    },
    {
      "type": "Tree House Chalet",
      "size": "28 sq.m",
      "occupancy": "2 Adults",
      "view": "Canopy & Mountain View",
      "bedding": "Queen Bed",
      "amenities": [
        "Unique Tree-House Design",
        "Balcony",
        "Wi-Fi",
        "Attached Bathroom"
      ],
      "description": "Charming elevated tree-house accommodation offering an authentic forest canopy experience."
    }
  ],
  "facilities": [
    {
      "name": "Green Land Restaurant",
      "description": "Multi-cuisine dining serving Kerala sadhya, continental breakfasts, and North Indian favorites.",
      "icon": "dining"
    },
    {
      "name": "Landscaped Gardens & Walkways",
      "description": "Beautifully maintained floral gardens, lawn seating, and paved nature strolls.",
      "icon": "nature"
    },
    {
      "name": "Campfire & Music",
      "description": "Evening campfire gatherings with music under starry mountain skies.",
      "icon": "events"
    },
    {
      "name": "Conference & Meeting Hall",
      "description": "Ideal venue for family get-togethers and corporate offsites.",
      "icon": "events"
    },
    {
      "name": "Children's Play Area",
      "description": "Safe outdoor playground for children within the resort grounds.",
      "icon": "family"
    }
  ],
  "dining": [
    {
      "name": "Green Land Restaurant",
      "type": "Multi-Cuisine Garden Dining",
      "cuisine": "Kerala, South Indian, North Indian & Continental",
      "timing": "7:00 AM – 10:30 PM",
      "description": "Family restaurant overlooking the garden courtyard, famous for its lavish buffet spreads."
    }
  ],
  "specialties": [
    "Expansive Landscaped Floral Gardens",
    "Authentic Tree-House Accommodations",
    "Walking Distance to Munnar Town",
    "Evening Campfire Evenings"
  ],
  "nearbyAttractions": [
    {
      "place": "Munnar Town Bazaars",
      "distance": "600 m",
      "time": "8 mins walk",
      "note": "Spices, tea & chocolates"
    },
    {
      "place": "Tea Museum",
      "distance": "2 km",
      "time": "5 mins drive",
      "note": "Historical tea machinery"
    },
    {
      "place": "Pothamedu Viewpoint",
      "distance": "4.5 km",
      "time": "10 mins drive",
      "note": "Sunset viewpoint"
    }
  ],
  "policies": [
    "Government photo ID required at check-in",
    "Check-in at 1:00 PM; check-out at 11:00 AM"
  ],
  "mapQuery": "Hotel Eastend, Silent Valley Road, Munnar, Kerala",
  "highlights": [
    "Botanical Garden Grounds",
    "Tree House Experience",
    "Town Proximity",
    "Green Land Restaurant"
  ],
  "makeMyKeralaPerks": [
    "MakeMyKerala guaranteed best rates",
    "Complimentary breakfast",
    "24/7 dedicated support"
  ]
},
  {
  "id": "issac-residency",
  "slug": "issac-residency",
  "name": "Issac Residency",
  "tagline": "Centrally positioned hill hotel near Blossom Park with comfortable scenic valley stays",
  "category": "3-Star Premium Hill Hotel",
  "starRating": 3,
  "userRating": 4.1,
  "reviewsCount": 510,
  "startingPrice": "₹2,900",
  "priceLabel": "Starting from ₹2,900 / night",
  "locality": "Top Station Road, Munnar",
  "address": "Top Station Road, Near Blossom Park, Munnar, Idukki, Kerala 685612",
  "phone": "+91 4865 230 501",
  "email": "stay@issacresidency.com",
  "website": "https://issacresidency.com",
  "destination": "munnar",
  "destinationName": "Munnar",
  "heroImage": "/images/hotels/munnar/issac-residency/exterior.webp",
  "heroImageSm": "/images/hotels/munnar/issac-residency/exterior-sm.webp",
  "gallery": [
    {
      "src": "/images/hotels/munnar/issac-residency/exterior.webp",
      "alt": "Issac Residency Munnar exterior building facade",
      "caption": "Prominent multistorey hotel on Top Station Road"
    },
    {
      "src": "/images/hotels/munnar/issac-residency/exterior-sm.webp",
      "alt": "Issac Residency mountain valley views",
      "caption": "Clean, comfortable accommodations with scenic vistas"
    }
  ],
  "overview": "Issac Residency is a dependable, high-comfort hotel positioned conveniently close to Blossom Hydel Park and Munnar Town center. Offering well-furnished guest rooms with views of misty mountain ridges, on-site multi-cuisine dining, and personalized tour assistance, it provides a warm and comfortable stay for holidaymakers.",
  "quickFacts": [
    {
      "label": "Hotel Class",
      "value": "3-Star Hill Hotel"
    },
    {
      "label": "Total Keys",
      "value": "32 Well-Appointed Rooms"
    },
    {
      "label": "Check-in / Check-out",
      "value": "12:00 PM / 11:00 AM"
    },
    {
      "label": "Blossom Park",
      "value": "500 m (6 mins walk)"
    },
    {
      "label": "Munnar Town",
      "value": "1.2 km (4 mins drive)"
    }
  ],
  "rooms": [
    {
      "type": "Executive Valley View Room",
      "size": "22 sq.m",
      "occupancy": "2 Adults",
      "view": "Valley & Mountain View",
      "bedding": "Queen Bed",
      "amenities": [
        "Free Wi-Fi",
        "LED TV",
        "24-hr Hot Water",
        "Room Service"
      ],
      "description": "Well-ventilated room with scenic mountain views and clean, modern furnishings."
    },
    {
      "type": "Royal Suite",
      "size": "32 sq.m",
      "occupancy": "2-3 Adults",
      "view": "Panoramic Hill View",
      "bedding": "King Bed",
      "amenities": [
        "Sitting Area",
        "Smart TV",
        "Tea Maker",
        "Attached Shower"
      ],
      "description": "Expanded suite accommodation suitable for family comfort."
    }
  ],
  "facilities": [
    {
      "name": "Multi-Cuisine Restaurant",
      "description": "Serving traditional Kerala meals, tandoori preparations, and Chinese dishes.",
      "icon": "dining"
    },
    {
      "name": "24-Hour Front Desk",
      "description": "Assisting with express check-ins, transfers, and luggage care.",
      "icon": "concierge"
    },
    {
      "name": "Free Wi-Fi",
      "description": "Complimentary wireless internet access across all rooms.",
      "icon": "wifi"
    },
    {
      "name": "Travel & Tour Desk",
      "description": "Local sightseeing cabs, jeep safari arrangements, and trekking guidance.",
      "icon": "transport"
    },
    {
      "name": "Parking Facility",
      "description": "On-site parking spaces for cars and tour vans.",
      "icon": "parking"
    }
  ],
  "dining": [
    {
      "name": "Issac Dining Room",
      "type": "Multi-Cuisine Restaurant",
      "cuisine": "Kerala, South Indian, North Indian & Chinese",
      "timing": "7:00 AM – 10:30 PM",
      "description": "Casual dining outlet serving freshly prepared breakfast, Kerala fish curries, and evening dinners."
    }
  ],
  "specialties": [
    "Top Station Road Location",
    "Near Blossom Hydel Park",
    "Dependable Family Comfort",
    "Swift Access to Munnar Town"
  ],
  "nearbyAttractions": [
    {
      "place": "Blossom Hydel Park",
      "distance": "500 m",
      "time": "6 mins walk",
      "note": "Riverfront park & garden"
    },
    {
      "place": "Pothamedu View Point",
      "distance": "3.5 km",
      "time": "8 mins drive",
      "note": "Sunset viewpoint"
    }
  ],
  "policies": [
    "Government photo ID required at check-in",
    "Check-in at 12:00 PM; check-out at 11:00 AM"
  ],
  "mapQuery": "Issac Residency, Top Station Road, Munnar, Kerala",
  "highlights": [
    "Blossom Park Proximity",
    "Valley View Rooms",
    "Multi-Cuisine Dining",
    "Free Parking"
  ],
  "makeMyKeralaPerks": [
    "Direct MakeMyKerala partner rates",
    "Complimentary breakfast",
    "24/7 dedicated support"
  ]
},
  {
  "id": "grand-plaza",
  "slug": "grand-plaza",
  "name": "Grand Plaza",
  "tagline": "Upscale 4-star mountain hotel facing Kannan Devan tea estates with luxury spa & fine dining",
  "category": "4-Star Premium Hotel",
  "starRating": 4,
  "userRating": 4.5,
  "reviewsCount": 1140,
  "startingPrice": "₹4,600",
  "priceLabel": "Starting from ₹4,600 / night",
  "locality": "M.S.A Road, Old Munnar",
  "address": "M.S.A Road, Old Munnar, Idukki, Kerala 685612",
  "phone": "+91 4865 232 201",
  "email": "info@grandplazamunnar.com",
  "website": "https://grandplazamunnar.com",
  "destination": "munnar",
  "destinationName": "Munnar",
  "heroImage": "/images/hotels/munnar/grand-plaza/exterior.webp",
  "heroImageSm": "/images/hotels/munnar/grand-plaza/exterior-sm.webp",
  "gallery": [
    {
      "src": "/images/hotels/munnar/grand-plaza/exterior.webp",
      "alt": "Grand Plaza Munnar dusk exterior facade",
      "caption": "Prominent 4-star multistory hotel facing tea-covered slopes"
    },
    {
      "src": "/images/hotels/munnar/grand-plaza/exterior-sm.webp",
      "alt": "Grand Plaza Munnar lobby and restaurant",
      "caption": "Refined modern interiors and scenic dining spaces"
    }
  ],
  "overview": "Grand Plaza is one of Munnar's most celebrated premium hotels, gracefully situated along the riverbank facing the rolling slopes of the Kannan Devan tea hills. Featuring refined modern interiors, the popular 'Grand Spices' restaurant, an authentic Ayurvedic rejuvenation center, and attentive hospitality, it offers an elevated hill station experience.",
  "quickFacts": [
    {
      "label": "Hotel Class",
      "value": "4-Star Premium Hotel"
    },
    {
      "label": "Total Keys",
      "value": "42 Luxury Rooms & Suites"
    },
    {
      "label": "Check-in / Check-out",
      "value": "1:00 PM / 11:00 AM"
    },
    {
      "label": "Munnar Town",
      "value": "1 km (3 mins drive)"
    },
    {
      "label": "Tea Museum",
      "value": "2 km (5 mins drive)"
    }
  ],
  "rooms": [
    {
      "type": "Grand Vista Room",
      "size": "28 sq.m",
      "occupancy": "2 Adults",
      "view": "Tea Garden & River View",
      "bedding": "King Bed",
      "amenities": [
        "Air Conditioning",
        "Wi-Fi",
        "LED TV",
        "Tea/Coffee Maker",
        "Attached Shower"
      ],
      "description": "Elegant room facing emerald tea estates across the riverbank with large picture windows."
    },
    {
      "type": "Eminence Suite",
      "size": "40 sq.m",
      "occupancy": "2-3 Adults",
      "view": "Panoramic Mountain View",
      "bedding": "King Bed",
      "amenities": [
        "Separate Living Area",
        "Mini Bar",
        "Espresso Maker",
        "Premium Toiletries",
        "Wi-Fi"
      ],
      "description": "Expansive luxury suite with separate sitting room and views of Munnar's mountain skyline."
    }
  ],
  "facilities": [
    {
      "name": "Grand Spices Restaurant",
      "description": "Renowned multi-cuisine restaurant serving authentic Kerala dishes, North Indian, and continental dining.",
      "icon": "dining"
    },
    {
      "name": "Ayurvedic Wellness Spa",
      "description": "Holistic herbal oil therapies, abhyanga, and relaxation packages.",
      "icon": "spa"
    },
    {
      "name": "Health Club & Gym",
      "description": "Fitness studio with modern cardio and strength equipment.",
      "icon": "fitness"
    },
    {
      "name": "Coffee Cellar",
      "description": "Contemporary lounge café serving signature coffee, mocktails, and fresh bakes.",
      "icon": "dining"
    },
    {
      "name": "Banquets & Meeting Spaces",
      "description": "Sophisticated event venues for up to 150 guests.",
      "icon": "events"
    }
  ],
  "dining": [
    {
      "name": "Grand Spices",
      "type": "Fine-Dining Restaurant",
      "cuisine": "Kerala, South Indian, North Indian & Continental",
      "timing": "7:00 AM – 11:00 PM",
      "description": "Celebrated restaurant known for attentive service, Kerala seafood delicacies, and varied buffet spreads."
    }
  ],
  "specialties": [
    "Direct Views of Kannan Devan Tea Hills",
    "Celebrated 'Grand Spices' Dining",
    "Full-Service Ayurvedic Spa & Gym",
    "Minutes from Old Munnar & Tea Museum"
  ],
  "nearbyAttractions": [
    {
      "place": "Tata Tea Museum",
      "distance": "2 km",
      "time": "5 mins drive",
      "note": "Historic tea manufacturing"
    },
    {
      "place": "Mattupetty Dam",
      "distance": "10 km",
      "time": "20 mins drive",
      "note": "Boating & scenic hills"
    },
    {
      "place": "Eravikulam National Park",
      "distance": "8 km",
      "time": "18 mins drive",
      "note": "Nilgiri Tahr habitat"
    }
  ],
  "policies": [
    "Government photo ID required at check-in",
    "Check-in at 1:00 PM; check-out at 11:00 AM"
  ],
  "mapQuery": "Grand Plaza, M.S.A Road, Old Munnar, Kerala",
  "highlights": [
    "Tea Estate Views",
    "Grand Spices Restaurant",
    "Ayurvedic Spa & Gym",
    "Central Old Munnar Locale"
  ],
  "makeMyKeralaPerks": [
    "Exclusive MakeMyKerala partner rates",
    "Complimentary breakfast",
    "24/7 dedicated support"
  ]
},
];

export function getAllMunnarHotels() {
  return munnarHotels;
}

export function getMunnarHotelBySlug(slug) {
  return munnarHotels.find((h) => h.slug === slug);
}
