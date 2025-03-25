Page({
  data: {
    messages: [],
    inputValue: '',
    isTyping: false,
    scrollToMessage: '',
    quickQuestions: [
      "什么是手冲咖啡",
      "如何选择咖啡豆",
      "意式咖啡机推荐",
      "最佳咖啡萃取时间"
    ]
  },
  
  onLoad: function(options) {
    // 如果有初始查询，自动发送
    if (options.query) {
      this.setData({
        inputValue: decodeURIComponent(options.query)
      }, () => {
        this.sendMessage();
      });
    }
  },
  
  goBack: function() {
    wx.navigateBack();
  },
  
  onInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  
  selectQuickQuestion: function(e) {
    const question = e.currentTarget.dataset.question;
    this.setData({
      inputValue: question
    }, () => {
      this.sendMessage();
    });
  },
  
  sendMessage: function() {
    const { inputValue, messages } = this.data;
    
    if (!inputValue.trim()) return;
    
    // 创建用户消息
    const userMessageId = Date.now();
    const userMessage = {
      id: userMessageId,
      type: 'user',
      content: inputValue
    };
    
    // 更新消息列表，清空输入框，显示AI正在输入
    this.setData({
      messages: [...messages, userMessage],
      inputValue: '',
      isTyping: true,
      scrollToMessage: `msg-${userMessageId}`
    });
    
    // 模拟API回答（实际项目中替换为真实API调用）
    setTimeout(() => {
      let response = '';
      
      if (inputValue.includes('萃取') || inputValue.includes('粉水比')) {
        response = '手冲咖啡的粉水比通常在1:15至1:18之间，这取决于您喜欢的口感和使用的咖啡豆。浅烘焙咖啡通常使用1:16或1:17的比例，中烘焙可以尝试1:15至1:16，深烘焙则适合1:14至1:15的比例。';
      } else if (inputValue.includes('手冲')) {
        response = '手冲咖啡是一种手动冲泡咖啡的方法，它允许您精确控制水温、冲泡时间和水流，从而提取出咖啡豆中最佳的风味。常见的手冲设备包括V60、卡里塔和气压壶等。';
      } else if (inputValue.includes('咖啡豆')) {
        response = '选择咖啡豆时，可以考虑产地、烘焙度、风味描述和新鲜度。不同产地的咖啡豆有独特的风味特点，如埃塞俄比亚的花香果酸，巴西的巧克力坚果风味等。';
      } else {
        response = '这是关于您咖啡问题的回答。我们的AI助手会根据专业咖啡知识库为您提供详细信息。请尝试问一些关于咖啡豆、冲泡方法或设备的具体问题。';
      }
      
      const botMessageId = Date.now();
      const botMessage = {
        id: botMessageId,
        type: 'bot',
        content: response
      };
      
      this.setData({
        messages: [...this.data.messages, botMessage],
        isTyping: false,
        scrollToMessage: `msg-${botMessageId}`
      });
    }, 1500);
  }
}); 