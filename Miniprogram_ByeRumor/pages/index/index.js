Page({
  data: {
    tabTitles: ["热门谣言", "防疫科普", "官方动态"],
    curIndex: 0,
  
    rumors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    science: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
    dynamic: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"]
  },
  tabHandler(e){
    this.setData({
      curIndex: e.currentTarget.dataset.index
    })
  },
  curChange(e){
    this.setData({
      curIndex: e.detail.current
    })
  },
  enterDetail(){
    if(this.data.curIndex === 0){
      this.toHot_rumor();
    }else if(this.data.curIndex === 1){
      this.toAntiepic_science();
    }else{
      this.toOffic_dynamic();
    }
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
        res.eventChannel.emit("getData", { data: 0 })
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
        res.eventChannel.emit("getData", { data: 0 })
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
        res.eventChannel.emit("getData", { data: 0 })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("123");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})