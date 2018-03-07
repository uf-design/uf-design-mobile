import React from "react";
import PropTypes from "prop-types";
import Theme from "../local-theme/index";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import select from "./res/img/checkBox.png";
import unselect from "./res/img/unCheckBox.png";

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked
    };
  }

  static PropTypes = {
    checked: PropTypes.bool,
    isRight: PropTypes.bool,
    size: PropTypes.number,
    label: PropTypes.any,
    labelStyle: PropTypes.object,
    checkBoxColor: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    checked: false,
    isRight: false,
    size: 25,
    checkBoxColor: Theme.baseMap.brandColor,
    onChange: () => {}
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ isChecked: nextProps.checked });
  };

  checkboxOnpress() {
    this.setState({ isChecked: !this.state.isChecked });
    this.props.onChange(!this.state.isChecked);
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            width: this.state.layoutwidth,
            marginTop: Theme.baseMap.spacing.h_spacing_sm
          }
        ]}
        onPress={() => this.checkboxOnpress()}
      >
        {this.props.isRight ? (
          typeof this.props.label == "string" ? (
            <View
              style={[
                styles.checkbox,
                {
                  paddingRight: Theme.baseMap.spacing.h_spacing_sm
                }
              ]}
            >
              <Text style={[styles.text, this.props.labelStyle]}>
                {this.props.label}
              </Text>
            </View>
          ) : (
            this.props.label
          )
        ) : null}

        <View style={styles.checkbox}>
          {this.state.isChecked ? (
            <Image
              source={select}
              style={{
                tintColor: this.props.checkBoxColor,
                width: this.props.size,
                height: this.props.size
              }}
            />
          ) : (
            <Image
              source={unselect}
              style={{
                tintColor: this.props.checkBoxColor,
                width: this.props.size,
                height: this.props.size
              }}
            />
          )}
        </View>

        {this.props.isRight == false ? (
          typeof this.props.label == "string" ? (
            <View
              style={[
                styles.checkbox,
                {
                  paddingLeft: Theme.baseMap.spacing.h_spacing_sm
                }
              ]}
            >
              <Text style={[styles.text, this.props.labelStyle]}>
                {this.props.label}
              </Text>
            </View>
          ) : (
            this.props.label
          )
        ) : null}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  checkbox: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    flex: 1
  }
});
