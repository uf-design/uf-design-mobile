/**
|--------------------------------------------------
| Component Tpl
|--------------------------------------------------
*/
import React from "react";
import PropTypes from "prop-types";
import Theme from "../local-theme/index";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";

const btnType = ["primary", "success", "info", "warning"];

export default class Tpl extends React.Component {
  static propTypes = {
    size: PropTypes.object,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(btnType),
    onPress: PropTypes.func
  };
  static defaultProps = {
    size: { width: 150, height: 50 },
    loading: false,
    disabled: false,
    type: btnType[0],
    onPress: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  handlerFunction(type) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
    }
  }

  render() {
    return <Text>Component 模版文件</Text>;
  }
}

const styles = StyleSheet.create({
  btnBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  btnTxt: {}
});
