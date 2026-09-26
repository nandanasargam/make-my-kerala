// src/data/hotels.js
// Verified dataset of 10 premier Kochi hotels curated by MakeMyKerala

export const hotels = [
  {
    id: "north-seven",
    slug: "north-seven",
    name: "North Seven",
    tagline: "Contemporary comfort & effortless connectivity in Ernakulam North",
    category: "Contemporary Business & City Hotel",
    starRating: 3,
    userRating: 4.3,
    reviewsCount: 420,
    startingPrice: "₹2,800",
    priceLabel: "Starting from ₹2,800 / night",
    locality: "Ernakulam North",
    address: "Paramara Road, Near Town Hall, Ernakulam North, Kochi, Kerala 682018",
    phone: "+91 484 239 8888",
    email: "reservations@northseven.in",
    website: "https://northseven.in",
    heroImage: "/images/hotels/north-seven/exterior.webp",
    heroImageSm: "/images/hotels/north-seven/exterior-sm.webp",
        gallery: [
      {
        src: "/images/hotels/north-seven/exterior.webp",
        alt: "North Seven dusk exterior facade on Paramara Road",
        caption: "Modern glass-accented facade in Ernakulam North"
      },
      {
        src: "/images/hotels/north-seven/exterior-detail.webp",
        alt: "North Seven entrance and architectural detail",
        caption: "Front entrance and welcoming arrival lobby facade"
      },
      {
        src: "/images/destinations/kochi-600.webp",
        alt: "Kochi Marine Drive waterfront and harbor promenade",
        caption: "Marine Drive Promenade & Cochin Harbor (10 mins from hotel)"
      }
    ],
    overview: "Positioned discreetly along Paramara Road in Ernakulam North, Hotel North Seven delivers a crisp, modern hospitality experience tailored for corporate executives, transit passengers, and Kerala holidaymakers. Its strategic locale affords seamless walkability to the Ernakulam Town (North) Railway Station and Town Hall Metro Station while shielding guests from the bustle of the main thoroughfare. Featuring contemporary architectural aesthetics, refined interior palettes, and intuitive hospitality, North Seven provides a tranquil urban base for discovering the Greater Cochin region.",
    quickFacts: [
      { label: "Hotel Class", value: "3-Star City Hotel" },
      { label: "Total Keys", value: "36 Contemporary Rooms" },
      { label: "Check-in / Check-out", value: "12:00 PM / 11:00 AM" },
      { label: "Nearest Railway", value: "Ernakulam Town (200m)" },
      { label: "Nearest Metro", value: "Town Hall Metro (300m)" },
      { label: "Cochin Airport", value: "28 km (45 mins)" }
    ],
    rooms: [
      {
        name: "Standard Room",
        description: "Efficiently designed room featuring sleek minimalist furnishings, sound-dampened windows, ergonomic work desk, and ensuite rain shower.",
        size: "220 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed or Twin Beds",
        amenities: ["High-speed Wi-Fi", "Air Conditioning", "LED TV with Satellite Channels", "Electronic Safe", "Tea & Coffee Maker", "Ensuite Rain Shower"]
      },
      {
        name: "Executive Deluxe Room",
        description: "Expanded living footprint featuring premium hardwood accents, generous daylight, dedicated executive lounge seating, and refined bathroom amenities.",
        size: "280 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["High-speed Wi-Fi", "Air Conditioning", "43\" Smart TV", "Mini Fridge", "Work Station", "Luxury Toiletries", "Daily Mineral Water"]
      },
      {
        name: "North Seven Suite",
        description: "The hotel's signature suite offering separate living and bedroom quarters, plush sofa seating, panoramic city view windows, and personalized service.",
        size: "420 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed + Rollaway Option",
        amenities: ["Separate Living Lounge", "High-speed Wi-Fi", "Two Smart TVs", "Mini Bar Setup", "Bathrobes & Slippers", "Express Check-in"]
      }
    ],
    facilities: [
      { icon: "wifi", title: "High-Speed Wi-Fi", description: "Complimentary enterprise-grade Wi-Fi across all guestrooms and public areas" },
      { icon: "dining", title: "24-Hour In-Room Dining", description: "Freshly prepared South Indian, North Indian, and Continental menus delivered round the clock" },
      { icon: "meetings", title: "Yami Banquet & Boardroom", description: "Acoustically treated corporate meeting venue and banquet space for up to 80 delegates" },
      { icon: "desk", title: "Travel Desk & Sightseeing", description: "Dedicated Kerala itinerary assistance, airport cabs, and city cab bookings" },
      { icon: "parking", title: "On-site Valet Parking", description: "Secure on-premises parking with 24-hour security personnel and CCTV coverage" },
      { icon: "security", title: "24-Hour Front Desk", description: "Attentive concierge, express baggage handling, and foreign exchange assistance" }
    ],
    dining: [
      {
        name: "Sundrop Restaurant",
        cuisine: "Kerala, Pan-Indian & Continental",
        type: "All-Day Multi-Cuisine Dining",
        timing: "07:00 AM - 10:30 PM",
        description: "Vibrant all-day dining venue serving expansive Kerala breakfast spreads including appam, stew, and idiyappam alongside signature tandoori specialties and continental mains."
      },
      {
        name: "Moonshine Lounge",
        cuisine: "Beverages, Small Plates & Finger Foods",
        type: "Executive Resto-Lounge",
        timing: "11:00 AM - 11:00 PM",
        description: "Sophisticated ambient lounge offering curated refreshments, specialty coffees, mocktails, and gourmet evening finger foods in an intimate modern setting."
      }
    ],
    specialties: [
      "Ultra-convenient walking distance (200m) to Ernakulam North Railway Station",
      "Serene Paramara Road address away from high-decibel highway traffic",
      "Dedicated corporate meeting room with high-definition AV presentation gear",
      "24-hour kitchen readiness for late arrivals and early train departures"
    ],
    highlights: [
      "200m from Ernakulam Town Railway Station",
      "300m from Town Hall Metro Station",
      "All-day multi-cuisine dining at Sundrop",
      "Free high-speed fiber Wi-Fi",
      "24-hour front desk & room service"
    ],
    locationHighlights: [
      { place: "Ernakulam Town (North) Railway Station", distance: "200 m", time: "2 min walk", note: "Direct foot transit from station exit" },
      { place: "Town Hall Metro Station", distance: "300 m", time: "4 min walk", note: "Direct link to MG Road, Edappally & Lulu Mall" },
      { place: "Marine Drive Promenade & Boating", distance: "2.8 km", time: "10 min drive", note: "Sunset backwater cruises and harbor walks" },
      { place: "Lulu Mall, Edappally", distance: "6.5 km", time: "15 min drive", note: "Direct 6-stop hop on the Kochi Metro" },
      { place: "Fort Kochi Heritage Zone", distance: "14 km", time: "30 min drive / ferry", note: "Historic colonial quarter, Chinese nets, cafes" }
    ],
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not allowed on the hotel premises",
    cancellationNote: "Flexible cancellation up to 48 hours prior to check-in for MakeMyKerala confirmed bookings",
    mapQuery: "North Seven Hotel, Paramara Road, Ernakulam North, Kochi",
    makeMyKeralaPerks: [
      "Guaranteed best available rates for Kerala holiday packages",
      "Complimentary itinerary coordination with dedicated driver-guide",
      "Early check-in subject to room availability",
      "MakeMyKerala 24/7 travel concierge line on WhatsApp"
    ]
  },
  {
    id: "presidency",
    slug: "presidency",
    name: "Hotel Presidency",
    tagline: "Four-star heritage grandeur & celebrated culinary legacy in central Cochin",
    category: "Heritage City Icon & 4-Star Business Hotel",
    starRating: 4,
    userRating: 4.2,
    reviewsCount: 1850,
    startingPrice: "₹3,200",
    priceLabel: "Starting from ₹3,200 / night",
    locality: "Ernakulam North",
    address: "Paramara Road, Ernakulam North, Kochi, Kerala 682018",
    phone: "+91 484 239 4300",
    email: "info@presidencyhotel.com",
    website: "https://presidencyhotel.com",
    heroImage: "/images/hotels/presidency/exterior.webp",
    heroImageSm: "/images/hotels/presidency/exterior-sm.webp",
        gallery: [
      {
        src: "/images/hotels/presidency/exterior.webp",
        alt: "Hotel Presidency grand exterior tower in Ernakulam North",
        caption: "Iconic four-star landmark on Paramara Road"
      },
      {
        src: "/images/hotels/presidency/exterior-detail.webp",
        alt: "Hotel Presidency illuminated vertical pillar sign and entrance",
        caption: "Signature entrance facade and architectural tower"
      },
      {
        src: "/images/destinations/kochi-600.webp",
        alt: "Marine Drive sunset walkway near Ernakulam North",
        caption: "Sunset waterfront boat cruises (8 mins drive from hotel)"
      }
    ],
    overview: "Hotel Presidency stands as one of Cochin’s most enduring four-star hospitality institutions. With an esteemed pedigree spanning decades, this grand multi-story property seamlessly blends traditional Kerala graciousness with comprehensive business amenities. Renowned across South India for its pioneering culinary heritage — including Kochi's legendary Tokyo Bay Japanese restaurant — Hotel Presidency offers a rooftop swimming pool, expansive banquet facilities accommodating up to 400 guests, and prompt access to both commercial districts and heritage enclaves.",
    quickFacts: [
      { label: "Hotel Class", value: "4-Star Grand Hotel" },
      { label: "Total Keys", value: "84 Rooms & Suites" },
      { label: "Check-in / Check-out", value: "02:00 PM / 12:00 PM" },
      { label: "Nearest Railway", value: "Ernakulam North (250m)" },
      { label: "Nearest Metro", value: "Town Hall Metro (350m)" },
      { label: "Banquet Capacity", value: "Up to 400 Delegates" }
    ],
    rooms: [
      {
        name: "Standard Deluxe",
        description: "Classic hardwood-finished room with upholstered seating, writing desk, tea/coffee station, satellite television, and marble bathroom.",
        size: "260 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed or Twin Beds",
        amenities: ["High-speed Wi-Fi", "Central Air Conditioning", "Flat-screen TV", "In-room Safe", "Coffee Maker", "Bathtub or Rain Shower"]
      },
      {
        name: "Executive Club Room",
        description: "Enhanced guest quarters on higher floors featuring city vistas, complimentary fruit basket, work station, and premium bathroom amenities.",
        size: "320 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["High-speed Wi-Fi", "Priority Check-in", "Executive Workstation", "Mini Bar", "Luxury Linens", "Bathtub", "Shoe Shine Service"]
      },
      {
        name: "Presidential Suite",
        description: "Expansive luxury suite featuring an ornate master bedroom, distinct dining and reception salon, powder room, and personalized butler assistance.",
        size: "550 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed",
        amenities: ["Separate Living & Dining Room", "High-speed Wi-Fi", "Two 50\" Smart TVs", "Complimentary Mini Bar", "Marble Jacuzzi Bathtub", "Butler on Call"]
      }
    ],
    facilities: [
      { icon: "pool", title: "Rooftop Swimming Pool", description: "Open-air freshwater pool set against the city skyline with sun loungers and towel service" },
      { icon: "dining", title: "Multiple Specialty Restaurants", description: "Pioneering Tokyo Bay Japanese dining, Lotus multi-cuisine, and City View rooftop" },
      { icon: "spa", title: "Ayurvedic Spa & Wellness", description: "Traditional Kerala herbal rejuvenation massages, panchakarma consultations, and steam" },
      { icon: "meetings", title: "5 Grand Banquet Halls", description: "Versatile convention halls accommodating from 20 to 400 attendees with full audiovisual support" },
      { icon: "gym", title: "Fitness Center", description: "Modern cardiovascular and resistance workout equipment" },
      { icon: "parking", title: "Valet & Basement Parking", description: "Extensive secure on-site parking with dedicated valet crew" }
    ],
    dining: [
      {
        name: "Tokyo Bay",
        cuisine: "Authentic Japanese & Pan-Asian",
        type: "Specialty Fine Dining",
        timing: "12:30 PM - 03:00 PM | 07:00 PM - 11:00 PM",
        description: "One of South India’s earliest authentic Japanese restaurants, celebrated for freshly prepared sushi, sashimi, teppanyaki grills, and tempura crafted by specialized masters."
      },
      {
        name: "Lotus Restaurant",
        cuisine: "Kerala, North Indian & Continental",
        type: "All-Day Multi-Cuisine",
        timing: "06:30 AM - 11:00 PM",
        description: "Refined family dining venue serving lavish breakfast buffets, traditional Kerala sadya spreads on request, and classic tandoor preparations."
      },
      {
        name: "City View Rooftop & Diwan Lounge",
        cuisine: "Grills, Barbecue & Cocktails",
        type: "Open-Air Skyline Lounge",
        timing: "06:00 PM - 11:30 PM",
        description: "Elevated alfresco rooftop terrace offering starlit evenings with charcoal grills, coastal bites, and an extensive beverage cellar."
      }
    ],
    specialties: [
      "Home to Tokyo Bay — Cochin's premier authentic Japanese dining landmark",
      "Rooftop swimming pool offering scenic panorama over Ernakulam",
      "Pioneering four-star hospitality legacy trusted by generations of travellers",
      "Extensive convention facilities hosting state conferences and wedding receptions"
    ],
    highlights: [
      "Legendary Tokyo Bay Japanese dining on premise",
      "Rooftop swimming pool with city views",
      "250m to Ernakulam North Railway Station",
      "Full-service Ayurvedic wellness spa",
      "5 versatile banquet and conference venues"
    ],
    locationHighlights: [
      { place: "Ernakulam Town (North) Station", distance: "250 m", time: "3 min walk", note: "Immediate access for arriving train passengers" },
      { place: "Town Hall Metro Station", distance: "350 m", time: "4 min walk", note: "Direct connection to Cochin business spine" },
      { place: "High Court & Marine Drive", distance: "2.5 km", time: "8 min drive", note: "Harbor walkway, boat jetties, shopping arcades" },
      { place: "Lulu International Shopping Mall", distance: "6.5 km", time: "15 min drive", note: "Premier retail and entertainment hub" },
      { place: "Cochin International Airport (COK)", distance: "28 km", time: "45 min drive", note: "Smooth transit via container highway route" }
    ],
    checkIn: "02:00 PM",
    checkOut: "12:00 PM",
    petPolicy: "Pets are not permitted inside the hotel",
    cancellationNote: "Free cancellation up to 48 hours prior to check-in for MakeMyKerala patrons",
    mapQuery: "Hotel Presidency, Paramara Road, Ernakulam, Kochi",
    makeMyKeralaPerks: [
      "Guaranteed best rate on deluxe and executive categories",
      "Complimentary Kerala welcome refreshment on arrival",
      "Priority table reservations at Tokyo Bay",
      "Dedicated chauffeur coordination for day excursions"
    ]
  },
  {
    id: "starlit-suites",
    slug: "starlit-suites",
    name: "Starlit Suites",
    tagline: "Spacious extended-stay apartment suites with a 10th-floor rooftop jogging track",
    category: "Extended-Stay All-Suite Luxury Hotel",
    starRating: 4,
    userRating: 4.4,
    reviewsCount: 1120,
    startingPrice: "₹3,500",
    priceLabel: "Starting from ₹3,500 / night",
    locality: "Maradu / Kundannoor",
    address: "NH 47 Bypass, Near Kundannoor Junction, Maradu, Kochi, Kerala 682304",
    phone: "+91 484 661 1111",
    email: "reservations.kochi@starlitsuites.com",
    website: "https://starlitsuites.com",
    heroImage: "/images/hotels/starlit-suites/exterior.webp",
    heroImageSm: "/images/hotels/starlit-suites/exterior-sm.webp",
        gallery: [
      {
        src: "/images/hotels/starlit-suites/exterior.webp",
        alt: "Starlit Suites modern architectural exterior on NH Bypass Maradu",
        caption: "Evening illuminated facade on Cochin's bypass corridor"
      },
      {
        src: "/images/hotels/starlit-suites/exterior-detail.webp",
        alt: "Starlit Suites architectural detail and residential tower",
        caption: "All-suite luxury tower with rooftop leisure facilities"
      },
      {
        src: "/images/destinations/allapey-600.webp",
        alt: "Scenic Kerala backwaters accessible via Kochi bypass",
        caption: "Vembanad backwater day cruises coordinated by MakeMyKerala"
      }
    ],
    overview: "Setting a new benchmark for extended-stay luxury in Kochi, Starlit Suites presents 136 meticulously appointed service suites along the vibrant NH 47 Bypass in Maradu. Tailored to family vacations, corporate assignments, and medical travel, each suite integrates private living zones, ergonomic workstations, and fully functional kitchenettes equipped with microwave ovens, refrigerators, and tea stations. Crowned by a remarkable 10th-floor rooftop jogging track, outdoor pool, and on-premise convenience mart, Starlit Suites merges residential independence with the pampering services of a premier four-star hotel.",
    quickFacts: [
      { label: "Hotel Class", value: "4-Star All-Suite Hotel" },
      { label: "Total Keys", value: "136 Fully Furnished Suites" },
      { label: "Check-in / Check-out", value: "02:00 PM / 11:00 AM" },
      { label: "Signature Feature", value: "10th-Floor Rooftop Track" },
      { label: "Kitchenette", value: "Equipped in all suites" },
      { label: "Nearest Hub", value: "Vyttila Mobility Hub (4 km)" }
    ],
    rooms: [
      {
        name: "Deluxe Studio Suite",
        description: "Open-plan contemporary suite integrating an orthopedic king bed, lounge chairs, functional kitchenette with microwave and fridge, and modern walk-in rain shower.",
        size: "380 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Equipped Kitchenette", "Microwave & Refrigerator", "High-speed Wi-Fi", "40\" Smart LED TV", "Work Desk", "Iron & Board", "Electronic Safe"]
      },
      {
        name: "One-Bedroom Executive Suite",
        description: "Expansive luxury apartment featuring a secluded master bedroom, distinct dining salon, separate living room with plush sofa set, full kitchenette, and guest powder room.",
        size: "560 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed + Sofa Sleeper",
        amenities: ["Separate Living & Dining Area", "Fully Equipped Kitchenette", "Two Large TVs", "Washing Machine Access", "Premium Toiletries", "Daily Housekeeping"]
      }
    ],
    facilities: [
      { icon: "track", title: "10th-Floor Rooftop Jogging Track", description: "One-of-a-kind open-air rooftop running track with panoramic 360-degree Cochin vista" },
      { icon: "pool", title: "Rooftop Swimming Pool", description: "Elevated skyline pool with children's splash corner and lounge sundeck" },
      { icon: "kitchen", title: "In-Suite Kitchenettes", description: "Independent culinary freedom with induction plates, microwave, kettle, and tableware" },
      { icon: "store", title: "On-site Convenience Store", description: "24/7 lobby mini-mart stocking fresh groceries, snacks, dairy, and travel essentials" },
      { icon: "gym", title: "Panorama Fitness Centre", description: "Fully equipped health club with treadmills, cross-trainers, and free weights" },
      { icon: "laundry", title: "Guest Laundromat", description: "Self-service washing and drying machines plus professional dry-cleaning service" }
    ],
    dining: [
      {
        name: "Gourmet Restaurant",
        cuisine: "Multi-Cuisine Continental & Kerala",
        type: "All-Day Restaurant",
        timing: "07:00 AM - 11:00 PM",
        description: "Airy bright restaurant presenting wholesome morning breakfast spreads, light healthy lunch salads, and flavorful Kerala clay-pot curries for dinner."
      },
      {
        name: "Grab & Go Deli",
        cuisine: "Bakery, Brews & Healthy Snacks",
        type: "Lobby Cafe",
        timing: "24 Hours",
        description: "Quick-service counter serving barista coffee, fresh bakery pastries, sandwiches, and packaged cold-pressed juices."
      }
    ],
    specialties: [
      "Unique 10th-floor rooftop outdoor jogging track with panoramic skyline views",
      "Self-contained suites with equipped kitchenettes ideal for families and long stays",
      "Prime Maradu location with swift access to Vyttila Mobility Hub & Fort Kochi",
      "On-premise 24/7 convenience mart eliminating external grocery errands"
    ],
    highlights: [
      "136 full-service luxury apartment suites",
      "Rooftop pool & elevated jogging track",
      "Equipped kitchenettes in every category",
      "On-site grocery mart & guest laundromat",
      "Strategic bypass location near Lakeshore Hospital & Forum Mall"
    ],
    locationHighlights: [
      { place: "Kundannoor Junction & Bypass", distance: "800 m", time: "3 min drive", note: "Immediate arterial road connectivity" },
      { place: "Forum Mall, Maradu", distance: "2.5 km", time: "6 min drive", note: "Cochin's newest upscale retail destination" },
      { place: "Vyttila Mobility Hub & Metro", distance: "4.2 km", time: "10 min drive", note: "Integrated bus, metro, and water transit terminal" },
      { place: "Fort Kochi & Mattancherry", distance: "12 km", time: "25 min drive", note: "Easy scenic drive via Thoppumpady Bridge" },
      { place: "Cochin International Airport (COK)", distance: "32 km", time: "50 min drive", note: "Direct NH bypass connection bypasses inner congestion" }
    ],
    checkIn: "02:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not allowed",
    cancellationNote: "Cancellations made 48 hours prior to arrival are fully refundable on MakeMyKerala packages",
    mapQuery: "Starlit Suites, Maradu, Kochi, Kerala",
    makeMyKeralaPerks: [
      "Special discounted tariffs for extended-stay reservations (3+ nights)",
      "Complimentary kitchen grocery starter kit on arrival",
      "Free high-speed premium Wi-Fi with unlimited device logins",
      "Direct WhatsApp access to MakeMyKerala local trip specialists"
    ]
  },
  {
    id: "abad-plaza",
    slug: "abad-plaza",
    name: "ABAD Plaza",
    tagline: "Four decades of trusted luxury, coastal culinary magic & downtown prestige",
    category: "Legendary 4-Star Commercial & Leisure Landmark",
    starRating: 4,
    userRating: 4.3,
    reviewsCount: 2450,
    startingPrice: "₹3,400",
    priceLabel: "Starting from ₹3,400 / night",
    locality: "M.G. Road",
    address: "Mahatma Gandhi Road, Shenoys Junction, Ernakulam, Kochi, Kerala 682035",
    phone: "+91 484 238 1122",
    email: "abadplaza@abadhotels.com",
    website: "https://abadhotels.com",
    heroImage: "/images/hotels/abad-plaza/exterior.webp",
    heroImageSm: "/images/hotels/abad-plaza/exterior-sm.webp",
        gallery: [
      {
        src: "/images/hotels/abad-plaza/exterior.webp",
        alt: "ABAD Plaza distinguished white facade with Cafe Canopy on M.G. Road",
        caption: "Landmark four-star facade on prime Mahatma Gandhi Road"
      },
      {
        src: "/images/hotels/abad-plaza/exterior-detail.webp",
        alt: "ABAD Plaza entrance archway and Cafe Canopy",
        caption: "Historic Cafe Canopy entrance at Shenoys Junction"
      },
      {
        src: "/images/destinations/kochi-600.webp",
        alt: "Marine Drive Rainbow Bridge and backwaters promenade",
        caption: "Marine Drive Rainbow Bridge (5 mins stroll from MG Road)"
      }
    ],
    overview: "Holding court at the prime epicenter of Mahatma Gandhi Road for over four decades, ABAD Plaza is one of Kochi's true hospitality icons. As the flagship property of the renowned ABAD Group, the hotel masterfully synthesizes central downtown convenience with time-honored Malabar warmth. Celebrated for Kadaloram — Kochi's foremost traditional seafood culinary shrine — and Cafe Canopy, Cochin's favorite 24-hour rendezvous point, ABAD Plaza features a rooftop swimming pool, the acclaimed Revival Ayurvedic wellness retreat, and refined corporate conference infrastructure.",
    quickFacts: [
      { label: "Hotel Class", value: "4-Star Historic Landmark" },
      { label: "Total Keys", value: "80 Well-Appointed Rooms" },
      { label: "Check-in / Check-out", value: "01:00 PM / 11:00 AM" },
      { label: "Location", value: "MG Road (Shenoys Junction)" },
      { label: "Nearest Metro", value: "Maharajas Metro (300m)" },
      { label: "Signature Dining", value: "Kadaloram Seafood" }
    ],
    rooms: [
      {
        name: "Superior Room",
        description: "Elegantly furnished guest room featuring warm timber elements, soundproof glass windows facing the city, plush bedding, and high-pressure shower.",
        size: "270 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed or Twin Beds",
        amenities: ["Free High-speed Wi-Fi", "Central Air Conditioning", "Flat-screen TV", "Tea & Coffee Amenities", "In-room Digital Safe", "Daily Newspaper"]
      },
      {
        name: "Executive Deluxe",
        description: "Upgraded business accommodations with dedicated work desk, comfortable lounge armchair, mini bar, bathrobes, and complimentary evening treats.",
        size: "340 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["High-speed Wi-Fi", "Smart Television", "Mini Fridge", "Executive Work Station", "Bathrobes & Luxury Toiletries", "Ironing Facilities"]
      },
      {
        name: "Plaza Suite",
        description: "Opulent city suite comprising an expansive living salon, dining table, master bedroom with orthopedic king mattress, and luxurious ensuite bathtub.",
        size: "520 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed",
        amenities: ["Separate Living & Dining Room", "High-speed Wi-Fi", "Two Smart TVs", "Complimentary Fruit Platter", "Deep Soaking Bathtub", "Priority Turndown"]
      }
    ],
    facilities: [
      { icon: "pool", title: "Rooftop Swimming Pool", description: "Tranquil open-air rooftop pool providing a refreshing respite high above MG Road" },
      { icon: "spa", title: "Revival Ayurvedic Centre", description: "Authentic therapeutic Kerala massages, Shirodhara, and holistic rejuvenation therapies" },
      { icon: "dining", title: "Iconic In-House Dining", description: "Home to Kadaloram seafood, Regency multi-cuisine, and 24-hr Cafe Canopy" },
      { icon: "meetings", title: "Imperial & Regency Halls", description: "Comprehensive meeting infrastructure accommodating up to 300 delegates with tech support" },
      { icon: "bakery", title: "ABAD Patisserie", description: "Artisan confectionery producing daily fresh European pastries, breads, and custom cakes" },
      { icon: "parking", title: "Covered Valet Parking", description: "Dedicated parking personnel on bustling MG Road" }
    ],
    dining: [
      {
        name: "Kadaloram Restaurant",
        cuisine: "Authentic Kerala Coastal Seafood",
        type: "Specialty Coastal Dining",
        timing: "12:30 PM - 03:30 PM | 07:00 PM - 11:00 PM",
        description: "Legendary seafood destination celebrated for Karimeen Pollichathu, Chemmeen Mango Curry, Meen Moilee, and fresh catch prepared to coastal Kerala traditions."
      },
      {
        name: "Regency Multi-Cuisine",
        cuisine: "Pan-Indian, Mughlai & Continental",
        type: "Grand Buffet & A La Carte",
        timing: "07:00 AM - 11:00 PM",
        description: "Spacious family dining room renowned for generous lunch buffets, tender tandoori kebabs, fragrant dum biryanis, and comforting continental staples."
      },
      {
        name: "Cafe Canopy",
        cuisine: "Coffee, Snacks, Desserts & Light Meals",
        type: "24-Hour Downtown Coffee Shop",
        timing: "Open 24 Hours",
        description: "A beloved Cochin cultural meeting place since the 1980s, offering midnight club sandwiches, fresh filter coffee, faloodas, and pastries around the clock."
      }
    ],
    specialties: [
      "Over 40 years of trusted hospitality on Cochin's most prominent commercial road",
      "Kadaloram — widely cited as one of Kochi's foremost Kerala seafood restaurants",
      "Iconic 24-hour Cafe Canopy coffee shop right at Shenoys Junction",
      "In-house Revival Ayurveda centre with certified therapists and doctors"
    ],
    highlights: [
      "Prime location on MG Road near Shenoys Metro",
      "Acclaimed Kadaloram Kerala seafood restaurant",
      "24-hour Cafe Canopy coffee shop",
      "Rooftop pool & Revival Ayurvedic wellness center",
      "Walking distance to premier shopping, textiles & jewellery showrooms"
    ],
    locationHighlights: [
      { place: "Maharajas College Metro Station", distance: "300 m", time: "4 min walk", note: "Direct metro transit across Cochin" },
      { place: "Ernakulam South Railway Station", distance: "1.4 km", time: "5 min drive", note: "Main transit station for express trains" },
      { place: "Marine Drive Promenade & Rainbow Bridge", distance: "1.8 km", time: "6 min drive", note: "Scenic sunset waterfront walking" },
      { place: "Centre Square Mall, MG Road", distance: "600 m", time: "7 min walk", note: "Cinemas, food court, high-street brands" },
      { place: "Fort Kochi (via Jetty)", distance: "4 km", time: "15 min (ferry)", note: "Take the short scenic government ferry from Main Boat Jetty" }
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not allowed on property",
    cancellationNote: "Free cancellation available up to 48 hours prior to arrival on all MakeMyKerala packages",
    mapQuery: "ABAD Plaza, MG Road, Ernakulam, Kochi",
    makeMyKeralaPerks: [
      "Exclusive complimentary dining vouchers for Kadaloram Seafood",
      "Guaranteed early check-in assistance when booking tour packages",
      "Special discount on Revival Ayurvedic wellness therapies",
      "24/7 dedicated MakeMyKerala on-ground concierge support"
    ]
  },
  {
    id: "abad-atrium",
    slug: "abad-atrium",
    name: "ABAD Atrium",
    tagline: "Serene skylit atrium sanctuary nestled quietly right off vibrant MG Road",
    category: "Boutique Atrium Business & Leisure Stay",
    starRating: 4,
    userRating: 4.2,
    reviewsCount: 980,
    startingPrice: "₹3,100",
    priceLabel: "Starting from ₹3,100 / night",
    locality: "M.G. Road",
    address: "Mahatma Gandhi Road, Ernakulam, Kochi, Kerala 682035",
    phone: "+91 484 238 4330",
    email: "atrium@abadhotels.com",
    website: "https://abadhotels.com",
    heroImage: "/images/hotels/abad-atrium/exterior.webp",
    heroImageSm: "/images/hotels/abad-atrium/exterior-sm.webp",
        gallery: [
      {
        src: "/images/hotels/abad-atrium/exterior.webp",
        alt: "ABAD Atrium exterior with luminous neon signature on MG Road",
        caption: "Boutique exterior tucked behind the main MG Road facade"
      },
      {
        src: "/images/hotels/abad-atrium/exterior-detail.webp",
        alt: "ABAD Atrium neon cursive signage and entrance portal",
        caption: "Evening ambiance at the ABAD Atrium entrance"
      },
      {
        src: "/images/destinations/kochi-600.webp",
        alt: "Broadway traditional spice bazaar and waterfront",
        caption: "Historic Broadway shopping bazaar and Cochin harbor nearby"
      }
    ],
    overview: "Set immediately adjacent to ABAD Plaza in the prime downtown quarter of M.G. Road, ABAD Atrium presents a distinct architectural ambiance centered on a luminous, skylit central atrium. The design creates a tranquil oasis of calm insulated from the bustle of the city outside. Ideal for discerning corporate travelers and leisure visitors seeking understated intimacy, guests enjoy tranquil atrium-facing rooms, fine dining at Cafe Royale, and privileged access to the comprehensive wellness amenities of the adjoining ABAD complex.",
    quickFacts: [
      { label: "Hotel Class", value: "4-Star Boutique Hotel" },
      { label: "Total Keys", value: "52 Atrium Rooms & Suites" },
      { label: "Check-in / Check-out", value: "01:00 PM / 11:00 AM" },
      { label: "Architecture", value: "Central Skylit Atrium" },
      { label: "Nearest Metro", value: "Maharajas Metro (300m)" },
      { label: "Dining", value: "Cafe Royale Multi-Cuisine" }
    ],
    rooms: [
      {
        name: "Deluxe Atrium Room",
        description: "Quiet, comfortable guestroom opening to the central skylit atrium corridor, featuring contemporary furnishings, work desk, and rain shower.",
        size: "260 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed or Twin Beds",
        amenities: ["Complimentary Wi-Fi", "Air Conditioning", "Flat-panel TV", "Coffee & Tea Maker", "In-room Safe", "Private Ensuite Bath"]
      },
      {
        name: "Superior Executive Room",
        description: "Expanded quarters offering enhanced privacy, upgraded plush mattress, writing bureau, mini refrigerator, and premium bathroom amenities.",
        size: "320 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["High-speed Wi-Fi", "Smart TV", "Mini Fridge", "Ergonomic Desk", "Plush Bathrobes", "Complimentary Bottled Water"]
      },
      {
        name: "Atrium Suite",
        description: "Refined corner suite with dedicated sitting lounge, sofa seating, king master bedroom, and spacious ensuite bath with deluxe amenities.",
        size: "460 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed",
        amenities: ["Separate Sitting Lounge", "High-speed Wi-Fi", "Two TVs", "Tea & Espresso Station", "Bathtub", "Personalized Turndown"]
      }
    ],
    facilities: [
      { icon: "atrium", title: "Central Skylit Atrium", description: "Striking internal architectural void filtering soft natural sunlight to all corridors" },
      { icon: "dining", title: "Cafe Royale Restaurant", description: "Elegant multi-cuisine dining space offering personalized culinary service" },
      { icon: "pool", title: "Rooftop Pool Access", description: "Access to the rooftop swimming pool in the interconnected ABAD complex" },
      { icon: "spa", title: "Ayurveda Wellness Access", description: "Full access to the renowned Revival Ayurvedic Centre treatments" },
      { icon: "meetings", title: "Conference Facilities", description: "Well-appointed boardroom and banquet spaces for corporate gatherings" },
      { icon: "parking", title: "Valet Parking", description: "Safe on-site valet parking service on MG Road" }
    ],
    dining: [
      {
        name: "Cafe Royale",
        cuisine: "Continental, Kerala & North Indian",
        type: "All-Day Dining Restaurant",
        timing: "07:00 AM - 10:30 PM",
        description: "Intimate and stylish dining room serving a fusion of traditional Kerala flavors, wholesome continental breakfasts, and fresh Indian specialties."
      }
    ],
    specialties: [
      "Unique central skylit atrium architecture ensuring peaceful, noise-insulated rooms",
      "Boutique privacy with full access to the extensive facilities of the ABAD complex",
      "Direct walking access to Maharajas Metro and MG Road shopping hubs",
      "Warm, personalized service with a high staff-to-guest ratio"
    ],
    highlights: [
      "Striking internal daylight atrium lobby",
      "Fine dining at Cafe Royale",
      "Access to rooftop pool & Revival Ayurvedic spa",
      "300m to Maharajas Metro Station",
      "Prime MG Road commercial location"
    ],
    locationHighlights: [
      { place: "Maharajas Metro Station", distance: "300 m", time: "4 min walk", note: "Rapid transit across the city" },
      { place: "Ernakulam South Railway Station", distance: "1.5 km", time: "5 min drive", note: "Quick transit access" },
      { place: "Marine Drive Waterfront", distance: "1.8 km", time: "6 min drive", note: "Harbor views and evening strolls" },
      { place: "Broadway Traditional Bazaar", distance: "1.2 km", time: "5 min drive", note: "Spice shops, traditional textiles, and street life" },
      { place: "Cochin International Airport (COK)", distance: "29 km", time: "45 min drive", note: "Direct highway connectivity" }
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are not allowed on hotel premises",
    cancellationNote: "Free cancellation up to 48 hours prior to check-in for MakeMyKerala confirmed bookings",
    mapQuery: "ABAD Atrium, MG Road, Ernakulam, Kochi",
    makeMyKeralaPerks: [
      "Complimentary room upgrade to Superior category subject to availability",
      "Special discounts on dining at Cafe Royale and Kadaloram",
      "Seamless airport pickup and drop-off coordination",
      "24/7 dedicated MakeMyKerala travel specialist support"
    ]
  },
  {
    id: "olive-downtown",
    slug: "olive-downtown",
    name: "Olive Downtown",
    tagline: "Five-star boutique sophistication, rooftop pool & prime Kadavanthra elegance",
    category: "Luxury 5-Star Boutique & Lifestyle Hotel",
    starRating: 5,
    userRating: 4.5,
    reviewsCount: 1680,
    startingPrice: "₹4,200",
    priceLabel: "Starting from ₹4,200 / night",
    locality: "Kadavanthra",
    address: "28/286, Kadavanthra Junction, Ernakulam, Kochi, Kerala 682020",
    phone: "+91 484 422 2222",
    email: "reservations@olivehotels.com",
    website: "https://olivehotels.com",
    heroImage: "/images/hotels/olive-downtown/exterior.webp",
    heroImageSm: "/images/hotels/olive-downtown/exterior-sm.webp",
        gallery: [
      {
        src: "/images/hotels/olive-downtown/exterior.webp",
        alt: "Olive Downtown striking aerial facade and rooftop pool in Kadavanthra",
        caption: "Contemporary five-star architecture at Kadavanthra Junction"
      },
      {
        src: "/images/hotels/olive-downtown/exterior-detail.webp",
        alt: "Olive Downtown rooftop leisure deck and architecture",
        caption: "Elevated rooftop pool and urban lifestyle design"
      },
      {
        src: "/images/destinations/kochi-600.webp",
        alt: "Panampilly Nagar lifestyle district and Cochin harbor",
        caption: "Upscale Panampilly Nagar boutiques & cafes (3 mins drive)"
      }
    ],
    overview: "Towering proudly above Kadavanthra Junction, Olive Downtown redefines five-star cosmopolitan elegance in Cochin. Boasting 84 meticulously curated keys, this boutique property marries contemporary architectural flair with bespoke luxury. From its stunning rooftop pool and alfresco lounge overlooking the urban skyline to its celebrated dining venues including Arena all-day dining and the chic Olive Bistro, Olive Downtown delivers an elevated hospitality experience in one of Kochi's most accessible and upscale residential-commercial quarters.",
    quickFacts: [
      { label: "Hotel Class", value: "5-Star Luxury Boutique" },
      { label: "Total Keys", value: "84 Designer Rooms & Suites" },
      { label: "Check-in / Check-out", value: "02:00 PM / 12:00 PM" },
      { label: "Location", value: "Kadavanthra Junction" },
      { label: "Nearest Metro", value: "Kadavanthra Metro (200m)" },
      { label: "Leisure", value: "Rooftop Pool & Spa" }
    ],
    rooms: [
      {
        name: "Superior Room",
        description: "Designer room featuring warm wood finishes, plush king or twin bedding, smart ambient lighting, executive workstation, and an Italian-tiled rain shower.",
        size: "300 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed or Twin Beds",
        amenities: ["Complimentary High-speed Wi-Fi", "Central Air Conditioning", "43\" Smart TV", "Electronic Safe", "Tea & Coffee Station", "Rain Shower", "Minibar"]
      },
      {
        name: "Executive Club Room",
        description: "Elevated high-floor accommodation with sweeping city vistas, espresso machine, premium linen collection, dedicated lounge seating, and club privileges.",
        size: "375 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["High-speed Wi-Fi", "Espresso Machine", "50\" Smart TV", "Luxury Bath Amenities", "Bathrobes & Slippers", "Executive Lounge Access"]
      },
      {
        name: "Presidential Luxury Suite",
        description: "The pinnacle of urban luxury featuring a master bedroom with panoramic glass walls, dedicated dining and living room, powder room, and deep soaking bathtub.",
        size: "620 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed",
        amenities: ["Separate Living & Dining Rooms", "Panoramic City Views", "Jacuzzi Soaking Tub", "Two 55\" Smart TVs", "Personal Butler Service", "Express Check-in"]
      }
    ],
    facilities: [
      { icon: "pool", title: "Rooftop Infinity Pool", description: "Breathtaking open-air rooftop pool with sun beds and scenic panorama across Kochi" },
      { icon: "dining", title: "Multiple Gourmet Restaurants", description: "Arena all-day multi-cuisine, Olive Bistro bakery cafe, and rooftop poolside grill" },
      { icon: "spa", title: "Signature Wellness Spa", description: "Full-service spa offering holistic body therapies, steam room, and relaxation lounge" },
      { icon: "gym", title: "Modern Fitness Center", description: "State-of-the-art gym equipped with Life Fitness cardio and strength training systems" },
      { icon: "meetings", title: "Ballroom & Boardrooms", description: "Grand ballroom and executive meeting venues with cutting-edge audiovisual systems" },
      { icon: "parking", title: "Valet & Basement Parking", description: "Secure on-site multi-level parking with round-the-clock security and valet" }
    ],
    dining: [
      {
        name: "Arena",
        cuisine: "Global Multi-Cuisine & Kerala Specialties",
        type: "All-Day Fine Dining",
        timing: "06:30 AM - 11:00 PM",
        description: "Opulent all-day restaurant presenting gourmet breakfast buffets, interactive live cooking stations, and refined Kerala culinary specialties."
      },
      {
        name: "Olive Bistro",
        cuisine: "Artisan Bakery, Coffee & Light Fare",
        type: "Patisserie & Cafe",
        timing: "08:00 AM - 10:00 PM",
        description: "Chic European-style bistro serving freshly roasted coffees, French pastries, gourmet sandwiches, and delicate desserts."
      },
      {
        name: "Sky Lounge",
        cuisine: "Charcoal Grills, Small Plates & Cocktails",
        type: "Rooftop Poolside Lounge",
        timing: "06:00 PM - 11:30 PM",
        description: "Atmospheric rooftop setting with ambient lighting, serving sizzling skewers, international finger foods, and refreshing handcrafted beverages."
      }
    ],
    specialties: [
      "Striking 5-star boutique property with 84 bespoke designer rooms and suites",
      "Prime Kadavanthra Junction location connecting MG Road, Panampilly Nagar & NH Bypass",
      "Spectacular rooftop swimming pool with panoramic skyline vistas",
      "Immediate 200m walking proximity to Kadavanthra Metro Station"
    ],
    highlights: [
      "5-star boutique luxury experience",
      "Rooftop infinity pool with city skyline views",
      "200m to Kadavanthra Metro Station",
      "Fine dining at Arena & Olive Bistro",
      "Short drive to upscale Panampilly Nagar boutiques & cafes"
    ],
    locationHighlights: [
      { place: "Kadavanthra Metro Station", distance: "200 m", time: "2 min walk", note: "Immediate metro connectivity" },
      { place: "Panampilly Nagar Boutique Enclave", distance: "1.2 km", time: "4 min drive", note: "Upscale dining, cafes, and boutique shopping" },
      { place: "Ernakulam South Railway Station", distance: "2.2 km", time: "7 min drive", note: "Quick transit to central station" },
      { place: "Marine Drive Promenade", distance: "4.5 km", time: "12 min drive", note: "Waterfront harbor walks" },
      { place: "Cochin International Airport (COK)", distance: "30 km", time: "45 min drive", note: "Smooth connectivity via bypass corridor" }
    ],
    checkIn: "02:00 PM",
    checkOut: "12:00 PM",
    petPolicy: "Pets are not allowed",
    cancellationNote: "Flexible cancellation up to 48 hours before check-in for MakeMyKerala guests",
    mapQuery: "Olive Downtown, Kadavanthra, Kochi",
    makeMyKeralaPerks: [
      "Complimentary high-speed premium Wi-Fi with unlimited bandwidth",
      "Priority table reservations at Arena and the Sky Lounge",
      "15% exclusive discount on all spa treatments at Olive Wellness",
      "Dedicated 24/7 MakeMyKerala tour planner and assistance"
    ]
  },
  {
    id: "monsoon-empress",
    slug: "monsoon-empress",
    name: "Monsoon Empress",
    tagline: "Five-star contemporary opulence & state-of-the-art convention luxury on NH Bypass",
    category: "5-Star Contemporary Luxury & Convention Destination",
    starRating: 5,
    userRating: 4.6,
    reviewsCount: 1940,
    startingPrice: "₹4,500",
    priceLabel: "Starting from ₹4,500 / night",
    locality: "Palarivattom / Bypass",
    address: "NH 66 Bypass, Opp. Holiday Inn, Palarivattom, Kochi, Kerala 682025",
    phone: "+91 484 430 0000",
    email: "info@monsoonempress.com",
    website: "https://monsoonempress.com",
    heroImage: "/images/hotels/monsoon-empress/exterior.webp",
    heroImageSm: "/images/hotels/monsoon-empress/exterior-sm.webp",
        gallery: [
      {
        src: "/images/hotels/monsoon-empress/exterior.webp",
        alt: "Monsoon Empress hotel illuminated white tower on NH Bypass",
        caption: "Monumental five-star architectural presence on NH 66 Bypass"
      },
      {
        src: "/images/hotels/monsoon-empress/exterior-detail.webp",
        alt: "Monsoon Empress grand entrance canopy and architectural portico",
        caption: "Monumental portico and reception canopy at Palarivattom"
      },
      {
        src: "/images/destinations/allapey-600.webp",
        alt: "Scenic backwater day tours connecting from Kochi expressway",
        caption: "Expressway connectivity to Alleppey backwater houseboats"
      }
    ],
    overview: "Towering majestically along Cochin's dynamic NH 66 Bypass in Palarivattom, Monsoon Empress represents the vanguard of modern 5-star luxury in Kerala. Conceived with grand architectural proportions, the hotel features world-class convention facilities accommodating up to 800 delegates, lavishly detailed guest accommodations, and a vibrant culinary portfolio highlighted by Curry Sense, Xian Pan-Asian restaurant, and the spirited restro-lounge Spirited 11. Complete with an elevated temperature-controlled rooftop pool and Empress Spa, Monsoon Empress is the premier choice for luxury travelers and corporate summits.",
    quickFacts: [
      { label: "Hotel Class", value: "5-Star Luxury & Convention" },
      { label: "Total Keys", value: "100+ Luxury Keys" },
      { label: "Check-in / Check-out", value: "02:00 PM / 12:00 PM" },
      { label: "Convention Capacity", value: "Up to 800 Delegates" },
      { label: "Location", value: "NH 66 Bypass (Palarivattom)" },
      { label: "Nearest Hub", value: "Infopark Kakkanad (7 km)" }
    ],
    rooms: [
      {
        name: "Deluxe Room",
        description: "Opulently appointed room featuring contemporary designer aesthetics, plush king bed, acoustic sound insulation, marble bathroom, and floor-to-ceiling glass.",
        size: "320 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed or Twin Beds",
        amenities: ["High-speed Wi-Fi", "Central Climate Control", "50\" Smart TV", "Electronic In-room Safe", "Tea & Espresso Station", "Rain Shower", "Minibar"]
      },
      {
        name: "Empress Club Room",
        description: "High-floor sanctuary with club lounge privileges, panoramic bypass views, dedicated work desk, luxury bath amenities, and evening canapés.",
        size: "400 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Club Lounge Access", "High-speed Wi-Fi", "55\" Smart TV", "Espresso Machine", "Bathrobes & Luxury Toiletries", "Evening Cocktail Hour"]
      },
      {
        name: "Empress Presidential Suite",
        description: "Grand luxury suite showcasing an expansive master suite, formal dining room, private meeting lounge, powder room, and spa-inspired jacuzzi bath.",
        size: "750 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed",
        amenities: ["Formal Living & Dining Room", "Jacuzzi Spa Bath", "Two 65\" Smart TVs", "Dedicated Butler Service", "Private Bar Setup", "VIP Airport Transfer"]
      }
    ],
    facilities: [
      { icon: "pool", title: "Rooftop Swimming Pool", description: "Temperature-controlled elevated pool overlooking the bustling bypass expressway" },
      { icon: "spa", title: "Empress Spa & Wellness", description: "World-class therapeutic spa with private therapy suites, steam, and sauna" },
      { icon: "dining", title: "Dual Specialty Dining", description: "24/7 Curry Sense global buffet, Xian Pan-Asian fine dining, and Spirited 11 lounge" },
      { icon: "meetings", title: "Grand Convention Center", description: "Pillar-free ballroom and high-tech conference spaces hosting up to 800 guests" },
      { icon: "gym", title: "Empress Health Club", description: "Cutting-edge cardiovascular and resistance training fitness center" },
      { icon: "parking", title: "Multi-Level Covered Parking", description: "Ample parking with valet services and electric vehicle charging points" }
    ],
    dining: [
      {
        name: "Curry Sense",
        cuisine: "International, Pan-Indian & Kerala",
        type: "24-Hour All-Day Dining & Buffet",
        timing: "Open 24 Hours",
        description: "Monumental culinary theater presenting around-the-clock dining, lavish international buffets, and regional Kerala culinary masterpieces."
      },
      {
        name: "Xian",
        cuisine: "Authentic Chinese, Thai & Pan-Asian",
        type: "Specialty Asian Fine Dining",
        timing: "12:30 PM - 03:30 PM | 07:00 PM - 11:00 PM",
        description: "Sophisticated Pan-Asian sanctuary serving dim sums, wok-tossed Cantonese specialties, and aromatic Thai curries crafted with authentic ingredients."
      },
      {
        name: "Spirited 11",
        cuisine: "Bar Bites, Gourmet Grills & Cocktails",
        type: "High-Energy Resto-Lounge",
        timing: "11:00 AM - 11:30 PM",
        description: "Vibrant and stylish lounge with screening zones, signature mixology, and creative international tapas."
      }
    ],
    specialties: [
      "5-star contemporary luxury right on the NH 66 Bypass artery",
      "Pillarless grand ballroom accommodating up to 800 guests for banquets and summits",
      "Pioneering dual specialty restaurants including 24/7 Curry Sense and Xian Pan-Asian",
      "Convenient 15-minute direct drive to Infopark Kakkanad and SmartCity Kochi"
    ],
    highlights: [
      "5-star contemporary luxury hotel",
      "Temperature-controlled rooftop pool",
      "Curry Sense 24/7 global dining & Xian Asian fine dining",
      "800-delegate convention ballroom",
      "Direct NH Bypass corridor location"
    ],
    locationHighlights: [
      { place: "Palarivattom Metro Station", distance: "1.5 km", time: "4 min drive", note: "Direct link to Kochi city center and airport road" },
      { place: "Infopark & SmartCity Kakkanad", distance: "7 km", time: "15 min drive", note: "Kerala's premier IT and tech employment corridor" },
      { place: "Lulu International Mall", distance: "4.5 km", time: "10 min drive", note: "Massive retail, entertainment and dining complex" },
      { place: "Ernakulam North Railway Station", distance: "5 km", time: "12 min drive", note: "Major rail transit terminal" },
      { place: "Cochin International Airport (COK)", distance: "24 km", time: "35 min drive", note: "Fast bypass transit via Seaport-Airport route" }
    ],
    checkIn: "02:00 PM",
    checkOut: "12:00 PM",
    petPolicy: "Pets are not permitted on the premises",
    cancellationNote: "Cancellations made 48 hours prior to arrival are 100% refundable for MakeMyKerala travellers",
    mapQuery: "Monsoon Empress, Palarivattom, Kochi",
    makeMyKeralaPerks: [
      "Guaranteed best rate assurance on all deluxe and club categories",
      "Welcome fruit platter and confectioneries on arrival",
      "Complimentary high-speed fiber Wi-Fi throughout your stay",
      "Priority conference and event planning assistance through MakeMyKerala"
    ]
  },
  {
    id: "excellency",
    slug: "excellency",
    name: "Hotel Excellency",
    tagline: "Unmatched transit convenience, warm hospitality & exceptional value near Jos Junction",
    category: "Value Heritage Transit & Family Hotel",
    starRating: 3,
    userRating: 4.1,
    reviewsCount: 1520,
    startingPrice: "₹1,800",
    priceLabel: "Starting from ₹1,800 / night",
    locality: "Jos Junction / South Railway",
    address: "Nettipadam Road, Jos Junction, Off M.G. Road, Ernakulam, Kochi, Kerala 682016",
    phone: "+91 484 237 8300",
    email: "info@hotelexcellency.com",
    website: "https://hotelexcellency.com",
    heroImage: "/images/hotels/excellency/exterior.webp",
    heroImageSm: "/images/hotels/excellency/exterior-sm.webp",
        gallery: [
      {
        src: "/images/hotels/excellency/exterior.webp",
        alt: "Hotel Excellency illuminated night facade on Nettipadam Road near Jos Junction",
        caption: "Welcoming facade just 200 meters from South Railway Station"
      },
      {
        src: "/images/hotels/excellency/exterior-alt.webp",
        alt: "Hotel Excellency dusk street-level view near Jos Junction",
        caption: "Exterior view near bustling Jos Junction and MG Road"
      },
      {
        src: "/images/hotels/excellency/exterior-detail.webp",
        alt: "Hotel Excellency architectural entrance detail",
        caption: "Close-up entrance facade and reception arrival area"
      }
    ],
    overview: "Hotel Excellency is celebrated across Kerala as the premier choice for value-conscious leisure travellers, railway transit passengers, and family groups seeking spotless hospitality in the heart of Ernakulam. Located on quiet Nettipadam Road just 200 meters from the Ernakulam Junction (South) Railway Station and Jos Junction on M.G. Road, this hotel offers comfortable air-conditioned rooms, the beloved Exotica multi-cuisine family restaurant, conference facilities, and friendly, dependable service that has welcomed guests for decades.",
    quickFacts: [
      { label: "Hotel Class", value: "3-Star Value Transit Hotel" },
      { label: "Total Keys", value: "68 Clean & Comfortable Rooms" },
      { label: "Check-in / Check-out", value: "12:00 PM / 12:00 PM" },
      { label: "Nearest Railway", value: "Ernakulam South (200m - 2 min walk)" },
      { label: "Nearest Metro", value: "Ernakulam South Metro (300m)" },
      { label: "Dining", value: "Exotica Multi-Cuisine" }
    ],
    rooms: [
      {
        name: "Standard AC Room",
        description: "Well-maintained room featuring split air conditioning, clean linen, satellite television, writing desk, and attached bathroom with hot and cold water.",
        size: "200 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed or Twin Beds",
        amenities: ["Split Air Conditioning", "Free Wi-Fi", "Color Television", "Direct Dial Telephone", "24-hr Hot Water", "Daily Housekeeping"]
      },
      {
        name: "Executive AC Deluxe",
        description: "Spacious upgraded room with modern ceramic flooring, premium mattress, bedside charging points, work desk, and upgraded bathroom fittings.",
        size: "260 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["Air Conditioning", "Free Wi-Fi", "LED Television", "Tea & Coffee Maker", "Room Service", "Complimentary Toiletries"]
      },
      {
        name: "Family Suite (Four Bedded)",
        description: "Ideal accommodation for family holidays and pilgrimage tours, featuring two large double beds, generous floor area, and family dining seating.",
        size: "380 sq.ft",
        capacity: "4 Adults",
        bed: "Two Double Beds",
        amenities: ["Air Conditioning", "Free Wi-Fi", "Large LED TV", "Family Seating Area", "Spacious Bathroom", "Luggage Storage Space"]
      }
    ],
    facilities: [
      { icon: "railway", title: "2-Minute Walk to South Station", description: "Unrivaled convenience for arriving and departing rail passengers" },
      { icon: "dining", title: "Exotica Restaurant", description: "Renowned family dining serving authentic Kerala, North Indian, and Chinese dishes" },
      { icon: "wifi", title: "Free Wi-Fi", description: "High-speed internet access available throughout rooms and lobby" },
      { icon: "meetings", title: "Banquet & Conference Hall", description: "Convenient event venue accommodating up to 150 guests for family or business gatherings" },
      { icon: "desk", title: "Sightseeing & Tour Desk", description: "Tailored day trips to Fort Kochi, backwater cruises, and Munnar taxi transfers" },
      { icon: "parking", title: "On-Site Parking", description: "Dedicated parking area for cars and tourist coaches with round-the-clock security" }
    ],
    dining: [
      {
        name: "Exotica Restaurant",
        cuisine: "Kerala Traditional, South Indian & North Indian",
        type: "Multi-Cuisine Family Dining",
        timing: "07:00 AM - 10:30 PM",
        description: "Beloved neighborhood restaurant serving wholesome traditional Kerala thalis, fresh appam and stew, crispy dosas, and fragrant biryanis at affordable prices."
      }
    ],
    specialties: [
      "Barely 200 meters (2-minute stroll) from Ernakulam South Railway Station entrance",
      "Exceptional value-for-money tariffs with spotless, well-maintained rooms",
      "Dedicated four-bedded family rooms perfect for holiday groups and pilgrims",
      "Immediate proximity to Jos Junction and M.G. Road shopping hubs"
    ],
    highlights: [
      "2-minute walk to Ernakulam South Railway Station",
      "300m to Ernakulam South Metro Station",
      "Exotica multi-cuisine restaurant on site",
      "Family suites for up to 4 adults",
      "Unmatched value pricing starting from ₹1,800/night"
    ],
    locationHighlights: [
      { place: "Ernakulam South Railway Station", distance: "200 m", time: "2 min walk", note: "Kerala's busiest railway hub at your doorstep" },
      { place: "Ernakulam South Metro Station", distance: "300 m", time: "3 min walk", note: "Rapid connection across Cochin" },
      { place: "Jos Junction, MG Road", distance: "250 m", time: "3 min walk", note: "Shopping, banks, textiles, and restaurants" },
      { place: "Marine Drive Promenade", distance: "2.2 km", time: "7 min drive", note: "Sunset boat cruises and waterfront boardwalk" },
      { place: "Cochin International Airport (COK)", distance: "29 km", time: "45 min drive", note: "Accessible via direct road and metro connections" }
    ],
    checkIn: "12:00 PM",
    checkOut: "12:00 PM",
    petPolicy: "Pets are not permitted",
    cancellationNote: "Flexible 24-hour cancellation policy for all MakeMyKerala package guests",
    mapQuery: "Hotel Excellency, Nettipadam Road, Jos Junction, Kochi",
    makeMyKeralaPerks: [
      "Guaranteed best budget rate in central Ernakulam",
      "Early check-in support for early morning train arrivals (subject to availability)",
      "Free travel consultation for onward Kerala holiday connections",
      "24/7 dedicated MakeMyKerala on-trip assistance"
    ]
  },
  {
    id: "ima-house",
    slug: "ima-house",
    name: "IMA House",
    tagline: "Expansive executive suites, serene stadium environs & premier convention halls",
    category: "Executive Suites & Premier Convention Complex",
    starRating: 4,
    userRating: 4.3,
    reviewsCount: 890,
    startingPrice: "₹2,600",
    priceLabel: "Starting from ₹2,600 / night",
    locality: "Kaloor",
    address: "Behind J.N. International Stadium, Stadium Link Road, Kaloor, Kochi, Kerala 682025",
    phone: "+91 484 253 4000",
    email: "info@imahousekochi.com",
    website: "https://imahousekochi.com",
    heroImage: "/images/hotels/ima-house/exterior.webp",
    heroImageSm: "/images/hotels/ima-house/exterior-sm.webp",
        gallery: [
      {
        src: "/images/hotels/ima-house/exterior.webp",
        alt: "IMA House stately entrance gate and executive complex in Kaloor",
        caption: "Distinguished entrance gate and sprawling executive grounds"
      },
      {
        src: "/images/hotels/ima-house/exterior-detail.webp",
        alt: "IMA House main convention complex and reception portico",
        caption: "Convention complex and executive apartment building"
      },
      {
        src: "/images/destinations/kochi-600.webp",
        alt: "JLN Stadium Metro corridor connecting to Cochin Marine Drive",
        caption: "Jawaharlal Nehru Stadium & Metro link (350m walk)"
      }
    ],
    overview: "Nestled behind the iconic Jawaharlal Nehru International Stadium along the tranquil Stadium Link Road in Kaloor, IMA House represents one of Kochi's most spacious and versatile executive accommodation and convention complexes. Conceived with grand architectural proportions, this distinguished institution features expansive multi-room service suites, multiple state-of-the-art auditorium and banquet venues accommodating up to 1,000 attendees, a serene semi-indoor swimming pool, and an abundance of dedicated parking in a peaceful green enclave.",
    quickFacts: [
      { label: "Hotel Class", value: "4-Star Executive & Convention" },
      { label: "Total Keys", value: "70 Spacious Suites" },
      { label: "Check-in / Check-out", value: "12:00 PM / 11:00 AM" },
      { label: "Convention Capacity", value: "Up to 1,000 Delegates" },
      { label: "Parking Capacity", value: "300+ Vehicles on Premise" },
      { label: "Nearest Metro", value: "JLN Stadium Metro (350m)" }
    ],
    rooms: [
      {
        name: "Studio Executive Suite",
        description: "Generously proportioned suite with dedicated lounge area, study desk, plush double bedding, split air conditioning, and ensuite modern bathroom.",
        size: "340 sq.ft",
        capacity: "2 Adults",
        bed: "King Bed or Twin Beds",
        amenities: ["Free Wi-Fi", "Split Air Conditioning", "LCD Television", "Study Desk", "Tea & Coffee Station", "Ensuite Rain Shower"]
      },
      {
        name: "One-Bedroom Suite",
        description: "Spacious apartment-style suite featuring a separate master bedroom, distinct living room with sofa setup, refrigerator, and panoramic balcony views of the stadium grounds.",
        size: "480 sq.ft",
        capacity: "2 Adults + 2 Children",
        bed: "King Bed + Sofa Bed",
        amenities: ["Separate Living Room", "Free Wi-Fi", "Refrigerator", "Balcony with Green Views", "Two LCD TVs", "Daily Housekeeping"]
      },
      {
        name: "Two-Bedroom Family Suite",
        description: "Expansive multi-bedroom executive suite designed for families and conference delegates, featuring two independent bedrooms with attached baths and shared central salon.",
        size: "720 sq.ft",
        capacity: "4 Adults + 2 Children",
        bed: "Two King Beds",
        amenities: ["Two Private Bedrooms", "Two Attached Bathrooms", "Central Living Lounge", "High-speed Wi-Fi", "Dining Area", "Complimentary Toiletries"]
      }
    ],
    facilities: [
      { icon: "meetings", title: "Massive Convention Venues", description: "Trident, Senate, and Symphony halls accommodating from 50 to 1,000 delegates with full AV" },
      { icon: "pool", title: "Semi-Indoor Swimming Pool", description: "Covered temperature-moderated leisure pool offering privacy in all weather conditions" },
      { icon: "parking", title: "Sprawling Parking (300+ Cars)", description: "One of the largest dedicated private parking facilities in central Cochin" },
      { icon: "gym", title: "Fitness Center", description: "Well-appointed gymnasium with cardio machines and weight training facilities" },
      { icon: "dining", title: "Nila Multi-Cuisine Restaurant", description: "Spacious restaurant serving wholesome South Indian, North Indian, and continental spreads" },
      { icon: "security", title: "24-Hour Security & CCTV", description: "Secure gated complex with professional security personnel and barrier controls" }
    ],
    dining: [
      {
        name: "Nila Restaurant",
        cuisine: "Kerala Traditional, South Indian & Continental",
        type: "Multi-Cuisine Dining & Banqueting",
        timing: "07:00 AM - 10:30 PM",
        description: "Bright and welcoming restaurant offering healthy Kerala breakfast spreads, authentic lunchtime sadyas, and wholesome multi-cuisine dinners."
      }
    ],
    specialties: [
      "Monumental convention infrastructure hosting international medical and corporate conferences",
      "Serene, pollution-free green setting behind the Jawaharlal Nehru Stadium",
      "Expansive two-bedroom suites offering residential comfort for families",
      "Massive on-premise parking accommodating over 300 private vehicles effortlessly"
    ],
    highlights: [
      "Spacious apartment-style executive suites",
      "Semi-indoor swimming pool & gym",
      "Convention halls for up to 1,000 guests",
      "350m to JLN Stadium Metro Station",
      "Massive 300+ car private parking facility"
    ],
    locationHighlights: [
      { place: "JLN Stadium Metro Station", distance: "350 m", time: "4 min walk", note: "Rapid transit link to city and airport" },
      { place: "Jawaharlal Nehru Stadium", distance: "100 m", time: "1 min walk", note: "Historic sports stadium and concert arena" },
      { place: "Ernakulam Town (North) Station", distance: "2.2 km", time: "6 min drive", note: "Quick rail connectivity" },
      { place: "Lulu International Mall", distance: "4.8 km", time: "10 min drive", note: "Direct 4-stop metro ride" },
      { place: "Cochin International Airport (COK)", distance: "26 km", time: "40 min drive", note: "Convenient access via Seaport-Airport road" }
    ],
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    petPolicy: "Pets are strictly not allowed",
    cancellationNote: "Free cancellation up to 48 hours prior to arrival for MakeMyKerala travellers",
    mapQuery: "IMA House, Stadium Link Road, Kaloor, Kochi",
    makeMyKeralaPerks: [
      "Special discounted conference and group booking packages",
      "Complimentary Wi-Fi with dedicated corporate bandwidth",
      "Dedicated group logistics and bus transfer coordination",
      "Direct MakeMyKerala 24/7 destination specialist support"
    ]
  },
  {
    id: "millennium-continental",
    slug: "millennium-continental",
    name: "Millennium Continental",
    tagline: "Bustling downtown shopping, timeless hospitality & quiet comfort off MG Road",
    category: "Central Commercial & Shoppers Business Hotel",
    starRating: 3,
    userRating: 4.0,
    reviewsCount: 760,
    startingPrice: "₹2,400",
    priceLabel: "Starting from ₹2,400 / night",
    locality: "M.G. Road / Shenoys",
    address: "Narakathara Road, Off M.G. Road, Opp. Shenoys Theatre, Ernakulam, Kochi, Kerala 682035",
    phone: "+91 484 235 4444",
    email: "info@millenniumcontinental.com",
    website: "https://millenniumcontinental.com",
    heroImage: "/images/hotels/millennium-continental/exterior.webp",
    heroImageSm: "/images/hotels/millennium-continental/exterior-sm.webp",
        gallery: [
      {
        src: "/images/hotels/millennium-continental/exterior.webp",
        alt: "Millennium Continental white building with iconic tensile canopy entrance",
        caption: "Signature tensile canopy entrance off bustling MG Road"
      },
      {
        src: "/images/hotels/millennium-continental/exterior-detail.webp",
        alt: "Millennium Continental canopy architecture and entrance porch",
        caption: "Distinctive architectural canopy and hotel frontage"
      },
      {
        src: "/images/destinations/kochi-600.webp",
        alt: "Shenoys Junction on MG Road and Marine Drive nearby",
        caption: "Shenoys Junction shopping district and Marine Drive promenade"
      }
    ],
    overview: "Tucked peacefully along Narakathara Road immediately opposite the landmark Shenoys Theatre on M.G. Road, Millennium Continental delivers an enviable blend of downtown vibrancy and tranquil rest. Recognizable by its distinctive architectural tensile entrance canopy, this commercial boutique hotel caters perfectly to retail enthusiasts, corporate business visitors, and holidaymakers wanting everything within effortless reach. Offering tastefully appointed rooms, multi-cuisine dining, and conference rooms, Millennium Continental places Kochi's best at your feet.",
    quickFacts: [
      { label: "Hotel Class", value: "3-Star City Hotel" },
      { label: "Total Keys", value: "40 Well-Appointed Rooms" },
      { label: "Check-in / Check-out", value: "12:00 PM / 12:00 PM" },
      { label: "Location", value: "Opposite Shenoys Theatre, MG Road" },
      { label: "Nearest Metro", value: "Shenoys / Maharajas (250m)" },
      { label: "Dining", value: "Continental Spices Restaurant" }
    ],
    rooms: [
      {
        name: "Standard Deluxe Room",
        description: "Cozy and practical downtown room featuring individual split air conditioning, comfortable queen bed, study desk, and private ensuite shower.",
        size: "220 sq.ft",
        capacity: "2 Adults",
        bed: "Queen Bed or Twin Beds",
        amenities: ["Split Air Conditioning", "Free High-speed Wi-Fi", "LCD Flat-screen TV", "Writing Desk", "24-hr Room Service", "Daily Housekeeping"]
      },
      {
        name: "Executive Room",
        description: "Upgraded guestroom with richer interior accents, comfortable seating chair, complimentary mineral water, electric kettle, and premium bath essentials.",
        size: "280 sq.ft",
        capacity: "2 Adults + 1 Child",
        bed: "King Bed",
        amenities: ["High-speed Wi-Fi", "Air Conditioning", "Smart TV", "Tea & Coffee Station", "Electronic Safe", "Complimentary Toiletries"]
      },
      {
        name: "Continental Suite",
        description: "Spacious corner suite offering a dedicated lounge area with sofa suite, master bedroom with orthopedic king bed, and upgraded bathroom amenities.",
        size: "420 sq.ft",
        capacity: "3 Adults or 2 Adults + 2 Children",
        bed: "King Bed",
        amenities: ["Separate Sitting Lounge", "High-speed Wi-Fi", "Two Smart TVs", "Mini Refrigerator", "Bathrobes", "Daily Fruit Basket"]
      }
    ],
    facilities: [
      { icon: "shopping", title: "Walk to MG Road Shopping", description: "Direct access to premier textile showrooms, jewellery stores, and electronics outlets" },
      { icon: "dining", title: "Continental Spices Restaurant", description: "All-day multi-cuisine dining serving Kerala, North Indian, and Chinese favorites" },
      { icon: "wifi", title: "Free High-Speed Wi-Fi", description: "Reliable wireless internet throughout guestrooms and public spaces" },
      { icon: "meetings", title: "Boardroom & Banquet Space", description: "Compact corporate meeting hall for presentations and family dinners up to 60 guests" },
      { icon: "desk", title: "24-Hour Front Desk", description: "Around-the-clock reception, express checkout, luggage hold, and taxi bookings" },
      { icon: "parking", title: "On-Site Parking", description: "Dedicated basement and surface parking with valet assistance" }
    ],
    dining: [
      {
        name: "Continental Spices",
        cuisine: "Kerala Specialties, North Indian & Chinese",
        type: "Multi-Cuisine Restaurant",
        timing: "07:00 AM - 10:30 PM",
        description: "Comforting restaurant offering traditional Kerala breakfast, midday business thalis, and flavorful tandoori grills and biryanis for dinner."
      }
    ],
    specialties: [
      "Superb location tucked just off M.G. Road behind Shenoys Theatre, eliminating traffic noise",
      "Immediate walking distance to Kochi's major gold, textile, and electronic shopping hubs",
      "Distinctive architectural tensile canopy entrance offering sheltered arrival",
      "Convenient 250m stroll to both Shenoys and Maharajas Metro stations"
    ],
    highlights: [
      "Prime location opposite Shenoys Theatre on MG Road",
      "250m to Metro Station",
      "Continental Spices multi-cuisine dining",
      "Quiet off-road setting with tensile canopy entrance",
      "Affordable rates starting from ₹2,400/night"
    ],
    locationHighlights: [
      { place: "Shenoys Theatre & MG Road", distance: "50 m", time: "1 min walk", note: "Historic multiplex cinema and prime shopping street" },
      { place: "Maharajas Metro Station", distance: "250 m", time: "3 min walk", note: "Rapid transit connection" },
      { place: "Ernakulam South Railway Station", distance: "1.2 km", time: "4 min drive", note: "Quick rail access" },
      { place: "Marine Drive Waterfront Promenade", distance: "1.6 km", time: "5 min drive", note: "Scenic harbor and ferry jetties" },
      { place: "Cochin International Airport (COK)", distance: "29 km", time: "45 min drive", note: "Direct city exit route to airport" }
    ],
    checkIn: "12:00 PM",
    checkOut: "12:00 PM",
    petPolicy: "Pets are not permitted on the premises",
    cancellationNote: "Cancellations up to 48 hours prior to arrival receive a full refund on MakeMyKerala bookings",
    mapQuery: "Millennium Continental, Narakathara Road, Shenoys, Kochi",
    makeMyKeralaPerks: [
      "Best rate guarantee on all room categories",
      "Complimentary bottled drinking water and Wi-Fi",
      "Assistance with shopping itineraries and local textile recommendations",
      "24/7 dedicated MakeMyKerala on-trip customer service"
    ]
  }
];

import { munnarHotels } from "./munnarHotels.js";
import { thekkadyHotels } from "./thekkadyHotels.js";
import { alleppeyHotels } from "./alleppeyHotels.js";
import { trivandrumHotels } from "./trivandrumHotels.js";
import { kumarakomHotels } from "./kumarakomHotels.js";
import { kovalamHotels } from "./kovalamHotels.js";
import { poovarHotels } from "./poovarHotels.js";
import { vagamonHotels } from "./vagamonHotels.js";
import { guruvayurHotels } from "./guruvayurHotels.js";
import { cochinAirportHotels } from "./cochinAirportHotels.js";
import { varkalaHotels } from "./varkalaHotels.js";
import { kannurHotels } from "./kannurHotels.js";
import { kozhikodeHotels } from "./kozhikodeHotels.js";
import { wayanadHotels } from "./wayanadHotels.js";
import { cheraiHotels } from "./cheraiHotels.js";
import { athirapallyHotels } from "./athirapallyHotels.js";
import { maduraiHotels } from "./maduraiHotels.js";
import { kanyakumariHotels } from "./kanyakumariHotels.js";
import { rameshwaramHotels } from "./rameshwaramHotels.js";
import { allTamilNaduHotels } from "./tamilNaduHotels.js";

export const kochiHotels = hotels.map((h) => ({
  destination: "kochi",
  destinationName: "Kochi",
  ...h
}));

export {
  munnarHotels,
  thekkadyHotels,
  alleppeyHotels,
  trivandrumHotels,
  kumarakomHotels,
  kovalamHotels,
  poovarHotels,
  vagamonHotels,
  guruvayurHotels,
  cochinAirportHotels,
  varkalaHotels,
  kannurHotels,
  kozhikodeHotels,
  wayanadHotels,
  cheraiHotels,
  athirapallyHotels,
  maduraiHotels,
  kanyakumariHotels,
  rameshwaramHotels,
  allTamilNaduHotels
};

export const allHotels = [
  ...kochiHotels,
  ...munnarHotels,
  ...thekkadyHotels,
  ...alleppeyHotels,
  ...trivandrumHotels,
  ...kumarakomHotels,
  ...kovalamHotels,
  ...poovarHotels,
  ...vagamonHotels,
  ...guruvayurHotels,
  ...cochinAirportHotels,
  ...varkalaHotels,
  ...kannurHotels,
  ...kozhikodeHotels,
  ...wayanadHotels,
  ...cheraiHotels,
  ...athirapallyHotels
];

export function getAllHotels() {
  return allHotels;
}

export function getKochiHotels() {
  return kochiHotels;
}

export function getMunnarHotels() {
  return munnarHotels;
}

export function getThekkadyHotels() {
  return thekkadyHotels;
}

export function getAlleppeyHotels() {
  return alleppeyHotels;
}

export function getTrivandrumHotels() {
  return trivandrumHotels;
}

export function getKumarakomHotels() {
  return kumarakomHotels;
}

export function getKovalamHotels() {
  return kovalamHotels;
}

export function getPoovarHotels() {
  return poovarHotels;
}

export function getVagamonHotels() {
  return vagamonHotels;
}

export function getGuruvayurHotels() {
  return guruvayurHotels;
}

export function getCochinAirportHotels() {
  return cochinAirportHotels;
}

export function getVarkalaHotels() {
  return varkalaHotels;
}

export function getKannurHotels() {
  return kannurHotels;
}

export function getKozhikodeHotels() {
  return kozhikodeHotels;
}

export function getWayanadHotels() {
  return wayanadHotels;
}

export function getCheraiHotels() {
  return cheraiHotels;
}

export function getAthirapallyHotels() {
  return athirapallyHotels;
}

const destinationListMap = {
  kochi: kochiHotels,
  munnar: munnarHotels,
  thekkady: thekkadyHotels,
  alleppey: alleppeyHotels,
  trivandrum: trivandrumHotels,
  kumarakom: kumarakomHotels,
  kovalam: kovalamHotels,
  poovar: poovarHotels,
  vagamon: vagamonHotels,
  guruvayur: guruvayurHotels,
  "cochin-airport": cochinAirportHotels,
  varkala: varkalaHotels,
  kannur: kannurHotels,
  kozhikode: kozhikodeHotels,
  wayanad: wayanadHotels,
  cherai: cheraiHotels,
  athirapally: athirapallyHotels,
  madurai: maduraiHotels,
  kanyakumari: kanyakumariHotels,
  rameshwaram: rameshwaramHotels
};

export function getHotelBySlug(slug, destination = "kochi") {
  const list = destinationListMap[destination] || kochiHotels;
  return list.find((hotel) => hotel.slug === slug) || allHotels.find((hotel) => hotel.slug === slug);
}

export function getRelatedHotels(currentSlug, limit = 3, destination = "kochi") {
  const list = destinationListMap[destination] || kochiHotels;
  return list
    .filter((hotel) => hotel.slug !== currentSlug)
    .slice(0, limit);
}
