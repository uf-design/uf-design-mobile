/**
|--------------------------------------------------
| 日期组件
|--------------------------------------------------
*/
//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import Theme from "../local-theme/index";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Calendar from "react-native-calendar";
import Icon from "../Iconfont/Iconfont";
import I18n from "react-native-i18n";
import AppTheme from "../../modules/common/theme/config";

// create a component
const customStyle = {
  calendarContainer: {
    backgroundColor: AppTheme.currentMap.extra.white.color
  },
  selectedDayCircle: {
    backgroundColor: AppTheme.currentMap.extra.red.color
  }
};
class CalendarModal extends Component {
  static propTypes = {
    cb: PropTypes.func,
    selectedDate: PropTypes.string
  };

  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      isCalendarVisible: false,
      selectedDate: null
    };
  }

  _invokeCalendarModal() {
    this.setState({
      isCalendarVisible: !this.state.isCalendarVisible
    });
  }

  _onDateSelect(date) {
    this.state.selectedDate = date;
  }

  onConfirmDate() {
    this.props.cb &&
      this.state.selectedDate &&
      this.props.cb(this.state.selectedDate);
    this._invokeCalendarModal();
  }

  render() {
    return (
      <Modal
        isVisible={this.state.isCalendarVisible}
        style={{ margin: 0 }}
        onBackdropPress={() => this._invokeCalendarModal()}
        animationIn={"slideInLeft"}
        animationOut={"slideOutRight"}
      >
        {/* <View style={{ backgroundColor: AppTheme.currentMap.extra.white.color, height: 300 }}> */}
        <Calendar
          showControls={true}
          selectedDate={this.props.selectedDate}
          onDateSelect={date => this._onDateSelect(date)}
          customStyle={customStyle}
          dayHeadings={[
            I18n.t("周日"),
            I18n.t("周一"),
            I18n.t("周二"),
            I18n.t("周三"),
            I18n.t("周四"),
            I18n.t("周五"),
            I18n.t("周六")
          ]}
          monthNames={[
            I18n.t("一月"),
            I18n.t("二月"),
            I18n.t("三月"),
            I18n.t("四月"),
            I18n.t("五月"),
            I18n.t("六月"),
            I18n.t("七月"),
            I18n.t("八月"),
            I18n.t("九月"),
            I18n.t("十月"),
            I18n.t("十一月"),
            I18n.t("十二月")
          ]}
          prevButtonText={<Icon name="icon-dingbu-fanhui" size={14} />}
          nextButtonText={<Icon name="icon-zhishiqixiangyou" size={14} />}
        />
        {/* handler */}
        <View
          style={{
            width: "100%",
            height: 40,
            backgroundColor: AppTheme.currentMap.extra.white.color,
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            onPress={() => this._invokeCalendarModal()}
            style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                fontSize: 14,
                color: AppTheme.currentMap.normal.title3.color
              }}
            >
              {I18n.t("取消")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onConfirmDate()}
            style={{
              flex: 2,
              backgroundColor: AppTheme.currentMap.extra.red.color,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: AppTheme.currentMap.normal.title1.color
              }}
            >
              {I18n.t("确定")}
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
export default CalendarModal;
