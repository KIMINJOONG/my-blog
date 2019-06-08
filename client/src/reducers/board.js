export const initialState = {
  boardsList: null,
  error: null,
  loading: null,
  title: "",
  description: "",
  boardResult: {},
  isDelete: false,
  isUpload: false,
  isUpdate: false
};

export const GET_BOARD_LIST_REQUEST = "GET_BOARD_LIST_REQUEST";
export const GET_BOARD_LIST_SUCCESS = "GET_BOARD_LIST_SUCCESS";
export const GET_BOARD_LIST_FAILURE = "GET_BOARD_LIST_FAILURE";

export const GET_BOARD_DETAIL_REQUEST = "GET_BOARD_DETAIL_REQUEST";
export const GET_BOARD_DETAIL_SUCCESS = "GET_BOARD_DETAIL_SUCCESS";
export const GET_BOARD_DETAIL_FAILURE = "GET_BOARD_DETAIL_FAILURE";

export const BOARD_DELETE_REQUEST = "BOARD_DELETE_REQUEST";
export const BOARD_DELETE_SUCCESS = "BOARD_DELETE_SUCCESS";
export const BOARD_DELETE_FAILURE = "BOARD_DELETE_FAILURE";

export const BOARD_UPDATE_REQUEST = "BOARD_UPDATE_REQUEST";
export const BOARD_UPDATE_SUCCESS = "BOARD_UPDATE_SUCCESS";
export const BOARD_UPDATE_FAILURE = "BOARD_UPDATE_FAILURE";

//actions
export const getBoardAction = () => ({
  type: GET_BOARD_LIST_REQUEST
});

export const getBoardDetail = id => ({
  type: GET_BOARD_DETAIL_REQUEST,
  id
});

export const boardDelete = id => ({
  type: BOARD_DELETE_REQUEST,
  id
});

export const boardUpdate = id => ({
  type: BOARD_UPDATE_REQUEST,
  id
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARD_LIST_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_BOARD_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        boardsList: action.payload.data
      };
    }
    case GET_BOARD_LIST_FAILURE: {
      return {
        ...state,
        loading: true,
        error: "error"
      };
    }
    case GET_BOARD_DETAIL_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_BOARD_DETAIL_SUCCESS: {
      return {
        ...state,
        boardResult: action.payload.data,
        loading: false
      };
    }
    case GET_BOARD_DETAIL_FAILURE: {
      return {
        ...state,
        loading: true,
        error: "error"
      };
    }
    case BOARD_DELETE_REQUEST: {
      return {
        ...state,
        loading: false,
        isDelete: false
      };
    }
    case BOARD_DELETE_SUCCESS: {
      return {
        ...state,
        loading: true,
        isDelete: true
      };
    }
    case BOARD_DELETE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: "error",
        isDelete: false
      };
    }
    case BOARD_UPDATE_REQUEST: {
      return {
        ...state,
        loading: false,
        isUpdate: false
      };
    }
    case BOARD_UPDATE_SUCCESS: {
      return {
        ...state,
        loading: true,
        isUpdate: true
      };
    }

    case BOARD_UPDATE_FAILURE: {
      return {
        ...state,
        error: "error"
      };
    }
    default: {
      return {
        state
      };
    }
  }
};

export default reducer;
