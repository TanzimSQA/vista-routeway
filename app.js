/**
 * Vista Routeway - Interactive Travel Agency Engine
 * Head Office: Dhaka, Bangladesh
 * Email: vistarouteway@gmail.com
 * Supports: English & Bangla Mode + Light & Dark/Night Mode
 */

// Tour Packages Database with English & Bengali Content
const TOURS_DATA = [

  {
    id: "maldives-luxury",
    title: "Maldives Luxury Overwater Villa & Lagoon Escape",
    title_bn: "মালদ্বীপ লাক্সারি ওভারওয়াটার ভিলা ও লেগুন এস্কেপ",
    category: "honeymoon",
    type: "international",
    location: "Maldives (Male & Maafushi Atolls)",
    location_bn: "মালদ্বীপ (মালে ও মাফুশি অ্যাটল)",
    badge: "Popular Honeymoon",
    badge_bn: "জনপ্রিয় হানিমুন",
    duration: "5 Days / 4 Nights",
    duration_bn: "৫ দিন / ৪ রাত",
    rating: 4.95,
    reviewsCount: 142,
    priceBdt: 145000,
    priceUsd: 1190,
    featuredImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Return Flights", "5★ Overwater Villa", "All-Inclusive Dining", "Private Speedboat", "Sunset Dolphin Cruise"],
    highlights_bn: ["রিটার্ন বিমান টিকিট", "৫★ ওভারওয়াটার ভিলা", "সম্পূর্ণ খাবার অন্তর্ভুক্ত", "প্রাইভেট স্পিডবোট", "সানসেট ডলফিন ক্রুজ"],
    overview: "Experience the pinnacle of tropical indulgence with Vista Routeway. Stay in an overwater villa suspended over turquoise crystal lagoons, savor private beach candlelit dinners, and explore colorful coral reefs with professional marine guides.",
    overview_bn: "স্বচ্ছ নীল সাগরের ওপর ভাসমান বিলাসবহুল ওভারওয়াটার ভিলা, সমুদ্রসৈকতে ক্যান্ডেললাইট ডিনার এবং প্রবাল প্রাচীরে ডাইভিং — ভিস্টা রুটওয়ের সাথে উপভোগ করুন স্বপ্নিল মালদ্বীপ সফর।",
    itinerary: [
      { day: "Day 01", title: "Arrival in Velana International Airport (Male) & VIP Speedboat Transfer", details: "Warm welcome by Vista Routeway representative at Male airport. Board a luxury speedboat to your private island resort. Check-in to your Overwater Villa. Welcome cocktails and sunset cocktail party by the beach." },
      { day: "Day 02", title: "Coral Reef Snorkeling Safari & Dolphin Spotting Cruise", details: "Gourmet champagne breakfast on your private sundeck. Guided marine snorkeling excursion to meet sea turtles, manta rays, and vibrant reef fish. Evening catamaran cruise accompanied by pods of spinner dolphins." },
      { day: "Day 03", title: "Sandbank Picnic & Watersports Adventure", details: "Exclusive private speed excursion to an isolated sandbank surrounded by pristine turquoise ocean. Includes beach umbrella setup and gourmet seafood lunch. Optional jet ski, parasailing, and sea bobbing." },
      { day: "Day 04", title: "Overwater Spa Therapy & 5-Course Beach Candlelight Dinner", details: "Rejuvenating 90-minute Balinese aroma massage at the glass-bottom spa pavilion. Relax at the infinity pool. In the evening, a romantic private candlelight dinner under the tropical stars right on the white sands." },
      { day: "Day 05", title: "Male City Souvenir Walk & Departure to Dhaka", details: "Breakfast with panoramic ocean views. Check out and speedboat transfer back to Male. Short cultural walk visiting the Sultan Park and Grand Friday Mosque, followed by duty-free shopping before your return flight to Dhaka." }
    ],
    itinerary_bn: [
      { day: "দিন ০১", title: "মালে আন্তর্জাতিক বিমানবন্দরে আগমন ও ভিআইপি স্পিডবোট ট্রান্সফার", details: "মালে বিমানবন্দরে ভিস্টা রুটওয়ে প্রতিনিধির উষ্ণ অভ্যর্থনা। লাক্সারি স্পিডবোটে প্রাইভেট আইল্যান্ড রিসোর্টে যাত্রা এবং ওভারওয়াটার ভিলায় চেক-ইন।" },
      { day: "দিন ০২", title: "কোরাল রিফ স্নরকেলিং সাফারি ও সানসেট ডলফিন ক্রুজ", details: "সকালে প্রাইভেট সানডেকে ব্রেকফাস্ট। অভিজ্ঞ গাইডের সাথে রঙিন কোরাল রিফ ও সামুদ্রিক কচ্ছপ দর্শন। বিকেলে সানসেট ক্যাটামারান ক্রুজ।" },
      { day: "দিন ০৩", title: "স্যান্ডব্যাংক পিকনিক ও রোমাঞ্চকর ওয়াটারস্পোর্টস", details: "স্বচ্ছ নীল সাগরের মাঝে নির্জন স্যান্ডব্যাংকে ভ্রমণ। সৈকতে স্পেশাল সি-ফুড লাঞ্চ এবং জেট-স্কি ও প্যারাসেইলিং এর সুযোগ।" },
      { day: "দিন ০৪", title: "ওভারওয়াটার স্পা থেরাপি ও সমুদ্রতীরে ক্যান্ডেললাইট ডিনার", details: "গ্লাস-বটম স্পা প্যাভিলিয়নে ৯০ মিনিটের রিলাক্সিং ম্যাসাজ। রাতে তারার নিচে সৈকতে ৫-কোর্স রোমান্টিক ক্যান্ডেললাইট ডিনার।" },
      { day: "দিন ০৫", title: "মালে সিটি ট্যুর ও ঢাকার উদ্দেশ্যে ফিরতি ফ্লাইট", details: "সকালে ব্রেকফাস্ট শেষে স্পিডবোটে মালে শহরে ট্রান্সফার। সুলতান পার্ক ও গ্র্যান্ড ফ্রাইডে মসজিদ দর্শন এবং ঢাকার উদ্দেশ্যে উড্ডয়ন।" }
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
    inclusions_bn: [
      "ঢাকা - মালে - ঢাকা রিটার্ন বিমান টিকিট",
      "৫-স্টার প্রাইভেট ওভারওয়াটার ভিলায় ৪ রাত অবস্থান",
      "প্রতিদিনের বুফে ব্রেকফাস্ট, লাঞ্চ ও ডিনার অন্তর্ভুক্ত",
      "রাউন্ডট্রিপ লাক্সারি স্পিডবোট / সিপ্লেন ট্রান্সফার",
      "গাইডেড কোরাল স্নরকেলিং গিয়ার ও ডলফিন ক্রুজ",
      "স্পেশাল হানিমুন কেক, ফুল দিয়ে বেড ডেকোরেশন ও ফ্রুট বাস্কেট",
      "মালদ্বীপের সকল গ্রিন ট্যাক্স ও সার্ভিস চার্জ অন্তর্ভুক্ত"
    ],
    exclusions: [
      "Personal expenses, telephone, and laundry",
      "Scuba diving certification dives",
      "Travel insurance (can be added on request)"
    ],
    exclusions_bn: [
      "ব্যক্তিগত কেনাকাটা ও লন্ড্রি খরচ",
      "স্কুবা ডাইভিং সার্টিফিকেশন ফি",
      "ভ্রমণ বীমা (প্রয়োজনে যুক্ত করা যাবে)"
    ]
  },
  {
    id: "dubai-extravaganza",
    title: "Dubai Extravaganza, Desert Safari & Abu Dhabi Grandeur",
    title_bn: "দুবাই এক্সট্রাভাগানজা, ডেজার্ট সাফারি ও আবুধাবি ট্যুর",
    category: "luxury",
    type: "international",
    location: "United Arab Emirates (Dubai & Abu Dhabi)",
    location_bn: "সংযুক্ত আরব আমিরাত (দুবাই ও আবুধাবি)",
    badge: "Best Seller",
    badge_bn: "টপ সেলার",
    duration: "6 Days / 5 Nights",
    duration_bn: "৬ দিন / ৫ রাত",
    rating: 4.92,
    reviewsCount: 238,
    priceBdt: 88500,
    priceUsd: 725,
    featuredImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    highlights: ["UAE Tourist Visa", "Burj Khalifa 124th Floor", "4x4 Desert Safari", "Marina Dhow Cruise", "Abu Dhabi Day Tour"],
    highlights_bn: ["ইউএই ট্যুরিস্ট ভিসা", "বুর্জ খলিফা ১২৪ তলা", "৪x৪ ডেজার্ট সাফারি", "দুবাই মেরিনা ক্রুজ", "আবুধাবি ডে ট্যুর"],
    overview: "From the world's tallest skyscraper to the golden dunes of the Arabian desert, Vista Routeway delivers an ultra-luxurious Dubai holiday featuring prime downtown hotels, thrilling dune bashing, and high-end cultural experiences.",
    overview_bn: "বিশ্বের উচ্চতম অট্টালিকা বুর্জ খলিফা থেকে সোনালী মরুভূমির লাল বালিয়াড়ি — ভিস্টা রুটওয়ের সাথে উপভোগ করুন রাজকীয় দুবাই ও আবুধাবির পূর্ণাঙ্গ সফর।",
    itinerary: [
      { day: "Day 01", title: "Arrive in Dubai & Marina Luxury Dhow Cruise with Dinner", details: "Arrival at Dubai International Airport (DXB). Private luxury chauffeur transfer to your 4★/5★ downtown hotel. Evening boarding on a 5-star glass Dhow cruise through Dubai Marina with an international buffet and live Tanoura dance show." },
      { day: "Day 02", title: "Iconic Dubai City Tour & Burj Khalifa At The Top (124th Fl)", details: "Guided panoramic city tour: Dubai Frame photo-stop, Jumeirah Beach, Burj Al Arab, and Palm Jumeirah. Afternoon fast-track entry to Burj Khalifa 124th & 125th floor observation deck followed by the famous Dubai Fountain show." },
      { day: "Day 03", title: "Red Dunes 4x4 Desert Safari, Camel Ride & BBQ Gala", details: "Morning leisure for shopping at Dubai Mall. Afternoon pickup in high-powered 4WD Land Cruisers for thrilling dune bashing in the Lahbab red dunes. Sandboarding, camel rides, Arabic Henna, and a BBQ dinner buffet with belly dance performance." },
      { day: "Day 04", title: "Abu Dhabi Full Day Tour: Sheikh Zayed Mosque & Ferrari World", details: "Scenic drive along the Arabian Gulf to the UAE capital. Guided visit to the breathtaking Sheikh Zayed Grand Mosque, drive through Corniche, Emirates Palace photo-op, and photo stop at Ferrari World Abu Dhabi / Yas Island." },
      { day: "Day 05", title: "Miracle Garden / Global Village & Gold Souk Shopping", details: "Visit the world's largest natural flower garden (Miracle Garden) or evening exploration of cultural pavilions at Global Village. Tour traditional Gold & Spice Souks via traditional wooden Abra boat across Dubai Creek." },
      { day: "Day 06", title: "Last Minute Duty-Free & Return to Dhaka", details: "Hearty breakfast at hotel, late check-out option. Private luxury transfer to Dubai airport for your flight back home to Dhaka with unforgettable memories." }
    ],
    itinerary_bn: [
      { day: "দিন ০১", title: "দুবাই আগমন ও মেরিনা লাক্সারি ক্রুজে ডিনার", details: "দুবাই বিমানবন্দরে অভ্যর্থনা ও ৪★/৫★ হোটেলে চেক-ইন। সন্ধ্যায় দুবাই মেরিনায় আন্তর্জাতিক বুফে ডিনার ও ঐতিহ্যবাহী তানৌরা ড্যান্স উপভোগ।" },
      { day: "দিন ০২", title: "দুবাই সিটি ট্যুর ও বুর্জ খলিফা ১২৪ তলা দর্শন", details: "দুবাই ফ্রেম, জুমেইরাহ সৈকত, বুর্জ আল আরব ও পাম জুমেইরাহ দর্শন। বিকেলে বুর্জ খলিফার ১২৪ ও ১২৫ তলার অবজারভেশন ডেকে ভ্রমণ ও দুবাই ফাউন্টেন শো।" },
      { day: "দিন ০৩", title: "লাল বালুর ডেজার্ট সাফারি, উটের পিঠে চড়া ও বারবিকিউ", details: "ল্যান্ড ক্রুজারে রোমাঞ্চকর ডেজার্ট সাফারি, স্যান্ডবোর্ডিং, আরব্য মেহেন্দি এবং মরুভূমির তাঁবুতে লাইভ বেলি ড্যান্সসহ বারবিকিউ ডিনার।" },
      { day: "দিন ০৪", title: "আবুধাবি ফুল-ডে ট্যুর: শেখ জায়েদ গ্র্যান্ড মসজিদ", details: "ইউএইর রাজধানী আবুধাবিতে অপরূপ মার্বেল পাথরে নির্মিত শেখ জায়েদ গ্র্যান্ড মসজিদ, কর্নিশ ও ফেরারি ওয়ার্ল্ডের ফটোস্টপ।" },
      { day: "দিন ০৫", title: "মিরাকেল গার্ডেন / গ্লোবাল ভিলেজ ও গোল্ড সুক শপিং", details: "বিশ্বের বৃহত্তম ফুলের বাগান মিরাকেল গার্ডেন পরিদর্শন এবং ঐতিহাসিক কাঠের আব্রা নৌকায় দুবাই ক্রিক পাড়ি দিয়ে ঐতিহ্যবাহী গোল্ড সুকে কেনাকাটা।" },
      { day: "দিন ০৬", title: "ডিউটি-ফ্রি শপিং ও ঢাকায় প্রত্যাবর্তন", details: "হোটেলে ব্রেকফাস্টের পর বিমানবন্দর ট্রান্সফার এবং মধুর স্মৃতি নিয়ে ঢাকার উদ্দেশ্যে ফিরতি ফ্লাইট।" }
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
    inclusions_bn: [
      "ঢাকা থেকে সম্পূর্ণ প্রসেসিং সহ ৩০ দিনের ইউএই ট্যুরিস্ট ভিসা",
      "৪★/৫★ বিলাসবহুল হোটেলে ৫ রাত অবস্থান ও প্রতিদিনের বুফে ব্রেকফাস্ট",
      "ঢাকা - দুবাই - ঢাকা রিটার্ন বিমান টিকিট",
      "বুর্জ খলিফা ১২৪ তলার কনফার্মড টিকিট",
      "লাল বালুর ৪x৪ ডেজার্ট সাফারি, লাইভ শো ও বারবিকিউ বুফে",
      "দুবাই মেরিনা ক্রুজ ডিনার ও হোটেল পিকআপ-ড্রপ",
      "সম্পূর্ণ শীতাতপ নিয়ন্ত্রিত কোচে পূর্ণ দিন আবুধাবি সিটি ট্যুর",
      "বিমানবন্দর ও সকল দর্শনীয় স্থানে ট্রান্সফার সুবিধা"
    ],
    exclusions: [
      "Dubai Tourism Dirham fee (payable directly at hotel check-in)",
      "Meals not specified in the inclusions",
      "Gratuities for drivers and guides"
    ],
    exclusions_bn: [
      "দুবাই ট্যুরিজম দিরহাম ফি (হোটেল চেক-ইনে প্রদেয়)",
      "উল্লেখ না থাকা খাবার ও পানীয়",
      "গাইড ও ড্রাইভারদের টিপস"
    ]
  },
  {
    id: "bali-paradise",
    title: "Bali Tropical Paradise, Nusa Penida & Ubud Pool Villa",
    title_bn: "বালি ট্রপিক্যাল প্যারাডাইস, নুসা পেনিদা ও উবুদ পুল ভিলা",
    category: "honeymoon",
    type: "international",
    location: "Bali, Indonesia (Ubud, Nusa Penida & Seminyak)",
    location_bn: "বালি, ইন্দোনেশিয়া (উবুদ, নুসা পেনিদা ও সেমিনিয়াক)",
    badge: "Trending",
    badge_bn: "ট্রেন্ডিং",
    duration: "6 Days / 5 Nights",
    duration_bn: "৬ দিন / ৫ রাত",
    rating: 4.88,
    reviewsCount: 164,
    priceBdt: 78000,
    priceUsd: 640,
    featuredImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Return Flights", "Private Pool Villa", "Nusa Penida Island", "Ubud Bali Swing", "Uluwatu Sunset Temple"],
    highlights_bn: ["রিটার্ন বিমান টিকিট", "প্রাইভেট পুল ভিলা", "নুসা পেনিদা দ্বীপ", "উবুদ বালি সুইং", "উলুওয়াতু সানসেট টেম্পল"],
    overview: "Immerse yourself in Bali's lush emerald rice terraces, cliffside ocean vistas, and sacred temples. Relax in your private pool villa and take a high-speed catamaran to Nusa Penida's world-famous T-Rex cliff (Kelingking Beach).",
    overview_bn: "সবুজ ধানক্ষেতের উপত্যকা, পাহাড়ঘেরা রেইনফরেস্ট পুল ভিলা এবং নুসা পেনিদা দ্বীপের বিখ্যাত টি-রেক্স ক্লিফ — বালির প্রাকৃতিক স্বর্গ উপভোগ করুন বিশেষ সুবিধায়।",
    itinerary: [
      { day: "Day 01", title: "Arrive in Denpasar Bali & Check-in to Ubud Rainforest Villa", details: "Arrival at Ngurah Rai International Airport. Traditional Balinese flower garland greeting by Vista Routeway guide. Scenic transfer to Ubud rainforest resort. Evening at leisure listening to jungle serenity." },
      { day: "Day 02", title: "Tegallalang Rice Terraces, Aloha Bali Swing & Kintamani Volcano", details: "Visit the iconic Tegallalang terraced rice paddies. Fly over the jungle on the thrilling Bali Swing. Panoramic lunch view of Mount Batur Volcano and Lake Batur, followed by a local Luwak coffee plantation tasting." },
      { day: "Day 03", title: "Nusa Penida West Coast Island Day Tour", details: "Early morning speed catamaran to Nusa Penida Island. Visit the awe-inspiring Kelingking T-Rex Beach, Broken Beach, and Angel's Billabong natural infinity pool. Snorkel with crystal clear sea life before returning to mainland Bali." },
      { day: "Day 04", title: "Transfer to Seminyak, Tanah Lot & Uluwatu Sunset Temple", details: "Check-out from Ubud and check-in to coastal luxury hotel in Seminyak. Afternoon excursion to Tanah Lot sea temple, then head to the dramatic 70-meter Uluwatu cliff to witness the legendary Kecak Fire Dance at golden hour." },
      { day: "Day 05", title: "Tanjung Benoa Watersports & Jimbaran Bay Seafood Dinner", details: "Morning water adventure at Tanjung Benoa (Banana Boat & parasailing). Afternoon leisure for beach club lounging or shopping in Seminyak. Evening romantic candlelit grilled seafood dinner right on Jimbaran beach." },
      { day: "Day 06", title: "Balinese Spa & Farewell Flight to Dhaka", details: "Relax with a traditional 60-minute Balinese oil massage. Pick up handicrafts and souvenirs at Kuta art market. Chauffeur transfer to airport for your flight back to Dhaka." }
    ],
    itinerary_bn: [
      { day: "দিন ০১", title: "বালিতে আগমন ও উবুদ রেইনফরেস্ট ভিলায় চেক-ইন", details: "ডেনপাসার বিমানবন্দরে ঐতিহ্যবাহী ফুলের মালায় অভ্যর্থনা। উবুদের নয়নাভিরাম জঙ্গলে ঘেরা প্রাইভেট পুল ভিলায় চেক-ইন।" },
      { day: "দিন ০২", title: "তেগালালাং রাইস ফিল্ড, বালি সুইং ও কিন্তামানি আগ্নেয়গিরি", details: "আইকনিক চালের ধাপযুক্ত মাঠ পরিদর্শন ও রেইনফরেস্টের ওপর রোমাঞ্চকর বালি সুইং। মাউন্ট বাতুর আগ্নেয়গিরি ভিউ সহ লাঞ্চ ও লুওয়াক কফি টেস্ট।" },
      { day: "দিন ০৩", title: "নুসা পেনিদা দ্বীপ ভ্রমণ ও কেলিংকিং বিচ", details: "স্পিডবোটে নুসা পেনিদা দ্বীপে যাত্রা। বিখ্যাত টি-রেক্স ক্লিফ, ব্রোকেন বিচ ও অ্যাঞ্জেলস বিলাবং পরিদর্শন।" },
      { day: "দিন ০৪", title: "সেমিনিয়াক ট্রান্সফার, তানাহ লট ও উলুওয়াতু ফায়ার ড্যান্স", details: "সৈকত শহর সেমিনিয়াকে চেক-ইন। সমুদ্রের মাঝে তানাহ লট মন্দির ও ৭০ মিটার উঁচু উলুওয়াতু পাহাড়ে সূর্যাস্তের সাথে কেচাক ফায়ার ড্যান্স।" },
      { day: "দিন ০৫", title: "ওয়াটারস্পোর্টস ও জিম্বারান বে সি-ফুড ডিনার", details: "তানজুং বেনোয়াতে রোমাঞ্চকর ওয়াটারস্পোর্টস। রাতে জিম্বারান বিচে মোমবাতির আলোয় তাজা সি-ফুড ডিনার।" },
      { day: "দিন ০৬", title: "ঐতিহ্যবাহী বালি স্পা ও ঢাকায় প্রত্যাবর্তন", details: "৬০ মিনিটের রিলাক্সিং ভেষজ বালি স্পা। কুটা আর্ট মার্কেটে কেনাকাটা শেষে বিমানবন্দরে ট্রান্সফার।" }
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
    inclusions_bn: [
      "ঢাকা - বালি - ঢাকা রিটার্ন আন্তর্জাতিক বিমান টিকিট",
      "উবুদ বুটিক পুল ভিলায় ৩ রাত + সেমিনিয়াক বিচ রিসোর্টে ২ রাত",
      "প্রতিদিনের বুফে ব্রেকফাস্ট",
      "নুসা পেনিদা আইল্যান্ডে ফাস্টবোট টিকিট ও জিপ ট্যুর",
      "উবুদ বালি সুইং ও তেগালালাং এন্ট্রি পাস",
      "উলুওয়াতু মন্দির ও কেচাক ড্যান্স শো টিকিট",
      "সার্বক্ষণিক প্রাইভেট এসি গাড়ি ও ইংরেজি/বাংলা সহায়ক গাইড"
    ],
    exclusions: [
      "Indonesia Visa on Arrival fee ($35 USD) payable at airport counter",
      "Personal shopping and water sports not listed above",
      "Tips for local guide and driver"
    ],
    exclusions_bn: [
      "ইন্দোনেশিয়া অন-অ্যারাইভাল ভিসা ফি ($৩৫ ডলার)",
      "ব্যক্তিগত কেনাকাটা ও অন্যান্য ওয়াটার অ্যাক্টিভিটি",
      "গাইড ও ড্রাইভারদের বকশিস"
    ]
  },
  {
    id: "thailand-combo",
    title: "Thailand Grand Explorer: Bangkok City & Phuket Island",
    title_bn: "থাইল্যান্ড গ্র্যান্ড এক্সপ্লোরার: ব্যাংকক ও ফুকেট আইল্যান্ড",
    category: "family",
    type: "international",
    location: "Thailand (Bangkok & Phuket)",
    location_bn: "থাইল্যান্ড (ব্যাংকক ও ফুকেট)",
    badge: "Family Favorite",
    badge_bn: "পারিবারিক পছন্দ",
    duration: "7 Days / 6 Nights",
    duration_bn: "৭ দিন / ৬ রাত",
    rating: 4.85,
    reviewsCount: 310,
    priceBdt: 62500,
    priceUsd: 510,
    featuredImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Direct Flights", "Thailand E-Visa", "Phi Phi Island Cruise", "Chao Phraya Cruise", "Safari World & Marine Park"],
    highlights_bn: ["সরাসরি ফ্লাইট", "থাইল্যান্ড ই-ভিসা", "ফি ফি আইল্যান্ড ক্রুজ", "চাও ফ্রায়া রিভার ক্রুজ", "সাফারি ওয়ার্ল্ড"],
    overview: "The ultimate combination of vibrant city shopping in Bangkok and sun-soaked island adventures in Phuket. Includes Phi Phi Island speed catamaran, Safari World wildlife show, and luxury dinner cruise on the Chao Phraya River.",
    overview_bn: "ব্যাংককে বিশাল শপিং মল ও থিম পার্কের আনন্দ এবং ফুকেটের নীল সাগরে ফি ফি দ্বীপের রোমাঞ্চ — পরিবার নিয়ে ছুটি কাটানোর সবচেয়ে জনপ্রিয় প্যাকেজ।",
    itinerary: [
      { day: "Day 01", title: "Fly Dhaka to Bangkok & Chao Phraya Luxury Dinner Cruise", details: "Direct flight from Dhaka to Suvarnabhumi Airport. Private transfer to hotel. In the evening, board the White Orchid / Chao Phraya Princess cruise for an international buffet dinner with live saxophone and illuminated views of Wat Arun." },
      { day: "Day 02", title: "Safari World & Marine Park Full-Day Family Adventure", details: "Exciting drive through the open Safari Park where lions and giraffes roam free. Enjoy dolphin shows, sea lion comedy, spy war stunt shows, and open-air international buffet lunch." },
      { day: "Day 03", title: "Domestic Flight to Phuket & Patong Sunset Beach", details: "Morning flight from Bangkok to Phuket Island. Chauffeur transfer to your resort in Patong Beach. Free afternoon to swim, explore Bangla Road, or relax with fresh coconuts." },
      { day: "Day 04", title: "Phi Phi Island, Maya Bay & Khai Island Speedboat Tour", details: "Full-day premium speedboat tour: Visit legendary Maya Bay (from The Beach), Viking Cave, Monkey Beach, and snorkel with exotic tropical fish in emerald waters. Beachside buffet lunch included." },
      { day: "Day 05", title: "Phuket Big Buddha, Wat Chalong & Promthep Cape Sunset", details: "Half-day island tour visiting the monumental 45-meter marble Big Buddha with 360-degree views, historic Wat Chalong temple, and panoramic sunset viewpoint at Promthep Cape." },
      { day: "Day 06", title: "Return Flight to Bangkok & Mega Shopping Extravaganza", details: "Fly back to Bangkok. Dedicated shopping day at CentralWorld, Siam Paragon, Platinum Fashion Mall, and MBK Center for branded and wholesale fashion bargains." },
      { day: "Day 07", title: "Bangkok Souvenirs & Return to Dhaka", details: "Breakfast at hotel. Last-minute souvenir shopping before smooth airport transfer for your direct return flight to Dhaka." }
    ],
    itinerary_bn: [
      { day: "দিন ০১", title: "ঢাকা থেকে ব্যাংকক ও চাও ফ্রায়া লাক্সারি ডিনার ক্রুজ", details: "সরাসরি ফ্লাইটে ব্যাংকক আগমন ও হোটেলে চেক-ইন। সন্ধ্যায় চাও ফ্রায়া নদীতে ক্রুজে লাইভ মিউজিক সহ আন্তর্জাতিক বুফে ডিনার।" },
      { day: "দিন ০২", title: "সাফারি ওয়ার্ল্ড ও মেরিন পার্ক পূর্ণাঙ্গ ট্যুর", details: "খোলামেলা সাফারি পার্কে সিংহ, জিরাফ দর্শন। ডলফিন ও সামুদ্রিক প্রাণীদের শ্বাসরুদ্ধকর শো উপভোগ এবং বুফে লাঞ্চ।" },
      { day: "দিন ০৩", title: "ফুকেটে অভ্যন্তরীণ ফ্লাইট ও পাতং সৈকত", details: "ব্যাংকক থেকে বিমানে ফুকেট দ্বীপে আগমন ও পাতং বিচ সংলগ্ন রিসোর্টে চেক-ইন। বিকেলে সূর্যাস্ত উপভোগ।" },
      { day: "দিন ০৪", title: "ফি ফি দ্বীপ, মায়া বে ও স্নরকেলিং স্পিডবোট ট্যুর", details: "বিখ্যাত মায়া বে, ভাইকিং কেভ ও মাঙ্কি বিচ পরিদর্শন। নীল জলে স্নরকেলিং ও সৈকতে বুফে লাঞ্চ।" },
      { day: "দিন ০৫", title: "বিগ বুদ্ধ, ওয়াট চালং ও প্রমথেপ কেপ সূর্যাস্ত", details: "৪৫ মিটার মার্বেলের বিগ বুদ্ধ ও ঐতিহাসিক মন্দির দর্শন। প্রমথেপ কেপে বসে সাগরে অনন্য সূর্যাস্ত উপভোগ।" },
      { day: "দিন ০৬", title: "ব্যাংককে ফিরতি ফ্লাইট ও মেগা শপিং", details: "সেন্ট্রালওয়ার্ল্ড, প্ল্যাটিনাম ফ্যাশন মল এবং এমবিকে সেন্টারে কেনাকাটার চমৎকার দিন।" },
      { day: "দিন ০৭", title: "শেষ মুহূর্তের কেনাকাটা ও ঢাকায় প্রত্যাবর্তন", details: "হোটেল চেক-আউট শেষে বিমানবন্দরে পৌঁছে সরাসরি ফ্লাইটে ঢাকায় ফেরা।" }
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
    inclusions_bn: [
      "ঢাকা - ব্যাংকক - ফুকেট - ঢাকা সকল আন্তর্জাতিক ও অভ্যন্তরীণ বিমান টিকিট",
      "সম্পূর্ণ থাইল্যান্ড ট্যুরিস্ট ভিসা সহায়তা",
      "ব্যাংককে ৪-স্টার হোটেলে ৩ রাত + ফুকেটে ৪-স্টার রিসোর্টে ৩ রাত",
      "ফি ফি আইল্যান্ড স্পিডবোট ট্যুর, ন্যাশনাল পার্ক ফি ও লাঞ্চ",
      "সাফারি ওয়ার্ল্ড ও মেরিন পার্ক এন্ট্রি টিকিট সহ বুফে লাঞ্চ",
      "চাও ফ্রায়া লাক্সারি ডিনার ক্রুজ টিকিট",
      "সকল এয়ারপোর্ট ও সাইটসিয়িং ট্রান্সফার"
    ],
    exclusions: [
      "Personal shopping and luggage overweight",
      "Optional water sports at Phi Phi (parasailing, scuba)",
      "Tips and hotel security deposits"
    ],
    exclusions_bn: [
      "ব্যক্তিগত শপিং ও অতিরিক্ত লাগেজ ফি",
      "ঐচ্ছিক ওয়াটারস্পোর্টস",
      "হোটেল সিকিউরিটি ডিপোজিট ও টিপস"
    ]
  },
  {
    id: "coxs-bazar-deluxe",
    title: "Cox's Bazar Sea Breeze & Saint Martin Coral Island",
    title_bn: "কক্সবাজার সমুদ্র বিলাস ও সেন্টমার্টিন প্রবাল দ্বীপ",
    category: "domestic",
    type: "domestic",
    location: "Cox's Bazar & Saint Martin's Island, Bangladesh",
    location_bn: "কক্সবাজার ও সেন্টমার্টিন দ্বীপ, বাংলাদেশ",
    badge: "Domestic Highlight",
    badge_bn: "সেরা দেশীয় ভ্রমণ",
    duration: "5 Days / 4 Nights",
    duration_bn: "৫ দিন / ৪ রাত",
    rating: 4.93,
    reviewsCount: 425,
    priceBdt: 24500,
    priceUsd: 200,
    featuredImage: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=1200&q=80",
    highlights: ["5★ Sea Pearl / Sayeman", "Marine Drive Chander Gari", "Saint Martin Cruise", "Himchari & Inani Beach", "Fresh Seafood BBQ"],
    highlights_bn: ["৫★ সায়মান / সি পার্ল রিসোর্ট", "মেরিন ড্রাইভ চান্দের গাড়ি", "সেন্টমার্টিন বিলাসবহুল জাহাজ", "হিমছড়ি ও ইনানী প্রবাল সৈকত", "বিচ বারবিকিউ"],
    overview: "Experience Bangladesh's crowning natural jewel with Vista Routeway. Discover the world's longest unbroken natural sea beach in style, ride an open-air 4x4 Chander Gari along Marine Drive, and cruise to Saint Martin's coral island.",
    overview_bn: "বিশ্বের দীর্ঘতম সমুদ্র সৈকতে ৫-তারকা রিসোর্টের আভিজাত্য, মেরিন ড্রাইভে উন্মুক্ত চান্দের গাড়ির বাতাস এবং নীল জলের সেন্টমার্টিন দ্বীপে প্রবাল দর্শন।",
    itinerary: [
      { day: "Day 01", title: "Dhaka to Cox's Bazar & Sunset at Kolatoli Beach", details: "Depart Dhaka via luxury AC sleeper coach (or domestic flight upgrade). Arrive at Cox's Bazar and check-in to your 5-Star beach-facing resort (Sayeman Beach Resort / Sea Pearl Water Park). Enjoy evening sunset stroll and beachside coconut water." },
      { day: "Day 02", title: "Marine Drive Scenic Drive, Himchari Waterfall & Inani Coral Beach", details: "Private reserved Chander Gari drive on the stunning Marine Drive road with green hills on one side and the Bay of Bengal on the other. Climb Himchari hilltop for panoramic ocean views. Explore natural coral formations at Inani Beach." },
      { day: "Day 03", title: "Luxury Sea Truck Cruise to Saint Martin's Coral Island", details: "Early morning transfer to Teknaf/Cox's Bazar jetty. Board luxury sea cruise vessel to Saint Martin's Island. Check-in to beachfront eco-resort. Stroll through coconut groves and witness the magical starry night sky." },
      { day: "Day 04", title: "Chhera Dwip Excursion & Beachside Lobster BBQ", details: "Speedboat or wooden trawler tour to the southernmost tip of Bangladesh: Chhera Dwip. Walk on living corals in crystal-clear water. Evening fresh red snapper and lobster BBQ dinner on the beach with acoustic music." },
      { day: "Day 05", title: "Radiant Fish World, Burmese Market Shopping & Return to Dhaka", details: "Return sea cruise to Cox's Bazar. Visit Radiant Fish World aquarium and the bustling Burmese Market for dry fish, traditional pickles, and handloom lungis. Board luxury coach for return journey to Dhaka." }
    ],
    itinerary_bn: [
      { day: "দিন ০১", title: "ঢাকা থেকে কক্সবাজার ও কলাতলী সৈকতে সূর্যাস্ত", details: "ঢাকা থেকে বিলাসবহুল এসি বাসে (অথবা বিমান আপগ্রেড) কক্সবাজার আগমন। ৫-তারকা সৈকত রিসোর্টে চেক-ইন ও বিকেলে সূর্যাস্ত উপভোগ।" },
      { day: "দিন ০২", title: "মেরিন ড্রাইভ, হিমছড়ি ঝরনা ও ইনানী প্রবাল সৈকত", details: "রিজার্ভ চান্দের গাড়িতে পাহাড় ও সাগরের কোল ঘেঁষে মেরিন ড্রাইভ ভ্রমণ। হিমছড়ির চূড়া থেকে সাগরের দৃশ্য ও ইনানীর প্রবাল দেখা।" },
      { day: "দিন ০৩", title: "জাহাজে সেন্টমার্টিন দ্বীপ যাত্রা ও ইকো রিসোর্ট", details: "বিলাসবহুল জাহাজে নীল জলরাশি পাড়ি দিয়ে সেন্টমার্টিন দ্বীপে পৌঁছানো। নারিকেল জিঞ্জিরায় সৈকত সংলগ্ন রিসোর্টে চেক-ইন ও তারার রাত উপভোগ।" },
      { day: "দিন ০৪", title: "ছেঁড়াদ্বীপ ভ্রমণ ও সৈকতে কোরাল মাছের বারবিকিউ", details: "বাংলাদেশের সর্বদক্ষিণের বিন্দু ছেঁড়াদ্বীপে জীবন্ত প্রবাল দর্শন। রাতে সমুদ্রতীরে লাইভ মিউজিক সহ তাজা কোরাল মাছের স্পেশাল বারবিকিউ।" },
      { day: "দিন ০৫", title: "বার্মিজ মার্কেট শপিং ও ঢাকায় প্রত্যাবর্তন", details: "কক্সবাজারে ফিরে রেডিয়ান্ট ফিশ ওয়ার্ল্ড ও বার্মিজ মার্কেটে আচার, শুঁটকি ও পোশাক কেনাকাটা। রাতে বিলাসবহুল কোচে ঢাকার উদ্দেশ্যে যাত্রা।" }
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
    inclusions_bn: [
      "ঢাকা - কক্সবাজার - ঢাকা রয়্যাল ক্লাস এসি বাস টিকিট (ফ্লাইট অপশন উপলব্ধ)",
      "কক্সবাজারে ৫-স্টার রিসোর্টে ২ রাত + সেন্টমার্টিনে বিচ কটেজে ২ রাত",
      "প্রতিদিনের বুফে ব্রেকফাস্ট",
      "সেন্টমার্টিন জাহাজের রাউন্ডট্রিপ নিশ্চিত টিকিট",
      "মেরিন ড্রাইভ ও ইনানীর জন্য রিজার্ভ চান্দের গাড়ি",
      "ছেঁড়াদ্বীপ ট্রলার/স্পিডবোট টিকিট",
      "ভিস্টা রুটওয়ের সার্বক্ষণিক অভিজ্ঞ ট্যুর ম্যানেজার"
    ],
    exclusions: [
      "Lunches and dinners (except specified beach BBQ night)",
      "Water scooter and parasailing fees at Laboni/Inani",
      "Personal tips and market purchases"
    ],
    exclusions_bn: [
      "লাঞ্চ ও রাতের খাবার (বারবিকিউ ব্যতীত)",
      "ওয়াটার স্কুটার ও প্যারাসেইলিং ফি",
      "ব্যক্তিগত কেনাকাটা"
    ]
  },
  {
    id: "sajek-valley-adventure",
    title: "Sajek Valley Kingdom of Clouds & Bandarban Highlands",
    title_bn: "সাজেক ভ্যালি মেঘের রাজ্য ও খাগড়াছড়ি পাহাড়",
    category: "domestic",
    type: "domestic",
    location: "Rangamati & Khagrachari, Bangladesh",
    location_bn: "রাঙামাটি ও খাগড়াছড়ি, বাংলাদেশ",
    badge: "Nature & Adventure",
    badge_bn: "প্রকৃতি ও পাহাড়",
    duration: "4 Days / 3 Nights",
    duration_bn: "৪ দিন / ৩ রাত",
    rating: 4.90,
    reviewsCount: 380,
    priceBdt: 14500,
    priceUsd: 120,
    featuredImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Cloud-Facing Eco Resort", "4x4 Army Escort Chander Gari", "Konglak Para Trek", "Helipad Sunset", "Alutila Mysterious Cave"],
    highlights_bn: ["মেঘমুখী কাঠের ইকো রিসোর্ট", "সেনাবাহিনী এসকর্টে চান্দের গাড়ি", "কংলাক পাড়া ট্রেকিং", "হ্যালিপ্যাডে সূর্যাস্ত", "আলুটিলা রহস্যময় গুহা"],
    overview: "Touch the clouds in Sajek Valley, the 'Roof of Bengal'. Wake up to an ocean of white mist floating right beneath your balcony, trek to Konglak Para, and explore the ancient mysterious Alutila Cave in Khagrachari.",
    overview_bn: "সকালে ব্যালকনি খুললেই ভেসে ওঠা সাদা মেঘের সমুদ্র, কংলাক পাহাড়ের চূড়া থেকে দিগন্ত ছোঁয়া উপত্যকা এবং আলুটিলার রহস্যময় মশাল গুহা সফর।",
    itinerary: [
      { day: "Day 01", title: "Overnight Scenic Journey from Dhaka to Khagrachari", details: "Evening departure from Dhaka in reserved AC coach. Comfortable highway ride through Chittagong highlands with arrival in Khagrachari hill town early morning." },
      { day: "Day 02", title: "Army Escort into Sajek Valley & Sunset at Helipad", details: "Traditional hill-tracts breakfast in Khagrachari. Board reserved 4x4 Chander Gari for the thrilling rollercoaster ride under military convoy escort into Sajek Valley. Check-in to hilltop resort (Runmoy / Meghpunji). Evening sunset gathering at Sajek Helipad." },
      { day: "Day 03", title: "Ocean of Clouds, Konglak Peak Trek & Lusai Cultural Night", details: "Early morning 5:30 AM wake up to witness the breathtaking cloud ocean rolling below the peaks. Trek to Konglak Para (the highest summit of Sajek) for panoramic mountain vistas. Evening campfire and bamboo chicken BBQ with Lusai tribal dance." },
      { day: "Day 04", title: "Alutila Mysterious Cave, Risang Falls & Return to Dhaka", details: "Descend from Sajek Valley under morning escort. Explore the pitch-black 100-meter Alutila Cave holding traditional bamboo torches. Visit scenic Risang Waterfall and Tareng viewpoint. Board evening AC coach back to Dhaka." }
    ],
    itinerary_bn: [
      { day: "দিন ০১", title: "ঢাকা থেকে খাগড়াছড়ির উদ্দেশ্যে রওয়ানা", details: "রাতে আরামদায়ক এসি বাসে ঢাকা ত্যাগ। ভোরের আলোয় পাহাড়ের কোল ঘেঁষে খাগড়াছড়ি শহরে পৌঁছানো।" },
      { day: "দিন ০২", title: "সেনাবাহিনীর এসকর্টে সাজেক ভ্যালিতে রোমাঞ্চকর যাত্রা", details: "পাহাড়ে ঐতিহ্যবাহী নাস্তা শেষে রিজার্ভ চান্দের গাড়িতে মেঘের দেশে যাত্রা। রিসোর্টে চেক-ইন ও বিকেলে হেলিপ্যাডে সূর্যাস্ত দেখা।" },
      { day: "দিন ০৩", title: "মেঘের ভেলা, কংলাক পাহাড় ও ব্যাম্বু চিকেন ডিনার", details: "ভোরে ব্যালকনি থেকে মেঘের সমুদ্র দর্শন। সাজেকের সর্বোচ্চ চূড়া কংলাক পাড়ায় ট্রেকিং এবং রাতে বাঁশের তৈরি ব্যাম্বু চিকেন ফিস্ট।" },
      { day: "দিন ০৪", title: "আলুটিলা গুহায় মশাল অভিযান, রিছাং ঝরনা ও ঢাকায় ফেরা", details: "হাতে বাঁশের মশাল নিয়ে রোমাঞ্চকর আলুটিলা গুহা পাড়ি। রিছাং ঝরনায় গোসল শেষে রাতে বাসে ঢাকার উদ্দেশ্যে ফিরতি যাত্রা।" }
    ],
    inclusions: [
      "Dhaka - Khagrachari - Dhaka return AC coach tickets",
      "2 Nights in premium cloud-facing resort in Sajek Valley + Day room in Khagrachari",
      "Reserved 4x4 Chander Gari for the entire Sajek and Khagrachari tour",
      "All entry fees (Sajek, Konglak, Alutila Cave with flaming bamboo torches, Risang Falls)",
      "Daily breakfast and special Bamboo Chicken dinner",
      "Dedicated local tour guide and 24/7 coordinator"
    ],
    inclusions_bn: [
      "ঢাকা - খাগড়াছড়ি - ঢাকা এসি বাসের রিটার্ন টিকিট",
      "সাজেকে মেঘমুখী প্রিমিয়াম রিসোর্টে ২ রাত + খাগড়াছড়িতে ফ্রেশ রুম",
      "পুরো ট্যুরে রিজার্ভ ৪x৪ চান্দের গাড়ি",
      "সকল দর্শনীয় স্থানের প্রবেশ টিকিট ও আলুটিলায় জ্বলন্ত মশাল",
      "প্রতিদিনের ব্রেকফাস্ট ও ঐতিহ্যবাহী ব্যাম্বু চিকেন ডিনার",
      "দক্ষ স্থানীয় গাইড ও সার্বক্ষণিক কো-অর্ডিনেটর"
    ],
    exclusions: [
      "Personal food orders and snacks",
      "Zip-line or tribal craft purchases",
      "Tips for Chander Gari driver"
    ],
    exclusions_bn: [
      "ব্যক্তিগত খাবার ও পানীয়",
      "জিপ-লাইন ফি ও হস্তশিল্প কেনাকাটা",
      "ড্রাইভারের বকশিস"
    ]
  },
  {
    id: "umrah-vip",
    title: "Premium VIP Umrah Package: Makkah & Madinah (14 Days)",
    title_bn: "প্রিমিয়াম ভিআইপি ওমরাহ প্যাকেজ: মক্কা ও মদিনা (১৪ দিন)",
    category: "spiritual",
    type: "spiritual",
    location: "Saudi Arabia (Makkah Al-Mukarramah & Al-Madinah)",
    location_bn: "সৌদি আরব (পবিত্র মক্কা ও মদিনা শরিফ)",
    badge: "Spiritual Journey",
    badge_bn: "পবিত্র ওমরাহ",
    duration: "14 Days / 13 Nights",
    duration_bn: "১৪ দিন / ১৩ রাত",
    rating: 4.98,
    reviewsCount: 195,
    priceBdt: 175000,
    priceUsd: 1435,
    featuredImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Haram-Facing 5★ Hotel", "Direct Flights (Biman/Saudia)", "Private VIP GMC Transfer", "Historical Ziyarah", "Expert Moallim Guide"],
    highlights_bn: ["হারাম সংলগ্ন ৫★ হোটেল", "সরাসরি বিমান ফ্লাইট", "প্রাইভেট ভিআইপি জিএমসি", "ঐতিহাসিক জিয়ারাহ", "অভিজ্ঞ আলেম মোয়াল্লিম"],
    overview: "Perform your holy Umrah with supreme spiritual serenity, dignity, and comfort. Vista Routeway provides 5-star hotels situated directly adjacent to the Haram courtyard, high-speed Haramain train tickets, and complete religious guidance.",
    overview_bn: "হারাম চত্বরের একদম কাছে ৫-তারকা হোটেল, দ্রুতগতির হারামাইন বুলেট ট্রেন এবং অভিজ্ঞ আলেমের তত্ত্বাবধানে পবিত্র ওমরাহ পালনের বিশ্বস্ত আয়োজন।",
    itinerary: [
      { day: "Day 01", title: "Direct Flight Dhaka to Jeddah & Perform Holy Umrah", details: "Depart Hazrat Shahjalal International Airport (DAC) on direct Saudia/Biman flight. Put on Ihram at Miqat. Land at King Abdulaziz Airport Jeddah, fast-track VIP immigration, private GMC transfer to Makkah 5-star hotel (<100m from Haram). Perform Umrah with our scholar guide." },
      { day: "Days 02-07", title: "Daily Prayers in Masjid Al-Haram & Holy Makkah Ziyarah", details: "Dedicated time for continuous prayers, Tawaf, and Quran recitation. Full-day private Ziyarah tour covering Jabal Al-Noor (Cave of Hira), Cave of Thawr, Mina, Arafat, and Muzdalifah with scholarly historical explanations." },
      { day: "Day 08", title: "Haramain High-Speed Bullet Train to Madinah Al-Munawwarah", details: "Perform farewell Tawaf. Board the ultra-modern Haramain bullet train across the desert to Madinah in just 2 hours. Check-in to 5-star luxury hotel steps away from the Prophet's Mosque (PBUH)." },
      { day: "Days 09-13", title: "Prayers in Prophet's Mosque, Rawdah Sharif & Madinah Ziyarah", details: "Offer prayers in the Prophet's Mosque. Scheduled entry to Rawdah Sharif with our coordinator. Comprehensive historical Ziyarah to Masjid Quba (first mosque in Islam), Mount Uhud, and Seven Mosques." },
      { day: "Day 14", title: "Zamzam Water & Return Flight from Madinah to Dhaka", details: "Perform final salam at the Prophet's Mosque. Receive complimentary 5-liter sealed Zamzam water container. VIP transfer to Prince Mohammad Bin Abdulaziz Airport Madinah for direct flight home to Dhaka." }
    ],
    itinerary_bn: [
      { day: "দিন ০১", title: "ঢাকা থেকে জেদ্দা সরাসরি ফ্লাইট ও ওমরাহ পালন", details: "ঢাকা থেকে সরাসরি ফ্লাইটে জেদ্দা অবতরণ। ভিআইপি ট্রান্সফারে মক্কায় হারাম শরীফের ১০০ মিটারের মধ্যে হোটেলে চেক-ইন এবং অভিজ্ঞ আলেমের সাথে ওমরাহ সম্পাদন।" },
      { day: "দিন ০২-০৭", title: "মসজিদুল হারামে ইবাদত ও মক্কার ঐতিহাসিক জিয়ারাহ", details: "কাবা শরীফে নামাজ ও তাওয়াফ। জাবালে নূর (হেরা গুহা), সাওর পাহাড়, মিনা, আরাফাত ও মুজদালিফার ঐতিহাসিক স্থানগুলো পরিদর্শন।" },
      { day: "দিন ০৮", title: "হারামাইন বুলেট ট্রেনে মদিনা শরিফ যাত্রা", details: "বিদায়ী তাওয়াফ শেষে অত্যাধুনিক বুলেট ট্রেনে মাত্র ২ ঘণ্টায় মদিনায় আগমন এবং মসজিদে নববীর প্রবেশদ্বার সংলগ্ন ৫-স্টার হোটেলে চেক-ইন।" },
      { day: "দিন ০৯-১৩", title: "মসজিদে নববীতে নামাজ, রওজা শরিফ ও মদিনার জিয়ারাহ", details: "রওজা মোবারকে দরূদ ও সালাম। মসজিদে কুবা, ওহুদ পাহাড়ের প্রান্তর ও খন্দক পরিদর্শনের পূর্ণাঙ্গ আয়োজন।" },
      { day: "দিন ১৪", title: "জমজম পানি সংগ্রহ ও ঢাকায় প্রত্যাবর্তন", details: "বিদায়ী সালাম শেষে ৫ লিটার সিলগালা জমজম পানির ক্যান গ্রহণ এবং সরাসরি ফ্লাইটে ঢাকায় ফেরা।" }
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
    inclusions_bn: [
      "মেডিকেল ইন্স্যুরেন্স সহ সৌদি ইলেকট্রনিক ওমরাহ ভিসা",
      "ঢাকা - জেদ্দা / মদিনা - ঢাকা সরাসরি রিটার্ন বিমান টিকিট",
      "মক্কায় ক্লক টাওয়ার সংলগ্ন ৫★ হোটেলে ৭ রাত ও মদিনায় ৫★ হোটেলে ৬ রাত",
      "প্রতিদিনের বুফে ব্রেকফাস্ট",
      "সৌদিতে প্রাইভেট ভিআইপি ট্রান্সফার ও দ্রুতগতির বুলেট ট্রেন টিকিট",
      "মক্কা ও মদিনার পূর্ণাঙ্গ ঐতিহাসিক জিয়ারাহ",
      "প্রত্যেক যাত্রীর জন্য বিনামূল্যে ৫ লিটার জমজম পানি"
    ],
    exclusions: [
      "Lunch and dinner meals not specified",
      "Wheelchair or porter charges inside Haram",
      "Personal laundry and international roaming calls"
    ],
    exclusions_bn: [
      "উল্লেখ না থাকা দুপুর ও রাতের খাবার",
      "হারামের ভেতরের ব্যক্তিগত হুইলচেয়ার বা কুলি খরচ",
      "ব্যক্তিগত লন্ড্রি ও মোবাইল বিল"
    ]
  },
  {
    id: "kashmir-paradise",
    title: "Kashmir Heaven on Earth, Gulmarg Snow & Dal Lake Houseboat",
    title_bn: "কাশ্মীর ভূস্বর্গ, গুলমার্গ বরফ ও ডাল লেক হাউসবোট",
    category: "international",
    type: "international",
    location: "Kashmir (Srinagar, Gulmarg, Pahalgam & Sonmarg)",
    location_bn: "কাশ্মীর (শ্রীনগর, গুলমার্গ, পেহেলগাম ও সোনমার্গ)",
    badge: "Scenic Wonder",
    badge_bn: "প্রাকৃতিক বিস্ময়",
    duration: "8 Days / 7 Nights",
    duration_bn: "৮ দিন / ৭ রাত",
    rating: 4.89,
    reviewsCount: 220,
    priceBdt: 65000,
    priceUsd: 530,
    featuredImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Luxury Houseboat Stay", "Gulmarg Gondola Phase 1 & 2", "Dal Lake Shikara", "Betaab Valley Pahalgam", "Kashmiri Wazwan Feast"],
    highlights_bn: ["ডাল লেক লাক্সারি হাউসবোট", "গুলমার্গ গন্ডোলা ক্যাবল কার", "শিকারা রাইড", "বেতাব ভ্যালি পেহেলগাম", "ঐতিহ্যবাহী ওয়াজওয়ান ভোজ"],
    overview: "Witness why Mughal Emperor Jahangir declared: 'If there is a paradise on earth, it is here, it is here, it is here.' Glide across Dal Lake in wooden Shikaras, ride Asia's highest cable car in snow-clad Gulmarg, and walk through fragrant saffron fields.",
    overview_bn: "ডাল লেকে কাঠের শিকারায় ভেসে বেড়ানো, গুলমার্গে বরফে ঢাকা পাহাড়ে এশিয়ার সর্বোচ্চ ক্যাবল কার এবং পেহেলগামের পাইন বনের শীতল নদী — কাশ্মীরের অবিস্মরণীয় রূপ।",
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
    itinerary_bn: [
      { day: "দিন ০১", title: "ঢাকা থেকে শ্রীনগর ও ডাল লেকে সানসেট শিকারা রাইড", details: "শ্রীনগর বিমানবন্দরে পৌঁছানোর পর ডাল লেকের ঐতিহ্যবাহী লাক্সারি হাউসবোটে চেক-ইন ও বিকেলে সূর্যাস্তের সাথে শিকারা ভ্রমণ।" },
      { day: "দিন ০২", title: "মুঘল গার্ডেন্স, নিশাত বাগ ও ওয়াজওয়ান ভোজ", details: "শালিমার বাগ, নিশাত বাগ ও চশমে শাহি পরিদর্শন। কাশ্মীরের ঐতিহ্যবাহী রাজকীয় ওয়াজওয়ান মধ্যাহ্নভোজ।" },
      { day: "দিন ০৩", title: "গুলমার্গ বরফের পাহাড় ও গন্ডোলা ক্যাবল কার", details: "পাইন বনের পথ বেয়ে গুলমার্গ যাত্রা। ১৩,৭৮০ ফুট উঁচুতে আফারওয়াত পর্বত চূড়ায় বরফে স্কিয়িং ও গন্ডোলা ক্যাবল কার রাইড।" },
      { day: "দিন ০৪", title: "জাফরান খেত ও লিডার নদীর তীরে পেহেলগাম", details: "পামপোরের বেগুনী জাফরান বাগান ও অবন্তিপুর ধ্বংসাবশেষ দর্শন। লিডার নদীর তীরে সুরম্য রিসোর্টে চেক-ইন।" },
      { day: "দিন ০৫", title: "বেতাব ভ্যালি, চন্দনবাড়ি ও অরু ভ্যালি জিপ ট্যুর", details: "পাহাড়ি জিপে বলিউডের জনপ্রিয় সিনেমার স্মৃতিবিজড়িত বেতাব ভ্যালি ও বরফে ঢাকা চন্দনবাড়ি ভ্রমণ।" },
      { day: "দিন ০৬", title: "সোনমার্গ স্বর্ণভূমি ও থাজিবাস হিমবাহ", details: "সোনমার্গের বরফশৃঙ্গ ও থাজিবাস হিমবাহ পরিদর্শন। রাতে শ্রীনগরে ফেরা।" },
      { day: "দিন ০৭", title: "পুরনো শ্রীনগর ও বিশ্বখ্যাত পশমিনা শাল শপিং", details: "ঐতিহাসিক জামিয়া মসজিদ ও খাঁটি কাশ্মীরি জাফরান ও পশমিনা শালের বাজার ঘুরে দেখা।" },
      { day: "দিন ০৮", title: "কাশ্মীরি কাওয়া চা ও ঢাকায় প্রত্যাবর্তন", details: "সকালে ঐতিহ্যবাহী জাফরানি কাওয়া চা পানের পর বিমানবন্দরে ড্রপ ও ঢাকায় ফেরা।" }
    ],
    inclusions: [
      "Return international and domestic flights from Dhaka to Srinagar",
      "2 Nights in Deluxe Dal Lake Houseboat + 3 Nights in Srinagar Hotel + 2 Nights in Pahalgam Resort",
      "Daily breakfast and dinner (including traditional Wazwan course)",
      "Gulmarg Gondola cable car ticket (Phase 1)",
      "Romantic 1-hour Shikara ride on Dal Lake",
      "All sightseeing and intercity transfers in private AC vehicle"
    ],
    inclusions_bn: [
      "ঢাকা - শ্রীনগর - ঢাকা রিটার্ন আন্তর্জাতিক ও অভ্যন্তরীণ ফ্লাইট",
      "ডাল লেক ডিলাক্স হাউসবোটে ২ রাত + শ্রীনগরে ৩ রাত + পেহেলগামে ২ রাত",
      "প্রতিদিনের বুফে ব্রেকফাস্ট ও ডিনার (ঐতিহ্যবাহী ওয়াজওয়ান সহ)",
      "গুলমার্গ গন্ডোলা ক্যাবল কার ফেজ-১ নিশ্চিত টিকিট",
      "ডাল লেকে ১ ঘণ্টার রোমান্টিক শিকারা রাইড",
      "সকল সাইটসিয়িং ও আন্তঃশহর প্রাইভেট গাড়ি"
    ],
    exclusions: [
      "Indian Tourist Visa fee & IVAC appointment fee",
      "Gondola Phase 2 ticket & horse riding fees",
      "Personal warm clothing rental (jackets/boots in Gulmarg)"
    ],
    exclusions_bn: [
      "ভারতীয় ট্যুরিস্ট ভিসা ও আইভ্যাক ফি",
      "গন্ডোলা ফেজ-২ ও ঘোড়া ভাড়ার টিকিট",
      "গুলমার্গে ব্যক্তিগত ভারী শীতের কাপড় ভাড়া"
    ]
  },
  {
    id: "sreemangal-sylhet",
    title: "Sreemangal Tea Capital & Sylhet Ratargul Freshwater Swamp",
    title_bn: "শ্রীমঙ্গল চায়ের রাজধানী ও সিলেটের রাতারগুল জলাবন",
    category: "domestic",
    type: "domestic",
    location: "Sreemangal & Sylhet, Bangladesh",
    location_bn: "শ্রীমঙ্গল ও সিলেট, বাংলাদেশ",
    badge: "Eco Retreat",
    badge_bn: "ইকো রিট্রিট",
    duration: "4 Days / 3 Nights",
    duration_bn: "৪ দিন / ৩ রাত",
    rating: 4.87,
    reviewsCount: 290,
    priceBdt: 18500,
    priceUsd: 150,
    featuredImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Luxury Tea Estate Resort", "Ratargul Swamp Forest Boat", "Lawachara Rain Forest", "Jaflong Zero Point", "Famous 7-Layer Tea"],
    highlights_bn: ["চা বাগান ঘেরা বিলাসবহুল রিসোর্ট", "রাতারগুল সোয়াম্প ফরেস্টে নৌকা ভ্রমণ", "লাউয়াছড়া রেইনফরেস্ট", "জাফলং জিরো পয়েন্ট", "বিখ্যাত সাতরঙা চা"],
    overview: "Immerse yourself in lush rolling hills covered in manicured tea gardens, trek under canopy rain forests searching for Hoolock Gibbons, and glide quietly on wooden boats through the 'Amazon of Bangladesh' at Ratargul Swamp.",
    overview_bn: "সবুজ চায়ের গালিচায় ঢাকা পাহাড়ি উপত্যকা, লাউয়াছড়া রেইনফরেস্টের রোমাঞ্চকর ট্রেইল এবং বাংলাদেশের আমাজন খ্যাত রাতারগুল সোয়াম্প ফরেস্টে কাঠের নৌকায় ভ্রমণ।",
    itinerary: [
      { day: "Day 01", title: "Dhaka to Sreemangal & Walk in Rolling Tea Estates", details: "Morning departure from Dhaka via private AC vehicle. Scenic drive through lush countryside. Arrive in Sreemangal and check-in to your luxury resort (Grand Sultan / Dusai / Boutique Tea Eco-Cottage). Sip the legendary Nilkantha 7-layer tea." },
      { day: "Day 02", title: "Lawachara National Park Trail & Madhabpur Lotus Lake", details: "Guided morning wildlife trek inside Lawachara National Park rain forest. Spot rare hoolock gibbons and birds. In the afternoon, visit Madhabpur Lake bordered by wild blue lotuses and endless tea hillocks." },
      { day: "Day 03", title: "Transfer to Sylhet & Ratargul Freshwater Swamp Forest", details: "Drive to Sylhet. Board a traditional non-motorized wooden dinghy to explore Ratargul Swamp Forest, the only freshwater swamp forest in Bangladesh. Spot snakes, monkeys, and submerged koroch trees." },
      { day: "Day 04", title: "Jaflong Piyain River, Shah Jalal Mazar & Return to Dhaka", details: "Morning trip to Jaflong Zero Point where crystal-clear mountain streams flow from the Indian Meghalaya hills. Visit the historical Hazrat Shah Jalal Shrine in Sylhet city. Return journey to Dhaka by evening." }
    ],
    itinerary_bn: [
      { day: "দিন ০১", title: "ঢাকা থেকে শ্রীমঙ্গল ও সবুজের মাঝে চায়ের রাজ্যে", details: "সকালে রিজার্ভ এসি গাড়িতে শ্রীমঙ্গল যাত্রা। গ্র্যান্ড সুলতান বা দুসাই রিসোর্টে চেক-ইন ও ঐতিহ্যবাহী নীলকণ্ঠের ৭ রঙের চা আস্বাদন।" },
      { day: "দিন ০২", title: "লাউয়াছড়া জাতীয় উদ্যান ও মাধবপুর নীল পদ্ম লেক", details: "লাউয়াছড়ার গভীর রেইনফরেস্টে বানর ও উলুক দর্শন। বিকেলে চারপাশের চা বাগানে ঘেরা নীল পদ্মের মাধবপুর লেক ভ্রমণ।" },
      { day: "দিন ০৩", title: "সিলেট গমন ও রাতারগুল সোয়াম্প ফরেস্টে নৌকা ভ্রমণ", details: "সিলেটে গমন ও মিঠাপানির সোয়াম্প ফরেস্ট রাতারগুলে ডিঙ্গি নৌকায় পানিতে নিমজ্জিত গাছের ছায়ায় বুনো অ্যাডভেঞ্চার।" },
      { day: "দিন ০৪", title: "জাফলং পিয়াইন নদী, হযরত শাহজালাল (র.) মাজার ও ঢাকায় ফেরা", details: "মেঘালয়ের পাহাড় ঘেরা জাফলং জিরো পয়েন্ট ও স্বচ্ছ নদী পরিদর্শন। সিলেটে মাজার জিয়ারত শেষে রাতে ঢাকায় ফেরা।" }
    ],
    inclusions: [
      "Dhaka to Sreemangal to Sylhet to Dhaka reserved private AC Sedan / Noah microbus",
      "2 Nights at 4-Star/5-Star Tea Garden Resort in Sreemangal + 1 Night in Sylhet hotel",
      "Daily buffet breakfast",
      "Forest guide and entry tickets for Lawachara, Madhabpur, and Ratargul",
      "Traditional wooden boat tour in Ratargul swamp",
      "All highway tolls, fuel, and driver allowances included"
    ],
    inclusions_bn: [
      "ঢাকা - শ্রীমঙ্গল - সিলেট - ঢাকা সম্পূর্ণ প্রাইভেট এসি নোয়াহ মাইক্রোবাস",
      "শ্রীমঙ্গলে ৪★/৫★ চা বাগান রিসোর্টে ২ রাত + সিলেটে ১ রাত",
      "প্রতিদিনের বুফে ব্রেকফাস্ট",
      "লাউয়াছড়া, মাধবপুর ও রাতারগুলের এন্ট্রি টিকিট ও বন গাইড",
      "রাতারগুলে ঐতিহ্যবাহী কাঠের ডিঙ্গি নৌকা ভ্রমণ",
      "সকল হাইওয়ে টোল, জ্বালানি ও ড্রাইভার খরচ অন্তর্ভুক্ত"
    ],
    exclusions: [
      "Lunch and dinner meals",
      "Speedboat hire at Jaflong",
      "Personal tea purchases at estate factories"
    ],
    exclusions_bn: [
      "দুপুর ও রাতের খাবার",
      "জাফলং স্পিডবোট ভাড়া",
      "চা পাতা কেনাকাটা"
    ]
  },
  {
    id: "europe-dream",
    title: "European Grandeur: Paris, Swiss Alps & Italy (11 Days)",
    title_bn: "ইউরোপিয়ান গ্র্যান্ড ট্যুর: প্যারিস, সুইস আল্পস ও ইতালি (১১ দিন)",
    category: "luxury",
    type: "international",
    location: "France, Switzerland & Italy",
    location_bn: "ফ্রান্স, সুইজারল্যান্ড ও ইতালি",
    badge: "Ultra Luxury",
    badge_bn: "আল্ট্রা লাক্সারি",
    duration: "11 Days / 10 Nights",
    duration_bn: "১১ দিন / ১০ রাত",
    rating: 4.96,
    reviewsCount: 110,
    priceBdt: 285000,
    priceUsd: 2330,
    featuredImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Schengen Visa Concierge", "Eiffel Tower 2nd Floor", "Mount Titlis Rotair Cable Car", "Venice Gondola Ride", "Eurail High-Speed Train"],
    highlights_bn: ["শেঞ্জেন ভিসা সহায়তা", "আইফেল টাওয়ার টিকিট", "মাউন্ট টিটলিস ঘূর্ণায়মান ক্যাবল কার", "ভেনিস গন্ডোলা রাইড", "ইউরেইল বুলেট ট্রেন"],
    overview: "The quintessential luxury European holiday for discerning travelers from Bangladesh. Discover romantic Paris, journey through snow-covered Swiss Alpine peaks on high-speed trains, and marvel at the historic canals and Colosseum of Italy.",
    overview_bn: "প্যারিসের আইফেল টাওয়ার ও সেইন নদী, সুইজারল্যান্ডের আল্পস পর্বতমালার বরফের চূড়া এবং ইতালির ভেনিসের রোমান্টিক খাল ও কলোসিয়াম — ইউরোপের সেরা ড্রিম ট্রিপ।",
    itinerary: [
      { day: "Days 01-03", title: "Paris, France: Louvre, Seine Cruise & Eiffel Tower", details: "Fly from Dhaka to Paris Charles de Gaulle. 3 nights in central boutique hotel. Guided Seine river cruise, priority access to Eiffel Tower 2nd level, Champs-Élysées stroll, and Mona Lisa tour at the Louvre Museum." },
      { day: "Days 04-06", title: "Swiss Alps: Lucerne, Lake Geneva & Mount Titlis Snow", details: "Scenic TGV train into Switzerland. Stay in Lucerne. Board the rotating Rotair cable car up Mount Titlis (10,000 ft) into perpetual glaciers, walk on the highest suspension bridge in Europe, and take a cruise on Lake Lucerne." },
      { day: "Days 07-10", title: "Italy: Milan Duomo, Venice Gondola & Rome Colosseum", details: "Cross the Alps to Milan, fashion capital of the world. Glide on private black gondolas through Venice's Grand Canal. Arrive in Rome to visit the Vatican Museums, St. Peter's Basilica, Trevi Fountain, and the monumental Colosseum." },
      { day: "Day 11", title: "Farewell Europe & Return Flight to Dhaka", details: "Breakfast at Roman hotel, tax-free luxury shopping at airport, and boarding return flight to Hazrat Shahjalal International Airport, Dhaka." }
    ],
    itinerary_bn: [
      { day: "দিন ০১-০৩", title: "প্যারিস, ফ্রান্স: আইফেল টাওয়ার, সেইন ক্রুজ ও লুভর মিউজিয়াম", details: "ঢাকা থেকে প্যারিসে অবতরণ। সেন্ট্রাল হোটেলে চেক-ইন। সেইন নদীতে ক্রুজ, আইফেল টাওয়ারের ২য় লেভেল ও লুভরে মোনালিসা দর্শন।" },
      { day: "দিন ০৪-০৬", title: "সুইস আল্পস: লুসার্ন, মাউন্ট টিটলিস ও তুষার শৃঙ্গ", details: "টিজিভি দ্রুতগতির ট্রেনে সুইজারল্যান্ডে প্রবেশ। ১০,০০০ ফুট উঁচুতে মাউন্ট টিটলিসে রোটেয়ার ক্যাবল কার ও বরফের ঝুলন্ত সেতু ভ্রমণ।" },
      { day: "দিন ০৭-১০", title: "ইতালি: মিলান দুওমো, ভেনিস গন্ডোলা ও রোমের কলোসিয়াম", details: "ভেনিসের গ্র্যান্ড ক্যানেলে গন্ডোলা বোট রাইড। রোমে ভ্যাটিকান সিটি, সেন্ট পিটার্স ব্যাসিলিকা, ত্রেভি ফাউন্টেন ও ঐতিহাসিক কলোসিয়াম দর্শন।" },
      { day: "দিন ১১", title: "ইউরোপকে বিদায় ও ঢাকায় ফেরা", details: "হোটেল চেক-আউট ও এয়ারপোর্টে ট্যাক্স-ফ্রি শপিং শেষে ঢাকার উদ্দেশ্যে ফিরতি ফ্লাইট।" }
    ],
    inclusions: [
      "Return international flights from Dhaka to Paris & Rome to Dhaka",
      "Complete Schengen Visa application paperwork, appointment booking, and flight/hotel reservation voucher support from Dhaka",
      "10 Nights in handpicked 4-Star city-center hotels with daily continental breakfast",
      "Eurail First-Class high-speed train pass connecting Paris, Switzerland & Italy",
      "Eiffel Tower, Mount Titlis cable car, and Venice private Gondola tickets",
      "24/7 dedicated European trip concierge support"
    ],
    inclusions_bn: [
      "ঢাকা - প্যারিস ও রোম - ঢাকা রিটার্ন আন্তর্জাতিক বিমান টিকিট",
      "সম্পূর্ণ শেঞ্জেন ভিসা ফাইল প্রসেসিং, অ্যাপয়েন্টমেন্ট ও হোটেল/ফ্লাইট ভাউচার",
      "ইউরোপের শহরের কেন্দ্রে ৪-স্টার হোটেলে ১০ রাত ও কন্টিনেন্টাল ব্রেকফাস্ট",
      "প্যারিস, সুইজারল্যান্ড ও ইতালির মধ্যে ফার্স্ট ক্লাস বুলেট ট্রেন পাস",
      "আইফেল টাওয়ার, মাউন্ট টিটলিস ক্যাবল কার ও ভেনিস গন্ডোলার নিশ্চিত টিকিট",
      "২৪/৭ ইউরোপীয় ট্রিপ কন্সিয়ার্জ সহায়তা"
    ],
    exclusions: [
      "Schengen visa embassy fee payable at VFS Global Dhaka",
      "City tourist taxes (approx €3 - €6 per person per night)",
      "Lunch and dinner meals not specified"
    ],
    exclusions_bn: [
      "ভিএফএস গ্লোবালে প্রদেয় শেঞ্জেন ভিসা দূতাবাস ফি",
      "ইউরোপীয় সিটি ট্যাক্স (প্রতি রাত জনপ্রতি প্রায় €৩-€৬ ইউরো)",
      "উল্লেখ না থাকা দুপুর ও রাতের খাবার"
    ]
  }
];

// Complete Bilingual UI Translations Dictionary
const TRANSLATIONS = {
  en: {
    topbar_location: "Dhaka, Bangladesh",
    topbar_desk: "24/7 Desk Open",
    brand_subtitle: "Travel & Tours • Dhaka",
    nav_home: "Home",
    nav_packages: "Holiday Packages",
    nav_services: "Our Services",
    nav_reel: "Cinematic Reel",
    nav_calculator: "Trip Estimator",
    nav_why_us: "Why Vista",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    nav_plan_cta: "Plan My Trip",
    drawer_lang_label: "Language:",
    drawer_plan_trip: "Plan My Custom Trip",
    drawer_wa_desk: "Instant WhatsApp Desk",
    
    // Hero
    hero_pill: "Dhaka's Leading Luxury Travel & Tour Agency",
    hero_h1_prefix: "Your Gateway to",
    hero_h1_accent: "Extraordinary",
    hero_h1_suffix: "Journeys",
    hero_subtitle: "Crafting personalized holiday packages, seamless worldwide visa processing, luxury domestic escapes, and VIP Umrah pilgrimages directly from Dhaka, Bangladesh.",
    trust_1: "100% Verified Bookings",
    trust_2: "Fast-Track Visa Support",
    trust_3: "Zero Hidden Costs",
    trust_4: "24/7 Dhaka Concierge",
    
    search_label_dest: "Destination",
    search_label_style: "Trip Style",
    search_label_departure: "Departure Window",
    search_btn: "Find Packages",
    hero_sound_muted: "Muted",
    hero_sound_on: "Sound On",

    // Stats
    stat_travelers_label: "Happy Travelers Guided",
    stat_travelers_sub: "Corporate & families",
    stat_dest_label: "Global Destinations",
    stat_dest_sub: "Worldwide network",
    stat_visa_label: "Visa Approval Rate",
    stat_visa_sub: "Flawless documentation",
    stat_rating_label: "Client Trust Rating",
    stat_rating_sub: "Over 1,200+ direct reviews",

    // Packages
    pkg_badge: "Curated Holiday Itineraries",
    pkg_heading: "Explore Our Signature Packages",
    pkg_desc: "Carefully designed by Vista Routeway's travel specialists in Dhaka. From serene overwater bungalows to snow-peaked mountains and local hill tracks.",
    filter_all: "All Packages",
    filter_intl: "International",
    filter_dom: "Bangladesh Domestic",
    filter_honey: "Honeymoon Specials",
    filter_umrah: "VIP Umrah",
    filter_luxury: "Luxury Getaways",
    card_starting_from: "Starting From",
    card_per_person: "per person (all incl.)",
    card_itinerary_btn: "Itinerary",
    card_book_btn: "Book",
    no_pkgs_title: "No Packages Found",
    no_pkgs_sub: "Try adjusting your search query or switching categories.",
    no_pkgs_btn: "View All Packages",

    // Banner
    banner_pill: "Need a Tailored Experience?",
    banner_h3: "We Create Custom Tour Packages For Any Budget",
    banner_p: "Tell us your preferred destination, traveler count, and hotel style. Our Dhaka travel planners will prepare a custom day-by-day itinerary within 2 hours!",
    banner_calc_btn: "Use Trip Estimator",
    banner_wa_btn: "WhatsApp Us",

    // Showcase
    showcase_badge: "Cinematic Travel Experience",
    showcase_h2: "See The Beauty Before You Even Board",
    showcase_p: "At Vista Routeway, we don't just sell tickets — we create lifelong memories. Watch our real tour footage from the Maldives, Dubai desert dunes, Bali's tropical cliffs, and the misty hills of Sajek Valley.",
    showcase_feat1_h: "Hand-Inspected Resorts & Hotels",
    showcase_feat1_p: "We personally verify hotel quality, cleanliness, food standards, and proximity to major sights.",
    showcase_feat2_h: "Dedicated Dhaka Tour Leads & Local Guides",
    showcase_feat2_p: "English and Bengali speaking tour guides accompany our group tours to ensure comfort and ease.",
    showcase_feat3_h: "Comprehensive Travel Insurance & Care",
    showcase_feat3_p: "Emergency flight rebooking, lost luggage support, and round-the-clock emergency assistance.",
    showcase_btn: "Explore Our Itineraries",
    showcase_reel_caption: "Vista Routeway Tour Reel 2026",

    // Services
    services_badge: "End-To-End Travel Solutions",
    services_h2: "Full-Spectrum Travel Services in Dhaka",
    services_p: "Whatever your travel requirement — from individual flight bookings to large corporate conferences and spiritual pilgrimages — Vista Routeway has you covered.",
    srv1_h: "Worldwide Visa Processing",
    srv1_p: "Hassle-free visa consulting and submission for Schengen, USA, UK, Canada, Dubai, Thailand, Malaysia, Singapore, and Saudi Arabia with 99.2% approval success.",
    srv1_b1: "Embassy Appointment Booking",
    srv1_b2: "Document Auditing & Notarization",
    srv1_b3: "Confirmed Flight & Hotel Vouchers",
    srv2_h: "International & Domestic Flights",
    srv2_p: "Wholesale airfare deals on Biman Bangladesh, Emirates, Qatar Airways, Singapore Airlines, Saudia, and US-Bangla Airlines with flexible date changes.",
    srv2_b1: "Instant PNR Issuance",
    srv2_b2: "Extra Baggage Allocation",
    srv2_b3: "24/7 Rescheduling & Cancellation",
    srv3_h: "Curated Holiday Packages",
    srv3_p: "Tailor-made itineraries crafted for couples, families, and friends. We blend private chauffeur transfers, 5-star stays, and insider sightseeing.",
    srv3_b1: "Honeymoon Villa Specials",
    srv3_b2: "Private Island Catamarans",
    srv3_b3: "Family-Friendly Activities",
    srv4_h: "VIP Umrah & Hajj Services",
    srv4_p: "Spiritual journeys performed with ultimate dignity. Clock Tower and Haram-facing 5★ hotels, high-speed Haramain train, and dedicated Dhaka scholar guides.",
    srv4_b1: "Hotels <100m from Haram",
    srv4_b2: "Private VIP GMC Transfers",
    srv4_b3: "Ziyarah Tours with Religious Scholars",
    srv5_h: "Bangladesh Domestic Tourism",
    srv5_p: "Discover the raw, breathtaking beauty of our homeland: Cox's Bazar sea view suites, Saint Martin coral island, Sajek cloud resorts, and Sreemangal tea estates.",
    srv5_b1: "5-Star Beach Resorts & Cottages",
    srv5_b2: "Reserved 4x4 Chander Gari",
    srv5_b3: "Complete Dhaka Return Transport",
    srv6_h: "Corporate & MICE Travel",
    srv6_p: "Annual company retreats, dealer incentive tours, executive conferences, and international trade shows planned with absolute Swiss precision.",
    srv6_b1: "Group Flight Block Bookings",
    srv6_b2: "Conference Hall & Banquet Setup",
    srv6_b3: "Corporate VAT/AIT Invoicing",

    // Calculator
    calc_badge: "Transparent Pricing Engine",
    calc_heading: "Interactive Trip Cost Calculator",
    calc_desc: "Get an instant, realistic budget estimation in Bangladeshi Taka (BDT) & USD for your upcoming dream holiday with Vista Routeway.",
    calc_lbl_dest: "1. Choose Destination",
    calc_lbl_travelers: "2. Number of Travelers (Persons)",
    calc_lbl_days: "3. Duration (Days)",
    calc_lbl_hotel: "4. Hotel & Stay Tier",
    calc_chk_flights: "Include Flights from Dhaka",
    calc_chk_visa: "Include Visa Processing",
    calc_live_estimate: "Calculated Live Estimate",
    calc_est_total: "Estimated Total Package",
    calc_lbl_bdt: "Total Cost (BDT)",
    calc_lbl_usd: "USD Equivalent",
    calc_inc_taxes: "Includes all taxes, service charges & breakfast",
    calc_inc_pickup: "Private airport pickup & drop included",
    calc_inc_emi: "Flexible installment payment option in Dhaka",
    calc_btn_wa: "Request Quote via WhatsApp",
    calc_instant_resp: "Instant response from our Dhaka travel desk",

    // Why Us
    why_badge: "The Vista Routeway Difference",
    why_h2: "Why Discerning Travelers Choose Us",
    why_p: "Founded with the vision to make global and domestic travel seamless, opulent, and trustworthy for the people of Bangladesh. We handle every flight, visa form, transfer, and hotel detail so you simply enjoy the journey.",
    why_years_trust: "Years of Trust",
    why_certified_agency: "Dhaka's Certified Agency",
    why_item1_h: "No Hidden Charges — Guaranteed Final Invoicing",
    why_item1_p: "What we quote in BDT is what you pay. All airport taxes, hotel service fees, and local permits are transparently accounted for.",
    why_item2_h: "Direct ATAB & IATA Standard Compliance",
    why_item2_p: "We maintain the highest aviation ticketing protocols, direct airline GDS access, and verified international hotel tie-ups.",
    why_item3_h: "24/7 Real-Time Travel Support from Dhaka",
    why_item3_p: "If your flight is delayed or an emergency arises overseas, our Dhaka team is reachable on WhatsApp and phone around the clock.",
    why_item4_h: "Flexible Payment Methods in Bangladesh",
    why_item4_p: "Book comfortably using bKash, Nagad, direct bank transfer (City Bank, BRAC, Eastern Bank), or major credit cards with 0% EMI.",

    // Reviews
    reviews_badge: "Stories From Real Travelers",
    reviews_heading: "Loved by Over 12,000+ Clients",
    reviews_desc: "Read genuine experiences from families, honeymooners, and corporate clients from Dhaka who explored the world with Vista Routeway.",
    review1_text: "\"We booked our honeymoon package to Maldives through Vista Routeway Dhaka. Everything from the private overwater villa to the speedboat pickup was flawless! Their team coordinated every single detail so we had zero stress.\"",
    review1_author: "Tanzim & Farhana Rahman",
    review1_meta: "Gulshan-2, Dhaka • Maldives Honeymoon",
    review2_text: "\"Our 6-member family visited Dubai last month. The 4x4 desert safari and Burj Khalifa fast-track tickets provided by Vista Routeway were incredible. Their visa processing was completed in just 48 hours without any hassle!\"",
    review2_author: "Dr. Saiful Karim",
    review2_meta: "Dhanmondi, Dhaka • Dubai Family Holiday",
    review3_text: "\"Performing Umrah with Vista Routeway was the most peaceful experience of my life. Our hotel in Makkah was literally 2 minutes walk from the Haram courtyard. The moallim guide was deeply knowledgeable and kind.\"",
    review3_author: "Haji Mohammad Anwar",
    review3_meta: "Uttara, Dhaka • VIP Umrah Pilgrim",

    // FAQ
    faq_badge: "Got Questions?",
    faq_heading: "Frequently Asked Questions",
    faq_desc: "Everything you need to know about booking with Vista Routeway from Dhaka, Bangladesh.",
    faq1_q: "How do I confirm a booking with Vista Routeway?",
    faq1_a: "You can book online by contacting us via WhatsApp, calling our Dhaka hotline, or emailing us at vistarouteway@gmail.com. We require a 30% to 50% advance deposit to lock your flight seats and resort vouchers, with the remaining balance due prior to departure or visa collection.",
    faq2_q: "What payment methods do you accept in Bangladesh?",
    faq2_a: "We accept all major Bangladeshi payment channels: bKash Merchant, Nagad, direct online bank transfers (City Bank, BRAC Bank, EBL, Dutch Bangla Bank), cash deposit at our Dhaka office, and Visa / MasterCard / Amex cards. We also offer 0% EMI options for eligible bank cards.",
    faq3_q: "Can I customize the travel dates and hotel selections?",
    faq3_a: "Absolutely! Every package listed can be customized to your specific travel dates, duration, preferred airlines, and hotel stars. Just click \"Plan My Trip\" or send us a WhatsApp message and we will tailor it to your exact preferences.",
    faq4_q: "How does your visa processing assistance work?",
    faq4_a: "Our experienced visa officers in Dhaka review your bank statement, asset documentation, and travel purpose to eliminate errors. We generate genuine flight reservations, hotel vouchers, cover letters, and secure your biometric submission appointments at VFS / embassy centers.",
    faq5_q: "What happens if my trip needs to be rescheduled or cancelled?",
    faq5_a: "We provide flexible cancellation and date change policies aligned with our airline and hotel partners. If unforeseen circumstances arise, our team assists you in rebooking without losing non-refundable fees where possible.",

    // Contact
    contact_badge: "Direct Inquiry",
    contact_left_h: "Let's Plan Your Next Adventure",
    contact_left_p: "Have questions regarding international tour packages, visa approvals, or custom family holidays? Reach out to our Dhaka travel desk today.",
    contact_loc_label: "Office Location",
    contact_loc_city: "Dhaka, Bangladesh",
    contact_loc_hubs: "Gulshan / Banani / Motijheel Hub",
    contact_help_label: "Helpline & Booking",
    contact_avail: "Available 24/7 for travelers",
    contact_email_label: "Email Us",
    contact_email_note: "Formal itineraries & corporate proposals",
    contact_wa_label: "WhatsApp Direct",
    contact_wa_note: "Instant PDF itineraries & date checks",
    contact_follow: "Follow Us:",
    contact_form_badge: "Direct Inquiry",
    contact_form_h: "Send Us Your Travel Query",
    contact_form_p: "Fill out the details below and our Dhaka travel consultant will reply with full itinerary options and price breakdown.",
    form_lbl_name: "Your Full Name *",
    form_ph_name: "e.g. Tanzim Rahman",
    form_lbl_phone: "Phone / WhatsApp *",
    form_lbl_email: "Email Address *",
    form_lbl_dest: "Target Destination *",
    form_lbl_message: "Travel Dates & Special Requests",
    form_ph_message: "Let us know your preferred departure dates, number of adults/kids, budget preference, or specific tour activities...",
    form_btn_submit: "Submit Inquiry & Open WhatsApp",
    form_privacy_note: "We respect your privacy. No spam guaranteed.",

    // Footer
    footer_bio: "Dhaka's premier travel agency delivering bespoke worldwide holiday tours, luxury domestic escapes, fast-track visa solutions, and VIP Umrah packages.",
    footer_loc: "Location: Dhaka, Bangladesh",
    footer_reg: "Reg. Tour Operator",
    footer_col_links: "Quick Links",
    footer_col_dests: "Top Destinations",
    footer_col_office: "Dhaka Office",
    foot_dest_1: "Maldives Island Villas",
    foot_dest_2: "Dubai & Desert Safari",
    foot_dest_3: "Thailand (Bangkok & Phuket)",
    foot_dest_4: "Cox's Bazar 5★ Resort",
    foot_dest_5: "Sajek Valley Cloud Tour",
    foot_dest_6: "VIP Umrah (Makkah)",
    footer_copy: "All rights reserved. Dhaka, Bangladesh.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_compliance: "IATA / ATAB Compliance",

    // Modal
    modal_lbl_overview: "Package Overview",
    modal_lbl_itinerary: "Day-by-Day Detailed Itinerary",
    modal_lbl_inclusions: "What's Included",
    modal_lbl_exclusions: "What's Not Included",
    modal_lbl_price: "Total Package Price",
    modal_btn_book: "Book via WhatsApp",

    // Floating & Toasts
    float_wa_label: "WhatsApp Us",
    toast_title: "Inquiry Received!",
    toast_desc: "Connecting you to WhatsApp...",

    // Auth & Profile Bilingual Translations
    nav_sign_in: "Sign In",
    nav_register: "Register",
    auth_modal_title: "Traveler Portal",
    auth_modal_sub: "Sign in or create an account to unlock personalized trip planning & saved itineraries.",
    auth_btn_login_tab: "Sign In",
    auth_btn_register_tab: "Create Account",
    auth_demo_title: "🚀 Quick Demo Traveler Login",
    auth_demo_desc: "Test with pre-configured Tanzim Ahmed (VIP Gold Traveler)",
    auth_or_email: "Or with email / phone",
    auth_lbl_fullname: "Full Name",
    auth_lbl_email: "Email or Phone",
    auth_lbl_phone: "Phone / WhatsApp Number",
    auth_lbl_password: "Password",
    auth_lbl_confirm_password: "Confirm Password",
    auth_lbl_preference: "Preferred Trip Style",
    auth_lbl_remember: "Remember Me on this device",
    auth_lbl_forgot: "Forgot Password?",
    auth_btn_submit_login: "Sign In to Vista Routeway",
    auth_btn_submit_register: "Create Traveler Account",
    auth_terms_agree: "I agree to Vista Routeway's Terms of Service & Privacy Policy",
    auth_no_account: "Don't have an account?",
    auth_have_account: "Already have an account?",
    auth_register_link: "Create Account",
    auth_login_link: "Sign In",
    auth_forgot_title: "Reset Password",
    auth_forgot_desc: "Enter your registered email and we'll send you reset instructions.",
    auth_btn_reset: "Send Reset Link",
    auth_back_login: "Back to Sign In",
    menu_my_account: "My Profile & Preferences",
    menu_my_wishlist: "Saved Wishlist",
    menu_my_trips: "My Bookings / Inquiries",
    menu_logout: "Sign Out",
    drawer_auth_guest_title: "Welcome, Traveler!",
    drawer_auth_guest_sub: "Sign in to save tours & fast booking",
    profile_modal_title: "Traveler Account Dashboard",
    profile_tab_info: "Profile Details",
    profile_tab_wishlist: "Saved Wishlist",
    profile_tab_inquiries: "My Inquiries",
    profile_tab_security: "Security",
    profile_lbl_fullname: "Full Name",
    profile_lbl_email: "Email Address (Verified)",
    profile_lbl_phone: "Phone / WhatsApp",
    profile_lbl_city: "Departure City",
    profile_lbl_style: "Preferred Travel Style",
    profile_btn_save: "Save Profile Changes",
    profile_lbl_curr_pass: "Current Password",
    profile_lbl_new_pass: "New Password (min 6 chars)",
    profile_lbl_confirm_pass: "Confirm New Password",
    profile_btn_change_pass: "Update Password"
  },

  bn: {
    topbar_location: "ঢাকা, বাংলাদেশ",
    topbar_desk: "২৪/৭ হেল্পডেস্ক খোলা",
    brand_subtitle: "ট্রাভেল অ্যান্ড ট্যুরস • ঢাকা",
    nav_home: "হোম",
    nav_packages: "হলিডে প্যাকেজ",
    nav_services: "আমাদের সেবাসমূহ",
    nav_reel: "সিনেমাটিক রিল",
    nav_calculator: "খরচ অনুমান",
    nav_why_us: "কেন ভিস্টা",
    nav_reviews: "রিভিউ",
    nav_contact: "যোগাযোগ",
    nav_plan_cta: "ভ্রমণ পরিকল্পনা",
    drawer_lang_label: "ভাষা:",
    drawer_plan_trip: "কাস্টম ভ্রমণ পরিকল্পনা",
    drawer_wa_desk: "তাৎক্ষণিক হোয়াটসঅ্যাপ ডেস্ক",

    // Hero
    hero_pill: "ঢাকার শীর্ষস্থানীয় লাক্সারি ট্রাভেল ও ট্যুর এজেন্সি",
    hero_h1_prefix: "আপনার স্বপ্নের",
    hero_h1_accent: "অসাধারণ ভ্রমণের",
    hero_h1_suffix: "বিশ্বস্ত ঠিকানা",
    hero_subtitle: "ঢাকা থেকে কাস্টমাইজড হলিডে প্যাকেজ, ঝামেলামুক্ত আন্তর্জাতিক ভিসা প্রসেসিং, দেশের ভেতরে সেরা লাক্সারি ভ্রমণ এবং প্রিমিয়াম ভিআইপি ওমরাহ প্যাকেজ।",
    trust_1: "১০০% নিশ্চিত বুকিং",
    trust_2: "দ্রুত ভিসা সহায়তা",
    trust_3: "কোনো লুকানো খরচ নেই",
    trust_4: "২৪/৭ ঢাকা কন্সিয়ার্জ",

    search_label_dest: "গন্তব্য নির্বাচন",
    search_label_style: "ভ্রমণের ধরন",
    search_label_departure: "যাত্রার সময়",
    search_btn: "প্যাকেজ খুঁজুন",
    hero_sound_muted: "নিঃশব্দ",
    hero_sound_on: "শব্দ চালু",

    // Stats
    stat_travelers_label: "সন্তুষ্ট ভ্রমণকারী",
    stat_travelers_sub: "কর্পোরেট ও পরিবার",
    stat_dest_label: "আন্তর্জাতিক গন্তব্য",
    stat_dest_sub: "বিশ্বজুড়ে বিস্তৃত নেটওয়ার্ক",
    stat_visa_label: "ভিসা সাফল্যের হার",
    stat_visa_sub: "নির্ভুল ডকুমেন্টেশন",
    stat_rating_label: "গ্রাহক সন্তুষ্টি রেটিং",
    stat_rating_sub: "১,২০০+ সরাসরি রিভিউ",

    // Packages
    pkg_badge: "মনোরম হলিডে প্যাকেজ",
    pkg_heading: "আমাদের সেরা ভ্রমণ প্যাকেজসমূহ",
    pkg_desc: "ভিস্টা রুটওয়ের ঢাকা বিশেষজ্ঞদের দ্বারা নিখুঁতভাবে তৈরি। শান্ত ওভারওয়াটার ভিলা থেকে শুরু করে বরফাচ্ছাদিত পর্বত এবং পাহাড়ের কোল।",
    filter_all: "সকল প্যাকেজ",
    filter_intl: "আন্তর্জাতিক",
    filter_dom: "বাংলাদেশ ভ্রমণ",
    filter_honey: "হানিমুন স্পেশাল",
    filter_umrah: "ভিআইপি ওমরাহ",
    filter_luxury: "লাক্সারি ট্রিপ",
    card_starting_from: "শুরু মাত্র",
    card_per_person: "প্রতি ব্যক্তি (সর্বমোট)",
    card_itinerary_btn: "ইটিনারারি",
    card_book_btn: "বুকিং",
    no_pkgs_title: "কোনো প্যাকেজ পাওয়া যায়নি",
    no_pkgs_sub: "অন্য কোনো গন্তব্য বা ক্যাটাগরি নির্বাচন করে দেখুন।",
    no_pkgs_btn: "সকল প্যাকেজ দেখুন",

    // Banner
    banner_pill: "পছন্দমতো কাস্টম ট্যুর চান?",
    banner_h3: "যেকোনো বাজেটে আমরা তৈরি করি কাস্টম ট্যুর প্যাকেজ",
    banner_p: "আপনার পছন্দের গন্তব্য, ভ্রমণকারীর সংখ্যা ও হোটেলের ক্যাটাগরি জানান। আমাদের ঢাকার ভ্রমণ বিশেষজ্ঞরা মাত্র ২ ঘণ্টার মধ্যে কাস্টম প্ল্যান তৈরি করবেন!",
    banner_calc_btn: "খরচ হিসাব করুন",
    banner_wa_btn: "হোয়াটসঅ্যাপ করুন",

    // Showcase
    showcase_badge: "সিনেমাটিক ভ্রমণ অভিজ্ঞতা",
    showcase_h2: "যাত্রার আগেই উপভোগ করুন গন্তব্যের সৌন্দর্য",
    showcase_p: "ভিস্টা রুটওয়েতে আমরা শুধু টিকিট দিই না — তৈরি করি আজীবনের সুখস্মৃতি। মালদ্বীপ, দুবাই মরুভূমি, বালির সমুদ্র সৈকত এবং সাজেকের মেঘের রাজ্যে আমাদের সরাসরি ট্যুর ফুটেজ দেখুন।",
    showcase_feat1_h: "সরাসরি যাচাইকৃত রিসোর্ট ও হোটেল",
    showcase_feat1_p: "আমরা ব্যক্তিগতভাবে হোটেল মান, পরিষ্কার-পরিচ্ছন্নতা, হালাল খাবার ও দর্শনীয় স্থানের দূরত্ব যাচাই করি।",
    showcase_feat2_h: "অভিজ্ঞ ঢাকা ট্যুর লিড ও স্থানীয় গাইড",
    showcase_feat2_p: "আমাদের গ্রুপ ট্যুরে সার্বক্ষণিক বাংলা ও ইংরেজি জানা দক্ষ গাইড আপনার সাথে থাকবে।",
    showcase_feat3_h: "পূর্ণাঙ্গ ভ্রমণ নিরাপত্তা ও সহায়তা",
    showcase_feat3_p: "জরুরি ফ্লাইট রি-বুকিং, লাগেজ ট্র্যাকিং এবং ২৪ ঘণ্টা জরুরি ভ্রমণ সহায়তা।",
    showcase_btn: "প্যাকেজগুলো দেখুন",
    showcase_reel_caption: "ভিস্টা রুটওয়ে ট্যুর রিল ২০২৬",

    // Services
    services_badge: "সম্পূর্ণ ভ্রমণ সমাধান",
    services_h2: "ঢাকায় আমাদের প্রিমিয়াম সেবাসমূহ",
    services_p: "আপনার প্রতিটি ভ্রমণ প্রয়োজনেই পাশে আছে ভিস্টা রুটওয়ে — ফ্লাইট বুকিং থেকে শুরু করে কর্পোরেট কনফারেন্স এবং পবিত্র ওমরাহ।",
    srv1_h: "আন্তর্জাতিক ভিসা প্রসেসিং",
    srv1_p: "শেঞ্জেন, ইউএসএ, যুক্তরাজ্য, কানাডা, দুবাই, থাইল্যান্ড, মালয়েশিয়া, সিঙ্গাপুর ও সৌদি আরবের ভিসা নির্ভুল প্রসেসিং ও ৯৯.২% সাফল্য।",
    srv1_b1: "দূতাবাসের অ্যাপয়েন্টমেন্ট বুকিং",
    srv1_b2: "ডকুমেন্টস নিরীক্ষা ও নোটারাইজেশন",
    srv1_b3: "নিশ্চিত হোটেল ও ফ্লাইট ভাউচার",
    srv2_h: "আন্তর্জাতিক ও অভ্যন্তরীণ ফ্লাইট টিকিট",
    srv2_p: "বিমান বাংলাদেশ, এমিরেটস, কাতার এয়ারওয়েজ, সিঙ্গাপুর এয়ারলাইন্স ও ইউএস-বাংলা এয়ারলাইন্সের স্পেশাল রেটে টিকিট সুবিধা।",
    srv2_b1: "তাৎক্ষণিক পিএনআর ইস্যু",
    srv2_b2: "অতিরিক্ত লাগেজ সুবিধা",
    srv2_b3: "২৪/৭ তারিখ পরিবর্তন ও রিফান্ড সহায়তা",
    srv3_h: "মনোরম হলিডে প্যাকেজ",
    srv3_p: "দম্পতি, পরিবার ও বন্ধুদের জন্য তৈরি বিশেষ ট্যুর প্ল্যান — প্রাইভেট গাড়ি, ৫-তারকা হোটেল ও দর্শনীয় স্থানে সরাসরি গাইড।",
    srv3_b1: "হানিমুন ভিলা স্পেশাল",
    srv3_b2: "প্রাইভেট আইল্যান্ড ক্যাটামারান",
    srv3_b3: "পারিবারিক বিনোদনমূলক রাইড",
    srv4_h: "ভিআইপি ওমরাহ ও হজ প্যাকেজ",
    srv4_p: "পরম প্রশান্তি ও মর্যাদার সাথে ইবাদত পালন। মক্কা ক্লক টাওয়ার ও হারাম সংলগ্ন ৫★ হোটেল, বুলেট ট্রেন ও ঢাকার শীর্ষ আলেমের দিকনির্দেশনা।",
    srv4_b1: "হারাম চত্বর থেকে <১০০ মিটারে হোটেল",
    srv4_b2: "প্রাইভেট ভিআইপি জিএমসি ট্রান্সফার",
    srv4_b3: "বিজ্ঞ আলেমদের সাথে পূর্ণাঙ্গ জিয়ারাহ",
    srv5_h: "বাংলাদেশ অভ্যন্তরীণ পর্যটন",
    srv5_p: "কক্সবাজার সমুদ্র সৈকত, সেন্টমার্টিন প্রবাল দ্বীপ, সাজেকের মেঘের রাজ্য এবং শ্রীমঙ্গলের সবুজ চায়ের বাগান ভ্রমণ।",
    srv5_b1: "৫-তারকা বিচ রিসোর্ট ও কটেজ",
    srv5_b2: "রিজার্ভ ৪x৪ চান্দের গাড়ি",
    srv5_b3: "ঢাকা থেকে সার্বক্ষণিক রিটার্ন সুবিধা",
    srv6_h: "কর্পোরেট ও মাইস ট্রাভেল",
    srv6_p: "বার্ষিক কর্পোরেট রিট্রিট, ডিলার ইনসেন্টিভ ট্যুর, ব্যবসায়িক কনফারেন্স ও আন্তর্জাতিক এক্সপো ট্যুরের নিখুঁত আয়োজন।",
    srv6_b1: "গ্রুপ ফ্লাইট ব্লক বুকিং",
    srv6_b2: "কনফারেন্স হল ও ব্যাংকুয়েট আয়োজন",
    srv6_b3: "ভ্যাট ও ট্যাক্স চালান সুবিধা",

    // Calculator
    calc_badge: "স্বচ্ছ ও নির্ভুল হিসাব",
    calc_heading: "ভ্রমণ খরচ ক্যালকুলেটর",
    calc_desc: "ভিস্টা রুটওয়ের সাথে আপনার স্বপ্নের ছুটির আনুমানিক খরচ জেনে নিন বাংলাদেশি টাকা (BDT) ও ডলারে।",
    calc_lbl_dest: "১. গন্তব্য নির্বাচন করুন",
    calc_lbl_travelers: "২. ভ্রমণকারীর সংখ্যা (জন)",
    calc_lbl_days: "৩. ভ্রমণের মেয়াদ (দিন)",
    calc_lbl_hotel: "৪. হোটেল ও আবাসন ক্যাটাগরি",
    calc_chk_flights: "ঢাকা থেকে বিমান ভাড়া সহ",
    calc_chk_visa: "ভিসা প্রসেসিং ফি সহ",
    calc_live_estimate: "লাইভ আনুমানিক হিসাব",
    calc_est_total: "আনুমানিক মোট প্যাকেজ খরচ",
    calc_lbl_bdt: "মোট খরচ (টাকা)",
    calc_lbl_usd: "ডলারে সমপরিমাণ",
    calc_inc_taxes: "সকল ট্যাক্স, সার্ভিস চার্জ ও ব্রেকফাস্ট অন্তর্ভুক্ত",
    calc_inc_pickup: "ব্যক্তিগত এয়ারপোর্ট পিকআপ ও ড্রপ অন্তর্ভুক্ত",
    calc_inc_emi: "ঢাকায় সহজ কিস্তি সুবিধায় পরিশোধের সুযোগ",
    calc_btn_wa: "হোয়াটসঅ্যাপে কোটেশন নিন",
    calc_instant_resp: "আমাদের ঢাকা ডেস্ক থেকে তাৎক্ষণিক উত্তর",

    // Why Us
    why_badge: "ভিস্টা রুটওয়ের বিশেষত্ব",
    why_h2: "ভ্রমণপ্রেমীরা কেন আমাদের বেছে নেন",
    why_p: "বাংলাদেশের মানুষের জন্য বিশ্বমানের নিরাপদ, আরামদায়ক ও বিলাসবহুল ভ্রমণ নিশ্চিত করাই আমাদের লক্ষ্য। ভিসা থেকে শুরু করে ফ্লাইট ও হোটেল — সব দায়িত্ব আমাদের, আপনি শুধু উপভোগ করবেন ভ্রমণ।",
    why_years_trust: "বছরের আস্থা",
    why_certified_agency: "ঢাকার সার্টিফাইড এজেন্সি",
    why_item1_h: "কোনো লুকানো চার্জ নেই — চূড়ান্ত ও স্বচ্ছ বিল",
    why_item1_p: "আমরা যা উদ্ধৃতি দিই, আপনি কেবল সেটাই প্রদান করেন। সকল ট্যাক্স, হোটেল সার্ভিস ফি এবং অনুমতিপত্র আগে থেকেই অন্তর্ভুক্ত।",
    why_item2_h: "সরাসরি আটাব ও আইয়াটা স্ট্যান্ডার্ড কমপ্লায়েন্স",
    why_item2_p: "সরাসরি এয়ারলাইন জিডিএস এক্সেস, আন্তর্জাতিক হোটেল চুক্তি এবং সর্বোচ্চ বিমান টিকিটিং মান রক্ষা করি আমরা।",
    why_item3_h: "ঢাকা থেকে ২৪/৭ রিয়েল-টাইম সহায়তা",
    why_item3_p: "বিদেশে ফ্লাইট বিলম্ব বা যেকোনো জরুরি মুহূর্তে আমাদের ঢাকার অভিজ্ঞ দল ফোনে ও হোয়াটসঅ্যাপে সক্রিয় থাকে।",
    why_item4_h: "সহজ ও নির্ভরযোগ্য পেমেন্ট সুবিধা",
    why_item4_p: "বিকাশ, নগদ, ব্যাংক ট্রান্সফার (সিটি ব্যাংক, ব্র্যাক, ইবিএল) বা ক্রেডিট কার্ডে ০% ইএমআই সুবিধায় বুকিং করুন।",

    // Reviews
    reviews_badge: "ভ্রমণকারীদের বাস্তব অভিজ্ঞতা",
    reviews_heading: "১২,০০০+ সন্তুষ্ট গ্রাহকের ভালোবাসা",
    reviews_desc: "পরিবার, হানিমুন দম্পতি এবং কর্পোরেট ক্লায়েন্টদের আনন্দঘন ভ্রমণের বাস্তব অভিজ্ঞতা।",
    review1_text: "\"আমরা ভিস্টা রুটওয়ে ঢাকার মাধ্যমে মালদ্বীপের হানিমুন প্যাকেজ বুক করেছিলাম। ওভারওয়াটার ভিলা থেকে শুরু করে স্পিডবোট রিসিভ — সবকিছুই ছিল নিখুঁত ও আরামদায়ক!\"",
    review1_author: "তানজিম ও ফারহানা রহমান",
    review1_meta: "গুলশান-২, ঢাকা • মালদ্বীপ হানিমুন",
    review2_text: "\"গত মাসে আমাদের ৬ জনের পরিবার দুবাই ভ্রমণ করে। ভিস্টা রুটওয়ের ডেজার্ট সাফারি ও বুর্জ খলিফার ফাস্ট-ট্র্যাক সার্ভিস ছিল অসাধারণ। মাত্র ৪৮ ঘণ্টায় ভিসা পেয়েছি!\"",
    review2_author: "ডাঃ সাইফুল করিম",
    review2_meta: "ধানমন্ডি, ঢাকা • দুবাই ফ্যামিলি হলিডে",
    review3_text: "\"ভিস্টা রুটওয়ের সাথে ওমরাহ পালন আমার জীবনের অন্যতম প্রশান্তিময় অভিজ্ঞতা ছিল। মক্কায় আমাদের হোটেলটি ছিল হারাম চত্বর থেকে মাত্র ২ মিনিটের হাঁটা দূরত্বে।\"",
    review3_author: "হাজী মোহাম্মদ আনোয়ার",
    review3_meta: "উত্তরা, ঢাকা • ভিআইপি ওমরাহ যাত্রী",

    // FAQ
    faq_badge: "প্রশ্ন আছে?",
    faq_heading: "সাধারণ জিজ্ঞাসা ও উত্তর",
    faq_desc: "ভিস্টা রুটওয়ে থেকে বুকিং সংক্রান্ত সকল প্রয়োজনীয় তথ্য।",
    faq1_q: "ভিস্টা রুটওয়েতে বুকিং কীভাবে নিশ্চিত করব?",
    faq1_a: "আপনি আমাদের হোয়াটসঅ্যাপে যোগাযোগ করে, ঢাকার হটলাইনে ফোন করে অথবা সরাসরি vistarouteway@gmail.com এ ইমেইল করে বুকিং নিশ্চিত করতে পারেন। ফ্লাইট ও হোটেল আসন সংরক্ষণের জন্য ৩০% থেকে ৫০% অগ্রিম প্রদান করতে হয়।",
    faq2_q: "বাংলাদেশে কোন কোন মাধ্যমে পেমেন্ট গ্রহণ করা হয়?",
    faq2_a: "বিকাশ মার্চেন্ট, নগদ, সরাসরি অনলাইন ব্যাংক ট্রান্সফার (সিটি ব্যাংক, ব্র্যাক ব্যাংক, ইবিএল, ডাচ বাংলা ব্যাংক), অফিসে ক্যাশ পেমেন্ট এবং ভিসা/মাস্টারকার্ড। নির্দিষ্ট কার্ডে ০% ইএমআই সুবিধাও রয়েছে।",
    faq3_q: "আমি কি ভ্রমণের তারিখ ও হোটেল পরিবর্তন করতে পারব?",
    faq3_a: "অবশ্যই! আমাদের প্রতিটি প্যাকেজ আপনার সুবিধাজনক তারিখ, ভ্রমণের মেয়াদ, পছন্দের বিমান সংস্থা ও হোটেলের মান অনুযায়ী কাস্টমাইজ করা সম্ভব।",
    faq4_q: "ভিসা প্রসেসিং কীভাবে কাজ করে?",
    faq4_a: "ঢাকার অভিজ্ঞ ভিসা অফিসাররা আপনার ব্যাংক স্টেটমেন্ট ও প্রয়োজনীয় ডকুমেন্টস যাচাই-বাছাই করে নির্ভুল ফাইল তৈরি করেন। নিশ্চিত হোটেল ভাউচার, টিকিট রিজার্ভেশন এবং ভিএফএস অ্যাপয়েন্টমেন্টের ব্যবস্থা আমরাই করে থাকি।",
    faq5_q: "কোনো কারণে ভ্রমণ বাতিল বা পরিবর্তন করতে হলে কী নিয়ম?",
    faq5_a: "এয়ারলাইন্স ও হোটেল পার্টনারদের নীতিমালা অনুযায়ী আমরা সর্বোচ্চ নমনীয়তার সাথে তারিখ পরিবর্তনের ব্যবস্থা করি, যাতে আপনার আর্থিক ক্ষতি না হয়।",

    // Contact
    contact_badge: "সরাসরি যোগাযোগ",
    contact_left_h: "চলুন শুরু করি পরবর্তী রোমাঞ্চকর ভ্রমণ",
    contact_left_p: "ভিসা তথ্য, ট্যুর প্যাকেজ বা পারিবারিক অবকাশ নিয়ে যেকোনো প্রশ্ন থাকলে আজই আমাদের সাথে যোগাযোগ করুন।",
    contact_loc_label: "অফিসের ঠিকানা",
    contact_loc_city: "ঢাকা, বাংলাদেশ",
    contact_loc_hubs: "গুলশান / বনানী / মতিঝিল হাব",
    contact_help_label: "হটলাইন ও বুকিং",
    contact_avail: "ভ্রমণকারীদের জন্য ২৪/৭ খোলা",
    contact_email_label: "ইমেইল",
    contact_email_note: "অফিসিয়াল ইটিনারারি ও কর্পোরেট প্রস্তাবনা",
    contact_wa_label: "সরাসরি হোয়াটসঅ্যাপ",
    contact_wa_note: "তাৎক্ষণিক পিডিএফ ইটিনারারি ও তারিখ যাচাই",
    contact_follow: "আমাদের সাথে থাকুন:",
    contact_form_badge: "সরাসরি বার্তা",
    contact_form_h: "আপনার ভ্রমণ চাহিদা আমাদের জানান",
    contact_form_p: "নিচের তথ্যগুলো পূরণ করুন, আমাদের ঢাকার ভ্রমণ বিশেষজ্ঞ পূর্ণাঙ্গ ইটিনারারি ও খরচের হিসাব সহ যোগাযোগ করবেন।",
    form_lbl_name: "আপনার পূর্ণ নাম *",
    form_ph_name: "যেমন: তানজিম রহমান",
    form_lbl_phone: "ফোন / হোয়াটসঅ্যাপ *",
    form_lbl_email: "ইমেইল ঠিকানা *",
    form_lbl_dest: "পছন্দের গন্তব্য *",
    form_lbl_message: "ভ্রমণের তারিখ ও অন্যান্য চাহিদা",
    form_ph_message: "আপনার সম্ভাব্য যাত্রার তারিখ, সদস্য সংখ্যা ও বিশেষ কোনো পছন্দ থাকলে জানান...",
    form_btn_submit: "তথ্য পাঠান ও হোয়াটসঅ্যাপে কথা বলুন",
    form_privacy_note: "আপনার গোপনীয়তা সম্পূর্ণ সুরক্ষিত। স্প্যামমুক্ত সেবা।",

    // Footer
    footer_bio: "ঢাকার শীর্ষস্থানীয় ট্রাভেল এজেন্সি — আন্তর্জাতিক ট্যুর, দেশীয় অবকাশ ভ্রমণ, ভিসা প্রসেসিং ও ভিআইপি ওমরাহ সেবায় বিশ্বস্ত নাম।",
    footer_loc: "অবস্থান: ঢাকা, বাংলাদেশ",
    footer_reg: "নিবন্ধিত ট্যুর অপারেটর",
    footer_col_links: "প্রয়োজনীয় লিংক",
    footer_col_dests: "জনপ্রিয় গন্তব্য",
    footer_col_office: "ঢাকা অফিস",
    foot_dest_1: "মালদ্বীপ আইল্যান্ড ভিলা",
    foot_dest_2: "দুবাই ও মরুভূমি সাফারি",
    foot_dest_3: "থাইল্যান্ড (ব্যাংকক ও ফুকেট)",
    foot_dest_4: "কক্সবাজার ৫★ রিসোর্ট",
    foot_dest_5: "সাজেক ভ্যালি মেঘের ট্যুর",
    foot_dest_6: "ভিআইপি ওমরাহ (মক্কা)",
    footer_copy: "সর্বস্বত্ব সংরক্ষিত। ঢাকা, বাংলাদেশ।",
    footer_privacy: "গোপনীয়তা নীতি",
    footer_terms: "শর্তাবলী",
    footer_compliance: "আইয়াটা ও আটাব কমপ্লায়েন্স",

    // Modal
    modal_lbl_overview: "প্যাকেজ সারসংক্ষেপ",
    modal_lbl_itinerary: "দিন অনুযায়ী বিস্তারিত ইটিনারারি",
    modal_lbl_inclusions: "যা যা অন্তর্ভুক্ত রয়েছে",
    modal_lbl_exclusions: "যা যা অন্তর্ভুক্ত নয়",
    modal_lbl_price: "সর্বমোট প্যাকেজ মূল্য",
    modal_btn_book: "হোয়াটসঅ্যাপে বুকিং করুন",

    // Floating & Toasts
    float_wa_label: "হোয়াটসঅ্যাপ",
    toast_title: "তথ্য গৃহীত হয়েছে!",
    toast_desc: "হোয়াটসঅ্যাপে সংযুক্ত করা হচ্ছে...",

    // Auth & Profile Bilingual Translations
    nav_sign_in: "সাইন ইন",
    nav_register: "রেজিস্ট্রেশন",
    auth_modal_title: "ট্রাভেলার পোর্টাল",
    auth_modal_sub: "ভ্রমণ পরিকল্পনা ও সংরক্ষিত প্যাকেজ দেখতে লগইন বা নতুন অ্যাকাউন্ট তৈরি করুন।",
    auth_btn_login_tab: "সাইন ইন",
    auth_btn_register_tab: "নতুন অ্যাকাউন্ট",
    auth_demo_title: "🚀 এক ক্লিকে ডেমো লগইন",
    auth_demo_desc: "তানজিম আহমেদ (ভিআইপি গোল্ড ট্রাভেলার) ডেমো অ্যাকাউন্টে টেস্ট করুন",
    auth_or_email: "অথবা ইমেইল / ফোন দিয়ে",
    auth_lbl_fullname: "পুরো নাম",
    auth_lbl_email: "ইমেইল বা ফোন নম্বর",
    auth_lbl_phone: "ফোন / হোয়াটসঅ্যাপ নম্বর",
    auth_lbl_password: "পাসওয়ার্ড",
    auth_lbl_confirm_password: "কনফার্ম পাসওয়ার্ড",
    auth_lbl_preference: "পছন্দের ভ্রমণ ধরণ",
    auth_lbl_remember: "এই ডিভাইসে মনে রাখুন",
    auth_lbl_forgot: "পাসওয়ার্ড ভুলে গেছেন?",
    auth_btn_submit_login: "ভিস্টা রুটওয়েতে সাইন ইন করুন",
    auth_btn_submit_register: "ট্রাভেলার অ্যাকাউন্ট তৈরি করুন",
    auth_terms_agree: "আমি ভিস্টা রুটওয়ের শর্তাবলী ও প্রাইভেসি পলিসির সাথে একমত",
    auth_no_account: "এখনো অ্যাকাউন্ট নেই?",
    auth_have_account: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
    auth_register_link: "নতুন অ্যাকাউন্ট খুলুন",
    auth_login_link: "সাইন ইন করুন",
    auth_forgot_title: "পাসওয়ার্ড রিসেট",
    auth_forgot_desc: "আপনার নিবন্ধিত ইমেইল লিখুন, আমরা পাসওয়ার্ড রিসেট লিংক পাঠাব।",
    auth_btn_reset: "রিসেট লিংক পাঠান",
    auth_back_login: "লগইনে ফিরে যান",
    menu_my_account: "প্রোফাইল ও পছন্দসমূহ",
    menu_my_wishlist: "সংরক্ষিত উইশলিস্ট",
    menu_my_trips: "বুকিং ও অনুসন্ধান তালিকা",
    menu_logout: "সাইন আউট",
    drawer_auth_guest_title: "স্বাগতম, ভ্রমণপিপাসু!",
    drawer_auth_guest_sub: "প্যাকেজ সংরক্ষণ ও দ্রুত বুকিংয়ের জন্য সাইন ইন করুন",
    profile_modal_title: "ট্রাভেলার অ্যাকাউন্ট ড্যাশবোর্ড",
    profile_tab_info: "প্রোফাইল বিবরণ",
    profile_tab_wishlist: "সংরক্ষিত উইশলিস্ট",
    profile_tab_inquiries: "আমার অনুসন্ধান",
    profile_tab_security: "নিরাপত্তা",
    profile_lbl_fullname: "পুরো নাম",
    profile_lbl_email: "ইমেইল অ্যাড্রেস (ভেরিফায়েড)",
    profile_lbl_phone: "ফোন / হোয়াটসঅ্যাপ",
    profile_lbl_city: "যাত্রার শহর",
    profile_lbl_style: "পছন্দের ভ্রমণ ধরণ",
    profile_btn_save: "পরিবর্তনগুলো সংরক্ষণ করুন",
    profile_lbl_curr_pass: "বর্তমান পাসওয়ার্ড",
    profile_lbl_new_pass: "নতুন পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)",
    profile_lbl_confirm_pass: "নতুন পাসওয়ার্ড নিশ্চিত করুন",
    profile_btn_change_pass: "পাসওয়ার্ড আপডেট করুন"
  }
};

// Global State
let currentLang = localStorage.getItem('vista_language') || 'en';
let currentTheme = localStorage.getItem('vista_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let currentCurrency = localStorage.getItem('vista_currency') || 'bdt';
let activeCategory = 'all';
window.TOURS_DATA = TOURS_DATA;
let currentModalTourId = null;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Theme, Language & Currency
  initTheme();
  initLanguage();
  initCurrency();
  initLiveBookings();

  // Render initial tours
  renderPackages(TOURS_DATA);

  // Setup UI components
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

// Theme Management (Light & Dark/Night Mode)
function initTheme() {
  setTheme(currentTheme, false);
}

function setTheme(theme, save = true) {
  currentTheme = theme;
  if (save) {
    localStorage.setItem('vista_theme', theme);
  }

  const htmlEl = document.documentElement;
  const sunIcon = document.getElementById("theme-icon-sun");
  const moonIcon = document.getElementById("theme-icon-moon");
  const mobSunIcon = document.getElementById("mobile-theme-icon-sun");
  const mobMoonIcon = document.getElementById("mobile-theme-icon-moon");
  const drawerThemeLabel = document.getElementById("drawer-theme-label");

  if (theme === 'dark') {
    htmlEl.classList.add('dark');
    if (sunIcon) sunIcon.classList.remove('hidden');
    if (moonIcon) moonIcon.classList.add('hidden');
    if (mobSunIcon) mobSunIcon.classList.remove('hidden');
    if (mobMoonIcon) mobMoonIcon.classList.add('hidden');
    if (drawerThemeLabel) {
      drawerThemeLabel.textContent = currentLang === 'bn' ? '☀️ ডে মোড' : '☀️ Light Mode';
    }
  } else {
    htmlEl.classList.remove('dark');
    if (sunIcon) sunIcon.classList.add('hidden');
    if (moonIcon) moonIcon.classList.remove('hidden');
    if (mobSunIcon) mobSunIcon.classList.add('hidden');
    if (mobMoonIcon) mobMoonIcon.classList.remove('hidden');
    if (drawerThemeLabel) {
      drawerThemeLabel.textContent = currentLang === 'bn' ? '🌙 নাইট মোড' : '🌙 Night Mode';
    }
  }
}

function toggleTheme() {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme, true);
}

// Language Management (English & Bangla Mode)
function initLanguage() {
  setLanguage(currentLang, false);
}

function setLanguage(lang, save = true) {
  currentLang = lang;
  if (save) {
    localStorage.setItem('vista_language', lang);
  }

  // Set html lang
  document.documentElement.lang = lang;

  // Update button active states
  const btnEn = document.getElementById("lang-btn-en");
  const btnBn = document.getElementById("lang-btn-bn");
  const mobLangLabel = document.getElementById("mobile-quick-lang-label");
  const drawerEn = document.getElementById("drawer-lang-en");
  const drawerBn = document.getElementById("drawer-lang-bn");

  if (lang === 'bn') {
    if (btnEn) {
      btnEn.className = "px-2.5 py-1 rounded-full text-[11px] font-bold transition-all text-slate-300 hover:text-white";
    }
    if (btnBn) {
      btnBn.className = "px-2.5 py-1 rounded-full text-[11px] font-bold transition-all bg-sky-500 text-white shadow-sm";
    }
    if (drawerEn) {
      drawerEn.className = "px-2.5 py-1 rounded-full text-xs font-bold transition-all text-slate-300";
    }
    if (drawerBn) {
      drawerBn.className = "px-2.5 py-1 rounded-full text-xs font-bold transition-all bg-sky-500 text-white";
    }
    if (mobLangLabel) mobLangLabel.textContent = "EN";
  } else {
    if (btnEn) {
      btnEn.className = "px-2.5 py-1 rounded-full text-[11px] font-bold transition-all bg-sky-500 text-white shadow-sm";
    }
    if (btnBn) {
      btnBn.className = "px-2.5 py-1 rounded-full text-[11px] font-bold transition-all text-slate-300 hover:text-white";
    }
    if (drawerEn) {
      drawerEn.className = "px-2.5 py-1 rounded-full text-xs font-bold transition-all bg-sky-500 text-white";
    }
    if (drawerBn) {
      drawerBn.className = "px-2.5 py-1 rounded-full text-xs font-bold transition-all text-slate-300";
    }
    if (mobLangLabel) mobLangLabel.textContent = "বাংলা";
  }

  // Update text nodes with data-i18n
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update input placeholders with data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update theme label in drawer
  const drawerThemeLabel = document.getElementById("drawer-theme-label");
  if (drawerThemeLabel) {
    if (currentTheme === 'dark') {
      drawerThemeLabel.textContent = lang === 'bn' ? '☀️ ডে মোড' : '☀️ Light Mode';
    } else {
      drawerThemeLabel.textContent = lang === 'bn' ? '🌙 নাইট মোড' : '🌙 Night Mode';
    }
  }

  // Update select dropdown options
  updateSelectOptions(lang);

  // Update packages cards
  filterByCategory(activeCategory);

  // Update open modal if visible
  const modal = document.getElementById("itinerary-modal");
  if (modal && !modal.classList.contains("hidden") && currentModalTourId) {
    openItineraryModal(currentModalTourId);
  }

  // Update calculator
  const calcTravelers = document.getElementById("calc-travelers");
  if (calcTravelers) {
    calcTravelers.dispatchEvent(new Event("input"));
  }

  // Update Auth and Wishlist components for new language
  if (window.VistaAuth && window.VistaAuth.updateUIForAuth) {
    window.VistaAuth.updateUIForAuth();
  }
}

// Update select dropdown options dynamically
function updateSelectOptions(lang) {
  const isBn = lang === 'bn';

  // Search destination
  const searchDest = document.getElementById("search-destination");
  if (searchDest) {
    const curVal = searchDest.value;
    const destOptions = [
      { val: "all", en: "Any Destination (Global & Domestic)", bn: "যেকোনো গন্তব্য (আন্তর্জাতিক ও দেশীয়)" },
      { val: "maldives", en: "Maldives Islands", bn: "মালদ্বীপ দ্বীপপুঞ্জ" },
      { val: "dubai", en: "Dubai & Abu Dhabi (UAE)", bn: "দুবাই ও আবুধাবি (ইউএই)" },
      { val: "bali", en: "Bali & Nusa Penida (Indonesia)", bn: "বালি ও নুসা পেনিদা (ইন্দোনেশিয়া)" },
      { val: "thailand", en: "Bangkok & Phuket (Thailand)", bn: "ব্যাংকক ও ফুকেট (থাইল্যান্ড)" },
      { val: "coxs-bazar", en: "Cox's Bazar & Saint Martin", bn: "কক্সবাজার ও সেন্টমার্টিন" },
      { val: "sajek", en: "Sajek Valley & Bandarban", bn: "সাজেক ভ্যালি ও বান্দরবান" },
      { val: "sreemangal", en: "Sreemangal & Sylhet", bn: "শ্রীমঙ্গল ও সিলেট" },
      { val: "umrah", en: "VIP Umrah (Makkah & Madinah)", bn: "ভিআইপি ওমরাহ (মক্কা ও মদিনা)" },
      { val: "kashmir", en: "Kashmir (Dal Lake & Gulmarg)", bn: "কাশ্মীর (ডাল লেক ও গুলমার্গ)" },
      { val: "europe", en: "Europe (Paris, Swiss, Italy)", bn: "ইউরোপ (প্যারিস, সুইস, ইতালি)" }
    ];
    searchDest.innerHTML = destOptions.map(o => `<option value="${o.val}" ${o.val === curVal ? 'selected' : ''}>${isBn ? o.bn : o.en}</option>`).join('');
  }

  // Search type
  const searchType = document.getElementById("search-type");
  if (searchType) {
    const curVal = searchType.value;
    const typeOptions = [
      { val: "all", en: "All Styles", bn: "সকল ধরন" },
      { val: "honeymoon", en: "Honeymoon & Romantic", bn: "হানিমুন ও রোমান্টিক" },
      { val: "family", en: "Family Holiday", bn: "পারিবারিক অবকাশ" },
      { val: "luxury", en: "Luxury & Premium", bn: "লাক্সারি ও প্রিমিয়াম" },
      { val: "spiritual", en: "VIP Umrah & Spiritual", bn: "ভিআইপি ওমরাহ ও আধ্যাত্মিক" },
      { val: "domestic", en: "Bangladesh Nature & Hills", bn: "বাংলাদেশ পাহাড় ও নদী" }
    ];
    searchType.innerHTML = typeOptions.map(o => `<option value="${o.val}" ${o.val === curVal ? 'selected' : ''}>${isBn ? o.bn : o.en}</option>`).join('');
  }

  // Search month
  const searchMonth = document.getElementById("search-month");
  if (searchMonth) {
    const curVal = searchMonth.value;
    const monthOptions = [
      { val: "upcoming", en: "Upcoming 30 Days (Instant)", bn: "আগামী ৩০ দিনের মধ্যে (তাৎক্ষণিক)" },
      { val: "next-month", en: "Next Month", bn: "পরবর্তী মাস" },
      { val: "winter", en: "Winter Holiday Season", bn: "শীতকালীন অবকাশ" },
      { val: "eid", en: "Eid / Special Vacations", bn: "ঈদ / বিশেষ ছুটি" }
    ];
    searchMonth.innerHTML = monthOptions.map(o => `<option value="${o.val}" ${o.val === curVal ? 'selected' : ''}>${isBn ? o.bn : o.en}</option>`).join('');
  }

  // Calculator destination
  const calcDest = document.getElementById("calc-destination");
  if (calcDest) {
    const curVal = calcDest.value;
    const calcDestOptions = [
      { val: "maldives", en: "Maldives Overwater Resort", bn: "মালদ্বীপ ওভারওয়াটার রিসোর্ট" },
      { val: "dubai", en: "Dubai & Desert Safari (UAE)", bn: "দুবাই ও মরুভূমি সাফারি (ইউএই)" },
      { val: "thailand", en: "Bangkok & Phuket (Thailand)", bn: "ব্যাংকক ও ফুকেট (থাইল্যান্ড)" },
      { val: "bali", en: "Bali & Nusa Penida (Indonesia)", bn: "বালি ও নুসা পেনিদা (ইন্দোনেশিয়া)" },
      { val: "kashmir", en: "Kashmir & Dal Lake (India)", bn: "কাশ্মীর ও ডাল লেক (ভারত)" },
      { val: "umrah", en: "VIP Umrah Makkah & Madinah", bn: "ভিআইপি ওমরাহ মক্কা ও মদিনা" },
      { val: "europe", en: "Europe (Paris, Swiss, Italy)", bn: "ইউরোপ (প্যারিস, সুইস, ইতালি)" },
      { val: "coxsbazar", en: "Cox's Bazar & Saint Martin (BD)", bn: "কক্সবাজার ও সেন্টমার্টিন (বাংলাদেশ)" },
      { val: "sajek", en: "Sajek Valley & Bandarban (BD)", bn: "সাজেক ভ্যালি ও বান্দরবান (বাংলাদেশ)" },
      { val: "sreemangal", en: "Sreemangal Tea Retreat (BD)", bn: "শ্রীমঙ্গল চা বাগান রিট্রিট (বাংলাদেশ)" }
    ];
    calcDest.innerHTML = calcDestOptions.map(o => `<option value="${o.val}" ${o.val === curVal ? 'selected' : ''}>${isBn ? o.bn : o.en}</option>`).join('');
  }

  // Calculator hotel
  const calcHotel = document.getElementById("calc-hotel");
  if (calcHotel) {
    const curVal = calcHotel.value;
    const hotelOptions = [
      { val: "4star", en: "Premium 4-Star Hotel / Resort (Recommended)", bn: "প্রিমিয়াম ৪-স্টার হোটেল / রিসোর্ট (সুপারিশকৃত)" },
      { val: "5star", en: "Ultra-Luxury 5-Star / Overwater Villa", bn: "আল্ট্রা-লাক্সারি ৫-স্টার / ওভারওয়াটার ভিলা" },
      { val: "3star", en: "Standard 3-Star Comfort", bn: "স্ট্যান্ডার্ড ৩-স্টার আরামদায়ক" }
    ];
    calcHotel.innerHTML = hotelOptions.map(o => `<option value="${o.val}" ${o.val === curVal ? 'selected' : ''}>${isBn ? o.bn : o.en}</option>`).join('');
  }

  // Contact destination
  const contactDest = document.getElementById("contact-destination");
  if (contactDest) {
    const curVal = contactDest.value;
    const contactOptions = [
      { val: "Maldives", en: "Maldives Overwater Resort", bn: "মালদ্বীপ ওভারওয়াটার রিসোর্ট" },
      { val: "Dubai & UAE", en: "Dubai & Abu Dhabi", bn: "দুবাই ও আবুধাবি" },
      { val: "Thailand", en: "Bangkok & Phuket", bn: "ব্যাংকক ও ফুকেট" },
      { val: "Bali", en: "Bali & Nusa Penida", bn: "বালি ও নুসা পেনিদা" },
      { val: "Cox's Bazar & Saint Martin", en: "Cox's Bazar & Saint Martin", bn: "কক্সবাজার ও সেন্টমার্টিন" },
      { val: "Sajek Valley", en: "Sajek Valley & Bandarban", bn: "সাজেক ভ্যালি ও বান্দরবান" },
      { val: "VIP Umrah", en: "VIP Umrah Makkah & Madinah", bn: "ভিআইপি ওমরাহ মক্কা ও মদিনা" },
      { val: "Kashmir", en: "Kashmir Dal Lake & Snow", bn: "কাশ্মীর ডাল লেক ও বরফ" },
      { val: "Europe", en: "Europe Tour (Paris, Swiss, Italy)", bn: "ইউরোপ ট্যুর (প্যারিস, সুইস, ইতালি)" },
      { val: "Worldwide Visa", en: "Visa Processing Only", bn: "শুধুমাত্র ভিসা প্রসেসিং" }
    ];
    contactDest.innerHTML = contactOptions.map(o => `<option value="${o.val}" ${o.val === curVal ? 'selected' : ''}>${isBn ? o.bn : o.en}</option>`).join('');
  }
}

function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'bn' : 'en';
  setLanguage(newLang, true);
}

// Convert numbers to Bengali digits if currentLang === 'bn'
function formatNumber(num) {
  if (currentLang !== 'bn') {
    return num.toLocaleString();
  }
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toLocaleString().replace(/\d/g, d => bengaliDigits[d]);
}

// Render Packages Cards
function renderPackages(tours) {
  const container = document.getElementById("packages-grid");
  if (!container) return;

  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  if (tours.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 sm:py-16 text-center">
        <div class="inline-flex p-3 sm:p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 mb-3">
          <svg class="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">${dict.no_pkgs_title}</h3>
        <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1.5">${dict.no_pkgs_sub}</p>
        <button onclick="resetFilters()" class="mt-5 px-5 py-2.5 rounded-full bg-sky-600 text-white font-medium text-xs sm:text-sm hover:bg-sky-700 transition cursor-pointer">${dict.no_pkgs_btn}</button>
      </div>
    `;
    return;
  }

  container.innerHTML = tours.map(tour => {
    const title = (currentLang === 'bn' && tour.title_bn) ? tour.title_bn : tour.title;
    const badge = (currentLang === 'bn' && tour.badge_bn) ? tour.badge_bn : tour.badge;
    const duration = (currentLang === 'bn' && tour.duration_bn) ? tour.duration_bn : tour.duration;
    const location = (currentLang === 'bn' && tour.location_bn) ? tour.location_bn : tour.location;
    const overview = (currentLang === 'bn' && tour.overview_bn) ? tour.overview_bn : tour.overview;
    const highlights = (currentLang === 'bn' && tour.highlights_bn) ? tour.highlights_bn : tour.highlights;
    const priceFormattedBdt = formatNumber(tour.priceBdt);
    const priceFormattedUsd = tour.priceUsd.toLocaleString();

    const isUsd = currentCurrency === 'usd';
    const primaryPrice = isUsd ? `$${priceFormattedUsd}` : `৳${priceFormattedBdt}`;
    const secondaryPrice = isUsd ? `(৳${priceFormattedBdt})` : `($${priceFormattedUsd})`;
    const isBestseller = tour.badge && (tour.badge.includes('Best') || tour.badge.includes('Popular'));

    const waText = encodeURIComponent(
      currentLang === 'bn'
        ? `আসসালামু আলাইকুম ভিস্টা রুটওয়ে ঢাকা! আমি '${title}' ট্যুর প্যাকেজটি (${primaryPrice} প্রতি ব্যক্তি) সম্পর্কে বিস্তারিত জানতে ও বুকিং করতে আগ্রহী। অনুগ্রহ করে পরবর্তী প্রসেস জানান!`
        : `Hello Vista Routeway! I am interested in booking the '${tour.title}' package (${primaryPrice}). Please provide departure dates and details.`
    );

    return `
      <div id="tour-card-${tour.id}" class="tour-card bg-white dark:bg-[#081e3a] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col group transition-all duration-300">
        <!-- Image Header with Badges & Action Controls -->
        <div class="relative h-56 sm:h-64 overflow-hidden">
          <img src="${tour.featuredImage}" alt="${title}" class="ken-burns w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20"></div>
          
          <!-- Top Badges -->
          <div class="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-1.5 sm:gap-2 flex-wrap z-10">
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide badge-gold uppercase shadow-md">${badge}</span>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide bg-slate-900/85 backdrop-blur-md text-white border border-white/20 capitalize">${tour.type}</span>
            ${isBestseller ? `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-rose-600/90 text-white backdrop-blur-md shadow-md animate-pulse">🔥 <span>Selling Fast</span></span>` : ''}
          </div>

          <!-- Top Right: Share, Wishlist Heart & Duration Tag -->
          <div class="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 sm:gap-2 z-10">
            <!-- Share Tour Button -->
            <button onclick="shareTour(event, '${tour.id}')" aria-label="Share Package" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md text-white hover:text-sky-300 flex items-center justify-center transition-all shadow-md active:scale-90 cursor-pointer" title="Share Package">
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
            </button>

            <!-- Wishlist Heart Button -->
            <button onclick="toggleWishlist(event, '${tour.id}')" data-tour-id="${tour.id}" aria-label="Save to Wishlist" class="wishlist-btn w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md text-white flex items-center justify-center transition-all shadow-md active:scale-90 cursor-pointer" title="Save to Wishlist">
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-none transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </button>

            <!-- Duration Tag -->
            <div class="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
              <svg class="w-3 h-3 text-sky-600 dark:text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>${duration}</span>
            </div>
          </div>

          <!-- Location Bottom Tag -->
          <div class="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 text-white flex items-center justify-between text-xs sm:text-sm">
            <div class="flex items-center gap-1 font-medium truncate pr-2">
              <svg class="w-3.5 h-3.5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span class="truncate drop-shadow">${location}</span>
            </div>
            <div class="flex items-center gap-1 font-semibold text-amber-300 text-[11px] sm:text-xs shrink-0 bg-slate-900/70 px-2 py-0.5 rounded-md">
              <span>★</span> ${tour.rating} <span class="text-slate-300 font-normal">(${tour.reviewsCount})</span>
            </div>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-4 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-bold text-lg sm:text-xl text-slate-900 dark:text-white line-clamp-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer leading-snug" onclick="openItineraryModal('${tour.id}')">
              ${title}
            </h3>
            <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
              ${overview}
            </p>

            <!-- Key Amenities/Pills -->
            <div class="flex flex-wrap gap-1 sm:gap-1.5 mt-3 sm:mt-4">
              ${highlights.slice(0, 3).map(h => `
                <span class="text-[11px] sm:text-xs bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-sky-100 dark:border-sky-800 flex items-center gap-1">
                  <svg class="w-3 h-3 text-sky-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${h}</span>
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Pricing & Action Row -->
          <div class="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div class="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold">${dict.card_starting_from}</div>
              <div class="flex items-baseline gap-1.5">
                <span class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">${primaryPrice}</span>
                <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">${secondaryPrice}</span>
              </div>
              <div class="text-[10px] sm:text-[11px] text-slate-400">${dict.card_per_person}</div>
            </div>

            <div class="grid grid-cols-2 sm:flex sm:items-center gap-2">
              <button onclick="openItineraryModal('${tour.id}')" class="min-h-[44px] px-3 sm:px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition text-center active:scale-95 cursor-pointer">
                ${dict.card_itinerary_btn}
              </button>
              <a href="https://wa.me/8801340773388?text=${waText}" target="_blank" onclick="triggerConfetti()" class="min-h-[44px] px-3 sm:px-4 py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-xs sm:text-sm hover:bg-sky-700 transition flex items-center justify-center gap-1.5 shadow-sm shadow-sky-600/30 active:scale-95">
                <span>${dict.card_book_btn}</span>
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.VistaAuth && window.VistaAuth.updateWishlistCardIcons) {
    window.VistaAuth.updateWishlistCardIcons();
  }
}

// Category Tabs
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("bg-sky-600", "text-white", "shadow-md");
        t.classList.add("bg-slate-200/80", "dark:bg-[#0c2747]", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-300");
      });
      tab.classList.remove("bg-slate-200/80", "dark:bg-[#0c2747]", "text-slate-700", "dark:text-slate-200", "hover:bg-slate-300");
      tab.classList.add("bg-sky-600", "text-white", "shadow-md");

      activeCategory = tab.getAttribute("data-category") || 'all';
      filterByCategory(activeCategory);
    });
  });
}

function filterByCategory(category) {
  activeCategory = category;
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
        (t.title_bn && t.title_bn.includes(destVal)) ||
        t.location.toLowerCase().includes(destVal) ||
        (t.location_bn && t.location_bn.includes(destVal)) ||
        t.overview.toLowerCase().includes(destVal) ||
        (t.overview_bn && t.overview_bn.includes(destVal))
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
    currentModalTourId = null;
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
  currentModalTourId = tourId;
  const tour = TOURS_DATA.find(t => t.id === tourId);
  if (!tour) return;

  const title = (currentLang === 'bn' && tour.title_bn) ? tour.title_bn : tour.title;
  const location = (currentLang === 'bn' && tour.location_bn) ? tour.location_bn : tour.location;
  const duration = (currentLang === 'bn' && tour.duration_bn) ? tour.duration_bn : tour.duration;
  const overview = (currentLang === 'bn' && tour.overview_bn) ? tour.overview_bn : tour.overview;
  const itinerary = (currentLang === 'bn' && tour.itinerary_bn) ? tour.itinerary_bn : tour.itinerary;
  const inclusions = (currentLang === 'bn' && tour.inclusions_bn) ? tour.inclusions_bn : tour.inclusions;
  const exclusions = (currentLang === 'bn' && tour.exclusions_bn) ? tour.exclusions_bn : tour.exclusions;

  const modal = document.getElementById("itinerary-modal");
  const titleEl = document.getElementById("modal-tour-title");
  const metaEl = document.getElementById("modal-tour-meta");
  const overviewEl = document.getElementById("modal-tour-overview");
  const itineraryEl = document.getElementById("modal-tour-itinerary");
  const inclusionsEl = document.getElementById("modal-tour-inclusions");
  const exclusionsEl = document.getElementById("modal-tour-exclusions");
  const priceEl = document.getElementById("modal-tour-price");
  const bookBtn = document.getElementById("modal-book-btn");

  if (titleEl) titleEl.textContent = title;
  if (metaEl) {
    metaEl.innerHTML = `
      <span class="inline-flex items-center gap-1 text-sky-400 font-semibold"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg> ${location}</span>
      <span class="text-slate-400">•</span>
      <span class="font-medium text-slate-300">${duration}</span>
      <span class="text-slate-400">•</span>
      <span class="text-amber-400 font-bold">★ ${tour.rating} (${tour.reviewsCount} reviews)</span>
    `;
  }
  if (overviewEl) overviewEl.textContent = overview;

  if (itineraryEl) {
    itineraryEl.innerHTML = itinerary.map(item => `
      <div class="relative pl-8 pb-6 border-l-2 border-sky-300 dark:border-sky-700 last:border-l-0 last:pb-0">
        <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-bold shadow-md ring-4 ring-white dark:ring-slate-900">✓</div>
        <div class="font-bold text-sky-600 dark:text-sky-400 text-sm tracking-wide uppercase">${item.day}: <span class="text-slate-900 dark:text-white normal-case font-semibold text-base">${item.title}</span></div>
        <p class="text-slate-600 dark:text-slate-300 text-sm mt-1.5 leading-relaxed">${item.details}</p>
      </div>
    `).join('');
  }

  if (inclusionsEl) {
    inclusionsEl.innerHTML = inclusions.map(inc => `
      <li class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
        <svg class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        <span>${inc}</span>
      </li>
    `).join('');
  }

  if (exclusionsEl) {
    exclusionsEl.innerHTML = exclusions.map(exc => `
      <li class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
        <svg class="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        <span>${exc}</span>
      </li>
    `).join('');
  }

  const formattedBdt = formatNumber(tour.priceBdt);
  if (priceEl) {
    priceEl.innerHTML = `৳${formattedBdt} <span class="text-sm font-normal text-slate-500 dark:text-slate-400">($${tour.priceUsd}) / ${currentLang === 'bn' ? 'ব্যক্তি' : 'person'}</span>`;
  }

  if (bookBtn) {
    const waText = encodeURIComponent(
      currentLang === 'bn'
        ? `আসসালামু আলাইকুম ভিস্টা রুটওয়ে ঢাকা! আমি '${title}' ট্যুর প্যাকেজটির বুকিং নিশ্চিত করতে চাই (৳${formattedBdt} প্রতি ব্যক্তি)। বুকিং প্রক্রিয়া ও ভ্রমণ নির্দেশিকা জানান!`
        : `Hello Vista Routeway Dhaka! I want to confirm the booking for '${tour.title}' (৳${tour.priceBdt.toLocaleString()} per person). Please guide me with payment options and travel requirements.`
    );
    bookBtn.href = `https://wa.me/8801340773388?text=${waText}`;
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

    // Define total USD safely
    const totalUsd = Math.round(subtotal / 122);

    const travelersDisplay = document.getElementById("travelers-display");
    const daysDisplay = document.getElementById("days-display");
    if (travelersDisplay) {
      if (currentLang === 'bn') {
        travelersDisplay.textContent = `${formatNumber(travelers)} জন`;
      } else {
        travelersDisplay.textContent = `${travelers} ${travelers > 1 ? 'Adults' : 'Adult'}`;
      }
    }
    if (daysDisplay) {
      if (currentLang === 'bn') {
        daysDisplay.textContent = `${formatNumber(days)} দিন`;
      } else {
        daysDisplay.textContent = `${days} Days`;
      }
    }

    totalBdtEl.textContent = `৳${formatNumber(subtotal)}`;
    totalUsdEl.textContent = `$${totalUsd.toLocaleString()} USD`;

    // Update WhatsApp link
    if (waBtn) {
      const summaryMsg = encodeURIComponent(
        currentLang === 'bn'
          ? `আসসালামু আলাইকুম ভিস্টা রুটওয়ে ঢাকা! আমি আপনাদের ওয়েবসাইটে ভ্রমণের একটি আনুমানিক বাজেট ক্যালকুলেট করেছি:\n` +
            `• গন্তব্য: ${dest.toUpperCase()}\n` +
            `• ভ্রমণকারী: ${formatNumber(travelers)} জন\n` +
            `• মেয়াদ: ${formatNumber(days)} দিন\n` +
            `• হোটেল: ${hotelTier.toUpperCase()}\n` +
            `• ফ্লাইট অন্তর্ভুক্ত: ${includeFlights ? 'হ্যাঁ' : 'না'}\n` +
            `• ভিসা অন্তর্ভুক্ত: ${includeVisa ? 'হ্যাঁ' : 'না'}\n` +
            `• আনুমানিক বাজেট: ৳${formatNumber(subtotal)} ($${totalUsd} USD)\n\n` +
            `অনুগ্রহ করে আমাকে বিস্তারিত কোটেশন ও ভ্রমণের সম্ভাব্য তারিখ জানান!`
          : `Hello Vista Routeway Dhaka! I calculated a customized trip on your website:\n` +
            `• Destination: ${dest.toUpperCase()}\n` +
            `• Travelers: ${travelers} Persons\n` +
            `• Duration: ${days} Days\n` +
            `• Hotel: ${hotelTier.toUpperCase()}\n` +
            `• Flight Included: ${includeFlights ? 'Yes' : 'No'}\n` +
            `• Visa Included: ${includeVisa ? 'Yes' : 'No'}\n` +
            `• Estimated Budget: ৳${subtotal.toLocaleString()} ($${totalUsd} USD)\n\n` +
            `Please provide a formal quote and available dates!`
      );
      waBtn.href = `https://wa.me/8801340773388?text=${summaryMsg}`;
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
  const heroSoundLabel = document.getElementById("hero-sound-label");

  if (heroVideo && soundToggle) {
    soundToggle.addEventListener("click", () => {
      heroVideo.muted = !heroVideo.muted;
      const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
      if (heroVideo.muted) {
        soundToggle.innerHTML = `
          <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>
          <span id="hero-sound-label" class="text-xs text-white">${dict.hero_sound_muted}</span>
        `;
      } else {
        soundToggle.innerHTML = `
          <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
          <span id="hero-sound-label" class="text-xs text-white">${dict.hero_sound_on}</span>
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

      // Construct WhatsApp inquiry
      const waMsg = encodeURIComponent(
        currentLang === 'bn'
          ? `ওয়েবসাইট থেকে নতুন বার্তা:\nনাম: ${name}\nফোন: ${phone}\nইমেইল: ${email}\nগন্তব্য: ${destination}\nবার্তা: ${message}`
          : `New Inquiry from Website:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDestination: ${destination}\nMessage: ${message}`
      );
      
      // Show visual confirmation toast
      if (toast) {
        toast.classList.remove("translate-y-24", "opacity-0");
        toast.classList.add("translate-y-0", "opacity-100");
        setTimeout(() => {
          toast.classList.remove("translate-y-0", "opacity-100");
          toast.classList.add("translate-y-24", "opacity-0");
        }, 5000);
      }

      // If user is logged in, record inquiry to user's account
      if (window.VistaAuth && window.VistaAuth.getSessionUser) {
        const currentUser = window.VistaAuth.getSessionUser();
        if (currentUser) {
          if (!currentUser.inquiries) currentUser.inquiries = [];
          currentUser.inquiries.unshift({
            id: 'inq_' + Date.now(),
            packageTitle: destination ? `Custom Inquiry: ${destination}` : 'General Consultation',
            destination: destination || 'Worldwide',
            travelers: 2,
            date: new Date().toISOString().split('T')[0],
            status: 'Inquiry Sent'
          });
          const allUsers = JSON.parse(localStorage.getItem('vista_users') || '[]');
          const uIdx = allUsers.findIndex(u => u.id === currentUser.id);
          if (uIdx > -1) {
            allUsers[uIdx] = currentUser;
            localStorage.setItem('vista_users', JSON.stringify(allUsers));
          }
          window.VistaAuth.setSessionUser(currentUser);
        }
      }

      contactForm.reset();

      // Open WhatsApp inquiry
      window.open(`https://wa.me/8801340773388?text=${waMsg}`, "_blank");
    });
  }
}

// Sticky Navbar Scroll Effect
function setupNavbarScroll() {
  const topBar = document.getElementById("top-bar");
  const navbar = document.getElementById("main-nav");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("glass-nav", "shadow-lg");
      if (topBar && window.innerWidth < 640) {
        topBar.classList.add("hidden");
      }
    } else {
      navbar.classList.remove("glass-nav", "shadow-lg");
      if (topBar && window.innerWidth < 640) {
        topBar.classList.remove("hidden");
      }
    }
  });
}

// Mobile Menu Drawer with Animated Icon Toggle
function setupMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");
  const icon = document.getElementById("hamburger-icon");

  if (!toggleBtn || !menu) return;

  const updateIcon = (isOpen) => {
    if (!icon) return;
    if (isOpen) {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`;
    } else {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>`;
    }
  };

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isClosed = menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    updateIcon(isClosed);
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      updateIcon(false);
    });
  });

  // Close when tapping outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target) && !menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      updateIcon(false);
    }
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
              counter.textContent = formatNumber(target);
              clearInterval(timer);
            } else {
              counter.textContent = formatNumber(current);
            }
          }, 25);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById("stats-section");
  if (statsSection) observer.observe(statsSection);
}

// Expose global functions to window for onclick handlers
window.setLanguage = setLanguage;
window.toggleLanguage = toggleLanguage;
window.setTheme = setTheme;
window.toggleTheme = toggleTheme;
window.openItineraryModal = openItineraryModal;
window.resetFilters = resetFilters;


// Currency Management Engine (BDT & USD)
function initCurrency() {
  setCurrency(currentCurrency, false);
}

function setCurrency(currency, save = true) {
  currentCurrency = currency;
  if (save) {
    localStorage.setItem('vista_currency', currency);
  }

  const btnBdt = document.getElementById("curr-btn-bdt");
  const btnUsd = document.getElementById("curr-btn-usd");

  if (currency === 'usd') {
    if (btnBdt) btnBdt.className = "px-2 py-0.5 rounded-full text-slate-300 hover:text-white transition-all cursor-pointer";
    if (btnUsd) btnUsd.className = "px-2 py-0.5 rounded-full text-white bg-sky-500 shadow-sm transition-all cursor-pointer";
  } else {
    if (btnBdt) btnBdt.className = "px-2 py-0.5 rounded-full text-white bg-sky-500 shadow-sm transition-all cursor-pointer";
    if (btnUsd) btnUsd.className = "px-2 py-0.5 rounded-full text-slate-300 hover:text-white transition-all cursor-pointer";
  }

  // Re-render packages cards with new currency
  filterByCategory(activeCategory);

  // Update open modal if visible
  if (currentModalTourId) {
    const modal = document.getElementById("itinerary-modal");
    if (modal && !modal.classList.contains("hidden")) {
      openItineraryModal(currentModalTourId);
    }
  }

  // Re-calculate budget estimator
  const calcTravelers = document.getElementById("calc-travelers");
  if (calcTravelers) {
    calcTravelers.dispatchEvent(new Event("input"));
  }
}

// Share Tour Package
function shareTour(e, tourId) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const tour = TOURS_DATA.find(t => t.id === tourId);
  const title = tour ? tour.title : 'Vista Routeway Tour';
  const url = window.location.origin + window.location.pathname + '#packages';

  if (navigator.clipboard) {
    navigator.clipboard.writeText(`${title} - Book with Vista Routeway: ${url}`).then(() => {
      triggerConfetti();
      const toast = document.getElementById("notification-toast");
      if (toast) {
        const titleEl = toast.querySelector(".font-bold");
        const descEl = toast.querySelector(".text-slate-300");
        if (titleEl) titleEl.textContent = "Link Copied! 🎉";
        if (descEl) descEl.textContent = "Package link copied to clipboard. Share with friends!";
        toast.classList.remove("translate-y-24", "opacity-0");
        toast.classList.add("translate-y-0", "opacity-100");
        setTimeout(() => {
          toast.classList.remove("translate-y-0", "opacity-100");
          toast.classList.add("translate-y-24", "opacity-0");
        }, 4000);
      }
    });
  }
}

// Particle Confetti Celebration
function triggerConfetti() {
  if (typeof window.confetti === 'function') {
    window.confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#0284c7', '#38bdf8', '#f59e0b', '#fbbf24', '#10b981']
    });
  }
}

// Live Social Proof Booking Notifications
const RECENT_BOOKINGS = [
  { name: "Farhana & Family", loc: "Gulshan, Dhaka", pkg: "Maldives Luxury Overwater Escape", time: "4m ago", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=150&q=80" },
  { name: "Tanvir Ahmed", loc: "Banani, Dhaka", pkg: "Dubai Extravaganza & Desert Safari", time: "9m ago", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=150&q=80" },
  { name: "Haji Mohammad Anwar", loc: "Uttara, Dhaka", pkg: "VIP Umrah & Haramain 5★ Package", time: "15m ago", img: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=150&q=80" },
  { name: "Dr. Sabrina & Spouse", loc: "Dhanmondi, Dhaka", pkg: "Kashmir Dal Lake & Gulmarg Escape", time: "22m ago", img: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=150&q=80" },
  { name: "Nafis & Corporate Group", loc: "Motijheel, Dhaka", pkg: "Sajek Valley Cloud Cottages Tour", time: "34m ago", img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=150&q=80" },
  { name: "Imran & Friends", loc: "Sylhet, Bangladesh", pkg: "Bali Tropical Villa & Nusa Penida", time: "48m ago", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=150&q=80" }
];

let bookingTimer = null;
let bookingIndex = 0;

function initLiveBookings() {
  const chip = document.getElementById("live-booking-chip");
  if (!chip) return;

  function showNextBooking() {
    const item = RECENT_BOOKINGS[bookingIndex % RECENT_BOOKINGS.length];
    bookingIndex++;

    const textEl = document.getElementById("live-booking-text");
    const timeEl = document.getElementById("live-booking-time");
    const imgEl = document.getElementById("live-booking-img");

    if (textEl) textEl.textContent = `${item.name} (${item.loc}) booked ${item.pkg}`;
    if (timeEl) timeEl.textContent = `${item.time} • 100% Verified`;
    if (imgEl) imgEl.src = item.img;

    chip.classList.remove("-translate-x-[120%]", "opacity-0");
    chip.classList.add("translate-x-0", "opacity-100");

    setTimeout(() => {
      chip.classList.remove("translate-x-0", "opacity-100");
      chip.classList.add("-translate-x-[120%]", "opacity-0");
    }, 5500);
  }

  // First trigger after 4s, then every 15s
  setTimeout(() => {
    showNextBooking();
    bookingTimer = setInterval(showNextBooking, 16000);
  }, 4000);
}

function dismissLiveBooking() {
  const chip = document.getElementById("live-booking-chip");
  if (chip) {
    chip.classList.remove("translate-x-0", "opacity-100");
    chip.classList.add("-translate-x-[120%]", "opacity-0");
  }
  if (bookingTimer) clearInterval(bookingTimer);
}

// Quick Filter from Inspiration Bar
function quickFilterDestination(destKey) {
  const packagesSec = document.getElementById("packages");
  if (packagesSec) {
    packagesSec.scrollIntoView({ behavior: 'smooth' });
  }

  const destSelect = document.getElementById("search-destination");
  if (destSelect) {
    destSelect.value = destKey;
    const searchBtn = document.getElementById("hero-search-btn");
    if (searchBtn) searchBtn.click();
  }

  // Highlight tour card after scroll
  setTimeout(() => {
    const matchingCard = document.querySelector(`[id*="${destKey}"]`);
    if (matchingCard) {
      matchingCard.classList.add("ring-4", "ring-sky-400", "scale-105");
      setTimeout(() => {
        matchingCard.classList.remove("ring-4", "ring-sky-400", "scale-105");
      }, 1500);
    }
  }, 600);
}

// Expose functions to window
window.setCurrency = setCurrency;
window.shareTour = shareTour;
window.triggerConfetti = triggerConfetti;
window.dismissLiveBooking = dismissLiveBooking;
window.quickFilterDestination = quickFilterDestination;
