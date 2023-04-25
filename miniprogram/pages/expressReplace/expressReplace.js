import { getTimeNow } from '../../utils/index';
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    helpContent: '',
    imgUrl: '',
    address: '',
    userInfo: {},
    business: '',
    remark: '',
    addMoney: null,
  },

  submit() {
    const { helpContent, imgUrl, address, userInfo, business, remark, addMoney } = this.data;
    if (!(helpContent || imgUrl) || !address || !business) {
      wx.showToast({
        icon: 'none',
        title: '您填写的信息不全',
      })
      return;
    }
    db.collection('order').add({
      data: {
        // 模块的名字
        name: '快递代寄',
        // 当前时间
        time: getTimeNow(),
        // 订单金额
        money: 10 + addMoney,
        // 订单状态
        state: '待帮助',
        // 收件地址
        address,
        // 订单信息
        info: {
          // 帮助内容
          helpContent,
          // 快递商家
          business,
          // 备注
          remark,
        },
        // 用户信息
        userInfo,
        receivePerson:'',
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
  
  getAddMoney(e) {
    this.setData({
      addMoney: Number(e.detail.value)
    })
  },

  getRemark(e) {
    this.setData({
      remark: e.detail.value
    })
  },

  selectBusiness() {
    wx.redirectTo({
      url: '../expressBusiness/expressBusiness?url=expressReplace',
    })
  },

  selectAddress() {
    wx.setStorageSync('urlNow', 'expressReplace')
    wx.redirectTo({
      url: '../address/address',
    })
  },

  getImgUrl() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        wx.showLoading({
          title: '加载中',
        })
        const random = Math.floor(Math.random() * 1000);
        wx.cloud.uploadFile({
          cloudPath: `expressReplace/${random}.png`,
          filePath: res.tempFilePaths[0],
          success: (res) => {
            let fileID = res.fileID;
            this.setData({
              imgUrl: fileID
            })
            wx.hideLoading();
          }
        })
      }
    })
  },

  getHelpContent(e) {
    this.setData({
      helpContent: e.detail.value
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { business } = options;
    const address = wx.getStorageSync('addressNow');
    const userInfo = wx.getStorageSync('userInfo');
    if (address) {
      const {
        build,
        houseNumber
      } = address;
      this.setData({
        address: `${build}-${houseNumber}`,
      })
    }
    if (business) {
      this.setData({
        business,
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