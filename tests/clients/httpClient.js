const httpClient = {
  get: url => {
    switch (url) {
      case "https://overwatch-api.net/api/v1/hero":
        return new Promise(resolve => resolve(heroesAPIResponse));
      default:
        return { error: "No API for this url -> " + url };
    }
  }
};

const heroesAPIResponse = {
  data: {
    data: [
      {
        id: 1,
        name: "Ana",
        description:
          "Ana’s versatile arsenal allows her to affect heroes all over the battlefield. Her Biotic Rifle rounds and Biotic Grenades heal allies and damage or impair enemies; her sidearm tranquilizes key targets, and Nano Boost gives one of her comrades a considerable increase in power.",
        health: 200,
        armour: 0,
        shield: 0,
        real_name: "Ana Amari",
        age: 60,
        height: null,
        affiliation: "Overwatch",
        base_of_operations: "Cairo, Egypt",
        difficulty: 3,
        url: "https://overwatch-api.net/api/v1/hero/1"
      },
      {
        id: 2,
        name: "Bastion",
        description:
          "Repair protocols and the ability to transform between stationary Assault, mobile Recon and devastating Tank configurations provide Bastion with a high probability of victory.",
        health: 200,
        armour: 100,
        shield: 0,
        real_name: "SST Laboratories Siege Automaton E54",
        age: 30,
        height: 220,
        affiliation: null,
        base_of_operations: null,
        difficulty: 1,
        url: "https://overwatch-api.net/api/v1/hero/2"
      }
    ]
  }
};

export default httpClient;
