// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: [],
    url: ''
  },

  selectAddress(e) {
    const {
      index
    } = e.currentTarget.dataset;
    const url = wx.getStorageSync('urlNow')
    const address = this.data.address[index];
    wx.setStorageSync('addressNow', address);
    wx.redirectTo({
      url: `../${url}/${url}`,
    })
  },
  
  edit(e) {
    const index = e.currentTarget.dataset.index;
    const address = this.data.address[index];
    wx.navigateTo({
      url: `../addAddress/addAddress?address=${JSON.stringify(address)}&index=${index}`,
    })
  },

  delete(e) {
    const index = e.currentTarget.dataset.index;
    const address = this.data.address;
    address.splice(index, 1);
    wx.setStorageSync('address', address);
    wx.showToast({
      title: '删除成功',
    })
    this.onLoad();
  },

  addAddress() {
    wx.navigateTo({
      url: '../addAddress/addAddress',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const address = wx.getStorageSync('address');
    this.setData({
      address,
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
    this.setData({
      address: wx.getStorageSync('address')
    })
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