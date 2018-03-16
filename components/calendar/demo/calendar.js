//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Calendar from "../index";

// create a component
class CalendarDemo extends Component {
  state = {
    show: false,
    selectedDate: "2018-03-08"
  };
  selectDate() {
    this.setState({
      show: true
    });
  }

  onSelect(date) {
    console.log(date);
    this.state.selectedDate = date;
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.selectDate()}>
          <Text>select date.</Text>
        </TouchableOpacity>
        <Calendar
          ref={ca => (this.ca = ca)}
          show={this.state.show}
          selectedDate={this.state.selectedDate}
          onSelect={date => this.onSelect(date)}
        />
      </View>
    );
  }
}

//make this component available to the app
export default CalendarDemo;
