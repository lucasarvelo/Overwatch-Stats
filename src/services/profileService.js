const profileService = client => {
  return {
    get(battleTag) {
      return client
        .get('http://localhost:3000/players/' + battleTag)
        .then(profile => {
          return profile.data;
        })
        .catch(error => error);
    },
  };
};

export default profileService;
