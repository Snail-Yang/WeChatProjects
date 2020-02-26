// components/searchHistory/searchHistory.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      hisList: {
        type: Array,
        value: []
      },
      rankList: {
        type: Array,
        value: []
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectHistory(e) {
      this.triggerEvent("selectIndex", e.currentTarget.dataset.index);
    },
    deleteHistory() {
      this.triggerEvent("deleteHis");
    }
  }
})
