/**
 * Vista Routeway - Interactive Travel Agency Engine
 * Head Office: Dhaka, Bangladesh
 * Email: vistarouteway@gmail.com
 */

// Tour Packages Database
const TOURS_DATA = [
  {
    id: "maldives-luxury",
    title: "Maldives Luxury Overwater Villa & Lagoon Escape",
    category: "honeymoon",
    type: "international",
    location: "Maldives (Male & Maafushi Atolls)",
    badge: "Popular Honeymoon",
    duration: "5 Days / 4 Nights",
    rating: 4.95,
    reviewsCount: 142,
    priceBdt: 145000,
    priceUsd: 1190,
    featuredImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Return Flights", "5★ Overwater Villa", "All-Inclusive Dining", "Private Speedboat", "Sunset Dolphin Cruise"],
    overview: "Experience the pinnacle of tropical indulgence with Vista Routeway. Stay in an overwater villa suspended over turquoise crystal lagoons, savor private beach candlelit dinners, and explore colorful coral reefs with professional marine guides.",
    itinerary: [
      { day: "Day 01", title: "Arrival in Velana International Airport (Male) & VIP Speedboat Transfer", details: "Warm welcome by Vista Routeway representative at Male airport. Board a luxury speedboat to your private island resort. Check-in to your Overwater Villa. Welcome cocktails and sunset cocktail party by the beach." },
      { day: "Day 02", title: "Coral Reef Snorkeling Safari & Dolphin Spotting Cruise", details: "Gourmet champagne breakfast on your private sundeck. Guided marine snorkeling excursion to meet sea turtles, manta rays, and vibrant reef fish. Evening catamaran cruise accompanied by pods of spinner dolphins." },
      { day: "Day 03", title: "Sandbank Picnic & Watersports Adventure", details: "Exclusive private speed excursion to an isolated sandbank surrounded by pristine turquoise ocean. Includes beach umbrella setup and gourmet seafood lunch. Optional jet ski, parasailing, and sea bobbing." },
      { day: "Day 04", title: "Overwater Spa Therapy & 5-Course Beach Candlelight Dinner", details: "Rejuvenating 90-minute Balinese aroma massage at the glass-bottom spa pavilion. Relax at the infinity pool. In the evening, a romantic private candlelight dinner under the tropical stars right on the white sands." },
      { day: "Day 05", title: "Male City Souvenir Walk & Departure to Dhaka", details: "Breakfast with panoramic ocean views. Check out and speedboat transfer back to Male. Short cultural walk visiting the Sultan Park and Grand Friday Mosque, followed by duty-free shopping before your return flight to Dhaka." }
    ],
    inclusions: [
      "Return economy/business airfare from Dhaka (DAC) to Male (MLE)",
      "4 Nights in a 5-Star Private Overwater Villa with direct lagoon access",
      "All meals included (Daily Breakfast, Lunch & Dinner with beverages)",
      "Roundtrip luxury speed-boat / seaplane transfers",
      "Guided coral snorkeling safari equipment and dolphin cruise",
      "Special honeymoon cake, floral bed decor & fruit basket",
      "All Maldivian Green taxes & service charges included"
    ],
    exclusions: [
      "Personal expenses, telephone, and laundry",
      "Scuba diving certification dives",
      "Travel insurance (can be added on request)"
    ]
  },
  {
    id: "dubai-extravaganza",
    title: "Dubai Extravaganza, Desert Safari & Abu Dhabi Grandeur",
    category: "luxury",
    type: "international",
    location: "United Arab Emirates (Dubai & Abu Dhabi)",
    badge: "Best Seller",
    duration: "6 Days / 5 Nights",
    rating: 4.92,
    reviewsCount: 238,
    priceBdt: 88500,
    priceUsd: 725,
    featuredImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    highlights: ["UAE Tourist Visa", "Burj Khalifa 124th Floor", "4x4 Desert Safari", "Marina Dhow Cruise", "Abu Dhabi Day Tour"],
    overview: "From the world's tallest skyscraper to the golden dunes of the Arabian desert, Vista Routeway delivers an ultra-luxurious Dubai holiday featuring prime downtown hotels, thrilling dune bashing, and high-end cultural experiences.",
    itinerary: [
      { day: "Day 01", title: "Arrive in Dubai & Marina Luxury Dhow Cruise with Dinner", details: "Arrival at Dubai International Airport (DXB). Private luxury chauffeur transfer to your 4★/5★ downtown hotel. Evening boarding on a 5-star glass Dhow cruise through Dubai Marina with an international buffet and live Tanoura dance show." },
      { day: "Day 02", title: "Iconic Dubai City Tour & Burj Khalifa At The Top (124th Fl)", details: "Guided panoramic city tour: Dubai Frame photo-stop, Jumeirah Beach, Burj Al Arab, and Palm Jumeirah. Afternoon fast-track entry to Burj Khalifa 124th & 125th floor observation deck followed by the famous Dubai Fountain show." },
      { day: "Day 03", title: "Red Dunes 4x4 Desert Safari, Camel Ride & BBQ Gala", details: "Morning leisure for shopping at Dubai Mall. Afternoon pickup in high-powered 4WD Land Cruisers for thrilling dune bashing in the Lahbab red dunes. Sandboarding, camel rides, Arabic Henna, and a BBQ dinner buffet with belly dance performance." },
      { day: "Day 04", title: "Abu Dhabi Full Day Tour: Sheikh Zayed Mosque & Ferrari World", details: "Scenic drive along the Arabian Gulf to the UAE capital. Guided visit to the breathtaking Sheikh Zayed Grand Mosque, drive through Corniche, Emirates Palace photo-op, and photo stop at Ferrari World Abu Dhabi / Yas Island." },
      { day: "Day 05", title: "Miracle Garden / Global Village & Gold Souk Shopping", details: "Visit the world's largest natural flower garden (Miracle Garden) or evening exploration of cultural pavilions at Global Village. Tour traditional Gold & Spice Souks via traditional wooden Abra boat across Dubai Creek." },
      { day: "Day 06", title: "Last Minute Duty-Free & Return to Dhaka", details: "Hearty breakfast at hotel, late check-out option. Private luxury transfer to Dubai airport for your flight back home to Dhaka with unforgettable memories." }
    ],
    inclusions: [
      "UAE 30-Day Single Entry Tourist Visa with full processing from Dhaka",
      "5 Nights accommodation in 4-Star/5-Star luxury hotel with daily buffet breakfast",
      "Return flights between Dhaka and Dubai",
      "Burj Khalifa 124th floor non-prime ticket included",
      "Red Dunes 4x4 Desert Safari with BBQ Dinner & live performances",
      "Dubai Marina Luxury Dhow Cruise dinner with hotel transfers",
      "Full-day guided Abu Dhabi City Tour in private AC coach",
      "All airport and sightseeing transfers on private/SIC basis"
    ],
    exclusions: [
      "Dubai Tourism Dirham fee (payable directly at hotel check-in)",
      "Meals not specified in the inclusions",
      "Gratuities for drivers and guides"
    ]
  },
  {
    id: "bali-paradise",
    title: "Bali Tropical Paradise, Nusa Penida & Ubud Pool Villa",
    category: "honeymoon",
    type: "international",
    location: "Bali, Indonesia (Ubud, Nusa Penida & Seminyak)",
    badge: "Trending",
    duration: "6 Days / 5 Nights",
    rating: 4.88,
    reviewsCount: 164,
    priceBdt: 78000,
    priceUsd: 640,
    featuredImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Return Flights", "Private Pool Villa", "Nusa Penida Island", "Ubud Bali Swing", "Uluwatu Sunset Temple"],
    overview: "Immerse yourself in Bali's lush emerald rice terraces, cliffside ocean vistas, and sacred temples. Relax in your private pool villa and take a high-speed catamaran to Nusa Penida's world-famous T-Rex cliff (Kelingking Beach).",
    itinerary: [
      { day: "Day 01", title: "Arrive in Denpasar Bali & Check-in to Ubud Rainforest Villa", details: "Arrival at Ngurah Rai International Airport. Traditional Balinese flower garland greeting by Vista Routeway guide. Scenic transfer to Ubud rainforest resort. Evening at leisure listening to jungle serenity." },
      { day: "Day 02", title: "Tegallalang Rice Terraces, Aloha Bali Swing & Kintamani Volcano", details: "Visit the iconic Tegallalang terraced rice paddies. Fly over the jungle on the thrilling Bali Swing. Panoramic lunch view of Mount Batur Volcano and Lake Batur, followed by a local Luwak coffee plantation tasting." },
      { day: "Day 03", title: "Nusa Penida West Coast Island Day Tour", details: "Early morning speed catamaran to Nusa Penida Island. Visit the awe-inspiring Kelingking T-Rex Beach, Broken Beach, and Angel's Billabong natural infinity pool. Snorkel with crystal clear sea life before returning to mainland Bali." },
      { day: "Day 04", title: "Transfer to Seminyak, Tanah Lot & Uluwatu Sunset Temple", details: "Check-out from Ubud and check-in to coastal luxury hotel in Seminyak. Afternoon excursion to Tanah Lot sea temple, then head to the dramatic 70-meter Uluwatu cliff to witness the legendary Kecak Fire Dance at golden hour." },
      { day: "Day 05", title: "Tanjung Benoa Watersports & Jimbaran Bay Seafood Dinner", details: "Morning water adventure at Tanjung Benoa (Banana Boat & parasailing). Afternoon leisure for beach club lounging or shopping in Seminyak. Evening romantic candlelit grilled seafood dinner right on Jimbaran beach." },
      { day: "Day 06", title: "Balinese Spa & Farewell Flight to Dhaka", details: "Relax with a traditional 60-minute Balinese oil massage. Pick up handicrafts and souvenirs at Kuta art market. Chauffeur transfer to airport for your flight back to Dhaka." }
    ],
    inclusions: [
      "Return airfare from Dhaka to Bali (Denpasar) with transit",
      "3 Nights in Ubud Boutique Pool Villa + 2 Nights in Seminyak Beach Resort",
      "Daily international and authentic Indonesian breakfast",
      "Fast boat transfer to Nusa Penida Island with private island jeep tour",
      "Ubud Bali Swing and Tegallalang admission tickets",
      "Uluwatu Temple & Kecak Dance show admission",
      "Private AC transport with English-speaking licensed guide"
    ],
    exclusions: [
      "Indonesia Visa on Arrival fee ($35 USD) payable at airport counter",
      "Personal shopping and water sports not listed above",
      "Tips for local guide and driver"
    ]
  },
  {
    id: "thailand-combo",
    title: "Thailand Grand Explorer: Bangkok City & Phuket Island",
    category: "family",
    type: "international",
    location: "Thailand (Bangkok & Phuket)",
    badge: "Family Favorite",
    duration: "7 Days / 6 Nights",
    rating: 4.85,
    reviewsCount: 310,
    priceBdt: 62500,
    priceUsd: 510,
    featuredImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Direct Flights", "Thailand E-Visa", "Phi Phi Island Cruise", "Chao Phraya Cruise", "Safari World & Marine Park"],
    overview: "The ultimate combination of vibrant city shopping in Bangkok and sun-soaked island adventures in Phuket. Includes Phi Phi Island speed catamaran, Safari World wildlife show, and luxury dinner cruise on the Chao Phraya River.",
    itinerary: [
      { day: "Day 01", title: "Fly Dhaka to Bangkok & Chao Phraya Luxury Dinner Cruise", details: "Direct flight from Dhaka to Suvarnabhumi Airport. Private transfer to hotel. In the evening, board the White Orchid / Chao Phraya Princess cruise for an international buffet dinner with live saxophone and illuminated views of Wat Arun." },
      { day: "Day 02", title: "Safari World & Marine Park Full-Day Family Adventure", details: "Exciting drive through the open Safari Park where lions and giraffes roam free. Enjoy dolphin shows, sea lion comedy, spy war stunt shows, and open-air international buffet lunch." },
      { day: "Day 03", title: "Domestic Flight to Phuket & Patong Sunset Beach", details: "Morning flight from Bangkok to Phuket Island. Chauffeur transfer to your resort in Patong Beach. Free afternoon to swim, explore Bangla Road, or relax with fresh coconuts." },
      { day: "Day 04", title: "Phi Phi Island, Maya Bay & Khai Island Speedboat Tour", details: "Full-day premium speedboat tour: Visit legendary Maya Bay (from The Beach), Viking Cave, Monkey Beach, and snorkel with exotic tropical fish in emerald waters. Beachside buffet lunch included." },
      { day: "Day 05", title: "Phuket Big Buddha, Wat Chalong & Promthep Cape Sunset", details: "Half-day island tour visiting the monumental 45-meter marble Big Buddha with 360-degree views, historic Wat Chalong temple, and panoramic sunset viewpoint at Promthep Cape." },
      { day: "Day 06", title: "Return Flight to Bangkok & Mega Shopping Extravaganza", details: "Fly back to Bangkok. Dedicated shopping day at CentralWorld, Siam Paragon, Platinum Fashion Mall, and MBK Center for branded and wholesale fashion bargains." },
      { day: "Day 07", title: "Bangkok Souvenirs & Return to Dhaka", details: "Breakfast at hotel. Last-minute souvenir shopping before smooth airport transfer for your direct return flight to Dhaka." }
    ],
    inclusions: [
      "Return international flights Dhaka - Bangkok - Dhaka + domestic Bangkok - Phuket flights",
      "Thailand tourist e-visa assistance and documentation from Dhaka",
      "3 Nights in 4-Star Bangkok hotel + 3 Nights in 4-Star Phuket resort",
      "Phi Phi Island Speedboat tour with national park fees and buffet lunch",
      "Safari World & Marine Park with entry tickets and lunch",
      "Chao Phraya luxury dinner cruise with live entertainment",
      "All transfers in private/SIC AC minivans"
    ],
    exclusions: [
      "Personal shopping and luggage overweight",
      "Optional water sports at Phi Phi (parasailing, scuba)",
      "Tips and hotel security deposits"
    ]
  },
  {
    id: "coxs-bazar-deluxe",
    title: "Cox's Bazar Sea Breeze & Saint Martin Coral Island",
    category: "domestic",
    type: "domestic",
    location: "Cox's Bazar & Saint Martin's Island, Bangladesh",
    badge: "Domestic Highlight",
    duration: "5 Days / 4 Nights",
    rating: 4.93,
    reviewsCount: 425,
    priceBdt: 24500,
    priceUsd: 200,
    featuredImage: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=1200&q=80",
    highlights: ["5★ Sea Pearl / Sayeman", "Marine Drive Chander Gari", "Saint Martin Cruise", "Himchari & Inani Beach", "Fresh Seafood BBQ"],
    overview: "Experience Bangladesh's crowning natural jewel with Vista Routeway. Discover the world's longest unbroken natural sea beach in style, ride an open-air 4x4 Chander Gari along Marine Drive, and cruise to Saint Martin's coral island.",
    itinerary: [
      { day: "Day 01", title: "Dhaka to Cox's Bazar & Sunset at Kolatoli Beach", details: "Depart Dhaka via luxury AC sleeper coach (or domestic flight upgrade). Arrive at Cox's Bazar and check-in to your 5-Star beach-facing resort (Sayeman Beach Resort / Sea Pearl Water Park). Enjoy evening sunset stroll and beachside coconut water." },
      { day: "Day 02", title: "Marine Drive Scenic Drive, Himchari Waterfall & Inani Coral Beach", details: "Private reserved Chander Gari drive on the stunning Marine Drive road with green hills on one side and the Bay of Bengal on the other. Climb Himchari hilltop for panoramic ocean views. Explore natural coral formations at Inani Beach." },
      { day: "Day 03", title: "Luxury Sea Truck Cruise to Saint Martin's Coral Island", details: "Early morning transfer to Teknaf/Cox's Bazar jetty. Board luxury sea cruise vessel to Saint Martin's Island. Check-in to beachfront eco-resort. Stroll through coconut groves and witness the magical starry night sky." },
      { day: "Day 04", title: "Chhera Dwip Excursion & Beachside Lobster BBQ", details: "Speedboat or wooden trawler tour to the southernmost tip of Bangladesh: Chhera Dwip. Walk on living corals in crystal-clear water. Evening fresh red snapper and lobster BBQ dinner on the beach with acoustic music." },
      { day: "Day 05", title: "Radiant Fish World, Burmese Market Shopping & Return to Dhaka", details: "Return sea cruise to Cox's Bazar. Visit Radiant Fish World aquarium and the bustling Burmese Market for dry fish, traditional pickles, and handloom lungis. Board luxury coach for return journey to Dhaka." }
    ],
    inclusions: [
      "Return journey from Dhaka via Scania/Hyundai AC Sleeper Coach (Flight upgrade available)",
      "2 Nights at 5-Star Hotel in Cox's Bazar + 2 Nights in Saint Martin beachfront cottage",
      "Daily buffet breakfast at resort",
      "Saint Martin luxury sea vessel cruise roundtrip ticket",
      "Private open-air Chander Gari for Marine Drive, Himchari & Inani tours",
      "Chhera Dwip boat tour ticket and island transfer",
      "Experienced Vista Routeway Dhaka tour manager assistance"
    ],
    exclusions: [
      "Lunches and dinners (except specified beach BBQ night)",
      "Water scooter and parasailing fees at Laboni/Inani",
      "Personal tips and market purchases"
    ]
  },
  {
    id: "sajek-valley-adventure",
    title: "Sajek Valley Kingdom of Clouds & Bandarban Highlands",
    category: "domestic",
    type: "domestic",
    location: "Rangamati & Khagrachari, Bangladesh",
    badge: "Nature & Adventure",
    duration: "4 Days / 3 Nights",
    rating: 4.90,
    reviewsCount: 380,
    priceBdt: 14500,
    priceUsd: 120,
    featuredImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Cloud-Facing Eco Resort", "4x4 Army Escort Chander Gari", "Konglak Para Trek", "Helipad Sunset", "Alutila Mysterious Cave"],
    overview: "Touch the clouds in Sajek Valley, the 'Roof of Bengal'. Wake up to an ocean of white mist floating right beneath your balcony, trek to Konglak Para, and explore the ancient mysterious Alutila Cave in Khagrachari.",
    itinerary: [
      { day: "Day 01", title: "Overnight Scenic Journey from Dhaka to Khagrachari", details: "Evening departure from Dhaka in reserved AC coach. Comfortable highway ride through Chittagong highlands with arrival in Khagrachari hill town early morning." },
      { day: "Day 02", title: "Army Escort into Sajek Valley & Sunset at Helipad", details: "Traditional hill-tracts breakfast in Khagrachari. Board reserved 4x4 Chander Gari for the thrilling rollercoaster ride under military convoy escort into Sajek Valley. Check-in to hilltop resort (Runmoy / Meghpunji). Evening sunset gathering at Sajek Helipad." },
      { day: "Day 03", title: "Ocean of Clouds, Konglak Peak Trek & Lusai Cultural Night", details: "Early morning 5:30 AM wake up to witness the breathtaking cloud ocean rolling below the peaks. Trek to Konglak Para (the highest summit of Sajek) for panoramic mountain vistas. Evening campfire and bamboo chicken BBQ with Lusai tribal dance." },
      { day: "Day 04", title: "Alutila Mysterious Cave, Risang Falls & Return to Dhaka", details: "Descend from Sajek Valley under morning escort. Explore the pitch-black 100-meter Alutila Cave holding traditional bamboo torches. Visit scenic Risang Waterfall and Tareng viewpoint. Board evening AC coach back to Dhaka." }
    ],
    inclusions: [
      "Dhaka - Khagrachari - Dhaka return AC coach tickets",
      "2 Nights in premium cloud-facing resort in Sajek Valley + Day room in Khagrachari",
      "Reserved 4x4 Chander Gari for the entire Sajek and Khagrachari tour",
      "All entry fees (Sajek, Konglak, Alutila Cave with flaming bamboo torches, Risang Falls)",
      "Daily breakfast and special Bamboo Chicken dinner",
      "Dedicated local tour guide and 24/7 coordinator"
    ],
    exclusions: [
      "Personal food orders and snacks",
      "Zip-line or tribal craft purchases",
      "Tips for Chander Gari driver"
    ]
  },
  {
    id: "umrah-vip",
    title: "Premium VIP Umrah Package: Makkah & Madinah (14 Days)",
    category: "spiritual",
    type: "spiritual",
    location: "Saudi Arabia (Makkah Al-Mukarramah & Al-Madinah)",
    badge: "Spiritual Journey",
    duration: "14 Days / 13 Nights",
    rating: 4.98,
    reviewsCount: 195,
    priceBdt: 175000,
    priceUsd: 1435,
    featuredImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Haram-Facing 5★ Hotel", "Direct Flights (Biman/Saudia)", "Private VIP GMC Transfer", "Historical Ziyarah", "Expert Moallim Guide"],
    overview: "Perform your holy Umrah with supreme spiritual serenity, dignity, and comfort. Vista Routeway provides 5-star hotels situated directly adjacent to the Haram courtyard, high-speed Haramain train tickets, and complete religious guidance.",
    itinerary: [
      { day: "Day 01", title: "Direct Flight Dhaka to Jeddah & Perform Holy Umrah", details: "Depart Hazrat Shahjalal International Airport (DAC) on direct Saudia/Biman flight. Put on Ihram at Miqat. Land at King Abdulaziz Airport Jeddah, fast-track VIP immigration, private GMC transfer to Makkah 5-star hotel (<100m from Haram). Perform Umrah with our scholar guide." },
      { day: "Days 02-07", title: "Daily Prayers in Masjid Al-Haram & Holy Makkah Ziyarah", details: "Dedicated time for continuous prayers, Tawaf, and Quran recitation. Full-day private Ziyarah tour covering Jabal Al-Noor (Cave of Hira), Cave of Thawr, Mina, Arafat, and Muzdalifah with scholarly historical explanations." },
      { day: "Day 08", title: "Haramain High-Speed Bullet Train to Madinah Al-Munawwarah", details: "Perform farewell Tawaf. Board the ultra-modern Haramain bullet train across the desert to Madinah in just 2 hours. Check-in to 5-star luxury hotel steps away from the Prophet's Mosque (PBUH)." },
      { day: "Days 09-13", title: "Prayers in Prophet's Mosque, Rawdah Sharif & Madinah Ziyarah", details: "Offer prayers in the Prophet's Mosque. Scheduled entry to Rawdah Sharif with our coordinator. Comprehensive historical Ziyarah to Masjid Quba (first mosque in Islam), Mount Uhud, and Seven Mosques." },
      { day: "Day 14", title: "Zamzam Water & Return Flight from Madinah to Dhaka", details: "Perform final salam at the Prophet's Mosque. Receive complimentary 5-liter sealed Zamzam water container. VIP transfer to Prince Mohammad Bin Abdulaziz Airport Madinah for direct flight home to Dhaka." }
    ],
    inclusions: [
      "Saudi Umrah electronic visa with mandatory medical insurance",
      "Direct return flights (Dhaka - Jeddah / Madinah - Dhaka)",
      "7 Nights in Makkah 5★ Hotel (Clock Tower / Pullman Zamzam) & 6 Nights in Madinah 5★ Hotel",
      "Daily gourmet buffet breakfast",
      "Private VIP AC transfer (GMC Yukon / luxury bus) Jeddah - Makkah - Madinah - Airport",
      "High-speed Haramain Bullet Train ticket",
      "Complete historical Ziyarah in Makkah & Madinah",
      "Free 5-Liter Zamzam water can per pilgrim"
    ],
    exclusions: [
      "Lunch and dinner meals not specified",
      "Wheelchair or porter charges inside Haram",
      "Personal laundry and international roaming calls"
    ]
  },
  {
    id: "kashmir-paradise",
    title: "Kashmir Heaven on Earth, Gulmarg Snow & Dal Lake Houseboat",
    category: "international",
    type: "international",
    location: "Kashmir (Srinagar, Gulmarg, Pahalgam & Sonmarg)",
    badge: "Scenic Wonder",
    duration: "8 Days / 7 Nights",
    rating: 4.89,
    reviewsCount: 220,
    priceBdt: 65000,
    priceUsd: 530,
    featuredImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Luxury Houseboat Stay", "Gulmarg Gondola Phase 1 & 2", "Dal Lake Shikara", "Betaab Valley Pahalgam", "Kashmiri Wazwan Feast"],
    overview: "Witness why Mughal Emperor Jahangir declared: 'If there is a paradise on earth, it is here, it is here, it is here.' Glide across Dal Lake in wooden Shikaras, ride Asia's highest cable car in snow-clad Gulmarg, and walk through fragrant saffron fields.",
    itinerary: [
      { day: "Day 01", title: "Fly Dhaka to Delhi to Srinagar & Sunset Shikara on Dal Lake", details: "Flight from Dhaka to Srinagar via Delhi. Chauffeur transfer to handcrafted cedarwood Luxury Houseboat floating on Dal Lake. Enjoy 1-hour sunset Shikara ride across floating lotus gardens and water markets." },
      { day: "Day 02", title: "Mughal Gardens of Srinagar & Shankaracharya Temple", details: "Explore historic Shalimar Bagh, Nishat Bagh, and Chashme Shahi terraced royal gardens. Visit hilltop Shankaracharya Temple overlooking the entire Kashmir Valley. Authentic Kashmiri Wazwan lunch." },
      { day: "Day 03", title: "Gulmarg Meadow of Flowers & Gondola Cable Car Ride", details: "Scenic drive through pine forests to Gulmarg (2,730m). Ride the world's second-highest operating cable car (Gulmarg Gondola) to Phase 1 (Kongdoori) and Phase 2 (Apharwat Peak at 13,780 ft) for snow activities and skiing." },
      { day: "Day 04", title: "Pahalgam Valley of Shepherds & Saffron Fields of Pampore", details: "Drive through Pampore's purple saffron fields and Avantipur ruins. Arrive in Pahalgam on the banks of Lidder River. Walk through pine forests and relax in riverside luxury resort." },
      { day: "Day 05", title: "Betaab Valley, Chandanwari & Aru Valley Tour", details: "Take local mountain jeep to scenic Betaab Valley (named after the Bollywood classic), Chandanwari snow point, and pristine Aru Valley. Enjoy horseback riding through alpine meadows." },
      { day: "Day 06", title: "Sonmarg Meadow of Gold & Thajiwas Glacier", details: "Day excursion to Sonmarg. Walk or pony ride to the majestic Thajiwas Glacier. Marvel at sparkling snow mountains and roaring Sindh river before returning to Srinagar." },
      { day: "Day 07", title: "Old Srinagar Heritage Walk & Pashmina Handicraft Shopping", details: "Visit Jamia Masjid, historic wooden bridge over Jhelum, and shop for world-famous Kashmiri Pashmina shawls, walnut wood carvings, and pure saffron." },
      { day: "Day 08", title: "Farewell Srinagar & Flight Return to Dhaka", details: "Morning cup of traditional Kashmiri Kahwa tea. Transfer to Srinagar airport for your return flight back home to Dhaka." }
    ],
    inclusions: [
      "Return international and domestic flights from Dhaka to Srinagar",
      "2 Nights in Deluxe Dal Lake Houseboat + 3 Nights in Srinagar Hotel + 2 Nights in Pahalgam Resort",
      "Daily breakfast and dinner (including traditional Wazwan course)",
      "Gulmarg Gondola cable car ticket (Phase 1)",
      "Romantic 1-hour Shikara ride on Dal Lake",
      "All sightseeing and intercity transfers in private AC vehicle"
    ],
    exclusions: [
      "Indian Tourist Visa fee & IVAC appointment fee",
      "Gondola Phase 2 ticket & horse riding fees",
      "Personal warm clothing rental (jackets/boots in Gulmarg)"
    ]
  },
  {
    id: "sreemangal-sylhet",
    title: "Sreemangal Tea Capital & Sylhet Ratargul Freshwater Swamp",
    category: "domestic",
    type: "domestic",
    location: "Sreemangal & Sylhet, Bangladesh",
    badge: "Eco Retreat",
    duration: "4 Days / 3 Nights",
    rating: 4.87,
    reviewsCount: 290,
    priceBdt: 18500,
    priceUsd: 150,
    featuredImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Luxury Tea Estate Resort", "Ratargul Swamp Forest Boat", "Lawachara Rain Forest", "Jaflong Zero Point", "Famous 7-Layer Tea"],
    overview: "Immerse yourself in lush rolling hills covered in manicured tea gardens, trek under canopy rain forests searching for Hoolock Gibbons, and glide quietly on wooden boats through the 'Amazon of Bangladesh' at Ratargul Swamp.",
    itinerary: [
      { day: "Day 01", title: "Dhaka to Sreemangal & Walk in Rolling Tea Estates", details: "Morning departure from Dhaka via private AC vehicle. Scenic drive through lush countryside. Arrive in Sreemangal and check-in to your luxury resort (Grand Sultan / Dusai / Boutique Tea Eco-Cottage). Sip the legendary Nilkantha 7-layer tea." },
      { day: "Day 02", title: "Lawachara National Park Trail & Madhabpur Lotus Lake", details: "Guided morning wildlife trek inside Lawachara National Park rain forest. Spot rare hoolock gibbons and birds. In the afternoon, visit Madhabpur Lake bordered by wild blue lotuses and endless tea hillocks." },
      { day: "Day 03", title: "Transfer to Sylhet & Ratargul Freshwater Swamp Forest", details: "Drive to Sylhet. Board a traditional non-motorized wooden dinghy to explore Ratargul Swamp Forest, the only freshwater swamp forest in Bangladesh. Spot snakes, monkeys, and submerged koroch trees." },
      { day: "Day 04", title: "Jaflong Piyain River, Shah Jalal Mazar & Return to Dhaka", details: "Morning trip to Jaflong Zero Point where crystal-clear mountain streams flow from the Indian Meghalaya hills. Visit the historical Hazrat Shah Jalal Shrine in Sylhet city. Return journey to Dhaka by evening." }
    ],
    inclusions: [
      "Dhaka to Sreemangal to Sylhet to Dhaka reserved private AC Sedan / Noah microbus",
      "2 Nights at 4-Star/5-Star Tea Garden Resort in Sreemangal + 1 Night in Sylhet hotel",
      "Daily buffet breakfast",
      "Forest guide and entry tickets for Lawachara, Madhabpur, and Ratargul",
      "Traditional wooden boat tour in Ratargul swamp",
      "All highway tolls, fuel, and driver allowances included"
    ],
    exclusions: [
      "Lunch and dinner meals",
      "Speedboat hire at Jaflong",
      "Personal tea purchases at estate factories"
    ]
  },
  {
    id: "europe-dream",
    title: "European Grandeur: Paris, Swiss Alps & Italy (11 Days)",
    category: "luxury",
    type: "international",
    location: "France, Switzerland & Italy",
    badge: "Ultra Luxury",
    duration: "11 Days / 10 Nights",
    rating: 4.96,
    reviewsCount: 110,
    priceBdt: 285000,
    priceUsd: 2330,
    featuredImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Schengen Visa Concierge", "Eiffel Tower 2nd Floor", "Mount Titlis Rotair Cable Car", "Venice Gondola Ride", "Eurail High-Speed Train"],
    overview: "The quintessential luxury European holiday for discerning travelers from Bangladesh. Discover romantic Paris, journey through snow-covered Swiss Alpine peaks on high-speed trains, and marvel at the historic canals and Colosseum of Italy.",
    itinerary: [
      { day: "Days 01-03", title: "Paris, France: Louvre, Seine Cruise & Eiffel Tower", details: "Fly from Dhaka to Paris Charles de Gaulle. 3 nights in central boutique hotel. Guided Seine river cruise, priority access to Eiffel Tower 2nd level, Champs-Élysées stroll, and Mona Lisa tour at the Louvre Museum." },
      { day: "Days 04-06", title: "Swiss Alps: Lucerne, Lake Geneva & Mount Titlis Snow", details: "Scenic TGV train into Switzerland. Stay in Lucerne. Board the rotating Rotair cable car up Mount Titlis (10,000 ft) into perpetual glaciers, walk on the highest suspension bridge in Europe, and take a cruise on Lake Lucerne." },
      { day: "Days 07-10", title: "Italy: Milan Duomo, Venice Gondola & Rome Colosseum", details: "Cross the Alps to Milan, fashion capital of the world. Glide on private black gondolas through Venice's Grand Canal. Arrive in Rome to visit the Vatican Museums, St. Peter's Basilica, Trevi Fountain, and the monumental Colosseum." },
      { day: "Day 11", title: "Farewell Europe & Return Flight to Dhaka", details: "Breakfast at Roman hotel, tax-free luxury shopping at airport, and boarding return flight to Hazrat Shahjalal International Airport, Dhaka." }
    ],
    inclusions: [
      "Return international flights from Dhaka to Paris & Rome to Dhaka",
      "Complete Schengen Visa application paperwork, appointment booking, and flight/hotel reservation voucher support from Dhaka",
      "10 Nights in handpicked 4-Star city-center hotels with daily continental breakfast",
      "Eurail First-Class high-speed train pass connecting Paris, Switzerland & Italy",
      "Eiffel Tower, Mount Titlis cable car, and Venice private Gondola tickets",
      "24/7 dedicated European trip concierge support"
    ],
    exclusions: [
      "Schengen visa embassy fee payable at VFS Global Dhaka",
      "City tourist taxes (approx €3 - €6 per person per night)",
      "Lunch and dinner meals not specified"
    ]
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderPackages(TOURS_DATA);
  setupFilterTabs();
  setupSearchWidgets();
  setupItineraryModal();
  setupCostCalculator();
  setupVideoPlayers();
  setupFaqAccordion();
  setupContactForms();
  setupNavbarScroll();
  setupMobileMenu();
  setupCounters();
});

// Render Packages Cards
function renderPackages(tours) {
  const container = document.getElementById("packages-grid");
  if (!container) return;

  if (tours.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="inline-flex p-4 rounded-full bg-slate-100 text-slate-400 mb-4">
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 class="text-2xl font-bold text-slate-800">No Packages Found</h3>
        <p class="text-slate-600 mt-2">Try adjusting your search query or switching categories.</p>
        <button onclick="resetFilters()" class="mt-6 px-6 py-2.5 rounded-full bg-sky-600 text-white font-medium hover:bg-sky-700 transition">View All Packages</button>
      </div>
    `;
    return;
  }

  container.innerHTML = tours.map(tour => `
    <div class="tour-card bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col group">
      <!-- Image Header with Badges -->
      <div class="relative h-64 overflow-hidden">
        <img src="${tour.featuredImage}" alt="${tour.title}" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>
        
        <!-- Top Badges -->
        <div class="absolute top-4 left-4 flex gap-2 flex-wrap">
          <span class="px-3 py-1 rounded-full text-xs font-semibold tracking-wide badge-gold uppercase shadow-md">${tour.badge}</span>
          <span class="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-slate-900/80 backdrop-blur-md text-white border border-white/20 capitalize">${tour.type}</span>
        </div>

        <!-- Duration Tag -->
        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
          <svg class="w-3.5 h-3.5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          ${tour.duration}
        </div>

        <!-- Location Bottom Tag -->
        <div class="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between text-sm">
          <div class="flex items-center gap-1.5 font-medium truncate">
            <svg class="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span class="truncate drop-shadow">${tour.location}</span>
          </div>
          <div class="flex items-center gap-1 font-semibold text-amber-300 text-xs shrink-0 bg-slate-900/70 px-2 py-0.5 rounded-md">
            <span>★</span> ${tour.rating} <span class="text-slate-300 font-normal">(${tour.reviewsCount})</span>
          </div>
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="font-bold text-xl text-slate-900 line-clamp-2 hover:text-sky-600 transition-colors cursor-pointer" onclick="openItineraryModal('${tour.id}')">
            ${tour.title}
          </h3>
          <p class="text-slate-600 text-sm mt-2.5 line-clamp-2 leading-relaxed">
            ${tour.overview}
          </p>

          <!-- Key Amenities/Pills -->
          <div class="flex flex-wrap gap-1.5 mt-4">
            ${tour.highlights.slice(0, 3).map(h => `
              <span class="text-xs bg-sky-50 text-sky-800 font-medium px-2.5 py-1 rounded-md border border-sky-100 flex items-center gap-1">
                <svg class="w-3 h-3 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                ${h}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Pricing & Action Row -->
        <div class="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div class="text-xs uppercase tracking-wider text-slate-400 font-semibold">Starting From</div>
            <div class="flex items-baseline gap-1.5">
              <span class="text-2xl font-extrabold text-slate-900">৳${tour.priceBdt.toLocaleString()}</span>
              <span class="text-xs font-semibold text-slate-500">($${tour.priceUsd})</span>
            </div>
            <div class="text-[11px] text-slate-400">per person (all incl.)</div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="openItineraryModal('${tour.id}')" class="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition">
              Itinerary
            </button>
            <a href="https://wa.me/8801900000000?text=${encodeURIComponent(`Hello Vista Routeway! I am interested in booking the '${tour.title}' package (৳${tour.priceBdt.toLocaleString()}). Please provide departure dates and details.`)}" target="_blank" class="px-4 py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-sm hover:bg-sky-700 transition flex items-center gap-1.5 shadow-sm shadow-sky-600/30">
              <span>Book</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Category Tabs
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("bg-sky-600", "text-white", "shadow-md");
        t.classList.add("bg-slate-100", "text-slate-700", "hover:bg-slate-200");
      });
      tab.classList.remove("bg-slate-100", "text-slate-700", "hover:bg-slate-200");
      tab.classList.add("bg-sky-600", "text-white", "shadow-md");

      const category = tab.getAttribute("data-category");
      filterByCategory(category);
    });
  });
}

function filterByCategory(category) {
  if (category === "all") {
    renderPackages(TOURS_DATA);
  } else if (category === "international" || category === "domestic") {
    const filtered = TOURS_DATA.filter(t => t.type === category);
    renderPackages(filtered);
  } else {
    const filtered = TOURS_DATA.filter(t => t.category === category);
    renderPackages(filtered);
  }
}

function resetFilters() {
  const allTab = document.querySelector(".filter-btn[data-category='all']");
  if (allTab) allTab.click();
}

// Search and Quick Filter from Hero
function setupSearchWidgets() {
  const heroSearchBtn = document.getElementById("hero-search-btn");
  if (!heroSearchBtn) return;

  heroSearchBtn.addEventListener("click", () => {
    const destVal = document.getElementById("search-destination").value.toLowerCase().trim();
    const typeVal = document.getElementById("search-type").value.toLowerCase();
    
    let results = TOURS_DATA;

    if (destVal && destVal !== "all") {
      results = results.filter(t => 
        t.title.toLowerCase().includes(destVal) ||
        t.location.toLowerCase().includes(destVal) ||
        t.overview.toLowerCase().includes(destVal)
      );
    }

    if (typeVal && typeVal !== "all") {
      results = results.filter(t => t.category === typeVal || t.type === typeVal);
    }

    renderPackages(results);

    // Scroll smoothly to packages
    const pkgSection = document.getElementById("packages");
    if (pkgSection) {
      pkgSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Full Itinerary Modal System
function setupItineraryModal() {
  const modal = document.getElementById("itinerary-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = document.getElementById("modal-backdrop");

  if (!modal) return;

  const closeModal = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

function openItineraryModal(tourId) {
  const tour = TOURS_DATA.find(t => t.id === tourId);
  if (!tour) return;

  const modal = document.getElementById("itinerary-modal");
  const titleEl = document.getElementById("modal-tour-title");
  const metaEl = document.getElementById("modal-tour-meta");
  const overviewEl = document.getElementById("modal-tour-overview");
  const itineraryEl = document.getElementById("modal-tour-itinerary");
  const inclusionsEl = document.getElementById("modal-tour-inclusions");
  const exclusionsEl = document.getElementById("modal-tour-exclusions");
  const priceEl = document.getElementById("modal-tour-price");
  const bookBtn = document.getElementById("modal-book-btn");

  if (titleEl) titleEl.textContent = tour.title;
  if (metaEl) {
    metaEl.innerHTML = `
      <span class="inline-flex items-center gap-1 text-sky-600 font-semibold"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg> ${tour.location}</span>
      <span class="text-slate-300">•</span>
      <span class="font-medium text-slate-600">${tour.duration}</span>
      <span class="text-slate-300">•</span>
      <span class="text-amber-500 font-bold">★ ${tour.rating} (${tour.reviewsCount} reviews)</span>
    `;
  }
  if (overviewEl) overviewEl.textContent = tour.overview;

  if (itineraryEl) {
    itineraryEl.innerHTML = tour.itinerary.map(item => `
      <div class="relative pl-8 pb-6 border-l-2 border-sky-200 last:border-l-0 last:pb-0">
        <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-bold shadow-md ring-4 ring-white">✓</div>
        <div class="font-bold text-sky-900 text-sm tracking-wide uppercase">${item.day}: <span class="text-slate-900 normal-case font-semibold text-base">${item.title}</span></div>
        <p class="text-slate-600 text-sm mt-1.5 leading-relaxed">${item.details}</p>
      </div>
    `).join('');
  }

  if (inclusionsEl) {
    inclusionsEl.innerHTML = tour.inclusions.map(inc => `
      <li class="flex items-start gap-2 text-sm text-slate-700">
        <svg class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        <span>${inc}</span>
      </li>
    `).join('');
  }

  if (exclusionsEl) {
    exclusionsEl.innerHTML = tour.exclusions.map(exc => `
      <li class="flex items-start gap-2 text-sm text-slate-600">
        <svg class="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        <span>${exc}</span>
      </li>
    `).join('');
  }

  if (priceEl) {
    priceEl.innerHTML = `৳${tour.priceBdt.toLocaleString()} <span class="text-sm font-normal text-slate-500">($${tour.priceUsd}) / person</span>`;
  }

  if (bookBtn) {
    const waText = encodeURIComponent(`Hello Vista Routeway Dhaka! I want to confirm the booking for '${tour.title}' (৳${tour.priceBdt.toLocaleString()} per person). Please guide me with payment options and travel requirements.`);
    bookBtn.href = `https://wa.me/8801900000000?text=${waText}`;
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Interactive Trip Cost Calculator
function setupCostCalculator() {
  const destSelect = document.getElementById("calc-destination");
  const travelersInput = document.getElementById("calc-travelers");
  const hotelSelect = document.getElementById("calc-hotel");
  const daysInput = document.getElementById("calc-days");
  const visaCheckbox = document.getElementById("calc-visa");
  const flightsCheckbox = document.getElementById("calc-flights");
  const totalBdtEl = document.getElementById("calc-total-bdt");
  const totalUsdEl = document.getElementById("calc-total-usd");
  const waBtn = document.getElementById("calc-whatsapp-btn");

  if (!destSelect || !totalBdtEl) return;

  const calculate = () => {
    const dest = destSelect.value;
    const travelers = parseInt(travelersInput.value) || 1;
    const days = parseInt(daysInput.value) || 3;
    const hotelTier = hotelSelect.value;
    const includeVisa = visaCheckbox.checked;
    const includeFlights = flightsCheckbox.checked;

    // Base cost per day per person in BDT
    let baseDailyRate = 4500;
    let flightPerPerson = 0;
    let visaPerPerson = 0;

    switch (dest) {
      case "maldives":
        baseDailyRate = 22000;
        flightPerPerson = 42000;
        visaPerPerson = 0; // Free on arrival
        break;
      case "dubai":
        baseDailyRate = 12500;
        flightPerPerson = 48000;
        visaPerPerson = 11500;
        break;
      case "thailand":
        baseDailyRate = 8500;
        flightPerPerson = 32000;
        visaPerPerson = 5500;
        break;
      case "bali":
        baseDailyRate = 9500;
        flightPerPerson = 49000;
        visaPerPerson = 4200;
        break;
      case "kashmir":
        baseDailyRate = 7500;
        flightPerPerson = 28000;
        visaPerPerson = 3500;
        break;
      case "umrah":
        baseDailyRate = 14000;
        flightPerPerson = 75000;
        visaPerPerson = 18000;
        break;
      case "europe":
        baseDailyRate = 26000;
        flightPerPerson = 92000;
        visaPerPerson = 18500;
        break;
      case "coxsbazar":
        baseDailyRate = 4500;
        flightPerPerson = 8500;
        visaPerPerson = 0;
        break;
      case "sajek":
        baseDailyRate = 3500;
        flightPerPerson = 0;
        visaPerPerson = 0;
        break;
      case "sreemangal":
        baseDailyRate = 4000;
        flightPerPerson = 0;
        visaPerPerson = 0;
        break;
      default:
        baseDailyRate = 6000;
    }

    // Hotel multiplier
    let hotelMultiplier = 1.0;
    if (hotelTier === "3star") hotelMultiplier = 0.85;
    else if (hotelTier === "4star") hotelMultiplier = 1.15;
    else if (hotelTier === "5star") hotelMultiplier = 1.75;

    let subtotal = (baseDailyRate * hotelMultiplier * days * travelers);
    if (includeFlights) subtotal += (flightPerPerson * travelers);
    if (includeVisa) subtotal += (visaPerPerson * travelers);

    const travelersDisplay = document.getElementById("travelers-display");
    const daysDisplay = document.getElementById("days-display");
    if (travelersDisplay) travelersDisplay.textContent = `${travelers} ${travelers > 1 ? 'Adults' : 'Adult'}`;
    if (daysDisplay) daysDisplay.textContent = `${days} Days`;

    totalBdtEl.textContent = `৳${subtotal.toLocaleString()}`;
    totalUsdEl.textContent = `$${totalUsd.toLocaleString()} USD`;

    // Update WhatsApp link
    if (waBtn) {
      const summaryMsg = encodeURIComponent(
        `Hello Vista Routeway Dhaka! I calculated a customized trip on your website:\n` +
        `• Destination: ${dest.toUpperCase()}\n` +
        `• Travelers: ${travelers} Persons\n` +
        `• Duration: ${days} Days\n` +
        `• Hotel: ${hotelTier.toUpperCase()}\n` +
        `• Flight Included: ${includeFlights ? 'Yes' : 'No'}\n` +
        `• Visa Included: ${includeVisa ? 'Yes' : 'No'}\n` +
        `• Estimated Budget: ৳${subtotal.toLocaleString()} ($${totalUsd} USD)\n\n` +
        `Please provide a formal quote and available dates!`
      );
      waBtn.href = `https://wa.me/8801900000000?text=${summaryMsg}`;
    }
  };

  [destSelect, travelersInput, hotelSelect, daysInput, visaCheckbox, flightsCheckbox].forEach(el => {
    el.addEventListener("change", calculate);
    el.addEventListener("input", calculate);
  });

  calculate();
}

// Cinematic Video Controls
function setupVideoPlayers() {
  const heroVideo = document.getElementById("hero-video-player");
  const soundToggle = document.getElementById("hero-video-sound-toggle");

  if (heroVideo && soundToggle) {
    soundToggle.addEventListener("click", () => {
      heroVideo.muted = !heroVideo.muted;
      if (heroVideo.muted) {
        soundToggle.innerHTML = `
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>
          <span class="text-xs text-white">Muted</span>
        `;
      } else {
        soundToggle.innerHTML = `
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
          <span class="text-xs text-white">Sound On</span>
        `;
      }
    });
  }

  // Showcase modal trigger
  const openReelModalBtn = document.getElementById("open-reel-modal-btn");
  const reelModal = document.getElementById("reel-modal");
  const closeReelModalBtn = document.getElementById("reel-modal-close");
  const reelModalVideo = document.getElementById("reel-modal-video");

  if (openReelModalBtn && reelModal) {
    openReelModalBtn.addEventListener("click", () => {
      reelModal.classList.remove("hidden");
      if (reelModalVideo) {
        reelModalVideo.currentTime = 0;
        reelModalVideo.play();
      }
      document.body.style.overflow = "hidden";
    });

    const closeReel = () => {
      reelModal.classList.add("hidden");
      if (reelModalVideo) reelModalVideo.pause();
      document.body.style.overflow = "auto";
    };

    if (closeReelModalBtn) closeReelModalBtn.addEventListener("click", closeReel);
    reelModal.addEventListener("click", (e) => {
      if (e.target === reelModal) closeReel();
    });
  }
}

// FAQ Accordion
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (question && answer) {
      question.addEventListener("click", () => {
        const isOpen = !answer.classList.contains("hidden");
        // Close all
        faqItems.forEach(other => {
          other.querySelector(".faq-answer")?.classList.add("hidden");
          const otherIcon = other.querySelector(".faq-icon");
          if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
        });

        if (!isOpen) {
          answer.classList.remove("hidden");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    }
  });
}

// Contact Form Handling
function setupContactForms() {
  const contactForm = document.getElementById("contact-form");
  const toast = document.getElementById("notification-toast");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value;
      const phone = document.getElementById("contact-phone").value;
      const email = document.getElementById("contact-email").value;
      const destination = document.getElementById("contact-destination").value;
      const message = document.getElementById("contact-message").value;

      // Construct WhatsApp fallback option as well
      const waMsg = encodeURIComponent(
        `New Inquiry from Website:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDestination: ${destination}\nMessage: ${message}`
      );
      
      // Show visual confirmation
      if (toast) {
        toast.classList.remove("translate-y-24", "opacity-0");
        toast.classList.add("translate-y-0", "opacity-100");
        setTimeout(() => {
          toast.classList.remove("translate-y-0", "opacity-100");
          toast.classList.add("translate-y-24", "opacity-0");
        }, 5000);
      }

      contactForm.reset();

      // Open WhatsApp inquiry optionally
      window.open(`https://wa.me/8801900000000?text=${waMsg}`, "_blank");
    });
  }
}

// Sticky Navbar Scroll Effect
function setupNavbarScroll() {
  const navbar = document.getElementById("main-nav");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("glass-nav", "shadow-lg");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("glass-nav", "shadow-lg");
      navbar.classList.add("bg-transparent");
    }
  });
}

// Mobile Menu Drawer
function setupMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// Animated Statistics Counters
function setupCounters() {
  const counters = document.querySelectorAll(".counter-value");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute("data-target");
          const duration = 2000;
          const step = Math.ceil(target / (duration / 25));
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.textContent = current.toLocaleString();
            }
          }, 25);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById("stats-section");
  if (statsSection) observer.observe(statsSection);
}
