//app.js
App({
  //全局数据
  data: {
    rumors: [{
        text: "新型肺炎疫苗出来啦",
        type: "ru"
      },
      {
        text: "高温杀死新型肺炎病毒",
        type: "ru"
      }, {
        text: "出门需带口罩",
        type: "sc"
      }, {
        text: "广东连续3天无新增确诊",
        type: "dy"
      }
    ],

    science: [{
      text: 1,
      type: "sc"
    }, {
      text: 2,
      type: "sc"
    }, {
      text: 3,
      type: "sc"
    }],

    dynamic: [{
      text: 1,
      type: "dy"
    }, {
      text: 2,
      type: "dy"
    }, {
      text: 3,
      type: "dy"
    }, {
      text: 3,
      type: "dy"
    }, {
      text: 3,
      type: "dy"
    },
      {
        text: 3,
        type: "dy"
      }],
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