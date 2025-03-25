# 咖啡AI助手微信小程序

## 项目简介

咖啡AI助手是一款专为咖啡爱好者和专业咖啡师设计的微信小程序，旨在通过人工智能技术提供咖啡知识问答、萃取计算、风味分析和设备诊断等功能，帮助用户提升咖啡制作体验和专业知识水平。

## 功能特点

- **智能问答**：基于专业咖啡知识库的AI对话系统，解答用户关于咖啡的各类问题
- **萃取计算器**：根据咖啡粉量、粉水比、烘焙度和冲煮方法，提供精确的水量、研磨度、萃取时间等参数建议
- **风味轮分析**：帮助用户识别和描述咖啡的风味特点，提供专业的风味描述词汇和解析
- **设备诊断**：针对常见咖啡设备问题进行智能诊断和提供解决方案

## 项目结构

```
coffee-ai-assistant/
├── app.js # 小程序入口文件
├── app.json # 全局配置
├── app.wxss # 全局样式
├── project.config.json # 项目配置文件
├── sitemap.json # 站点地图配置
├── assets/ # 静态资源文件夹
│ └── icons/ # 图标文件夹
│ ├── chat.png # 聊天图标
│ ├── calculator.png # 计算器图标
│ ├── flavor.png # 风味轮图标
│ └── diagnosis.png # 设备诊断图标
├── pages/ # 页面文件夹
│ ├── index/ # 首页
│ │ ├── index.wxml # 首页结构
│ │ ├── index.wxss # 首页样式
│ │ └── index.js # 首页逻辑
│ ├── chatbot/ # 智能问答
│ │ ├── chatbot.wxml # 问答页面结构
│ │ ├── chatbot.wxss # 问答页面样式
│ │ └── chatbot.js # 问答页面逻辑
│ ├── calculator/ # 萃取计算器
│ │ ├── calculator.wxml # 计算器页面结构
│ │ ├── calculator.wxss # 计算器页面样式
│ │ └── calculator.js # 计算器页面逻辑
│ ├── flavor-wheel/ # 风味轮分析（待实现）
│ │ ├── flavor-wheel.wxml
│ │ ├── flavor-wheel.wxss
│ │ └── flavor-wheel.js
│ └── diagnosis/ # 设备诊断（待实现）
│ ├── diagnosis.wxml
│ ├── diagnosis.wxss
│ └── diagnosis.js
└── utils/ # 工具类
└── api.js # API请求封装
```

## 技术栈

- 微信小程序原生开发框架
- WXML + WXSS + JavaScript
- 微信小程序组件库
- 后端API集成（未来实现）

## 设计原则

1. **简洁易用**：交互设计以简洁直观为原则，降低用户使用门槛
2. **专业准确**：提供的咖啡知识和计算结果严格基于专业标准
3. **响应式布局**：适配不同尺寸的移动设备屏幕
4. **离线功能支持**：核心计算功能支持离线使用
5. **模块化设计**：代码结构清晰，便于维护和扩展

## 安装和运行

### 开发环境需求

- 微信开发者工具（最新版）
- Node.js 环境（推荐 v12.0 以上）
- 微信小程序AppID（可使用测试AppID进行开发）

### 运行步骤

1. 克隆代码仓库
   ```bash
   git clone https://github.com/yourusername/coffee-ai-assistant.git
   cd coffee-ai-assistant
   ```

2. 使用微信开发者工具打开项目
   - 打开微信开发者工具
   - 点击"导入项目"，选择项目文件夹
   - 填入AppID（或选择"测试号"）
   - 点击"导入"

3. 在模拟器中预览或使用真机调试

## 开发指南

### 代码规范

1. **命名规范**
   - 文件名：使用小写字母和连字符（如 `flavor-wheel.js`）
   - 变量/函数：使用驼峰命名法（如 `getUserInfo`）
   - 常量：全大写（如 `MAX_COFFEE_AMOUNT`）

2. **注释规范**
   - 函数和复杂逻辑前必须添加注释
   - 使用中文注释，确保团队成员都能理解
   - 每个页面顶部添加文件描述和作者信息

3. **样式规范**
   - 尽量使用全局样式变量（色彩、字体等）
   - 组件样式使用BEM命名方法
   - 避免!important

### 开发流程

1. **功能开发**
   - 在自己的分支上进行开发 (`feature/功能名称`)
   - 完成后提交Pull Request
   - 代码审核通过后合并到开发分支

2. **Bug修复**
   - 使用 `fix/bug描述` 格式创建分支
   - 修复后提交Pull Request
   - 审核通过后合并

3. **版本发布**
   - 从开发分支合并到主分支
   - 打Tag标记版本
   - 使用微信开发者工具上传代码

## 项目迭代计划

### 近期计划（第一阶段）

1. 完成风味轮分析和设备诊断页面开发
2. 实现真实API连接，替换模拟数据
3. 增加用户偏好设置功能
4. 优化界面动效和用户体验

### 中期计划（第二阶段）

1. 添加咖啡日志记录功能
2. 增加社区功能，允许用户分享咖啡配方
3. 实现咖啡豆商城对接
4. 添加更多专业咖啡计算工具

### 长期计划（第三阶段）

1. 引入语音识别功能
2. 增加图像识别（识别咖啡豆、设备）
3. 增加个性化推荐系统
4. 多语言支持

## 数据模型

### 用户数据

```javascript
{
  openId: String,          // 微信openID
  nickname: String,        // 昵称
  preferences: {           // 用户偏好
    favoriteMethod: String,  // 喜好的冲泡方法
    preferredRoast: String,  // 喜好的烘焙度
    defaultRatio: String     // 默认粉水比
  },
  history: [               // 使用历史
    {
      type: String,        // 功能类型
      content: Object,     // 内容
      timestamp: Date      // 时间戳
    }
  ]
}
```

### 咖啡知识库

```javascript
{
  id: String,              // 知识条目ID
  category: String,        // 分类
  keywords: [String],      // 关键词
  question: String,        // 问题
  answer: String,          // 回答
  relatedTopics: [String]  // 相关主题
}
```

## 贡献指南

非常欢迎对项目做出贡献！请遵循以下步骤：

1. Fork本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m '添加了某某功能'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交Pull Request

## 版本记录

- **v0.1.0** (2023-07-10)
  - 初始项目架构搭建
  - 实现首页、智能问答和萃取计算器基本功能

- **v0.2.0** (计划中)
  - 实现风味轮分析和设备诊断功能
  - 接入真实后端API

## 联系方式

项目负责人：沈同学 - shd_di@163.com

## 许可证

[MIT](https://opensource.org/licenses/MIT)

---

© 2025 咖啡AI助手团队