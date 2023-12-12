import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Detail_Chat from './DetailChat';

export {default as Chat} from './Chat';
export const chatScreens: Screen[] = [
  {
    name: routes.DETAIL_CHAT,
    component: Detail_Chat,
  },
];
