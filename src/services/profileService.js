const profileService = client => {
  return {
    get(battleTag) {
      return client
        .get("http://overwatchy.com/profile/pc/us/" + battleTag)
        .then(profile => {
          localStorage.setItem("profile", JSON.stringify(profile.data));
          return profile.data;
        })
        .catch(error => error);
    }
  };
};

export default profileService;
