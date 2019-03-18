const statsService = client => {
  return {
    get(battleTag) {
      return client
        .get("http://overwatchy.com/stats/pc/us/" + battleTag)
        .then(stats => {
          return stats.data;
        })
        .catch(error => error);
    }
  };
};

export default statsService;
