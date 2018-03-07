/**
|--------------------------------------------------
| InputNumber
|--------------------------------------------------
*/
import React from "react";
import PropTypes from "prop-types";
import Theme from "../local-theme/index";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

export default class InputNumber extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.number,
    maxValue: PropTypes.number,
    minValue: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    defaultValue: 1,
    maxValue: 9999,
    minValue: 1
  };

  constructor(props) {
    super(props);

    this.state = {
      counts: props.defaultValue
    };
  }

  handlerCounts(counts) {
    this.setState(
      {
        counts: counts
      },
      () => this.props.onChange(counts)
    );
  }

  getInputContent(InputText) {
    if (parseFloat(InputText) > this.props.maxValue) {
      InputText = this.props.minValue;
    }
    this.state.counts = InputText;
  }

  onPressAdd(counts) {
    let num = parseFloat(counts) + 1;
    if (num > this.props.maxValue) {
      num = this.props.maxValue;
    }
    this.handlerCounts(num);
  }
  onPressCut(counts) {
    let num = parseFloat(counts) - 1;
    if (num < this.props.minValue) {
      num = this.props.minValue;
    }

    this.handlerCounts(num);
  }

  handlerExp() {
    if (!this.state.counts) {
      return this.handlerCounts(this.props.minValue);
    }

    this.handlerCounts(this.state.counts);
  }

  render() {
    return this.props.children ? (
      this.props.children
    ) : (
      <View
        style={[
          styles.inBox,
          {
            backgroundColor: Theme.currentMap.extra.white.color,
            borderRadius: Theme.baseMap.radius.radius_sm,
            borderColor: Theme.baseMap.color.border
          }
        ]}
      >
        {/* 减号 */}
        <TouchableOpacity
          onPress={() => this.onPressCut(this.state.counts)}
          style={[
            styles.inTouchBox,
            {
              backgroundColor: Theme.currentMap.extra.white.color,
              borderColor: Theme.baseMap.color.border,
              borderTopLeftRadius: Theme.baseMap.radius.radius_sm,
              borderBottomLeftRadius: Theme.baseMap.radius.radius_sm
            }
          ]}
        >
          <Text
            style={{
              color: Theme.baseMap.color.seconddaryText,
              fontSize: Theme.baseMap.font.font_size_base
            }}
          >
            -
          </Text>
        </TouchableOpacity>
        {/* 输入框 */}
        <View
          style={[
            styles.inInputBox,
            {
              borderTopColor: Theme.baseMap.color.border,
              borderBottomColor: Theme.baseMap.color.border
            }
          ]}
        >
          <TextInput
            // ref={ip => (this._ip = ip)}
            style={[
              styles.inInput,
              {
                fontSize: Theme.baseMap.font.font_size_caption_sm,
                color: Theme.baseMap.color.primaryText,
                backgroundColor: Theme.currentMap.extra.white.color
              }
            ]}
            // maxLength={6}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            blurOnSubmit={true}
            onBlur={() => this.handlerExp()}
            onChangeText={text => this.getInputContent(text)}
            defaultValue={this.state.counts + ""}
          />
        </View>

        {/* 加号 */}
        <TouchableOpacity
          onPress={() => this.onPressAdd(this.state.counts)}
          style={[
            styles.inTouchBox,
            {
              backgroundColor: Theme.currentMap.extra.white.color,
              borderColor: Theme.baseMap.color.border,
              borderTopRightRadius: Theme.baseMap.radius.radius_sm,
              borderBottomRightRadius: Theme.baseMap.radius.radius_sm
            }
          ]}
        >
          <Text
            style={{
              color: Theme.baseMap.color.seconddaryText,
              fontSize: Theme.baseMap.font.font_size_base
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inBox: {
    flexDirection: "row",
    width: 150,
    height: 30,
    borderWidth: 0
  },
  inTouchBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    flex: 1,
    borderWidth: 1
  },
  inInputBox: {
    flex: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center"
  },
  inInput: {
    padding: 0,
    textAlign: "center",
    height: 20
  }
});
