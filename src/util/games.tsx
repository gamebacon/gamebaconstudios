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
        // eslint-disable-next-line max-len
        privacyPolicy: 'This Privacy Policy will provide you with information on how Unity Technologies will collect, use, store, share or otherwise handle your Personal Information that we are responsible for and collect or receive through your use of applications which are owned by third parties but utilize Unity’s technology.\n\nThis Privacy Policy also applies to Personal Information we collect offline, such as when you call us or interact with Unity in person, such as at an industry event or at a place of business. ',
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
