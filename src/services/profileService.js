const profileService = client => {
  return {
    get(battleTag) {
      return new Promise(resolve => {
        client
          .get("https://ow-api.com/v1/stats/pc/us/" + battleTag + "/complete")
          .then(profile => {
            localStorage.setItem("profile", JSON.stringify(profile.data));
            resolve(profile.data);
          })
          .catch(error => error);
      });
    }
  };
};

export default profileService;
