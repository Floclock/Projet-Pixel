import Home from 'src/components/Home';
import Menu from 'src/components/Menu';
import Games from 'src/components/Games';

export default [
  {
    route: '/',
    label: 'Le Pixpresso café',
    page: Home,
    subtitle: 'De délicieux cafés saupoudrés d\'une pincée de retro-gaming ou bien est-ce l\'inverse',
  },
  {
    route: '/menu',
    label: 'Notre Menu',
    page: Menu,
    subtitle: 'Venez savourer nos café préparés par notre barista, tout en vous amusant devant nos jeux retro',
  },
  {
    route: '/nos-jeux',
    label: 'Nos Jeux',
    page: Games,
    subtitle: 'Venez vois notre station de jeux et notre selection retro',
  },
  {
    route: '/reservation',
    label: 'Réservation',
    page: 'Reservation',
  },
  {
    route: '/evenement',
    label: 'Evènement',
    page: 'Evenement',
  },
  {
    route: '/info',
    label: 'Info',
    page: 'Info',
  },
];
