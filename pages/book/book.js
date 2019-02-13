// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      choose_name: '选择联系人',
      index: 0,
      range: [
        '广州番禺新街，李先生，电话：18788888888',
        '珠江新城，王先生，电话：18788888888',
        '体育西横街，李先生，电话：18788888888',
        '星汇园小区，李先生，电话：18788888888',
        '保利花园，李先生，电话：18788888888'
      ],
      date: '2018-12-11',
      time: "19:30",
      showToastBoll: true
    },
    nameChange: function(res){
      console.log(res.detail.value)
      this.setData({
        index: res.detail.value
      })
    },
    bindDateChange: function(res){
      console.log(res.detail.value)
      this.setData({
        date: res.detail.value
      })
    },
    bindTimeChange: function(res){
      console.log(res.detail.value)
      this.setData({
        time: res.detail.value
      })
    },
    bindToastTap: function(){
      this.setData({
        showToastBoll: false
      })
    },
    hideToast: function(){
      this.setData({
        showToastBoll: true
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    
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