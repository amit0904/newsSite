export function newsCategoryIsLoading(state) {
  return (state.newsCategory.isLoading);
}

export function newsCategorySuccess(state) {
  return (state.newsCategory.success);
}

export function newsCategoryMessage(state) {
  return (state.newsCategory.message);
}

export function newsCategoryData(state) {
  return (state.newsCategory.sources);
}
