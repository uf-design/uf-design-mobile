//import liraries
import React, { Component } from "react";
import { View, Text, TextInput, fetch, StyleSheet } from "react-native";
import ListView from "../index";

// create a component
class ListViewDemo extends Component {
  renderItem(item, index) {
    return (
      <View style={{ borderWidth: 1 }}>
        <Text>{item.name}</Text>
      </View>
    );
  }
  render() {
    return (
      <ListView
        ref={rf => (this._flatListx = rf)}
        method="get"
        item={(item, index) => this.renderItem(item, index)}
        fetchx={fetch}
        url={"http://59b4af5b44db800011a0c8fb.mockapi.io/cc/inventoryRadio"}
        params={{ pageIndex: 1, pageSize: 10 }}
        style={{ extra: { color: "#ddd", spinnerColor: "#eee" } }}
      />
    );
  }
}

//make this component available to the app
export default ListViewDemo;
