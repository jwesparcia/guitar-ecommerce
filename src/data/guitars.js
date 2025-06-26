// src/data/guitars.js
const guitars = [
  {
    id: 1,
    name: "EVH Stripe Series, Black with Yellow Stripes",
    price: 829,
    originalPrice: 999,
    category: "Electric",
    brand: "EVH",
    rating: 4.8,
    reviews: 247,
    image: "https://d1aeri3ty3izns.cloudfront.net/media/12/129745/1200/preview.jpg",
    images: [
      "https://d1aeri3ty3izns.cloudfront.net/media/12/129747/1200/preview.jpg",
      "https://th.bing.com/th/id/OIP.DRPh_Dzd87431kmOl0mVbwHaDH?pid=ImgDet&w=474&h=199&rs=1&cb=idpwebp2&o=7&rm=3",
      "https://www.axebition.com/sites/default/files/guitars/evh-striped-series-black-with-yellow-stripes-03-.jpg?slideshow=true&slideshowAuto=false&slideshowSpeed=4000&speed=350&transition=elastic"
    ],
    featured: true,
    specs: {
      body: "Alder",
      neck: "Maple",
      fretboard: "Maple",
      pickups: "Player Series Alnico 5 Strat Single-Coil",
      bridge: "Floyd Rose Special Double-Locking Tremolo"
    },
    description: "The ’79 Bumblebee tribute model features all of the original specs, including an ash Strat® body, bolt-on birdseye maple neck with oiled back finish, straight 12” radius birdseye maple fingerboard with 21 jumbo frets, katalox dots and black side dots, and skirted Strat-style “Tone” volume knob."
  },
  {
    id: 2,
    name: "EVH® Striped Series Frankenstein™ Frankie",
    price: 2499,
    category: "Electric",
    brand: "EVH",
    rating: 4.9,
    reviews: 189,
    image: "https://i.ebayimg.com/images/g/1PoAAOSws-JfiRo3/s-l640.jpg",
    images: [
      "https://www.fmicassets.com/Damroot/EVHZoom/10001/5107900503_gtr_frtbdydtl_001_nr.jpg",
      "https://www.fmicassets.com/Damroot/EVHZoom/10001/5107900503_gtr_bck_001_rl.jpg",
      "https://www.fmicassets.com/Damroot/EVHZoom/10001/5107900503_gtr_hdstckfrt_001_nr.jpg"
    ],
    featured: true,
    specs: {
      body: "Mahogany",
      top: "Maple",
      neck: "Mahogany",
      fretboard: "Rosewood",
      pickups: "BurstBucker Pro Humbuckers"
    },
    description: "Widely regarded as the most recognizable electric guitar ever, Eddie Van Halen's iconic and revered Frankenstein™ guitar now comes your way with a price tag the everyday musician can afford in the form of the EVH® Striped Series Frankenstein™ Frankie."
  },
  {
    id: 3,
    name: "EVH Striped Series '78 Eruption",
    price: 3199,
    category: "Electric",
    brand: "EVH",
    rating: 4.9,
    reviews: 156,
    image: "https://d1aeri3ty3izns.cloudfront.net/media/83/839026/600/preview.jpg",
    images: [
      "https://www.fmicassets.com/Damroot/EVHZoom/10009/5107900576_evh_ins_cbr_1_nr.jpg",
      "https://www.fmicassets.com/Damroot/EVHZoom/10009/5107900576_evh_ins_bck_1_rl.jpg",
      "https://www.fmicassets.com/Damroot/EVHZoom/10009/5107900576_evh_ins_hft_1_nr.jpg"
    ],
    featured: true,
    specs: {
      top: "Sitka Spruce",
      back: "East Indian Rosewood",
      sides: "East Indian Rosewood",
      neck: "Select Hardwood",
      fretboard: "Ebony"
    },
    description: "On the cover of Van Halen's 1978 eponymous debut album, Eddie Van Halen thrusts his black-and-white striped Strat®-style guitar towards the camera as if he's showing you the future. He played this guitar on his unprecedented and mind-blowing Eruption guitar solo, thus its nickname, and almost immediately, this monumental instrument became a timeless icon, symbolic of a paradigm shift in guitar-driven rock and roll."
  },
  {
    id: 4,
    name: "EVH Striped Series 5150™",
    price: 749,
    category: "Electric",
    brand: "EVH",
    rating: 4.7,
    reviews: 203,
    image: "https://th.bing.com/th/id/OIP.zXuQGkLU9cYFJJbtM16-IgHaHa?w=600&h=600&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    images: [
      "https://www.fmicassets.com/Damroot/EVHZoom/10002/5107902515_gtr_cntbdyright_001_nr.jpg",
      "https://www.fmicassets.com/Damroot/EVHZoom/10002/5107902515_gtr_back_001_rl.jpg",
      "https://www.fmicassets.com/Damroot/EVHZoom/10002/5107902515_gtr_hdstckfrt_001_nr.jpg"
    ],
    specs: {
      body: "Alder",
      neck: "Maple",
      fretboard: "Rosewood",
      pickups: "Player Series Alnico 5 Jazz Bass Single-Coil",
      bridge: "Floyd Rose Special Double-Locking Tremolo"
    },
    description: "When Eddie Van Halen introduced his famous red, white and black striped 5150™ guitar in 1984, he never would have fathomed the thousands of copies it would inspire. But then again, Eddie has made a career of being copied in every which way imaginable. EVH proudly introduces a new Striped Series 5150 model based on his original instrument, featuring his distinctively striped 5150 motif and single humbucker setup."
  },
  {
    id: 5,
    name: "Martin OMJM John Mayer Signature",
    price: 4199,
    category: "Acoustic",
    brand: "Taylor",
    rating: 4.8,
    reviews: 89,
    image: "https://th.bing.com/th/id/OIP.AfKez5YgVTNPZfQWesJkYQHaHa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
    images: [
      "https://www.alamomusic.com/cdn/shop/files/e246cdfe-9c59-5c2b-9c8a-babbbf700f6a_595x700.jpg?v=1699978456",
      "https://www.alamomusic.com/cdn/shop/files/425a890e-24ef-5c74-85fd-76fe2be911e5_595x700.jpg?v=1702069541"
    ],
    specs: {
      top: "Sitka Spruce",
      back: "Indian Rosewood",
      sides: "Indian Rosewood",
      neck: "Tropical Mahogany",
      fretboard: "West African Ebony"
    },
    description: "Taylor's 814ce pairs Indian rosewood back and sides with a Sitka spruce top for a blend of warmth, resonance, and clarity that's made this combination a perennial favorite among players."
  },
  {
    id: 6,
    name: "Fender Sting Signature Precision Bass",
    price: 899,
    category: "Bass",
    brand: "PRS",
    rating: 4.6,
    reviews: 134,
    image: "https://media.musiciansfriend.com/is/image/MMGS7/Sting-Signature-Precision-Bass-2-Color-Sunburst-Maple-Fretboard/511022000063063-00-500x500.jpg",
    images: [
      "https://th.bing.com/th/id/OIP.GRz1rC6q6Ec3BvcgWNEmBQHaHa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
    ],
    specs: {
      body: "Mahogany",
      top: "Maple Veneer",
      neck: "Mahogany",
      fretboard: "Rosewood",
      pickups: "85/15 \"S\" Humbuckers"
    },
    description: "The PRS SE Custom 24 delivers many of the high-end appointments and tone of the USA-made Custom 24 in a more affordable package."
  }
];

export const categories = ["All", "Electric", "Acoustic", "Bass", ];
export default guitars;
