const db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: ['../../images/banner1.png','../../images/banner2.png','../../images/banner3.png'],
    indexConfig: [
      {
        icon: '../../images/kuaidi.png',
        text: '快递代取',
        url: '../getExpress/getExpress'
      },
      {
        icon: '../../images/dayin.png',
        text: '打印服务',
        url: '../print/print',
      },
      {
        icon: '../../images/paotui.png',
        text: '校园跑腿',
        url: '../run/run',
      },
      {
        icon: '../../images/kuaididaiji.png',
        text: '快递代寄',
        url: '../expressReplace/expressReplace',
      },
      {
        icon: '../../images/zujie.png',
        text: '租借服务',
        url: '../lease/lease',
      },
      {
        icon: '../../images/youxi.png',
        text: '游戏陪玩',
        url: '../playGame/playGame',
      },
      {
        icon: '../../images/bangsong.png',
        text: '帮我送',
        url: '../helpMeGive/helpMeGive',
      },
      {
        icon: '../../images/daiti.png',
        text: '代替服务',
        url: '../replaceMe/replaceMe',
      },
      {
        icon: '../../images/qita.png',
        text: '其它帮助',
        url: '../otherHelp/otherHelp',
      }
    ]
  },

  toDetail(e) {
    const userInfo = wx.getStorageSync('userInfo');
    const url = e.currentTarget.dataset.url;
    if (userInfo) {
      wx.navigateTo({
        url,
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: '请前往个人中心登录',
      })
    }
  },

  handleClickNotice() {
    wx.showModal({
      title: '公告',
      content: '关注公众号可享订单推送-接单员请务必添加客服v: 18776585280'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const openid = wx.getStorageSync('openid');
    if (!openid) {
      wx.cloud.callFunction({
        name: 'UserOpenId',
        success: (res) => {
          const {
            openid
          } = res.result;
          wx.setStorageSync('openid', openid);
        },
      })
    }
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