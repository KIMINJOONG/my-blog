export const initialState = {
  boardsList: null,
  error: null,
  loading: false,
  title: "",
  description: "",
  boardResult: null,
  isDelete: false,
  isUpload: false,
  isUpdate: false,
  imagePaths: []
};

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const GET_BOARD_LIST_REQUEST = "GET_BOARD_LIST_REQUEST";
export const GET_BOARD_LIST_SUCCESS = "GET_BOARD_LIST_SUCCESS";
export const GET_BOARD_LIST_FAILURE = "GET_BOARD_LIST_FAILURE";

export const GET_BOARD_DETAIL_REQUEST = "GET_BOARD_DETAIL_REQUEST";
export const GET_BOARD_DETAIL_SUCCESS = "GET_BOARD_DETAIL_SUCCESS";
export const GET_BOARD_DETAIL_FAILURE = "GET_BOARD_DETAIL_FAILURE";

export const BOARD_UPLOAD_REQUEST = "BOARD_UPLOAD_REQUEST";
export const BOARD_UPLOAD_SUCCESS = "BOARD_UPLOAD_SUCCESS";
export const BOARD_UPLOAD_FAILURE = "BOARD_UPLOAD_FAILURE";

export const BOARD_DELETE_REQUEST = "BOARD_DELETE_REQUEST";
export const BOARD_DELETE_SUCCESS = "BOARD_DELETE_SUCCESS";
export const BOARD_DELETE_FAILURE = "BOARD_DELETE_FAILURE";

export const BOARD_UPDATE_REQUEST = "BOARD_UPDATE_REQUEST";
export const BOARD_UPDATE_SUCCESS = "BOARD_UPDATE_SUCCESS";
export const BOARD_UPDATE_FAILURE = "BOARD_UPDATE_FAILURE";

export const SEARCH_BOARD_REQUEST = 'SEARCH_BOARD_REQUEST';
export const SEARCH_BOARD_SUCCESS = 'SEARCH_BOARD_SUCCESS';
export const SEARCH_BOARD_FAILURE = 'SEARCH_BOARD_FAILURE';

//actions
export const uploadImage = (images) => ({
  type: UPLOAD_IMAGES_REQUEST,
  data: images
})

export const searchBoard = (searchTerm) => ({
  type: SEARCH_BOARD_REQUEST,
  data: searchTerm
});

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

export const boardUpdate = data => ({
  type: BOARD_UPDATE_REQUEST,
  data
});

export const boardUpload = data => ({
  type: BOARD_UPLOAD_REQUEST,
  data
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGES_REQUEST: {
      return {
        ...state
      }
    }
    case UPLOAD_IMAGES_SUCCESS: {
      return {
        ...state,
        imagePaths: [...state.imagePaths, ...action.data]
      }
    }
    case UPLOAD_IMAGES_FAILURE: {
      return {
        ...state,
        error: action.error
      }
    }
    case SEARCH_BOARD_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case SEARCH_BOARD_SUCCESS: {
      return {
        ...state,
        loading: false,
        boardsList: action.data
      }
    }
    case SEARCH_BOARD_FAILURE: {
      return {
        ...state,
        loading: true,
        error: '에러'
      }
    }
    case GET_BOARD_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
        isDelete: false,
        isUpload: false,
        isUpdate: false
      };
    }
    case GET_BOARD_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        boardsList: action.data,
        isDelete: false,
        isUpload: false,
        isUpdate: false
      };
    }
    case GET_BOARD_LIST_FAILURE: {
      return {
        ...state,
        loading: true,
        error: "error",
        isDelete: false,
        isUpload: false,
        isUpdate: false
      };
    }
    case GET_BOARD_DETAIL_REQUEST: {
      return {
        ...state,
        loading: true,
        isDelete: false,
        isUpload: false,
        isUpdate: false
      };
    }
    case GET_BOARD_DETAIL_SUCCESS: {
      return {
        ...state,
        boardResult: action.data,
        loading: false,
        isDelete: false,
        isUpload: false,
        isUpdate: false
      };
    }
    case GET_BOARD_DETAIL_FAILURE: {
      return {
        ...state,
        loading: true,
        error: "error",
        isDelete: false,
        isUpload: false,
        isUpdate: false
      };
    }
    case BOARD_DELETE_REQUEST: {
      return {
        ...state,
        loading: false,
        isDelete: false,
        isUpload: false,
        isUpdate: false
      };
    }
    case BOARD_DELETE_SUCCESS: {
      return {
        ...state,
        loading: true,
        isDelete: true,
        isUpload: false,
        isUpdate: false
      };
    }
    case BOARD_DELETE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: "error",
        isDelete: false,
        isUpload: false,
        isUpdate: false
      };
    }
    case BOARD_UPDATE_REQUEST: {
      return {
        ...state,
        loading: false,
        isUpdate: false,
        isDelete: false,
        isUpload: false
      };
    }
    case BOARD_UPDATE_SUCCESS: {
      return {
        ...state,
        loading: true,
        isUpdate: true,
        isDelete: false,
        isUpload: false
      };
    }

    case BOARD_UPDATE_FAILURE: {
      return {
        ...state,
        error: "error",
        isDelete: false,
        isUpload: false,
        isUpdate: false
      };
    }
    case BOARD_UPLOAD_REQUEST: {
      return {
        ...state,
        loading: false,
        isDelete: false,
        isUpload: false,
        isUpdate: false
      };
    }
    case BOARD_UPLOAD_SUCCESS: {
      return {
        ...state,
        loading: true,
        isDelete: false,
        isUpload: true,
        isUpdate: false
      };
    }
    case BOARD_UPLOAD_FAILURE: {
      return {
        ...state,
        error: "error",
        loading: false,
        isDelete: false,
        isUpload: false,
        isUpdate: false
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
