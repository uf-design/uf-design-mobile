import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ListView
} from "react-native";
import PropTypes from "prop-types";
import Theme from "../local-theme/index";
import Checkbox from "./index";

export default class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      CheckboxData: props.CheckboxData,
      totalCheck: false
    };
  }

  static PropTypes = {
    isRight: PropTypes.bool,
    size: PropTypes.number,
    checkBoxColor: PropTypes.string,
    checkKey: PropTypes.string,
    renderLabel: PropTypes.func,

    CheckboxData: PropTypes.array
  };

  static defaultProps = {
    CheckboxData: []
  };

  singleCheck(val, bool) {
    val[this.props.checkKey] = bool;
    let checkArr = [];
    for (let data of this.state.CheckboxData) {
      checkArr.push(data[this.props.checkKey]);
    }
    if (checkArr.indexOf(false) == -1) {
      this.setState({ totalCheck: true });
    } else {
      this.setState({ totalCheck: false });
    }
  }

  renderRow(data) {
    return (
      <Checkbox
        checked={data[this.props.checkKey]}
        isRight={this.props.isRight}
        size={this.props.size}
        checkBoxColor={this.props.checkBoxColor}
        onChange={bool => this.singleCheck(data, bool)}
        label={this.props.renderLabel(data)}
      />
    );
  }

  totalChecked(bool) {
    const mock = this.state.CheckboxData;
    for (let val of mock) {
      if (bool) {
        val[this.props.checkKey] = true;
      } else {
        val[this.props.checkKey] = false;
      }
    }
    this.setState({
      CheckboxData: mock,
      totalCheck: !this.state.totalCheck
    });
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.ds.cloneWithRows(this.props.CheckboxData)}
          renderRow={this.renderRow.bind(this)}
        />
        <Checkbox
          checked={this.state.totalCheck}
          onChange={bool => this.totalChecked(bool)}
        />
      </View>
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
