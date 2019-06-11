export const initialState = {
  isJoin: false,
  isLogin: false,
  error: ""
};

export const USER_JOIN_REQUEST = "USER_JOIN_REQUEST";
export const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS";
export const USER_JOIN_FAILURE = "USER_JOIN_FAILURE";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const userJoin = data => ({
  type: USER_JOIN_REQUEST,
  data
});

export const userLogin = data => ({
  type: USER_LOGIN_REQUEST,
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
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        isLogin: false,
        error: ""
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: action.isLogin,
        error: ""
      };
    }
    case USER_LOGIN_FAILURE: {
      return {
        ...state,
        isLogin: false,
        error: "에러"
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
