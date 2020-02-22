//app.js
App({
  //全局数据
  data:{
    rumors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    science: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
    dynamic: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"]
  },
  //公共方法
  getElementStyle(ele, callBack) {
    wx.createSelectorQuery().select(ele).boundingClientRect(callBack).exec();
  },
  //路由跳转
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