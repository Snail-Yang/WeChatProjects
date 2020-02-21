Page({
  data: {
    tabTitles: ["热门谣言", "防疫科普", "官方动态"],
    curIndex: 0,
    info: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  tabHandler(e){
    this.setData({
      curIndex: e.currentTarget.dataset.index
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
  

})