import { FETCH_NEWS_FEED_IN_PROGRESS, FETCH_NEWS_FEED_IS_SUCCESS, FETCH_NEWS_FEED_IS_FAILURE } from '../Constants/index';

const initialState = {
  isLoading: false,
  success: true,
  code: '',
  message: '',
  totalResults: '',
  articles: [],
};

function newsFeedReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS_FEED_IN_PROGRESS:
      return (
        { ...state, isLoading: true }
      );

    case FETCH_NEWS_FEED_IS_SUCCESS:
      return (
        {
          ...state,
          isLoading: false,
          success: true,
          status: action.payload.status,
          totalResults: action.payload.totalResults,
          articles: action.payload.articles,
        }
      );

    case FETCH_NEWS_FEED_IS_FAILURE:
      return (
        {
          ...state,
          isLoading: false,
          success: false,
          status: action.payload.status,
          code: action.payload.code,
          message: action.payload.message,
        }
      );
    default:
      return (
        state
      );
  }
}

export default newsFeedReducer;
