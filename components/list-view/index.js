import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import Theme from "../local-theme/index";
import UltimateListView from "./lib/ultimateListView";

export default class ListView extends Component {
  static propTypes = {
    fetchx: PropTypes.func,
    method: PropTypes.string,
    url: PropTypes.string,
    params: PropTypes.object,
    pageLimit: PropTypes.number,
    item: PropTypes.func,
    style: PropTypes.object
  };

  static defaultProps = {
    method: "get",
    pageLimit: 10,
    params: {
      pageIndex: 1,
      pageSize: 10
    }
  };

  onFetch = async (page = 1, startFetch, abortFetch) => {
    try {
      let pageData,
        _params = {};
      //Fetch data
      if (this.props.method === "get") {
        if (!_params.params) {
          _params.params = this.props.params;
        }
        _params.params.pageIndex = page;
      } else {
        _params.pageIndex = page;
      }

      if (this.pageTotal && page > this.pageTotal) {
        //No more data set
        pageData = [];
      } else {
        let _pageData = await this.props.fetchx(this.props.url, _params);
        if (_pageData.data.data && _pageData.data.result === 1) {
          pageData = _pageData.data.data;
          this.pageTotal = Math.ceil(
            _pageData.data.total / this.props.pageLimit
          );
        } else {
          pageData = [];
        }
      }
      //Invoke data for view
      startFetch(pageData, this.props.pageLimit);
    } catch (err) {
      //Manually stop the refresh or pagination if it encounters network error
      abortFetch();
    }
  };

  renderEmptyView() {
    return (
      <Text style={[styles.noData, { color: this.props.style.extra.color }]}>
        {"没有数据"}
      </Text>
    );
  }

  _refresh() {
    this.flatListx.refresh();
  }

  render() {
    return (
      <UltimateListView
        ref={ref => (this.flatListx = ref)}
        onFetch={(page, startFetch, abortFetch) =>
          this.onFetch(page, startFetch, abortFetch)
        }
        keyExtractor={(item, index) => `${index} - ${item}`}
        refreshableMode={Platform.OS === "ios" ? "advanced" : "basic"} //basic or advanced
        //refreshableMode={"advanced"}//basic or advanced
        item={(item, index) => this.props.item(item, index)}
        //----Extra Config----
        //header={this.renderHeaderView}
        //paginationFetchingView={() => this.renderPaginationFetchingView()}
        //paginationAllLoadedView={() => this.renderPaginationAllLoadedView()}
        //paginationWaitingView={() => this.renderPaginationWaitingView()}
        emptyView={() => this.renderEmptyView()}
        waitingSpinnerText={"数据加载中" + "..."}
        refreshableTitlePull={"下拉刷新"}
        dateTitle={"更新时间" + "："}
        refreshableTitleRefreshing={"刷新中" + "..."}
        refreshableTitleRelease={"释放刷新"}
        allLoadedText={"没有更多"}
        displayDate={true}
        spinnerColor={this.props.style && this.props.style.extra.spinnerColor}
        separator={this.renderSeparatorView}
        styles={this.props.style}
      />
    );
  }
}

const styles = StyleSheet.create({
  noData: {
    marginVertical: 10,
    textAlign: "center"
  }
});
