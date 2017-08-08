import HorizontalLayout from './layouts/HorizontalLayout';
import VerticalLayout from './layouts/VerticalLayout';
import SameSizeLayout from './layouts/SameSizeLayout';

/**
 * Calculates and returns an array of objects representing
 * the next positions the FilterItems are supposed to assume.
 * @param {string} name of layout to decide the helper method to be used
 * @param {object} container is the FilterContainer
 */
const Positions = (Layout, Filterizr) => {
  switch(Layout) {
    case 'horizontal':
      return HorizontalLayout(Filterizr);
    case 'vertical':
      return VerticalLayout(Filterizr);
    case 'sameSize':
      return SameSizeLayout(Filterizr);
    default:
      return SameSizeLayout(Filterizr);
  }
}


export default Positions;