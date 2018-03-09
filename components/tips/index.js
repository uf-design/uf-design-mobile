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
import Modal from '../modal/index'
export default class Tips extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    content: PropTypes.string,
    contentStyle: PropTypes.array,
    duration: PropTypes.number,
    mask: PropTypes.bool,
    onClose: PropTypes.func
  };
  static defaultProps = {
    visible: true,
    content: 'ok',
    contentStyle: null,
    duration: 2000,
    mask: false,
    onClose: () => null
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: this.props.visible
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.handlerClose()
    }
  }

  componentDidMount() {
    this.state.visible && this.handlerClose()
  }



  handlerClose() {
    this.sl = setTimeout(() => this.setState({
      visible: false
    }), this.props.duration)
  }

  componentWillUnmount() {
    this.sl && clearTimeout(this.sl)
  }

  render() {
    let type = !this.props.children
    return (
      <Modal style={styles.modalBox} show={this.state.visible} animationIn="slideInRight" animationOut={"slideOutRight"} backdropColor={this.props.mask ? "black" : "white"}>
        {
          type ?
            <View>
              <View style={[styles.tipsBox, this.props.contentStyle]} />
              <Text style={[styles.textStyle]}>{this.props.content}</Text>
            </View>
            : this.props.children
        }
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalBox: { flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-end' },
  tipsBox: {
    borderRadius: 4,
    opacity: .6,
    backgroundColor: Theme.baseMap.brandColor,
    width: 200,
    height: 50
  },
  textStyle: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: Theme.baseMap.font.font_size_base, color:
      "#fff"
  }
});
