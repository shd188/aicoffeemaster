Page({
  data: {
    
  },
  onLoad: function() {
    // 页面加载时执行的操作
  },
  handleSearch: function(e) {
    const query = e.detail.value.query;
    if (!query.trim()) {
      wx.showToast({
        title: '请输入问题',
        icon: 'none'
      });
      return;
    }
    
    // 跳转到智能问答页面并传递查询参数
    wx.navigateTo({
      url: `/pages/chatbot/chatbot?query=${encodeURIComponent(query)}`
    });
  }
}) 