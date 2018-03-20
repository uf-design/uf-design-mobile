/**
|--------------------------------------------------
| Loading animate
|--------------------------------------------------
*/
import React from "react";
import PropTypes from "prop-types";
import Theme from "../local-theme/index";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Modal,
  ActivityIndicator
} from "react-native";

const SIZES = ["small", "large"];

class Loading extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    label: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOf(SIZES),
    overlayColor: PropTypes.string
  };

  static defaultProps = {
    visible: false,
    label: "加载中...",
    color: "white",
    size: "large",
    overlayColor: "transparent"
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: this.props.visible,
      tip: this.props.label
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({
        visible: nextProps.visible
      });
    } else if (nextProps.label !== this.state.tip) {
      this.setState({
        tip: nextProps.label
      });
    }
  }

  _destoryModal() {
    this.clearx = setTimeout(() => {
      this.mounted &&
        this.setState({
          visible: false
        });
    }, 9000);
  }

  render() {
    this._destoryModal();
    return this.state.visible ? (
      <Modal visible={this.state.visible} transparent onRequestClose={() => {}}>
        <View key={"spinner"} style={styles.container}>
          <View
            style={[
              styles.background,
              { backgroundColor: this.props.overlayColor }
            ]}
          >
            <View style={styles.loading}>
              <ActivityIndicator
                size={this.props.size}
                color={this.props.color}
              />
              <Text style={styles.loadingText}>{this.state.tip}</Text>
            </View>
          </View>
        </View>
      </Modal>
    ) : null;
  }

  componentWillUnmount() {
    this.mounted = false;
    clearTimeout(this.clearx);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width / 2.5,
    height: Dimensions.get("window").width / 2.5,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.25)"
  },
  loadingText: {
    marginTop: 10,
    textAlign: "center",
    color: "#fcfcfc"
  }
});

export default Loading;
