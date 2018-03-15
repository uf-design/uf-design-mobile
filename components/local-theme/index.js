/**
|--------------------------------------------------
| app theme class
|--------------------------------------------------
*/
import { config } from "./config";
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
AppTheme.colorMap[keys[0]] = config.white;
AppTheme.colorMap[keys[1]] = config.black;
AppTheme.currentMap = AppTheme.switchTheme();
