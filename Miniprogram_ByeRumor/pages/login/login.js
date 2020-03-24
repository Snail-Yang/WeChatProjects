// pages/login/login.js
const TOKEN = 'token'
const UID = 'userId'
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    token: '',
    userId: ''
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLaunch: function () {
    // 先从缓存中取出 token
    const token = wx.getStorageSync(TOKEN)
    // 判断 token 是否有值
    if (token && token.length !== 0) {
      // 此时表示已有 token ，需验证 token 是否过期
      // 验证 token
      this.check_token(token);
    } else {
      // 表示此时没有 token 需要进行登陆操作
      this.login()
    };
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country
            }
          })
        }
      }
    })
  },
  login() {
    console.log("执行了登陆操作")
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
          success: function (res) {
            console.log(res)
            // 1.取出token
            const token = res.data.token;
            const userId = res.data.userId;
            console.log("token: " + token)
            console.log("userId: " + userId)
            // 2.将token保存到globalData中
            this.data.token = token;
            this.data.userId = userId;
            console.log(this.data)
            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token)
            wx.setStorageSync(UID, userId)
          }
        })
      }
    })
  },
  bindGetUserInfo(e) {
    const {userInfo} = e.detail;
    wx.setStorageSync('userInfo', userInfo);
    wx.navigateBack({
      delta: 1
    })
  },
  check_token(token){
    console.log("执行了验证 token的操作")
    wx.request({
      url: 'https://wdd.free.qydev.com/user/auth',
      method: 'post',
      data: {
        token,
        userId
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    })
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