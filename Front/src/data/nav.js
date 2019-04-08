import Home from 'src/components/Home';
import Menu from 'src/containers/Menu';
import Games from 'src/containers/Games';
import Event from 'src/components/Event';
import LoginPage from 'src/components/LoginPage';

export default [
  {
    route: '/',
    label: 'Le Pixel café',
    page: Home,
    subtitle: 'De délicieux cafés saupoudrés d’une pincée de rétro-gaming ou bien est-ce l’inverse',
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
    subtitle: 'Venez voir notre station de jeux et notre selection retro',
  },
  {
    route: '/evenement',
    label: 'Evènement',
    page: Event,
    subtitle: 'Les futurs évènements que le Pixel Café et ses clients vous proposent',
  },
  {
    route: '/login',
    label: '',
    page: LoginPage,
    subtitle: 'Accedez à votre compte',
  },
];
