/**
|--------------------------------------------------
| Button
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

const btnType = ["primary", "success", "info", "warning"],
  btnMap = [
    Theme.baseMap.brandColor,
    Theme.currentMap.extra.green.color,
    Theme.currentMap.extra.white.color,
    Theme.currentMap.extra.red.color
  ];

export default class Button extends React.Component {
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
    onPress: () => null
  };

  constructor(props) {
    super(props);

    this.state = {
      bg: this.handlerType(props.type),
      opa: props.disabled ? 0.2 : 1,
      loading: props.loading
    };
  }

  handlerType(type) {
    for (let index = 0; index < btnType.length; index++) {
      const element = btnType[index];
      if (element === type) {
        return btnMap[index];
      }
    }
  }

  onPress() {
    !this.props.disabled && this.props.onPress();
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.onPress()}
        style={[
          styles.btnBox,
          this.props.size,
          {
            backgroundColor: this.state.bg,
            borderRadius: Theme.baseMap.radius.radius_sm,
            opacity: this.state.opa
          }
        ]}
      >
        {this.state.loading && (
          <ActivityIndicator
            style={{
              marginRight: Theme.baseMap.spacing.h_spacing_md
            }}
            color={Theme.currentMap.extra.white.color}
            size={"small"}
          />
        )}
        {this.props.children}
        {/* <Text
          style={[
            styles.btnTxt,
            {
              fontSize: Theme.baseMap.font.font_size_base,
              color: Theme.currentMap.extra.white.color
            }
          ]}
        >
          button
        </Text> */}
      </TouchableOpacity>
    );
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
