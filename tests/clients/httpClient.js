const httpClient = {
  get: url => {
    let response;

    switch (url) {
      case "https://overwatch-api.net/api/v1/hero":
        response = heroesAPIResponse;
        break;
      case "http://overwatchy.com/profile/pc/us/test":
        response = profileAPIResponse;
        break;
      default:
        response = { error: "No API for this url -> " + url };
    }

    return new Promise(resolve => resolve(response));
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

const profileAPIResponse = {
  data: {
    username: "MetalKaoru",
    level: 59,
    portrait:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5a72fff5086bc1f85690f9a15f31384a047c7beba1825b811001b52532417972.png",
    endorsement: {
      sportsmanship: {
        value: 0.23,
        rate: 23
      },
      shotcaller: {
        value: 0.2,
        rate: 20
      },
      teammate: {
        value: 0.57,
        rate: 57
      },
      level: 3,
      frame:
        "https://d3hmvhl7ru3t12.cloudfront.net/svg/icons/endorsement-frames-aa182c1f63b51afa951daec63595791283ab97ea3a07f8d47abf9dc7aeda5cc67c786041042de0b8e427194ed084f7cee6b56fa984532199e7ea95bc12bbd995.svg#_3",
      icon:
        "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwIiB3aWR0aD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjaXJjbGUgcj0iMTUuOTE1NDk0MzA5MTg5NTQiIGZpbGw9IiMyYTJiMmUiIHN0cm9rZS1kYXNoYXJyYXk9IjIwIDgwIiBzdHJva2UtZGFzaG9mZnNldD0iMjUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjZjE5NTEyIiBjeD0iNTAlIiBjeT0iNTAlIj48L2NpcmNsZT48Y2lyY2xlIHI9IjE1LjkxNTQ5NDMwOTE4OTU0IiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLWRhc2hhcnJheT0iNTcgNDMiIHN0cm9rZS1kYXNob2Zmc2V0PSIxMDUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjYzgxYWY1IiBjeD0iNTAlIiBjeT0iNTAlIj48L2NpcmNsZT48Y2lyY2xlIHI9IjE1LjkxNTQ5NDMwOTE4OTU0IiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLWRhc2hhcnJheT0iMjMgNzciIHN0cm9rZS1kYXNob2Zmc2V0PSI0OCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM0MGNlNDQiIGN4PSI1MCUiIGN5PSI1MCUiPjwvY2lyY2xlPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9ImNlbnR1cnkgZ290aGljLGFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSIzMDAiIGZvbnQtc2l6ZT0iMTYiIHN0cm9rZT0iI2Y2ZjZmNiIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjZjZmNmY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zPC90ZXh0Pjwvc3ZnPg=="
    },
    private: false,
    games: {
      quickplay: {
        won: 64
      },
      competitive: {
        won: 19,
        lost: 18,
        draw: 1,
        played: 38,
        win_rate: 51.35
      }
    },
    playtime: {
      quickplay: "14:31:32",
      competitive: "07:00:33"
    },
    competitive: {
      rank: 1882,
      rank_img:
        "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png"
    },
    levelFrame:
      "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3fdfdd16c34ab7cdc9b7be3c04197e900928b368285ce639c1d3e1c0619eea6d.png"
  }
};

export default httpClient;
