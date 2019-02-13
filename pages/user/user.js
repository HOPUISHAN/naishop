// user.js
var app = getApp()
Page({
    // 页面初始数据
    data: {
        userInfo: {}
    },

    // 生命周期函数--监听页面加载
    onLoad: function(options){
        var that = this
        // 调用一下
        app.getUserInfo(function(userInfo){
            that.setData({
                userInfo: userInfo
            })
        })
    },
    map_btn: function(){
        wx.getLocation({
            type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
            success: function(res){
                // success
                console.log(res)
                var longitude = res.longitude;
                var latitude = res.latitude
                wx.openLocation({
                    latitude: latitude, // 纬度，范围为-90~90，负数表示南纬
                    longitude: longitude, // 经度，范围为-180~180，负数表示西经
                    scale: 28, // 缩放比例
                    // name: 'name', // 位置名
                    // address: 'address', // 地址的详细说明
                    success: function(res){
                        // success
                    },
                    fail: function() {
                        // fail
                    },
                    complete: function() {
                        // complete
                    }
                })
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
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