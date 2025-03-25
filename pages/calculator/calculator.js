Page({
  data: {
    activeTab: 'ratio',
    coffeeAmount: '',
    ratioOptions: ['1:15 (较浓)', '1:16', '1:17 (平衡)', '1:18 (较淡)'],
    ratioIndex: 2,
    roastOptions: ['浅烘焙', '中烘焙', '深烘焙'],
    roastIndex: 1,
    methodOptions: ['手冲', '法压壶', '爱乐压', '意式浓缩'],
    methodIndex: 0,
    showResult: false,
    result: {}
  },
  
  switchTab: function(e) {
    this.setData({
      activeTab: e.currentTarget.dataset.tab
    });
  },
  
  ratioChange: function(e) {
    this.setData({
      ratioIndex: e.detail.value
    });
  },
  
  roastChange: function(e) {
    this.setData({
      roastIndex: e.detail.value
    });
  },
  
  methodChange: function(e) {
    this.setData({
      methodIndex: e.detail.value
    });
  },
  
  goBack: function() {
    wx.navigateBack();
  },
  
  calculateParams: function(e) {
    const { coffeeAmount } = e.detail.value;
    
    if (!coffeeAmount || isNaN(coffeeAmount) || parseFloat(coffeeAmount) <= 0) {
      wx.showToast({
        title: '请输入有效的咖啡粉重量',
        icon: 'none'
      });
      return;
    }
    
    // 获取所选选项
    const { ratioOptions, ratioIndex, methodOptions, methodIndex, roastOptions, roastIndex } = this.data;
    
    // 获取比例数值（如1:15 -> 15）
    const ratio = parseInt(ratioOptions[ratioIndex].split(':')[1]);
    const waterAmount = Math.round(parseFloat(coffeeAmount) * ratio);
    
    // 根据所选参数设置结果
    let result = {
      waterAmount: waterAmount,
      grindSize: this.getGrindSize(methodIndex, roastIndex),
      extractionTime: this.getExtractionTime(methodIndex, waterAmount),
      waterTemperature: this.getWaterTemperature(roastIndex, methodIndex),
      pourTips: this.getPourTips(methodIndex, waterAmount)
    };
    
    this.setData({
      showResult: true,
      result: result
    });
  },
  
  // 根据冲煮方法和烘焙度获取研磨度建议
  getGrindSize: function(methodIndex, roastIndex) {
    const methods = ['手冲', '法压壶', '爱乐压', '意式浓缩'];
    const roasts = ['浅烘焙', '中烘焙', '深烘焙'];
    
    const grindSizeMap = {
      '手冲_浅烘焙': '中细研磨（如细砂糖）',
      '手冲_中烘焙': '中等研磨（如砂糖）',
      '手冲_深烘焙': '中粗研磨（如粗砂糖）',
      '法压壶_浅烘焙': '粗研磨（如海盐）',
      '法压壶_中烘焙': '粗研磨（如海盐）',
      '法压壶_深烘焙': '中粗研磨（如粗砂糖）',
      '爱乐压_浅烘焙': '中细研磨（如细砂糖）',
      '爱乐压_中烘焙': '中研磨（如砂糖）',
      '爱乐压_深烘焙': '中研磨（如砂糖）',
      '意式浓缩_浅烘焙': '极细研磨（如面粉）',
      '意式浓缩_中烘焙': '极细研磨（如面粉）',
      '意式浓缩_深烘焙': '细研磨（比面粉稍粗）'
    };
    
    const key = `${methods[methodIndex]}_${roasts[roastIndex]}`;
    return grindSizeMap[key] || '中等研磨（如砂糖）';
  },
  
  // 根据冲煮方法和水量获取萃取时间建议
  getExtractionTime: function(methodIndex, waterAmount) {
    switch (methodIndex) {
      case 0: // 手冲
        return waterAmount <= 250 ? '2分 - 2分30秒' : '2分30秒 - 3分钟';
      case 1: // 法压壶
        return '4分钟';
      case 2: // 爱乐压
        return '1分 - 1分30秒';
      case 3: // 意式浓缩
        return '25秒 - 30秒';
      default:
        return '2分30秒 - 3分钟';
    }
  },
  
  // 根据烘焙度和冲煮方法获取水温建议
  getWaterTemperature: function(roastIndex, methodIndex) {
    if (methodIndex === 3) { // 意式浓缩
      return '88°C - 92°C';
    }
    
    switch (roastIndex) {
      case 0: // 浅烘焙
        return '94°C - 96°C';
      case 1: // 中烘焙
        return '92°C - 94°C';
      case 2: // 深烘焙
        return '88°C - 92°C';
      default:
        return '92°C - 94°C';
    }
  },
  
  // 根据冲煮方法和水量获取注水建议
  getPourTips: function(methodIndex, waterAmount) {
    switch (methodIndex) {
      case 0: // 手冲
        const bloomAmount = Math.round(waterAmount * 0.2);
        return `第一次注水${bloomAmount}ml浸润30秒，然后分3次注水，每次间隔30秒。`;
      case 1: // 法压壶
        return '一次性注入所有水，轻轻搅拌后盖上盖子，等待4分钟后下压。';
      case 2: // 爱乐压
        return '一次性注入所有水，轻轻搅拌15秒，等待45秒后翻转并压下。';
      case 3: // 意式浓缩
        return '确保咖啡粉均匀分布在滤篮中，压力稳定在9bar左右。';
      default:
        return '第一次注水20%浸润30秒，然后分3次注水，每次间隔30秒。';
    }
  }
}); 