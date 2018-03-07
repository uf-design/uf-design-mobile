/**
|--------------------------------------------------
| app theme class
|--------------------------------------------------
*/
export const keys = ["white", "black"];
export const langs = ["zh-Hans-US", "en"];

export default class AppTheme {
  static colorMap = {};

  static switchTheme = (map = keys[1]) => {
    return AppTheme.colorMap[map];
  };

  static setTheme = theme => {
    return (AppTheme.currentMap = theme);
  };
  //Index map for memr
  static currentMap;
  static currentTheme = keys[1];
}
//common base style
AppTheme.baseMap = {
  brandColor: "#008BFF",
  font: {
    // 字体尺寸
    font_size_icontext: 10,
    font_size_caption_sm: 12,
    font_size_base: 14,
    font_size_subhead: 15,
    font_size_caption: 16,
    font_size_heading: 17
  },
  radius: {
    // 圆角
    radius_xs: 2,
    radius_sm: 3,
    radius_md: 5,
    radius_lg: 7
  },
  spacing: {
    // 间距
    // 水平间距
    h_spacing_sm: 5,
    h_spacing_md: 8,
    h_spacing_lg: 15,

    // 垂直间距
    v_spacing_xs: 3,
    v_spacing_sm: 6,
    v_spacing_md: 9,
    v_spacing_lg: 15,
    v_spacing_xl: 21
  },
  color: {
    title: "rgba(0,0,0,.85)",
    primaryText: "rgba(0,0,0,.65)",
    seconddaryText: "rgba(0,0,0,.45)",
    disabled: "rgba(0,0,0,.25)",
    border: "rgba(0,0,0,.15)",
    dividers: "rgba(0,0,0,.09)",
    background: "rgba(0,0,0,.04)",
    tableHeader: "rgba(0,0,0,.02)"
  }
};
//abstract style
AppTheme.colorMap[keys[0]] = {
  barStyle: "light-content",
  backgroundColor: "#F5F5F5",
  header: {
    backgroundColor: "#E14C46",
    color: "#fff"
  },
  tabBar: {
    backgroundColor: "rgba(255,255,255,.9)",
    color: "#666",
    colorActive: "#E14C46",
    borderColor: "#eee"
  },
  normal: {
    title1: {
      color: "#333"
    },
    title2: {
      color: "#555"
    },
    title3: {
      color: "#666"
    },
    item1: {
      backgroundColor: "#fffffc"
    },
    item2: {
      backgroundColor: "#fff"
    },
    border1: {
      color: "#eee"
    },
    border2: {
      color: "#ddd"
    },
    border3: {
      color: "#ddd"
    }
  },
  modal: {
    title1: {
      color: "#333"
    },
    title2: {
      color: "#ccc"
    },
    border1: {
      color: "#ddd"
    },
    border2: {
      color: "#ccc"
    }
  },
  extra: {
    red: {
      color: "#E14C46"
    },
    yellow: {
      color: "#FAAF1E"
    },
    blue: {
      color: "#0090D5"
    },
    green: {
      color: "#59C152"
    },
    purple: {
      color: "#A856F8"
    },
    white: {
      color: "#fff"
    },
    coffee: {
      color: "rgba(250,175,30,0.50)"
    },
    brown: {
      color: "rgba(225,76,70,0.50)"
    }
  }
};
AppTheme.colorMap[keys[1]] = {
  barStyle: "light-content",
  backgroundColor: "#1C1F2C",
  header: {
    backgroundColor: "#12141C",
    color: "#fff"
  },
  tabBar: {
    backgroundColor: "#12141C",
    color: "#CFD2E6",
    colorActive: "#E14C46",
    borderColor: "rgba(255,255,255,.1)"
  },
  normal: {
    title1: {
      color: "#fff"
    },
    title2: {
      color: "#CFD2E6"
    },
    title3: {
      color: "#8A8C99"
    },
    item1: {
      backgroundColor: "#262935"
    },
    item2: {
      backgroundColor: "#232632"
    },
    border1: {
      color: "rgba(255,255,255,.1)"
    },
    border2: {
      color: "rgba(255,255,255,.2)"
    },
    border3: {
      color: "rgba(255,255,255,.5)"
    }
  },
  modal: {
    title1: {
      color: "#333"
    },
    title2: {
      color: "#ccc"
    },
    border1: {
      color: "#ddd"
    },
    border2: {
      color: "#ccc"
    }
  },
  extra: {
    red: {
      color: "#E14C46"
    },
    yellow: {
      color: "#FAAF1E"
    },
    blue: {
      color: "#0090D5"
    },
    green: {
      color: "#59C152"
    },
    purple: {
      color: "#A856F8"
    },
    white: {
      color: "#fff"
    },
    coffee: {
      color: "rgba(250,175,30,0.50)"
    },
    brown: {
      color: "rgba(225,76,70,0.50)"
    }
  }
};

AppTheme.currentMap = AppTheme.switchTheme();
