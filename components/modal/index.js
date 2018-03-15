/**
|--------------------------------------------------
| Modal
|--------------------------------------------------
*/
import React, { Component } from "react";
import {
  Dimensions,
  Modal,
  DeviceEventEmitter,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import {
  View,
  initializeRegistryWithDefinitions
} from "react-native-animatable";
import * as ANIMATION_CONFIGS from "./lib/animations";

// 自定义动画
initializeRegistryWithDefinitions(ANIMATION_CONFIGS);

export class ModalDialog extends Component {
  static propTypes = {
    animationIn: PropTypes.string,
    animationInTiming: PropTypes.number,
    animationOut: PropTypes.string,
    animationOutTiming: PropTypes.number,
    backdropColor: PropTypes.string,
    backdropOpacity: PropTypes.number,
    backdropTransitionInTiming: PropTypes.number,
    backdropTransitionOutTiming: PropTypes.number,
    children: PropTypes.node.isRequired,
    show: PropTypes.bool.isRequired,
    onModalShow: PropTypes.func,
    onModalHide: PropTypes.func,
    onBackButtonPress: PropTypes.func,
    onBackdropPress: PropTypes.func,
    style: PropTypes.any
  };

  static defaultProps = {
    animationIn: "slideInUp",
    animationInTiming: 300,
    animationOut: "slideOutDown",
    animationOutTiming: 300,
    backdropColor: "black",
    backdropOpacity: 0.6,
    backdropTransitionInTiming: 300,
    backdropTransitionOutTiming: 300,
    onModalShow: () => null,
    onModalHide: () => null,
    show: false,
    onBackdropPress: () => null,
    onBackButtonPress: () => null
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      deviceWidth: Dimensions.get("window").width,
      deviceHeight: Dimensions.get("window").height
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.show && nextProps.show) {
      this.setState({ show: true });
    }
  }

  componentWillMount() {
    if (this.props.show) {
      this.setState({ show: true });
    }
  }

  componentDidMount() {
    if (this.state.show) {
      this.open();
    }
    DeviceEventEmitter.addListener(
      "didUpdateDimensions",
      this.handlerDimensionsUpdate
    );
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener(
      "didUpdateDimensions",
      this.handlerDimensionsUpdate
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.show && !prevState.show) {
      this.open();
    } else if (!this.props.show && prevProps.show) {
      this.close();
    }
  }

  handlerDimensionsUpdate = dimensionsUpdate => {
    // 处理屏幕反转
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;
    if (
      deviceWidth !== this.state.deviceWidth ||
      deviceHeight !== this.state.deviceHeight
    ) {
      this.setState({ deviceWidth, deviceHeight });
    }
  };

  open = () => {
    this.backdropRef.transitionTo(
      { opacity: this.props.backdropOpacity },
      this.props.backdropTransitionInTiming
    );
    this.contentRef[this.props.animationIn](this.props.animationInTiming).then(
      () => {
        this.props.onModalShow();
      }
    );
  };

  close = async () => {
    this.backdropRef.transitionTo(
      { opacity: 0 },
      this.props.backdropTransitionOutTiming
    );
    this.contentRef[this.props.animationOut](
      this.props.animationOutTiming
    ).then(() => {
      this.setState({ show: false });
      this.props.onModalHide();
    });
  };

  render() {
    const {
      animationIn,
      animationInTiming,
      animationOut,
      animationOutTiming,
      backdropColor,
      backdropOpacity,
      backdropTransitionInTiming,
      backdropTransitionOutTiming,
      children,
      show,
      onModalShow,
      onBackdropPress,
      onBackButtonPress,
      style,
      ...otherProps
    } = this.props;
    const { deviceWidth, deviceHeight } = this.state;
    return (
      <Modal
        transparent={true}
        animationType={"none"}
        visible={this.state.show}
        onRequestClose={onBackButtonPress}
        {...otherProps}
      >
        {/* 遮罩层事件 */}
        <TouchableWithoutFeedback onPress={onBackdropPress}>
          {/* 遮罩层 */}
          <View
            ref={ref => (this.backdropRef = ref)}
            style={[
              styles.backdrop,
              {
                backgroundColor: backdropColor,
                width: deviceWidth,
                height: deviceHeight
              }
            ]}
          />
        </TouchableWithoutFeedback>
        {/* content */}
        <View
          ref={ref => (this.contentRef = ref)}
          style={[
            { margin: deviceWidth * 0.05, transform: [{ translateY: 0 }] },
            styles.content,
            style
          ]}
          pointerEvents="box-none"
          {...otherProps}
        >
          {children}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    backgroundColor: "black"
  },
  content: {
    flex: 1,
    justifyContent: "center"
  }
});

export default ModalDialog;
