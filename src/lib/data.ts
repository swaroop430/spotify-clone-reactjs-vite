import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    albumId: 1,
    title: "Darling",
    color: colors.yellow,
    cover:
      "/assets/darling1.jpeg",
    artists: ["Prabhas", "Kajal"],
  },
  {
    id: "2",
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover:
     "/assets/lofi.jpeg",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: "3",
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover: "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: "4",
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: "5",
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: "6",
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}));

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}));

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    id: 1,
    albumId: 1,
    title: "nevve nevve",
    image: `/assets/darling1.jpeg`,
    artists: ["G.V Prakash"],
    album: "Darling",
    duration: "3:12",
  },
  {
    id: 2,
    albumId: 1,
    title: "Coffee Daze",
    image: `/assets/darling1.jpeg`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:07",
  },
  {
    id: 3,
    albumId: 1,
    title: "Skyline Serenade",
    image: `/assets/darling1.jpeg`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:50",
  },
  {
    id: 4,
    albumId: 1,
    title: "Urban Echoes",
    image: `/assets/darling1.jpeg`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:30",
  },
  {
    id: 5,
    albumId: 1,
    title: "Night's End",
    image: `/assets/darling1.jpeg`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:20",
  },
  {
    id: 1,
    albumId: 2,
    title: "Silent Rain",
    image: `/assets/lofi.jpeg`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:40",
  },
  {
    id: 2,
    albumId: 2,
    title: "Lost Pages",
    image: `/assets/lofi.jpeg`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:20",
  },
  {
    id: 3,
    albumId: 2,
    title: "Midnight Tales",
    image: `/assets/lofi.jpeg`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:50",
  },
  {
    id: 4,
    albumId: 2,
    title: "City Lights",
    image: `/assets/lofi.jpeg`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:30",
  },
  {
    id: 5,
    albumId: 2,
    title: "Night Drive",
    image: `/assets/lofi.jpeg`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "4:20",
  },
  {
    id: 1,
    albumId: 3,
    title: "Lunar",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:40",
  },
  {
    id: 2,
    albumId: 3,
    title: "Go go go!",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:20",
  },
  {
    id: 3,
    albumId: 3,
    title: "Keep focus!",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:40",
  },
  {
    id: 4,
    albumId: 3,
    title: "JavaScript is the way",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:10",
  },
  {
    id: 5,
    albumId: 3,
    title: "No more TypeScript for me",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:10",
  },
  {
    id: 1,
    albumId: 4,
    title: "Lunar",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:40",
  },
  {
    id: 2,
    albumId: 4,
    title: "Go go go!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:20",
  },
  {
    id: 3,
    albumId: 4,
    title: "Keep focus!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:40",
  },
  {
    id: 4,
    albumId: 4,
    title: "JavaScript is the way",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:10",
  },
  {
    id: 5,
    albumId: 4,
    title: "No more TypeScript for me",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    
    duration: "2:10",
  },
  {
    id: 1,
    albumId: 5,
    title: "Moonlit Walk",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:12",
  },
  {
    id: 2,
    albumId: 5,
    title: "Coffee Daze",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:07",
  },
  {
    id: 3,
    albumId: 5,
    title: "Skyline Serenade",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:50",
  },
  {
    id: 4,
    albumId: 5,
    title: "Urban Echoes",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:30",
  },
  {
    id: 5,
    albumId: 5,
    title: "Night's End",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:20",
  },
];
