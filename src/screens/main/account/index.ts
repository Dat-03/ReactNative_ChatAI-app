import {routes} from '../../../constants';
import {Screen} from '../../../types';
import HelpCenter from './HelpCenter';
import Language from './Language';
import Personal_info from './Personal_Info';
import Security from './Security';

export {default as Account} from './Account';

export const accountScreens: Screen[] = [
  {
    name: routes.PERSONAL_INFO,
    component: Personal_info,
  },
  {
    name: routes.SECURITY,
    component: Security,
  },
  {
    name: routes.LANGUAGE,
    component: Language,
  },
  {
    name: routes.HELP_CENTER,
    component: HelpCenter,
  },
];
