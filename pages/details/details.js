// pages/details/details.js
//获取应用实例
Page({
  data: {
    md: '',
    title: ''
  },
  onLoad: function (option) {
    let title = option.title;
    let file = title + '.md';
    let md = require('../../src/markdown/' + file);
    this.setData({
      md: md,
      title: title
    })
  }
})