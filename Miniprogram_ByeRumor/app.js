//app.js
const TOKEN = 'token'
const UID = 'userId'
App({
  globalData:{
    token: '',
    userId: ''
  },
  onLaunch: function(){
    wx.login({
      success: (res) => {
        // code只有5分钟有效期
        // 1. 获取 code
        const code = res.code;
        console.log(code)
        // 2.将 code 发送给服务器
        wx.request({
          url: 'https://wdd.free.qydev.com/user/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            console.log(res)
            // 1.取出token
            const token = res.data.token;
            const userId = res.data.userId;
            console.log("token: " + token)
            console.log("userId: "+userId)
            // 2.将token保存到globalData中
            this.globalData.token = token;
            this.globalData.userId = userId;
            console.log(this.globalData)
            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token)
            wx.setStorageSync(UID, userId)
          }
        })
      }
    })
  },
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