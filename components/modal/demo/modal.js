//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Button from "../../button/index";
import Modal from "../index";

// create a component
class ModalDemo extends Component {
  state = {
    visible: false
  };
  render() {
    return (
      <View>
        <Button onPress={() => this.setState({ visible: !this.state.visible })}>
          <Text style={{ color: "#fff" }}>open modal.</Text>
        </Button>
        <Modal show={this.state.visible} animationIn="slideInLeft">
          <View style={styles.contentBox}>
            <Text>Modal Content2!</Text>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => this.setState({ visible: !this.state.visible })}
            >
              <Text>x</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  closeBtn: {
    position: "absolute",
    right: 20,
    top: 20
  }
});

//make this component available to the app
export default ModalDemo;
