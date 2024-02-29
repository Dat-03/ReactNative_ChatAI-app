import {
  UPDATE_DATEORBIRTH,
  UPDATE_FULLNAME,
  UPDATE_GENDER,
  UPDATE_PHONE,
} from '../reducer/user.reducer';

export const updateEmail =
  (fullname: string, phone: number, gender: boolean, dateorbirth: string) =>
  async (dispatch: any) => {
    try {
      // side effect : call server to update email
      await console.log('call server start');
      await new Promise((resolve: any, reject: any) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      console.log('call server end');

      dispatch({type: UPDATE_FULLNAME, fullname: fullname});
      dispatch({type: UPDATE_PHONE, phone: phone});
      dispatch({type: UPDATE_GENDER, gender: gender});
      dispatch({type: UPDATE_DATEORBIRTH, dateorbirth: dateorbirth});
    } catch (error) {}
  };
