// pages/remen/remen.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navigationBarHeight: 40,
        menuButtonWidth: 87,
        menuButtonHeight: 30,
        statusBarHeight: 40,
        left: 20,
        top: 24,
        title:''
    },

    //获取导航栏及胶囊的高宽
    getNavRect() {
        return new Promise((resolve, reject) => {
            wx.getSystemInfo({
                success: res => {
                    let screenWidth = res.screenWidth

                    // 状态栏高度
                    let statusBarHeight = res.statusBarHeight;

                    let menuButtonRect = wx.getMenuButtonBoundingClientRect()
                    // 导航栏高度
                    let navigationBarHeight = (menuButtonRect.top - statusBarHeight) * 2 + menuButtonRect.height
                    let menuButtonWidth = menuButtonRect.width
                    let menuButtonHeight = menuButtonRect.height
                    let left = screenWidth - menuButtonWidth - menuButtonRect.left
                    let top = menuButtonRect.top
                    let rect = {
                        navigationBarHeight,
                        menuButtonWidth,
                        menuButtonHeight,
                        statusBarHeight,
                        left,
                        top
                    }
                    resolve(rect)
                }
            });
        })
    },
    // 监听页面滚动事件
    onPageScroll(e) {
        this.setData({
            title: e.scrollTop >= 118 ? '热门话题' : ''
        })
    },
    backIndex(){
        wx.navigateBack()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getNavRect().then(res => {
            this.setData({
                navigationBarHeight: res.navigationBarHeight,
                menuButtonWidth: res.menuButtonWidth,
                menuButtonHeight: res.menuButtonHeight,
                statusBarHeight: res.statusBarHeight,
                left: res.left,
                top: res.top
            })
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})