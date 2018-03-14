/**
|--------------------------------------------------
| select
| #Base Modal
|--------------------------------------------------
*/
import React from "react";
import PropTypes from "prop-types";
import Theme from "../local-theme/index";
import {
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Platform
} from "react-native";

import ic_select from "./res/img/ic-select.png";
import ic_unselect from "./res/img/ic-unselect.png";
import Modal from "../modal/index";

const _marginTop = Platform.OS === "ios" ? 25 : 0;
export default class Select extends React.Component {
  static propTypes = {
    // multiple: PropTypes.bool,
    title: PropTypes.string,
    options: PropTypes.array,
    visible: PropTypes.bool,
    selected: PropTypes.object,
    onChange: PropTypes.func,
    renderRow: PropTypes.func
  };
  static defaultProps = {
    // multiple: false,
    title: "选择",
    visible: false,
    selected: {},
    options: [],
    onChange: () => null,
    renderRow: Select._renderRow
  };

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      title: this.props.title,
      options: this.props.options,
      selected: this.props.selected,
      visible: this.props.visible
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible && !this.state.visible) {
      this._show();
    }
  }

  //api for outer
  _invokeComp({ title, options, selected, visible }) {
    this.setState(
      {
        title: title,
        options: options,
        selected: selected,
        visible: visible
      },
      () => StatusBar.setBarStyle("dark-content")
    );
  }

  _show() {
    this.setState({
      visible: true,
      selected: this.props.selected,
      options: this.state.options
    });
  }
  //end

  cancel() {
    this.setState({ visible: false }, () =>
      StatusBar.setBarStyle("light-content")
    );
  }

  onSelect(selected) {
    this.setState({
      selected: selected,
      options: this.state.options,
      visible: false
    });

    if (selected.hasOwnProperty("type") && selected.type === -1) {
      return;
    }

    this.props.onChange(selected);
    StatusBar.setBarStyle("light-content");
  }

  static _renderRow(data, secId, rowId, rowMap) {
    return (
      <TouchableOpacity
        onPress={() => this.onSelect(data)}
        style={styles.rowBox}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* select icon */}
          {data.id == this.state.selected.id ? (
            <View style={styles.icon}>
              <Image style={{ height: 12, width: 12 }} source={ic_select} />
            </View>
          ) : (
            <View style={styles.icon} />
          )}

          <View style={styles.rowText}>
            <Text style={{ fontSize: Theme.baseMap.font.font_size_base }}>
              {data.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Modal
        style={styles.modalBox}
        show={this.state.visible}
        animationIn="slideInUp"
        animationOut={"slideOutUp"}
      >
        <View style={styles.container}>
          {/* title */}
          <View style={styles.titleBox}>
            <Text style={styles.title}>{this.state.title}</Text>
            <TouchableOpacity
              style={styles.closeBox}
              onPress={() => this.cancel()}
            >
              <Text style={{ fontSize: Theme.baseMap.font.font_size_heading }}>
                x
              </Text>
            </TouchableOpacity>
          </View>

          {/* data */}
          <ListView
            dataSource={this.ds.cloneWithRows(this.state.options)}
            renderRow={this.props.renderRow.bind(this)}
            enableEmptySections={true}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBox: {},
  container: {
    flex: 1,
    // borderRadius: Theme.baseMap.radius.radius_sm,
    backgroundColor: "#fff"
  },
  icon: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  rowText: { flex: 90, height: 50, justifyContent: "center" },
  title: {
    flex: 185,
    textAlign: "center",
    fontSize: Theme.baseMap.font.font_size_caption
  },
  titleBox: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: Theme.baseMap.color.border
  },
  closeBox: {
    position: "absolute",
    width: 30,
    height: 30,
    justifyContent: "center",
    left: Theme.baseMap.spacing.v_spacing_lg
  },
  rowBox: {
    height: 50,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: Theme.baseMap.color.dividers
  }
});
