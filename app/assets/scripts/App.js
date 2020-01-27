import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

// Create an instances
let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();
let revealOnScroll = new RevealOnScroll();

if (module.hot) {
  module.hot.accept()
}