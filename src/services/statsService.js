const statsService = client => {
  return {
    get(battleTag) {
      return client
        .get('http://localhost:3000/stats/' + battleTag)
        .then(stats => {
          return stats.data;
        })
        .catch(error => error);
    },
  };
};

export default statsService;
