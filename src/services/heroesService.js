const heroesService = client => {
  return {
    get() {
      return new Promise(resolve => {
        client
          .get("https://overwatch-api.net/api/v1/hero")
          .then(heroes => {
            localStorage.setItem("heroes", JSON.stringify(heroes.data.data));
            resolve(heroes.data.data);
          })
          .catch(error => error);
      });
    }
  };
};

export default heroesService;
