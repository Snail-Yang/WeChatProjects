// pages/profile/profile.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    userName:'',
    avatarUrl:''
  },
  goToLogin: function(){
    // console.log('123')
    wx.navigateTo({
      url: "../login/login",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userInfo = wx.getStorageSync('userInfo')
    console.log(userInfo)
    if (userInfo && userInfo.length !== 0) {
      console.log(userInfo)
      this.setData({
        userName: this.data.userName = userInfo.nickName,
        avatarUrl: this.data.avatarUrl = userInfo.avatarUrl
      })
    } else {
      this.setData({
        userName: this.data.userName = "未登录"
      })
    }
    console.log(this.data.userName)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const userInfo = wx.getStorageSync("userInfo");
    this.setData({ userInfo });
    console.log(this.data.userInfo)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    
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