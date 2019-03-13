const searchProfileService = client => {
  return {
    get(battleTag) {
      return client
        .get(
          "https://playoverwatch.com/it-it/search/account-by-name/" + battleTag
        )
        .then(searchResult => {
          return searchResult;
        })
        .catch(error => error);
    }
  };
};

export default searchProfileService;
