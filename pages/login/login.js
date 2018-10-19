const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    let that = this;

    wx.hideShareMenu()
    wx.login({
      success: function (res) {
        wx.request({
          url: app.globalData.url + '/WeChatAppAuthorize/GetOpenIdAndSessionKeyString',
          data: {
            code: res.code,
          },
          success: function (res) {
            let data = JSON.parse(res.data.Data);

            app.globalData.openID = data.openid,
              app.globalData.session_key = data.session_key

            if (!!data.openid) {
              that.accredit()
            }
          }
        })
      }
    })
  },
  accredit: function () {
    wx.redirectTo({
      url: "/pages/notice/notice"
    })
  }

})