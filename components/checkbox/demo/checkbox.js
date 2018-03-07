//import liraries
import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, ListView } from "react-native";
import Checkbox from "../index";
import CheckboxGroup from "../group";

const mockinter = [
  { id: 1, value: "aaa1-inter", isChecked: true },
  { id: 2, value: "bbb2-inter", isChecked: false },
  { id: 3, value: "ccc3-inter", isChecked: false },
  { id: 4, value: "ddd4-inter", isChecked: false },
  { id: 5, value: "eee5-inter", isChecked: true }
];
const mockexter = [
  { id: 1, value: "aaa1-exter", isChecked: true },
  { id: 2, value: "bbb2-exter", isChecked: false },
  { id: 3, value: "ccc3-exter", isChecked: false },
  { id: 4, value: "ddd4-exter", isChecked: false },
  { id: 5, value: "eee5-exter", isChecked: true }
];
// create a component
class CheckboxDemo extends Component {
  constructor() {
    super();
    this.state = {
      totalCheck: false,
      mockinter: mockinter,
      mockexter: mockexter
    };
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  singleCheck(val, bool) {
    val.isChecked = bool;
    let checkArr = [];
    for (let data of this.state.mockexter) {
      checkArr.push(data.isChecked);
    }
    if (checkArr.indexOf(false) == -1) {
      this.setState({ totalCheck: true });
    } else {
      this.setState({ totalCheck: false });
    }
  }

  renderRow(val) {
    return (
      <Checkbox
        checked={val.isChecked}
        checkBoxColor={"red"}
        onChange={bool => this.singleCheck(val, bool)}
        label={
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 5
            }}
          >
            <Text>id:{val.id}</Text>
            <Text>value:{val.value}</Text>
          </View>
        }
      />
    );
  }

  totalChecked(bool) {
    const mock = this.state.mockexter;
    for (let val of mock) {
      if (bool) {
        val.isChecked = true;
      } else {
        val.isChecked = false;
      }
    }
    this.setState({ mockexter: mock, totalCheck: !this.state.totalCheck });
  }

  renderLabel(data) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 5
        }}
      >
        <Text>id:{data.id}</Text>
        <Text>value:{data.value}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {/* 列表（外部实现全选） */}
        <View>
          <ListView
            dataSource={this.ds.cloneWithRows(this.state.mockexter)}
            renderRow={this.renderRow.bind(this)}
          />
          <Checkbox
            checkBoxColor={"red"}
            checked={this.state.totalCheck}
            onChange={bool => this.totalChecked(bool)}
          />
        </View>

        {/* 全选 组件内部实现*/}
        <CheckboxGroup
          // isRight={true}
          checkKey={"isChecked"}
          CheckboxData={this.state.mockinter}
          renderLabel={data => this.renderLabel(data)}
        />

        {/* 单个 */}
        <View style={{ flexDirection: "row" }}>
          <Checkbox
            checked={true}
            // isRight={true}
            checkBoxColor={"blue"}
            size={20}
            labelStyle={{ width: 100 }}
            label={"qqqqasdsaqqqqasdsaqqqqasdsaqqqqasdsaqqqqasdsa"}
            cb={a => console.log(a)}
          />
          <View>
            <Text>111234</Text>
          </View>
        </View>
      </View>
    );
  }
}

//make this component available to the app
export default CheckboxDemo;
