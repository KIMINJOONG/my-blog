export const initialState = {
  isJoin: false,
  isLogin: false,
  isLogout: false,
  error: "",
  me: null
};

export const USER_JOIN_REQUEST = "USER_JOIN_REQUEST";
export const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS";
export const USER_JOIN_FAILURE = "USER_JOIN_FAILURE";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAULURE = 'USER_LOGOUT_FAULURE';

export const userJoin = data => ({
  type: USER_JOIN_REQUEST,
  data
});

export const userLogin = data => ({
  type: USER_LOGIN_REQUEST,
  data
});

export const userLogout = () => ({
  type: USER_LOGOUT_REQUEST
})

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGOUT_REQUEST: {
      return {
        ...state,
        isLogout: false
      }
    }
    case USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        isLogout: true
      }
    }
    case USER_LOGOUT_FAULURE: {
      return {
        ...state,
        isLogout: false
      }
    }
    case USER_JOIN_REQUEST: {
      return {
        ...state,
        isJoin: false
      };
    }
    case USER_JOIN_SUCCESS: {
      return {
        ...state,
        isJoin: true,
      };
    }
    case USER_JOIN_FAILURE: {
      return {
        ...state,
        isJoin: false,
        error: action.result
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
        me: action.data.filteredUser,
        isLogin: true,
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
