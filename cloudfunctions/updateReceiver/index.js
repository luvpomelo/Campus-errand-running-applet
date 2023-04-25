// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const { _id, allMoney,allCount } = event;
  try {
    return await db.collection('orderReceive').doc(_id).update({
      data: {
        allMoney,
        allCount,
      }
    })

  } catch (error) {
    console.log(error);
  }
}