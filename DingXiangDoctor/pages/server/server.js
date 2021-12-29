// pages/server/server.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        classes: ["儿科", "皮肤科", "妇科", "产科", "泌尿外科", "骨科", "消化内科", "口腔科"],
        current: 0,
        heights: [100],
        showMenu: false,
        pageHeight: 1000
    },
    // 滑动选项卡
    swiper(e) {
        let current = e.detail.current
        this.setData({
            current: current
        })
        this.getHeight()
    },
    // 切换选项卡
    changeBar(e) {
        let current = e.currentTarget.dataset.current
        this.setData({
            current: current
        })
        this.getHeight()
    },
    // 获取高度函数
    getHeight() {
        return new Promise((resolve, reject) => {
            const query = wx.createSelectorQuery()
            query.selectAll('.current-item').boundingClientRect();
            query.exec(res => {
                res = res[0].map(ele => ele.height)
                resolve(res)
            })
        })
    },

    // 菜单中点击选择
    selectClass(e) {
        let current = e.target.dataset.id
        this.setData({
            current: current,
            showMenu: false
        })
    },
    getPageHeight() {
        return new Promise((resolve, reject) => {
            const query = wx.createSelectorQuery()
            query.selectAll('.page').boundingClientRect().in(this)
            query.exec(res => {
                res = res[0][0].height
                resolve(res)
            })

        })
    },
    // 点击四个方块出现菜单
    showMore(e) {
        // 控制滚动
        wx.pageScrollTo({
            scrollTop: e.detail.y - 86, //e.currentTarget.offsetTop该元素纵向偏移量
            duration: 300
        })
        // 还需要动态获取整个页面的高度,设置遮罩层的高
        this.getPageHeight().then(res => {
            this.setData({
                pageHeight: res,
                showMenu: true
            })
        })
    },
    // 点击关闭菜单
    hideMenu() {
        this.setData({
            showMenu: false
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
    async onReady() {
        let heights = await this.getHeight();
        this.setData({
            heights
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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