import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Search_history from './Search';

export {default as History} from './History';

export const historyScreens: Screen[] = [
  {
    name: routes.SEARCH_HISTORY,
    component: Search_history,
  },
];
