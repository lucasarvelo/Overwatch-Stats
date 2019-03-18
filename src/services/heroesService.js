const heroesService = client => {
  return {
    get() {
      return client
        .get("https://overwatch-api.net/api/v1/hero")
        .then(heroes => {
          return heroes.data.data;
        })
        .catch(error => error);
    }
  };
};

export default heroesService;
