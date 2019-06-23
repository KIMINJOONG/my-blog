export const initialState = {
  isJoin: false,
  error: "",
  me: null,
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

export const LOAD_USER_DETAIL_REQUEST = 'LOAD_USER_DETAIL_REQUEST';
export const LOAD_USER_DETAIL_SUCCESS = 'LOAD_USER_DETAIL_SUCCESS';
export const LOAD_USER_DETAIL_FAILURE = 'LOAD_USER_DETAIL_FAILURE';

export const loadUser = () => ({
  type: LOAD_USER_DETAIL_REQUEST
})

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
      }
    }
    case USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        me: null
      }
    }
    case USER_LOGOUT_FAULURE: {
      return {
        ...state,
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
        error: ""
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        me: action.data,
      };
    }
    case USER_LOGIN_FAILURE: {
      return {
        ...state,
        error: action.data
      };
    }
    case LOAD_USER_DETAIL_REQUEST: {
      return {
        ...state,
      }
    }
    case LOAD_USER_DETAIL_SUCCESS: {
      return {
        ...state,
        me: action.data
      }
    }
    case LOAD_USER_DETAIL_FAILURE: {
      return {
        ...state,
        error: action.data
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
};
