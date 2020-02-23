//app.js
App({
  //全局数据
  data: {
    rumors: [{
      content: 1,
      type: "ru"
    }, {
      content: 2,
      type: "ru"
    }, {
      content: 3,
      type: "ru"
    }],

    science: [{
      content: 1,
      type: "sc"
    }, {
      content: 2,
      type: "sc"
    }, {
      content: 3,
      type: "sc"
    }],

    dynamic: [{
      content: 1,
      type: "dy"
    }, {
      content: 2,
      type: "dy"
    }, {
      content: 3,
      type: "dy"
    }],
  },
  //公共方法
  getElementStyle(ele, callBack) {
    wx.createSelectorQuery().select(ele).boundingClientRect(callBack).exec();
  },
  //路由跳转
  toSearch() {
    wx.navigateTo({
      url: '../search/search',
      events: {
        getData() {
          console.log("Data");
        }
      },
      success(res) {
        res.eventChannel.emit("getData", {
          data: 0
        })
      }
    })
  },
  toHot_rumor() {
    wx.navigateTo({
      url: '../hot_rumor/hot_rumor',
      events: {
        getData() {
          console.log("Data");
        }
      },
      success(res) {
        res.eventChannel.emit("getData", {
          data: 0
        })
      }
    })
  },
  toAntiepic_science() {
    wx.navigateTo({
      url: '../antiepic_science/antiepic_science',
      events: {
        getData() {
          console.log("Data");
        }
      },
      success(res) {
        res.eventChannel.emit("getData", {
          data: 0
        })
      }
    })
  },
  toOffic_dynamic() {
    wx.navigateTo({
      url: '../offic_dynamic/offic_dynamic',
      events: {
        getData() {
          console.log("Data");
        }
      },
      success(res) {
        res.eventChannel.emit("getData", {
          data: 0
        })
      }
    })
  },
})