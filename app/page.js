'use client'
import { useState } from "react"
import SearchBar from "./components/SearchBar";
import VideoGrid from "./components/VideoGrid";
import Image from 'next/image'
import Footer from "./components/Footer";


export default function Home() {

  const videoData = [
    {
      id: "sDrd9rzLIRM",
      title: "React Tutorial for Beginners",
      description:
        "Thunderbolts* is an upcoming American superhero film based on the Marvel Comics team Thunderbolts. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the 36th film in the Marvel Cinematic Universe.",
      thumbnail:
        "https://i.ytimg.com/vi/v-94Snw-H4o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAlm78be2GpG8BW-4PUnBmxWcN5cg",
      channel: "Marvel Entertainment",
      views: "9.3M",
      uploadedAt: "2 hours ago",
    },
    {
      id: "Q324oRLYhlM",
      title:
        "How To Become A UI/UX Designer In 2024 Without A Degree ",
      description:
        "Becoming a UI/UX designer might seem like the hardest thing to do, you'll need to make a lot of projects, case studies and portfolio.",
      thumbnail: "https://i.ytimg.com/vi/Q324oRLYhlM/maxresdefault.jpg",
      channel: "Saptarshi Prakash",
      views: "102K views",
      uploadedAt: "October 10, 2023",
    },
    {
      id: "iGFc694WC_c",
      title: "`\"Keep Me On Fire\" | Tommy & Grace Shelby (Part II)`",
      description: "This video highlights intense moments between Tommy and Grace Shelby from *Peaky Blinders*, focusing on their relationship dynamics and iconic scenes from the show.",
      thumbnail: "https://i.ytimg.com/vi/iGFc694WC_c/maxresdefault.jpg",
      channel: "Peaky Blinders Clips", // Update the channel name as per the new video.
      views: "56.2k views", // You can fetch the exact view count if needed.
      uploadedAt: "October 10, 2023" // Update this with the new upload date.
      ,
    },
    {
      id: "3omr6Zqzwt0",
      title:
        "MERN Stack Project: Building Job Portal with React, Node, MongoDB, Express, Redux and Redux-Toolkit",
      description:
        "Welcome to my latest tutorial on building a feature-rich MERN stack job portal! In this video, we'll dive deep into creating a job portal application with advanced features like automated newsletters using Node Cron, user profile management, job posting, and more.",
      thumbnail:
        "https://i.ytimg.com/vi/3omr6Zqzwt0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2FAfxS5Vgbeqjr91qnJ1F7ocfbg",
      channel: "Marvel Entertainment",
      views: "9.3M",
      uploadedAt: "2 hours ago",
    },
    {
      id: "A5_OCuXZaao",
      title: "Squid Game: Season 2 | Special Teaser | Netflix",
      description:
        "Three years after winning Squid Game, Player 456 gave up going to the states and comes back with a new resolution in his mind. Gi-hun once again dives into the mysterious survival game, starting another life-or-death game with new participants gathered to win the prize of 45.6 billion won. Director Hwang Dong-hyuk, who made history at the 74th Primetime Emmys® becoming the first Asian to win Outstanding Directing for a Drama Series, once again helms the series as director, writer, and producer. Lee Jung-jae, Lee Byung-hun, Wi Ha-jun, and Gong Yoo reprise their roles from Season 1 with an impeccable list of new cast members including Yim Si-wan, Kang Ha-neul, Park Gyu-young, Lee Jin-uk, Park Sung-hoon, Yang Dong-geun, Kang Ae-sim, Lee David, Choi Seung-hyun, Roh Jae-won, Jo Yu-ri, and Won Ji-an rounding out the ensemble of colorful characters in the new season.",
      thumbnail:
        "https://i.ytimg.com/vi/1GqzyjUbT4c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBraKNA5LjNBXKnSFWGqFLDYMGKBQ",
      channel: "Netflix",
      views: "9.3M",
      uploadedAt: "2 hours ago",
    },
    {
      id: "BHJBhBPpDVo",
      title:
        "Figma tutorial for beginners in Hindi - Mini Crash Course",
      description:
        "Figma tutorial for beginners in Hindi - Mini Crash Course This video teaches how to use Figma, a free online design tool, to create captivating UI/UX designs for websites and apps.",
      thumbnail: "https://i.ytimg.com/vi/BHJBhBPpDVo/maxresdefault.jpg",
      channel: "Figma with Shruti",
      views: "387 views ",
      uploadedAt: "18 Oct 2024",
    },
    {
      id: "K5KAc5CoCuk",
      title: "Indila - Dernière Danse (Clip Officiel)",
      description: "A famous song with billions of views.",
      thumbnail: "https://i.ytimg.com/vi/K5KAc5CoCuk/maxresdefault.jpg",
      channel: "Indila",
      views: "1.1B",
      uploadedAt: "10 years ago",
    },
    {
      id: "V1Pl8CzNzCw",
      title: "Billie Eilish, Khalid - lovely",
      description: "Directed by Matty Peacock and Taylor Cohen",
      thumbnail: "https://i.ytimg.com/vi/V1Pl8CzNzCw/maxresdefault.jpg",
      channel: "Billie Eilish",
      views: "2.1B",
      uploadedAt: "6 years ago",
    },
    {
      id: "awkkyBH2zEo",
      title: "LISA - 'LALISA' M/V",
      description: "내 뒷모습만 봐도 알잖아",
      thumbnail: "https://i.ytimg.com/vi/awkkyBH2zEo/maxresdefault.jpg",
      channel: "BLACKPINK",
      views: "720M",
      uploadedAt: "3 years ago",
    },
    {
      id: "5dWeeUIZFgA",
      title: "Khaled - C'Est La Vie",
      description: "Khaled",
      thumbnail: "https://i.ytimg.com/vi/5dWeeUIZFgA/sddefault.jpg",
      channel: "Khaled",
      views: "462M",
      uploadedAt: "12 years ago",
    },
    {
      id: "ra-znKf4lWw",
      title: "Tommy Shelby | No Limitations",
      description: "A deep dive into the character of Tommy Shelby and how he rose to power in Peaky Blinders.",
      thumbnail: "https://i.ytimg.com/vi/ra-znKf4lWw/hqdefault.jpg",
      channel: "DiamondEdits",
      views: "2,530 views",
      uploadedAt: "25 Feb 2024",
    },
    {
      id: "I17gHxY4dk",
      title: "Peaky Blinders - Season 6 | Official Trailer",
      description: "The story of the Peaky Blinders continues in this thrilling new season. Expect more tension, betrayal, and the usual dose of gritty realism.",
      thumbnail: "https://i.ytimg.com/vi/-I17gHxY4dk/maxresdefault.jpg",
      channel: "BBC One",
      views: "BBC One views",
      uploadedAt: "February 27, 2022",
    },
  ];

  const [videos, setVideos] = useState(videoData);
  const [searchResults, setSearchResults] = useState(videos);

  const handleSearch = (query) => {
    const results = videos.filter((video) => video.title.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  }
  return (
    <>
      <div className="conatainer mx-auto p-4">
        <SearchBar handleSearch={handleSearch} />
        <VideoGrid videos={searchResults} />
      </div>
      <Footer />
    </>
  );
}
