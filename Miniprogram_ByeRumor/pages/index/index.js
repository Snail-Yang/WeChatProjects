const app = getApp();

Page({
  data: {
    clientHeight: "",
    searchHeight: "",
    tabHeight: "",
    tabTitles: ["热门谣言", "防疫科普", "官方动态"],
    curIndex: 0,
    rumors: app.data.rumors,
    science: app.data.science,
    dynamic: app.data.dynamic
  },

  tabHandler(e) {
    this.setData({
      curIndex: e.currentTarget.dataset.index
    });
  },

  curChange(e) {
    this.setData({
      curIndex: e.detail.current
    })
  },
  //页面跳转
  enterSearch() {
    app.toSearch();
  },
  enterDetail() {
    switch (this.data.curIndex) {
      case 0:
        app.toHot_rumor();
        break;
      case 1:
        app.toAntiepic_science();
        break;
      case 2:
        app.toOffic_dynamic();
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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
      success: function(res) {
        self.setData({
          clientHeight: res.windowHeight
        });
      },
    })
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