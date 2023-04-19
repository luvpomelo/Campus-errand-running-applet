// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init() // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const res = await cloud.getOpenData({
    list: [event.cloudID]
  });
  return res; 
}