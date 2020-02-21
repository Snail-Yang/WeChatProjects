Page({
  data: {
    tabTitles: ["热门谣言", "防疫科普", "官方动态"],
    curIndex: 0,
    info: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  tabHandler(e){
    this.setData({
      curIndex: e.currentTarget.dataset.index
    });
  }
})