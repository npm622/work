import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBaseballBall,
  faBeer,
  faCaretDown,
  faCaretRight,
  faCheckCircle,
  faExclamationCircle,
  faInfo,
  faInfoCircle,
  faHome,
  faTerminal,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

export default class Icons {
  initialize = () => {
    library.add(
      faBaseballBall,
      faBeer,
      faCaretDown,
      faCaretRight,
      faCheckCircle,
      faExclamationCircle,
      faInfo,
      faInfoCircle,
      faHome,
      faTerminal,
      faUserCircle
    );
  };
}
