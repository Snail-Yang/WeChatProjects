const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchValue: "",
    showHistory: true,
    showSearching: false,
    tabTitles: ["显示全部", "热门谣言", "防疫科普", "官方动态"],
    history: ["防疫种类", "防疫手段", "口罩", "酒精喷雾", "新增确诊", "国外疫情"],
    rankingList: ["99.7的无水乙醇可以稀释到75%后做消毒用",
      "99.7的无水乙醇可以稀释到75%后做消毒用",
      "99.7的无水乙醇可以稀释到75%后做消毒用",
      "99.7的无水乙醇可以稀释到75%后做消毒用",
      "99.7的无水乙醇可以稀释到75%后做消毒用",
      "99.7的无水乙醇可以稀释到75%后做消毒用",
      "99.7的无水乙醇可以稀释到75%后做消毒用",
      "99.7的无水乙醇可以稀释到75%后做消毒用",
      "99.7的无水乙醇可以稀释到75%后做消毒用",
      "99.7的无水乙醇可以稀释到75%后做消毒用"
    ],
    
    clientHeight: "",
    searchHeight: "",
    tabHeight: "",
    curIndex: 0,
    rumors: app.data.rumors,
    science: app.data.science,
    dynamic: app.data.dynamic
  },
  // 失去焦点页面事件
  focusHandler(){
    this.setData({
      showHistory: false,
      showSearching: true,
    })
  },
  selectHistory(e){
    const selectedValue = this.data.history[e.currentTarget.dataset.index];
    this.setData({
      searchValue: selectedValue,
    })
  },
  deleteAll() {
    this.setData({
      history: []
    })
  },
  //获得焦点页面事件
  tabHandler(e) {
    const self = this;
    //获取搜索栏高度
    app.getElementStyle(".searchWrapper", rect => {
      self.setData({
        searchHeight: rect.height
      })
    });
    //获取导航栏高度
    app.getElementStyle(".tabWrapper", rect => {
      self.setData({
        tabHeight: rect.height
      })
    });
    //获取可用高度
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          clientHeight: res.windowHeight
        });
      },
    });
    //获取当前index
    this.setData({
      curIndex: e.currentTarget.dataset.index
    });
  },

  curChange(e) {
    this.setData({
      curIndex: e.detail.current
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