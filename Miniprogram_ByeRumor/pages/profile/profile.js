// pages/profile/profile.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    userName:''
  },
  goToLogin: function(){
    // console.log('123')
    wx.navigateTo({
      url: "../login/login",
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const userinfo = wx.getStorageSync("userinfo");
    this.setData({userinfo});
    // console.log(this.data.userName)
    if (userinfo && userinfo.length !== 0) {
      this.data.userName = userinfo.nickName
    } else {
      this.data.userName = "未登录"
    }
    console.log(this.data.userName)
  },
  /**
   * 生命周期函数--监听页面加载
   */
})