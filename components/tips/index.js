/**
|--------------------------------------------------
| Component Tips
| #Base Modal
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

const contentType = [PropTypes.string, PropTypes.element];

export default class Tpl extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    content: PropTypes.oneOf(contentType),
    contentStyle: PropTypes.array,
    duration: PropTypes.number,
    mask: PropTypes.bool,
    onClose: PropTypes.func
  };
  static defaultProps = {
    visible: false,
    content: contentType[0],
    contentStyle: null,
    duration: 2000,
    mask: false,
    onClose: () => null
  };

  constructor(props) {
    super(props);

    this.state = {

    };
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
