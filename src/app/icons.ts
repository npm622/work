import { library } from '@fortawesome/fontawesome-svg-core';
import { faBeer, faCaretDown, faHome, faInfo, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default class Icons {
  doInit = () => {
    library.add(faBeer, faCaretDown, faHome, faInfo, faUserCircle);
  };
}
