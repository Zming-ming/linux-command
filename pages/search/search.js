// pages/search/search.js
const app = getApp();
const data = require('../../utils/data.js')
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: data
  },
  onLoad() {
    let list = this.data.list;
    let arr = ['w','ab','ip','ld','xz','ln','ar','lp'];
    for (let i = 0; i < list.length; i++) {
      if (arr.indexOf(list[i].title) > -1) {
        list[i].isShow = true
      } else {
        list[i].isShow = false
      }
    }
    this.setData({
      list: list
    })
  },
  searchCommand(e) {
    let key = e.detail.value.toLowerCase();
    let list = this.data.list;
    for (let i = 0; i < list.length; i++) {
      let a = key;
      let b = list[i].name.toLowerCase();
      if (b.search(a) != -1) {
        list[i].isShow = true
      } else {
        list[i].isShow = false
      }
    }
    this.setData({
      list: list
    })
  },
  detail(e) {
    let title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '../details/details?title='+title
    })
  }
});