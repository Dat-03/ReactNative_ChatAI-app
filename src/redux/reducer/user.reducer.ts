export const UPDATE_FULLNAME = 'UPDATE_FULLNAME';
export const UPDATE_PHONE = 'UPDATE_PHONE';
export const UPDATE_GENDER = 'UPDATE_GENDER';
export const UPDATE_DATEORBIRTH = 'UPDATE_DATEORBIRTH';

const initialState = {
  fullname: '',
  phone: 0,
  gender: true,
  dateorbirth: '',
};
export default function userReducer(state = initialState, payload: any) {
  switch (payload.type) {
    case UPDATE_FULLNAME:
      return {
        ...state,
        fullname: payload.fullname,
      };
    case UPDATE_PHONE:
      return {
        ...state,
        phone: payload.phone,
      };
    case UPDATE_GENDER:
      return {
        ...state,
        gender: payload.gender,
      };
    case UPDATE_DATEORBIRTH:
      return {
        ...state,
        dateorbirth: payload.dateorbirth,
      };
    default:
      return state;
  }
}
