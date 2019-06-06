export const initialState = {
  boardsList: null,
  error: null,
  loading: null,
  title: "",
  description: ""
};

export const GET_BOARD_LIST_REQUEST = "GET_BOARD_LIST_REQUEST";
export const GET_BOARD_LIST_SUCCESS = "GET_BOARD_LIST_SUCCESS";
export const GET_BOARD_LIST_FAILURE = "GET_BOARD_LIST_FAILURE";

export const getBoardAction = () => ({
  type: GET_BOARD_LIST_REQUEST
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
    default: {
      return {
        state
      };
    }
  }
};

export default reducer;
