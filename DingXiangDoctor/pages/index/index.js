Page({
  data: {
    navigationBarTitle: '',
    height: '',
    searchList: [{
        title: "痔疮能彻底根治不复发吗?",
        hot: false
      },
      {
        title: "2021年度回顾",
        hot: true
      },
      {
        title: "搜一搜: /疾病/病状/健康问题",
        hot: false
      },
      {
        title: "最新疫情动态",
        hot: true
      }
    ],
    current: 0
  },
  // 导航栏选择
  selectBar(e) {
    let current = parseInt(e.target.dataset.current)
    this.setData({
      current: current
    })
    this.setHeight()
  },
  // 滑动组件事件
  swiper(e) {
    let current = e.detail.current
    this.setData({
      current: current
    })
    this.setHeight()
  },
  // 封装设置高度函数
  async setHeight() {
    let dom
    this.data.current == 0 ? (dom = ".care") : (dom = ".recomment")
    const ret = await this.getHeight(dom);
    // 如果获取高度为0 ,就需要2s后再获取一次
    if (!ret.height) {
      ret = await this.getHeight(dom);
    }
    this.setData({
      height: ret.height
    })
  },
  async onReady(){
    this.setHeight()
  },
  getHeight(dom) {
    return new Promise((resiolve, rejected) => {
      const query = wx.createSelectorQuery();
      query.select(dom).boundingClientRect();
      query.exec(res => {
        resiolve(res[0])
      })
    })
  },
  // 页面监听滚动事件
  onPageScroll(e) {
    var that = this
    var scrollTop = parseInt(e.scrollTop) //滚送条距离顶部的高度
    if (scrollTop >= 300) {
      that.setData({
        navigationBarTitle: '丁香医生',
        scroll: true
      })
    } else {
      that.setData({
        navigationBarTitle: ''
      })
    }
  },
  // 健康百科路由跳转
  toBaike(){
    wx.navigateTo({
      url: '/pages/baike/baike',
    })
  },
  // 看热门跳转
  toRemen(){
    wx.navigateTo({
      url: '/pages/remen/remen',
    })
  },
  onLoad(){
    
  },
  onShow(){
    this.setData({
      current:getApp().globalData.current
    })
  }

})