import Blog1Img from "../assets/BlogImg1.png";
import Blog2Img from "../assets/BlogImg2.png";
import Blog3Img from "../assets/BlogImg3.png";
import Blog4Img from "../assets/BlogImg4.png";
import Blog5Img from "../assets/BlogImg5.png";
import Blog6Img from "../assets/BlogImg6.png";
import profileImg from "../../assets/Group 62904.png";

const FeaturedPosts = [
  {
    id: 1,
    title: "What is the key difference between ...",
  },
  {
    id: 2,
    title: "What is the key difference between ...",
  },
  {
    id: 3,
    title: "What is the key difference between ...",
  },
  {
    id: 4,
    title: "What is the key difference between ...",
  },
  {
    id: 5,
    title: "What is the key difference between ...",
  },
];

const Tags = [
  {
    id: 1,
    title: "Region",
    content: [
      "Africa",
      "South America",
      "North America",
      "Europe",
      "Asia",
      "Australia",
      "Antarctica",
    ],
  },
  {
    id: 2,
    title: "Sector",
    content: [
      "Agriculture",
      "Automotive",
      "Aviation",
      "Cleaning & Hygiene",
      "Health",
      "Hospitality",
    ],
  },
  {
    id: 3,
    title: "Size",
    content: [
      "Large Org (250+)",
      "Micro-Org (1-9)",
      "Small Org (25-100)",
      "Medium-Org (100-250)",
    ],
  },
  {
    id: 4,
    title: "Others",
    content: ["Populer", "New", "Trending", "Most Viewed"],
  },
];

const Blogs = [
  {
    id: 1,
    imgUrl: Blog1Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Africa", "South America"],
    sector: ["Agriculture", "Automotive"],
    size: ["Large Org (250+)"],
    others: ["Populer", "New"],
  },

  {
    id: 2,
    imgUrl: Blog2Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Asia", "North America"],
    sector: ["Aviation", "Health"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed"],
  },

  {
    id: 3,
    imgUrl: Blog3Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Europe", "Australia"],
    sector: ["Cleaning & Hygiene", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Populer"],
  },

  {
    id: 4,
    imgUrl: Blog4Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Antarctica"],
    sector: ["Health", "Hospitality"],
    size: ["Large Org (250+)"],
    others: ["Trending", "Most Viewed", "New"],
  },

  {
    id: 5,
    imgUrl: Blog5Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Africa", "South America"],
    sector: ["Agriculture", "Automotive"],
    size: ["Medium-Org (100-250)"],
    others: ["Populer", "New"],
  },

  {
    id: 6,
    imgUrl: Blog6Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Asia", "North America"],
    sector: ["Aviation", "Health"],
    size: ["Large Org (250+)"],
    others: ["Trending", "Most Viewed"],
  },
  {
    id: 7,
    imgUrl: Blog1Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Europe", "Australia"],
    sector: ["Cleaning & Hygiene", "Hospitality"],
    size: ["Large Org (250+)"],
    others: ["Trending", "Populer"],
  },

  {
    id: 8,
    imgUrl: Blog2Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Antarctica"],
    sector: ["Health", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed", "New"],
  },

  {
    id: 9,
    imgUrl: Blog3Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Africa", "South America"],
    sector: ["Agriculture", "Automotive"],
    size: ["Large Org (250+)"],
    others: ["Populer", "New"],
  },

  {
    id: 10,
    imgUrl: Blog4Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Asia", "North America"],
    sector: ["Aviation", "Health"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed"],
  },

  {
    id: 11,
    imgUrl: Blog5Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Antarctica"],
    sector: ["Health", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed", "New"],
  },

  {
    id: 12,
    imgUrl: Blog6Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Africa", "South America"],
    sector: ["Agriculture", "Automotive"],
    size: ["Large Org (250+)"],
    others: ["Populer", "New"],
  },
  {
    id: 13,
    imgUrl: Blog1Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Antarctica"],
    sector: ["Health", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed", "New"],
  },

  {
    id: 14,
    imgUrl: Blog2Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Europe", "Australia"],
    sector: ["Cleaning & Hygiene", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Populer"],
  },

  {
    id: 15,
    imgUrl: Blog3Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Europe", "Australia"],
    sector: ["Cleaning & Hygiene", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Populer"],
  },

  {
    id: 16,
    imgUrl: Blog4Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Africa", "South America"],
    sector: ["Agriculture", "Automotive"],
    size: ["Large Org (250+)"],
    others: ["Populer", "New"],
  },

  {
    id: 17,
    imgUrl: Blog5Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Antarctica"],
    sector: ["Health", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed", "New"],
  },

  {
    id: 18,
    imgUrl: Blog6Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Africa", "South America"],
    sector: ["Agriculture", "Automotive"],
    size: ["Large Org (250+)"],
    others: ["Populer", "New"],
  },

  {
    id: 19,
    imgUrl: Blog1Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Europe", "Australia"],
    sector: ["Cleaning & Hygiene", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Populer"],
  },

  {
    id: 20,
    imgUrl: Blog2Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Europe", "Australia"],
    sector: ["Cleaning & Hygiene", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Populer"],
  },

  {
    id: 21,
    imgUrl: Blog3Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Africa", "South America"],
    sector: ["Agriculture", "Automotive"],
    size: ["Large Org (250+)"],
    others: ["Populer", "New"],
  },

  {
    id: 22,
    imgUrl: Blog4Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Antarctica"],
    sector: ["Health", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed", "New"],
  },

  {
    id: 23,
    imgUrl: Blog5Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Africa", "South America"],
    sector: ["Agriculture", "Automotive"],
    size: ["Large Org (250+)"],
    others: ["Populer", "New"],
  },

  {
    id: 24,
    imgUrl: Blog6Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Europe", "Australia"],
    sector: ["Cleaning & Hygiene", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Populer"],
  },
  {
    id: 25,
    imgUrl: Blog1Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Antarctica"],
    sector: ["Health", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed", "New"],
  },

  {
    id: 26,
    imgUrl: Blog2Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Africa", "South America"],
    sector: ["Agriculture", "Automotive"],
    size: ["Large Org (250+)"],
    others: ["Populer", "New"],
  },

  {
    id: 27,
    imgUrl: Blog3Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Africa", "South America"],
    sector: ["Agriculture", "Automotive"],
    size: ["Large Org (250+)"],
    others: ["Populer", "New"],
  },

  {
    id: 28,
    imgUrl: Blog4Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Africa", "South America"],
    sector: ["Agriculture", "Automotive"],
    size: ["Large Org (250+)"],
    others: ["Populer", "New"],
  },

  {
    id: 29,
    imgUrl: Blog5Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Antarctica"],
    sector: ["Health", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed", "New"],
  },

  {
    id: 30,
    imgUrl: Blog6Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Europe", "Australia"],
    sector: ["Cleaning & Hygiene", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Populer"],
  },
  {
    id: 31,
    imgUrl: Blog1Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Europe", "Australia"],
    sector: ["Cleaning & Hygiene", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Populer"],
  },

  {
    id: 32,
    imgUrl: Blog2Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Antarctica"],
    sector: ["Health", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed", "New"],
  },

  {
    id: 33,
    imgUrl: Blog3Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Europe", "Australia"],
    sector: ["Cleaning & Hygiene", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Populer"],
  },

  {
    id: 34,
    imgUrl: Blog4Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Antarctica"],
    sector: ["Health", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed", "New"],
  },

  {
    id: 35,
    imgUrl: Blog5Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Europe", "Australia"],
    sector: ["Cleaning & Hygiene", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Populer"],
  },

  {
    id: 36,
    imgUrl: Blog6Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    postedBy: "Mani Prabhu",
    company: "Saniiro",
    timeToReadInMin: "5",
    region: ["Antarctica"],
    sector: ["Health", "Hospitality"],
    size: ["Medium-Org (100-250)"],
    others: ["Trending", "Most Viewed", "New"],
  },
];

const trainingInfo = [
  {
    id: 1,
    imgUrl: Blog1Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    time: "10 AM to 5 PM",
    timezone: "Eastern Standard Time (EST)",
    trannieName: "Mani Prabhu",
    trannieImgUrl: profileImg,
    trannieCompany: "Director of Sales, CIMCO Refrigeration",
  },
  {
    id: 2,
    imgUrl: Blog2Img,
    title: "Design Systems for Websites using Figma",
    disc: "Learn how to build design systems for visually appealing websites using Figma...",
    postDate: "December 20, 2023",
    time: "10 AM to 5 PM",
    timezone: "Eastern Standard Time (EST)",
    trannieName: "Mani Prabhu",
    trannieImgUrl: profileImg,
    trannieCompany: "Director of Sales, CIMCO Refrigeration",
  },
];

export { Tags, Blogs, FeaturedPosts, trainingInfo };
