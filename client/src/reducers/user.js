export const initialState = {
  isJoin: false
};

export const USER_JOIN_REQUEST = "USER_JOIN_REQUEST";
export const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS";
export const USER_JOIN_FAILURE = "USER_JOIN_FAILURE";

export const userJoin = data => ({
  type: USER_JOIN_REQUEST,
  data
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_JOIN_REQUEST: {
      return {
        ...state,
        isJoin: false
      };
    }
    case USER_JOIN_SUCCESS: {
      return {
        ...state,
        isJoin: true
      };
    }
    case USER_JOIN_FAILURE: {
      return {
        ...state,
        isJoin: false
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
