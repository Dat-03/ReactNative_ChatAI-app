import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Detail_History from './Detail_History';
import Search_history from './Search';

export {default as History} from './History';

export const historyScreens: Screen[] = [
  {
    name: routes.SEARCH_HISTORY,
    component: Search_history,
  },
  {
    name: routes.DETAIL_HISTORY,
    component: Detail_History,
  },
];
