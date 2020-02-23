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
  },
  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    console.log(this.data.userinfo)
    if (this.data.userinfo && this.data.userinfo.length !== 0) {
      this.setData({
        userName: this.data.userName = this.data.userinfo.nickName
      })
    } else {
      this.setData({
        userName: this.data.userName = "未登录"
      })
    }
    console.log(this.data.userName)
  }
})