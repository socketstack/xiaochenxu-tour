Page({
  data: {
    isshow:true
  },
  onLoad: function (options) {
    var that=this;
    wx.getUserInfo({
      success:function(res){
        var {avatarUrl,nickName}=res.userInfo;
        that.setData({
          avatarUrl,
          nickName,
          isshow:false
        })
      }
    })
  },
  bindGetUserInfo:function(e){
    var {avatarUrl,nickName}=e.detail.userInfo;
    this.setData({
      avatarUrl,
      nickName,
      isshow: false
    })
  },
  showtzhi:function(e){
    wx.navigateTo({
      url: './tzhi/tzhi'
    })
  },
  showabout:function(e){
    wx.navigateTo({
      url: './about/about',
    })
  },
  showyouhui:function(e){
    wx.navigateTo({
      url: './youhui/youhui',
    })
  }
})