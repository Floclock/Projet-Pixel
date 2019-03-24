import Home from 'src/components/Home';
import Menu from 'src/components/Menu';
import Jeux from 'src/components/Jeux';

export default {
  '/': {
    title: 'Le Pixpresso café',
    subtitle: 'De délicieux cafés saupoudrés d\'une pincée de retro-gaming ou bien est-ce l\'inverse',
    nav: 'Home',
    class: '',
    component: Home,
  },
  '/menu': {
    title: 'Notre Menu',
    subtitle: "Venez savourer nos café préparés par notre barista, tout en vous amusant devant nos jeux retro",
    nav: 'Menu',
    class: 'menu',
    component: Menu,
  },
  '/jeux': {
    title: 'Nos jeux',
    subtitle: "Venez vois notre station de jeux et notre selection retro",
    nav: 'Jeux',
    class: 'jeux',
    component: Jeux,
  },
};
