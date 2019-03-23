import Home from 'src/components/Home';
import Menu from 'src/components/Menu';

export default [
  {
    route: '/',
    label: 'Le café',
    page: Home,
  },
  {
    route: '/menu',
    label: 'Menu',
    page: Menu,
  },
  {
    route: '/nos-jeux',
    label: 'Nos Jeux',
    page: 'NosJeux',
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
