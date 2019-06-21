// pages/list/list.js
const app = getApp();
const data = require('../../utils/data.js')
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    list: [],
    list1: data
  },
  onLoad() {
    let list1 = this.data.list1;
    let list = [];
    list1.forEach(function (item, index) {
      let key = item.id.charCodeAt() - 65;
      if (!list[key]){
        list[key] = {};
      }
      list[key]['id'] = item.id;
      if (!list[key]['list']){
        list[key]['list'] = [];
      }
      list[key]['list'].push(item);
    })
    this.setData({
      list: list,
      listCur: list[0].id
    })
  },
  onReady() {
    let that = this;
    wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function (res) {
      that.setData({
        boxTop: res.top
      })
    }).exec();
    wx.createSelectorQuery().select('.indexes').boundingClientRect(function (res) {
      that.setData({
        barTop: res.top
      })
    }).exec()
  },
  //获取文字信息
  getCur(e) {
    this.setData({
      hidden: false,
      listCur: e.target.id
    })
  },

  setCur(e) {
    this.setData({
      hidden: true,
      listCur: this.data.listCur
    })
  },
  //滑动选择Item
  tMove(e) {
    let y = e.touches[0].clientY,
      offsettop = this.data.boxTop,
      that = this;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 20);
      this.setData({
        listCur: that.data.list[num]['id']
      })
    };
  },

  //触发全部开始选择
  tStart() {
    this.setData({
      hidden: false
    })
  },

  //触发结束选择
  tEnd() {
    this.setData({
      hidden: true,
      listCurID: this.data.listCur
    })
  },
  indexSelect(e) {
    let that = this;
    let barHeight = this.data.barHeight;
    let list = this.data.list;
    let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
    for (let i = 0; i < list.length; i++) {
      if (scrollY < i + 1) {
        that.setData({
          listCur: list[i]['id'],
          movableY: i * 20
        })
        return false
      }
    }
  },
  searchCommand(e) {
    let key = e.detail.value.toLowerCase();
    let list = [];
    let list1 = this.data.list1;
    let list2 = [];
    for (let i = 0; i < list1.length; i++) {
      let a = key;
      let b = list1[i].name.toLowerCase();
      if (b.search(a) != -1) {
        list1[i].isShow = true
      } else {
        list1[i].isShow = false
      }
    }
    list1.forEach(function (item, index) {
      if(item.isShow == true){
        let key = item.id.charCodeAt() - 65;
        if (!list[key]) {
          list[key] = {};
        }
        list[key]['id'] = item.id;
        if (!list[key]['list']) {
          list[key]['list'] = [];
        }
        list[key]['list'].push(item);
      }
    })
    let i = 0;
    list.forEach(function (item, index) {
      list2[i] = item;
      i++;
    })
    this.setData({
      list: list2,
      listCur: list2[0].id
    })
  },
  detail(e) {
    let title = e.currentTarget.dataset.title;
    console.log(title);
    wx.navigateTo({
      url: '../details/details?title=' + title
    })
  },
});