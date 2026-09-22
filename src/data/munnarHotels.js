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

  // 11. WINDERMERE ESTATE
  {
    id: "windermere-estate",
    slug: "windermere-estate",
    name: "Windermere Estate",
    tagline: "Handcrafted boutique plantation retreat amidst cardamom & coffee groves",
    category: "Boutique Heritage Plantation Retreat",
    starRating: 5,
    userRating: 4.8,
    reviewsCount: 620,
    startingPrice: "₹8,500",
    priceLabel: "Starting from ₹8,500 / night",
    locality: "Pothamedu",
    address: "Pothamedu, Munnar, Idukki District, Kerala 685612",
    phone: "+91 4865 230 512",
    email: "info@windermeremunnar.com",
    website: "https://windermeremunnar.com",
    heroImage: "/images/hotels/windermere-estate/exterior.webp",
    heroImageSm: "/images/hotels/windermere-estate/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/windermere-estate/exterior.webp",
        alt: "Windermere Estate Munnar boutique plantation chalets",
        caption: "Handcrafted stone and timber chalets set within a 60-acre private plantation"
      },
      {
        src: "/images/hotels/windermere-estate/exterior-detail.webp",
        alt: "Windermere Estate garden and plantation veranda",
        caption: "Serene garden veranda overlooking cardamom and coffee plants"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Pothamedu tea slopes and valley vistas",
        caption: "Breathtaking panoramic viewpoints over Pothamedu ridge"
      }
    ],
    overview: "Set within a secluded 60-acre cardamom and coffee plantation in Pothamedu, Windermere Estate is an intimate boutique sanctuary of just 18 handcrafted chalets. Designed in the tradition of old planter homes with terracotta tiles, teakwood furniture, and high gabled roofs, the estate avoids commercialism in favor of quiet luxury. Guests dine on farm-to-table cuisine at The Barn, explore private walking trails with naturalists, and read in a cozy colonial library overlooking misty mountain peaks.",
    quickFacts: [
      { label: "Hotel Class", value: "Boutique Plantation Retreat" },
      { label: "Total Keys", value: "18 Handcrafted Chalets" },
      { label: "Check-in / Check-out", value: "01:00 PM / 11:00 AM" },
      { label: "Estate Area", value: "60-Acre Private Plantation" },
      { label: "Location", value: "Pothamedu (High Altitude Ridge)" },
      { label: "Munnar Town", value: "4.5 km (12 min drive)" }
    ],
    rooms: [
      {
        name: "Garden Room",
        description: "Ground-floor chalet room opening directly onto private manicured garden lawns with cedar wood furniture and ensuite shower.",
        size: "350 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed",
        amenities: ["Private Garden Sit-Out", "Free Wi-Fi", "Tea/Coffee Maker", "Handcrafted Furniture", "Luxury Toiletries"]
      },
      {
        name: "Estate Room",
        description: "Upper-level chalet offering expansive high ceilings, large private balcony with panoramic mountain views, and wooden flooring.",
        size: "550 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Private Mountain Balcony", "Double-Height Ceilings", "High-speed Wi-Fi", "Minibar", "Plush Bathrobes"]
      }
    ],
    facilities: [
      { icon: "dining", title: "The Barn Restaurant", description: "Farm-to-table estate dining room utilizing fresh vegetables from the plantation kitchen garden" },
      { icon: "nature", title: "Plantation Nature Walks", description: "Guided daily walks through the 60-acre estate covering cardamom, coffee, pepper, and tea" },
      { icon: "library", title: "Colonial Library & Lounge", description: "First-floor library stocked with literature, botanical books, and panoramic reading corners" },
      { icon: "pool", title: "Estate Swimming Pool", description: "Serene garden pool nestled amidst lush green coffee and cardamom plants" },
      { icon: "bonfire", title: "Evening Plantation Bonfires", description: "Intimate fireside gatherings with warm beverages and conversations under starry skies" }
    ],
    dining: [
      {
        name: "The Barn",
        cuisine: "Kerala Farm-to-Table, North Indian & Continental Comfort",
        type: "Estate Table Dining",
        timing: "07:30 AM - 10:00 PM",
        description: "Centered in an atmospheric barn-style timber building, meals are personalized and prepared with organic produce picked directly from the estate's vegetable patches and local markets."
      }
    ],
    specialties: [
      "Only 18 boutique keys ensuring unparalleled privacy and tranquility",
      "Authentic 60-acre working cardamom and coffee plantation setting",
      "Farm-to-table dining at The Barn celebrating fresh estate produce",
      "Guided birdwatching and nature walks led by estate naturalists"
    ],
    highlights: [
      "Intimate 18-key boutique plantation retreat",
      "60-acre private working estate in Pothamedu",
      "The Barn farm-to-table dining experience",
      "Garden swimming pool & colonial library",
      "Top-tier 4.8 traveler rating"
    ],
    locationHighlights: [
      { place: "Pothamedu Viewpoint", distance: "1.2 km", time: "3 min drive", note: "Panoramic valley vistas" },
      { place: "Munnar Town Center", distance: "4.5 km", time: "12 min drive", note: "Bazaars and tea tasting" },
      { place: "Attukad Waterfalls", distance: "6.0 km", time: "15 min drive", note: "Cascading waterfall" },
      { place: "KDHP Tea Museum", distance: "6.5 km", time: "18 min drive", note: "Factory history tour" }
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not permitted on the estate",
    cancellationNote: "Full refund for cancellations made 7 days prior to arrival",
    mapQuery: "Windermere Estate, Pothamedu, Munnar, Kerala",
    makeMyKeralaPerks: [
      "Special contracted boutique rates on Garden & Estate rooms",
      "Complimentary guided plantation tour with estate naturalist",
      "Chauffeured private AC vehicle for all transfers and sightseeing",
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

  // 15. GOLDEN MUNNAR PALACE
  {
    id: "golden-munnar-palace",
    slug: "golden-munnar-palace",
    name: "Golden Munnar Palace",
    tagline: "Expansive family hospitality managed by Hawk Hospitality in Chithirapuram",
    category: "Family & Group Leisure Hotel",
    starRating: 3,
    userRating: 4.0,
    reviewsCount: 390,
    startingPrice: "₹2,700",
    priceLabel: "Starting from ₹2,700 / night",
    locality: "Chithirapuram",
    address: "Near Power House, Chithirapuram, Munnar, Kerala 685565",
    phone: "+91 4865 263 111",
    email: "bookings@hawkhospitality.in",
    website: "https://hawkhospitality.in",
    heroImage: "/images/hotels/golden-munnar-palace/exterior.webp",
    heroImageSm: "/images/hotels/golden-munnar-palace/exterior-sm.webp",
    destination: "munnar",
    destinationName: "Munnar",
    gallery: [
      {
        src: "/images/hotels/golden-munnar-palace/exterior.webp",
        alt: "Golden Munnar Palace exterior building facade",
        caption: "High-inventory modern property in the scenic hills of Chithirapuram"
      },
      {
        src: "/images/hotels/golden-munnar-palace/exterior-detail.webp",
        alt: "Golden Munnar Palace entrance and parking area",
        caption: "Expansive parking capacity and welcoming reception lobby"
      },
      {
        src: "/images/destinations/munnar-600.webp",
        alt: "Munnar rolling tea gardens and mountain slopes",
        caption: "Breathtaking natural surroundings along Power House Road"
      }
    ],
    overview: "Conveniently located near the Power House area in Chithirapuram, Golden Munnar Palace (managed by Hawk Hospitality) is a spacious leisure property boasting an impressive inventory of nearly 100 well-appointed rooms. Ideal for family holidays, tour groups, and corporate getaways, the property features a 160-seat multi-cuisine restaurant, an outdoor swimming pool, extensive parking for up to 100 vehicles, and private balconies framing panoramic views of tea gardens and misty hills.",
    quickFacts: [
      { label: "Hotel Class", value: "3-Star Leisure Hotel" },
      { label: "Total Keys", value: "97 Spacious Rooms & Suites" },
      { label: "Check-in / Check-out", value: "12:00 PM / 11:00 AM" },
      { label: "Management", value: "Hawk Hospitality" },
      { label: "Parking Capacity", value: "Up to 100 Vehicles On-Site" },
      { label: "Munnar Town", value: "8 km (18 min drive)" }
    ],
    rooms: [
      {
        name: "Deluxe Balcony Room",
        description: "Comfortable room with private sit-out balcony overlooking the tea valleys, attached bathroom, and work desk.",
        size: "250 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed",
        amenities: ["Private Balcony", "Free Wi-Fi", "LED Television", "Electric Kettle", "Hot Water 24/7", "Daily Toiletries"]
      },
      {
        name: "Executive Valley View Room",
        description: "Enhanced room offering panoramic mountain views, seating sofa chairs, and extra wardrobe space.",
        size: "320 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Valley Panorama", "High-speed Wi-Fi", "Smart TV", "Coffee Maker", "Mini Fridge"]
      },
      {
        name: "Family Suite",
        description: "Spacious layout with dual bedding and seating area designed for family comfort and group getaways.",
        size: "450 sq.ft",
        capacity: "4 Adults",
        bed: "Two Double Beds",
        amenities: ["Family Layout", "Two Televisions", "Wardrobe", "Spacious Bath", "Room Service Support"]
      }
    ],
    facilities: [
      { icon: "dining", title: "Golden Munnar Restaurant", description: "160-seat multi-cuisine dining hall serving South Indian, North Indian, Chinese, Continental, and Arabic dishes" },
      { icon: "pool", title: "Outdoor Swimming Pool", description: "Refreshing swimming pool with mountain view deck" },
      { icon: "parking", title: "100-Car Parking", description: "Extensive secure on-site parking accommodating large tourist coaches and family vehicles" },
      { icon: "fitness", title: "Gym & Yoga Space", description: "Fitness equipment and open terrace for morning yoga in fresh mountain air" },
      { icon: "desk", title: "24-Hour Front Desk", description: "Luggage assistance, travel desk, doctor-on-call, and round-the-clock security" }
    ],
    dining: [
      {
        name: "Golden Munnar Restaurant",
        cuisine: "South Indian, North Indian, Chinese, Continental & Arabic",
        type: "160-Seater Multi-Cuisine Dining",
        timing: "07:00 AM - 10:30 PM",
        description: "A spacious 160-seater dining hall offering extensive buffet and à la carte options, from authentic Kerala fish curry to rich tandoori chicken, biryanis, and continental breakfasts."
      }
    ],
    specialties: [
      "Large 97-key inventory making it ideal for group tours and large families",
      "Massive parking capacity for up to 100 private cars and tourist buses",
      "160-seat dining hall offering diverse multi-cuisine and vegetarian options",
      "Private balconies in every room overlooking misty tea garden ridges"
    ],
    highlights: [
      "Managed by Hawk Hospitality",
      "97 spacious rooms with private valley balconies",
      "Large 160-seat multi-cuisine restaurant",
      "Outdoor swimming pool & gym",
      "Massive parking capacity for 100 vehicles"
    ],
    locationHighlights: [
      { place: "Chithirapuram Viewpoint", distance: "1.8 km", time: "4 min drive", note: "Scenic valley panorama" },
      { place: "Pallivasal Falls", distance: "4.0 km", time: "9 min drive", note: "Mountain waterfall" },
      { place: "Munnar Town Market", distance: "8.0 km", time: "18 min drive", note: "Spices and shopping" },
      { place: "Attukad Waterfalls", distance: "9.5 km", time: "22 min drive", note: "Scenic waterfall trek" }
    ],
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not permitted on the premises",
    cancellationNote: "Full refund for cancellations made 48 hours prior to arrival",
    mapQuery: "Golden Munnar Palace, Chithirapuram, Munnar, Kerala",
    makeMyKeralaPerks: [
      "Best guaranteed group and family tariffs with zero booking fees",
      "Daily breakfast spread included in package bookings",
      "Private AC transfer vehicle with local driver for entire stay",
      "24/7 dedicated MakeMyKerala on-trip assistance"
    ]
  }
];

export function getAllMunnarHotels() {
  return munnarHotels;
}

export function getMunnarHotelBySlug(slug) {
  return munnarHotels.find((h) => h.slug === slug);
}
