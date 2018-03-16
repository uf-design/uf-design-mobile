/**
|--------------------------------------------------
| Calendar
|--------------------------------------------------
*/
//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import Theme from "../local-theme/index";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "../modal/index";
import { default as CalendarBase } from "./lib/calendar";

// create a component
const customStyle = {
  calendarContainer: {
    backgroundColor: "#fff"
  },
  selectedDayCircle: {
    backgroundColor: Theme.baseMap.brandColor
  }
};
class Calendar extends Component {
  static propTypes = {
    show: PropTypes.bool,
    selectedDate: PropTypes.any,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    show: false,
    onSelect: () => null
  };
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
      selectedDate: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.state.show) {
      this._invokeCalendarModal();
    }
  }

  _invokeCalendarModal() {
    this.setState({
      show: !this.state.show
    });
  }

  _onDateSelect(date) {
    this.state.selectedDate = date;
  }

  onConfirmDate() {
    this.props.onSelect &&
      this.state.selectedDate &&
      this.props.onSelect(this.state.selectedDate);
    this._invokeCalendarModal();
  }

  render() {
    return (
      <Modal
        show={this.state.show}
        style={{ margin: 0 }}
        onBackdropPress={() => this._invokeCalendarModal()}
        animationIn={"slideInDown"}
        animationOut={"slideOutDown"}
      >
        {/* <View style={{ backgroundColor: '#fff', height: 300 }}> */}
        <CalendarBase
          showControls={true}
          startDate={this.props.selectedDate}
          selectedDate={this.props.selectedDate}
          onDateSelect={date => this._onDateSelect(date)}
          customStyle={customStyle}
          dayHeadings={["周日", "周一", "周二", "周三", "周四", "周五", "周六"]}
          monthNames={[
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
          ]}
          prevButtonText={"<"}
          nextButtonText={">"}
        />
        {/* handler */}
        <View
          style={{
            width: "100%",
            height: 40,
            backgroundColor: "#fff",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            onPress={() => this._invokeCalendarModal()}
            style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                fontSize: Theme.baseMap.font.font_size_base,
                color: Theme.baseMap.color.seconddaryText
              }}
            >
              {"取消"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onConfirmDate()}
            style={{
              flex: 2,
              backgroundColor: Theme.baseMap.brandColor,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: Theme.baseMap.font.font_size_base,
                color: Theme.baseMap.color.title
              }}
            >
              {"确定"}
            </Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </Modal>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default Calendar;
