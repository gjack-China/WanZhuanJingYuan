var app = getApp();
Page({
  data: {
    mingci:1,
    userInfo: {}
  },
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'step',
      success: function (res) {
        that.setData({
          step: res.data
        })
      }
    })
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          userInfo: res.data
        })
      }
    })
  }
})