import {
  getTimeNow
} from '../../utils/index';
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    userInfo: {},
    deliveryInfo: '',
    money: null,
  },

  selectAddress() {
    wx.setStorageSync('urlNow', 'helpMeGive')
    wx.redirectTo({
      url: '../address/address',
    })
  },

  submit() {
    const {
      address,
      userInfo,
      deliveryInfo,
      money
    } = this.data;
    if (!deliveryInfo || !address || !money) {
      wx.showToast({
        icon: 'none',
        title: '您填写的信息不全',
      })
      return;
    }
    db.collection('order').add({
      data: {
        // 模块的名字
        name: '帮我送',
        // 当前时间
        time: getTimeNow(),
        // 订单金额
        money,
        // 订单状态
        state: '待帮助',
        // 取货地址
        address,
        // 订单信息
        info: {
          // 送达地点
          deliveryInfo,
        },
        // 用户信息
        userInfo,
        // 手机号
        phone: wx.getStorageSync('phone'),
        createTime: db.serverDate()
      },
      success: (res) => {
        wx.switchTab({
          url: '../index/index',
        })
        wx.showToast({
          title: '发布成功',
        })
      }
    })
  },

  getMoney(e) {
    this.setData({
      money: Number(e.detail.value)
    })
  },

  getDeliveryInfo(e) {
    this.setData({
      deliveryInfo: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const address = wx.getStorageSync('addressNow');
    const userInfo = wx.getStorageSync('userInfo');
    if (address) {
      const {
        build,
        houseNumber
      } = address;
      this.setData({
        address: `${build}-${houseNumber}`
      })
    }
    this.setData({
      userInfo,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})