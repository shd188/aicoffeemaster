// app.js
App({
    onLaunch: function() {
      // 展示本地存储能力
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
  
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
    },
    globalData: {
      userInfo: null,
      // 全局使用的咖啡知识库版本和配置
      coffeeKnowledgeVersion: '1.0.0',
      // 缓存设置
      cacheSettings: {
        enableCache: true,
        cacheExpiration: 7 * 24 * 60 * 60 * 1000, // 默认缓存7天
      }
    }
  })