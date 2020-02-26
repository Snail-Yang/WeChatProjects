const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    clientHeight: "",
    searchHeight: "",
    tabHeight: "",

    inputValue: "",
    placeholder: "搜索的内容",
    focus: false,
    searchState: false,
    keyWords: [],
    result: [{
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

    curIndex: 0,
    tabTitles: ["显示全部", "热门谣言", "防疫科普", "官方动态"],
    hisList: ["防疫种类", "防疫手段", "口罩", "酒精喷雾", "新增确诊", "国外疫情"],
    rankList: ["99.7的无水乙醇可以稀释到75%后做消毒用",
      "99.7的无水乙醇可以稀释到75%后做消毒用",
    ],
  },
  //

  // 搜索历史页面事件
  selectHis(e) {
    this.setData({
      inputValue: e.detail.item
    })
  },
  deleteHis() {
    this.setData({
      hisList: []
    })
  },
  selectRank(e){
    this.setData({
      inputValue: e.detail.item
    })
  },
  //得失焦点
  inputFocus() {
    this.setData({
      focus: true,
    })
  },
  inputBlur() {
    this.setData({
      focus: false,
    })
  },
  // 搜索匹配
  lastSearch: Date.now(),
  throttle: 300,
  inputChange(e) {
    const _this = this;
    let result = _this.data.result;
    this.setData({
      inputValue: e.detail.value
    })
    if (Date.now() - this.lastSearch > this.throttle) {
      this.lastSearch = Date.now();
      this.timer = setTimeout(() => {
        const promise = new Promise((resolve, reject) => {
          if (!e.detail.value) {
            _this.setData({
              keyWords: []
            })
            reject();
          } else {
            result = result.filter(item => item.text.includes(e.detail.value));
            resolve(result);
          }
        });
        promise.then(result => {
          _this.setData({
            keyWords: result
          })
        }, err => console.log("Fail"));
      }, this.throttle);
    }
  },
  //匹配结果选择
  selectResult(e) {
    this.setData({
      inputValue: e.detail.item.text
    })
  },


  setResultPage(e) {
    const _this = this;
    //获取搜索栏高度
    app.getElementStyle(".searchWrapper", rect => {
      _this.setData({
        cliente: {
          searchHeight: rect.height
        }
      })
    });
    //获取导航栏高度
    app.getElementStyle(".tabWrapper", rect => {
      _this.setData({
        cliente: {
          tabHeight: rect.height
        }

      })
    });
    //获取可用高度
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          cliente: {
            clientHeight: res.windowHeight
          }
        });
      }
    });
  },
  //获取当前index
  tabHandler(e) {
    this.setData({
      tabBar: {
        curIndex: e.currentTarget.dataset.index
      }
    });
  },
  curChange(e) {
    this.setData({
      tabBar: {
        curIndex: e.currentTarget.dataset.index
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})