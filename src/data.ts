import { Game } from './games/game-model';

export const sample_games: Game[] = [
  {
    id: 0,
    img: 'pin-cover.png',
    title: 'Pin Away',
    date: 'July 7th 2023 - July 9th 2023',
    tag: 'GMTK Game Jam 2023',
    cover: 'pin-cover.png',
    team: 3,
    role: 'Programmer',
    description: `Pin Away is a game developed during the GMTK Game Jam 2023. The game challenges players to navigate through intricate levels by strategically avoiding pins to run away from the bowling club.`,
  },
  {
    id: 1,
    img: 'cats4.PNG',
    title: 'Cats Tower Defence',
    date: 'March 2025 - June 2025',
    tag: 'tower defence',
    cover: 'cats-cover.png',
    team: 2,
    role: 'Programmer',
    description: ` Cats Tower Defense is a compact yet challenging tower defense experience designed for players who value strategic decision-making, gameplay clarity, and a tight progression loop.`,
  },
  {
    id: 2,
    img: 'mater6.png',
    title: 'Mater Dei',
    date: 'April 2024 - July 2024',
    tag: '2d platformer',
    cover: 'mater-cover.png',
    team: 1,
    role: 'Programmer',
    description: `Mater Dei is a 2D platformer game developed in Unity. The game features a NES art style and Castlevania level design.`,
  },
];
