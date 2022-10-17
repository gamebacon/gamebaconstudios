import fallBallIcon from '../assets/images/games/fallball/showcase.png';
import solitaireIcon from '../assets/images/games/solitaire/showcase.png';
import videoPokerIcon from '../assets/images/games/videopoker/showcase.png';
import breakOutIcon from '../assets/images/games/breakout/showcase.png';

interface game {
    image: string;
    title: string;
    description: string;
    genre: string;
    privacyPolicy?: string;
}

const games: game[] = [
    {
        image: solitaireIcon,
        title: 'Solitaire',
        description: 'Solitaire is a relaxing puzzle game.',
        genre: 'Puzzle'
    },
    {
        image: fallBallIcon,
        title: 'Fall Ball',
        description: 'Fall ball is a simple, easy and satisfying game.',
        genre: 'Casual'
    },
    {
        image: videoPokerIcon,
        title: 'Videopoker',
        description: 'Videopoker is a relaxing and fun card game.',
        genre: 'Puzzle'
    },
    {
        image: breakOutIcon,
        title: 'Breakout',
        description: 'Breakout is a fun ball bouncing game.',
        genre: 'Casual'
    }
];

export default games
