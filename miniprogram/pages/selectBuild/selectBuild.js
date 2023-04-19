// pages/selectBuild/selectBuild.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ['教学区', '其它区域', '至善', '知行', '致远', '博雅', '启贤', '博艺'],
    tabNow: 0
  },

  selectBuild(e) {
    const index = e.currentTarget.dataset.index;
    const that = this.data;
    const build = `${that.tabList[that.tabNow]}-${index + 1}号楼`;
    wx.navigateTo({
      url: `../addAddress/addAddress?build=${build}`
    })
  },

  selectTab(e) {
     const id = e.currentTarget.dataset.id;
     this.setData({
         tabNow: id,
     })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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