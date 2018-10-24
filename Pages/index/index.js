var status = true;
var ispayhotel=true;
var index=0;
Page({
  data: {
    slider:[
      {
        picUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3508419348,887768080&fm=26&gp=0.jpg"
      },
      {
        picUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540035034924&di=d684024b24183d80a48212734559218a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F5d6034a85edf8db1d1ab336e0323dd54564e7436.jpg"
      },
      {
        picUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540035434288&di=b2fde0645444711fb3f224faea372699&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1011%2F22%2Fc9%2F5957498_5957498_1290433971671_mthumb.jpg"
      },
      {
        picUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540035680277&di=e2c73e65c6b1a109281129013784e89b&imgtype=0&src=http%3A%2F%2Fwww.huiyike.com%2Fattachments%2Fimage%2F20140417%2F20140417021336_83218.jpg"
      }
      ],
    searchinput: "搜索景点/路线/美食/酒店",
    tourlist:[
        {
          id:1,
          title:"沙面",
        content:"一个历史韵味丰富、极富异国情调、风光旖旎的地方。",
        imgurl:"https://p2-q.mafengwo.net/s10/M00/A0/51/wKgBZ1m1GOaARk_EADxTppCJcxM97.jpeg?imageMogr2%2Fthumbnail%2F%21380x270r%2Fgravity%2FCenter%2Fcrop%2F%21380x270%2Fquality%2F100"
        },
        {
          id: 1,
          title: "广州塔",
          content: "中国国内第一高塔，不仅有着变换的色彩，还可展现出动人的空中交响乐。",
          imgurl: "https://n4-q.mafengwo.net/s11/M00/12/6A/wKgBEFtX21GAEPF1ABK17TiALOU99.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL2I0LXEubWFmZW5nd28ubmV0L3MxMS9NMDAvNDQvOUIvd0tnQkVGc1A1UnlBRHY3cEFBQUhaWlVQUmxROTkwLnBuZw%3D%3D%2Fgravity%2FSouthEast%2Fdx%2F10%2Fdy%2F11"
        },
        {
          id: 1,
          title: "陈家祠",
          content: "广东现存规模最大、保存最完整、装饰最精美的古代艺术建筑。",
          imgurl: "https://n2-q.mafengwo.net/s6/M00/67/52/wKgB4lMpk-KAdZgcAAUpgfKn-Y059.jpeg?imageMogr2%2Fthumbnail%2F%21380x270r%2Fgravity%2FCenter%2Fcrop%2F%21380x270%2Fquality%2F100"
        },
        {
          id: 1,
          title: "白云山",
          content: "南粤名山之一，被称为羊城第一秀、南越第一山。",
          imgurl: "https://n3-q.mafengwo.net/s5/M00/A7/DF/wKgB3FDGliOAbIEEACtJlr0zHzE05.jpeg?imageMogr2%2Fthumbnail%2F%21380x270r%2Fgravity%2FCenter%2Fcrop%2F%21380x270%2Fquality%2F100"
        },
        {
          id: 1,
          title: "越秀公园",
          content: "越秀公园是广州最大的公园，里面自然风光优美，适合散步和锻炼身体。",
          imgurl: "https://p3-q.mafengwo.net/s7/M00/C8/5C/wKgB6lR5o4KAc7l-AEk0iSpwfGg16.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100"
        },
        {
          id: 1,
          title: "红专厂创意园",
          content: "红专厂创意园是广州第一家非房地产包装的真正意义创意区，类似于北京的798艺术区。",
          imgurl: "https://n3-q.mafengwo.net/s7/M00/C0/B2/wKgB6lR5l6mABglmAD5ONUIG7c885.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100"
        },
        {
          id: 1,
          title: "岭南印象园",
          content: "岭南印象园位于广州大学城所在的小谷围岛南部，国家4A级旅游景区，连续三年被旅游行业评为最具吸引力文化旅游景区。",
          imgurl: "https://b3-q.mafengwo.net/s5/M00/B5/37/wKgB3FEsZt6AaeAdAARfi3uw2CU10.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100"
        },
        {
          id: 1,
          title: "莲花山旅游区",
          content: "原名“石狮头”，由48座红色砂岩低山组成，海拔最高为108米，因其破赋峰的峰顶上有一块酷似莲花的岩石而得名。",
          imgurl: "https://n4-q.mafengwo.net/s6/M00/20/C6/wKgB4lMC9L2AQ78tAAMu4T8Vkng23.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100"
        },
        {
          id: 1,
          title: "长隆野生动物世界",
          content: "长隆野生动物世界以大规模野生动物种群放养和自驾车观赏为特色，是电影《爸爸去哪儿》的拍摄地。",
          imgurl: "https://dimg11.c-ctrip.com/images/fd/tg/g2/M0B/87/74/CghzgVWwsRqAHjanAEDw5eNgAeA138_C_350_230.jpg"
        },
        {
          id: 1,
          title: "上下九步行街",
          content: "步行街长800余米，可以看到岭南风情的骑楼建筑，这里相当于上海的南京路、人们来此吃饭逛街，感受广东老街热闹的景象。",
          imgurl: "https://dimg03.c-ctrip.com/images/100f0h0000008rag19DC4_C_350_230.jpg"
        },
        {
          id: 1,
          title: "百万葵园",
          content: "百万葵园引进了诸多先进的游乐设施，辟有“吊链吧”、“飞吧”、“瑶寨吧”等数十个供游客挑战的娱乐项目，很适合带孩子来玩。",
          imgurl: "https://dimg04.c-ctrip.com/images/fd/tg/g3/M05/FB/F4/CggYGlXdWIKACN4lABrJ5x4PHzw184_C_350_230.jpg"
        },
        {
          id: 1,
          title: "中国科学院华南植物园",
          content: "华南植物园是全国三大植物园之一，庞大的园地规模以及许多罕见的植物种类也使其成为“广州市十佳旅游景点”之一。",
          imgurl: "https://dimg16.c-ctrip.com/images/100o0b0000005q7o23314_C_350_230.jpg"
        },
        {
          id: 1,
          title: "白水寨风景名胜区",
          content: "白水寨是广州增城的一个重要游山点，这里树木茂盛、空气清新，有9999级石阶的登山步径，可以来此爬山，登高望远。",
          imgurl: "https://dimg07.c-ctrip.com/images/100f0q000000g1k00DDF6_C_350_230.jpg"
        },
        {
          id: 1,
          title: "中山大学",
          content: "中山大学由由孙中山先生创办，堪称中国最美的大学之一。",
          imgurl: "https://dimg08.c-ctrip.com/images/100p070000002i7iwC174_C_350_230.jpg"
        },
        {
          id: 1,
          title: "广东省博物馆",
          content: "广东省博物馆于1957年开始筹建，1959年10月1日，广东省博物馆及其所辖的广州鲁迅纪念馆正式对外开放。",
          imgurl: "https://dimg02.c-ctrip.com/images/1003050000000pwagEDEC_C_350_230.jpg"
        },
        {
          id: 1,
          title: "广州图书馆",
          content: "广州图书馆新馆坐落于珠江边上、广州城市新中轴线和珠江景观轴线交汇处的花城广场。",
          imgurl: "https://dimg02.c-ctrip.com/images/100f0e00000075ltwEC04_C_350_230.jpg"
        },
        {
          id: 1,
          title: "太古仓",
          content: "太古仓码头位于海珠区的革新路，是太古洋行在20世纪初所修建的较为完善的仓储码头，是近代十三行文化的代表。",
          imgurl: "https://dimg03.c-ctrip.com/images/fd/tg/g3/M08/02/EA/CggYGVXdVkmAFFKtABJpQebr2ac883_C_350_230.jpg"
        },
        {
          id: 1,
          title: "六榕寺",
          content: "寺内有巍峨的千佛宝塔，是广州有名的古代高层建筑。",
          imgurl: "https://dimg07.c-ctrip.com/images/10030b00000057j2mCE59_C_350_230.jpg"
        },
        {
          id: 1,
          title: "花都香草世界",
          content: "花都香草世界位于花都区的花山镇，离广州白云国际机场约10分钟车程，是国内少见的以香草为主题的公园。",
          imgurl: "https://dimg07.c-ctrip.com/images/100k0r000000hh0lq879F_C_350_230.jpg"
        },
        {
          id: 1,
          title: "黄埔古港遗址",
          content: "曾经海上丝绸之路重要港口，著名的仿古商船瑞典哥德堡号曾经在此停留。",
          imgurl: "https://dimg09.c-ctrip.com/images/10030b0000005o5z2933C_C_350_230.jpg"
        },
        {
          id: 1,
          title: "麓湖公园",
          content: "白云山脚下的人工湖，景色优美，是休闲放松的好地方，游艇、高尔夫球场等娱乐设施。",
          imgurl: "https://dimg07.c-ctrip.com/images/100q0b00000057iw32034_C_350_230.jpg"
        },
        {
          id: 1,
          title: "MAG环球魔幻世界",
          content: "创意十足带有魔幻风格的室内主题乐园，带来视觉上的震撼，还能玩刺激的机动游戏。",
          imgurl: "https://dimg04.c-ctrip.com/images/100l0h00000092nznB632_C_350_230.jpg"
        },
        {
          id: 1,
          title: "海珠湖公园",
          content: "中心城区最大的人工湖，景色优美，骑单车兜兜风或坐船都很惬意。",
          imgurl: "https://dimg12.c-ctrip.com/images/100h0f0000007fxfnE890_C_350_230.jpg"
        },
        {
          id: 1,
          title: "香雪公园",
          content: "羊城八景中“萝岗香雪”的所在地，每年梅花节时期繁花如雪，园内还有很多古迹。",
          imgurl: "https://dimg02.c-ctrip.com/images/100s0m000000dus7c0EA6_C_350_230.jpg"
        },
        {
          id: 1,
          title: "兰圃",
          content: "整个环境呈现江南园林的风格，空气间弥漫着兰香，漫步其间，很是舒适。",
          imgurl: "https://dimg09.c-ctrip.com/images/fd/tg/g1/M01/EC/D0/CghzfFTsfu2AbY1nAAG_WHgL-tI658_C_350_230.jpg"
        },
        {
          id: 1,
          title: "南沙湿地",
          content: "坐船体会独特的湿地景观，成片的红树林、芦苇荡、水边栖息的候鸟。",
          imgurl: "https://dimg07.c-ctrip.com/images/100u0b0000005jgi4661D_C_350_230.jpg"
        },
        {
          id: 1,
          title: "大夫山森林公园",
          content: "可以烧烤和骑单车的免费休闲公园，环境和空气都非常好。",
          imgurl: "https://dimg06.c-ctrip.com/images/fd/tg/g6/M06/8E/C3/CggYtFbACtiAAROMAC3JvL6JlmM040_C_350_230.jpg"
        },
      {
        id: 1,
        title: "莲花山旅游区",
        content: "新羊城八景之一“莲峰观海”，望海观音香火旺盛，春天可以赏桃花，夏天可以赏莲花、吃莲花宴。",
        imgurl: "https://dimg09.c-ctrip.com/images/10010m000000dya7oA55B_C_350_230.jpg"
      },
      {
        id: 1,
        title: "荔枝湾涌",
        content: "体会岭南水乡风情，坐上摇橹船，看两岸西关大屋式的建筑。",
        imgurl: "https://dimg14.c-ctrip.com/images/100l050000000pwro7BC9_C_350_230.jpg"
      },
      {
        id: 1,
        title: "南沙天后宫",
        content: "香火特别旺盛，是东南亚最大的妈祖庙，可以祈福，祭拜天后娘娘。",
        imgurl: "https://dimg09.c-ctrip.com/images/tg/454/492/390/f7edf67884954bb08fa4e47d3fa8c7e8_C_350_230.jpg"
      },
      {
        id: 1,
        title: "正佳极地海洋世界",
        content: "超大型的水族展示缸和360度海底隧道，还能看到萌萌的企鹅和北极熊。",
        imgurl: "https://dimg08.c-ctrip.com/images/100b0h000000921phD6ED_C_350_230.jpg"
      },
      {
        id: 1,
        title: "珠江新城",
        content: "广州的新城市中心，现代广州的象征，欣赏广州夜景的好地方。",
        imgurl: "https://dimg03.c-ctrip.com/images/fd/tg/g3/M04/FB/84/CggYGlXdUAGAV4mgABDEuBQAspc480_C_350_230.jpg"
      },
      {
        id: 1,
        title: "云台花园",
        content: "大型的西式花园，还有上百种玫瑰的玫瑰园，是春天赏花、中秋赏灯的好去处。",
        imgurl: "https://dimg10.c-ctrip.com/images/1003050000000vkmlE7DE_C_350_230.jpg"
      },
      {
        id: 1,
        title: "天河公园",
        content: "天河区的大型公园，可以游岭南园林粤晖园，景色优美，邓世昌衣冠冢也在这里。",
        imgurl: "https://dimg03.c-ctrip.com/images/100c0e000000768lq9814_C_350_230.jpg"
      },
      {
        id: 1,
        title: "暨南大学",
        content: "国内第一所华侨学府，校园内充满了书卷气息与南国景色。",
        imgurl: "https://dimg08.c-ctrip.com/images/100c0b00000057isl3B2E_C_350_230.jpg"
      },
      {
        id: 1,
        title: "石门国家森林公园赏花",
        content: "几乎四季都有花海可以赏，有广东地区难得的油菜花海，还有梅花、桃花、杜鹃花、荷花等美不胜收。",
        imgurl: "https://dimg12.c-ctrip.com/images/1002090000003u6i2623F_C_350_230.jpg"
      },
      ],
    hotellist:[],
    routelist:[],
    foodlist:[],
    menuTapCurrent:0,//默认显示菜单的攻略
    start:1,//默认请求一星级酒店
    page:1,//默认请求一页数据
    stat:0,//假数据截取开始位置
    status:status,
    tour:[],

  },
  //点击搜索栏置空
  focus:function(e){
    this.setData({
      searchinput:""
    })
  },
  blur:function(e){
    this.setData({
      searchinput:"搜索景点/路线/美食/酒店"
    })
  },
  //点击实现选项卡功能
  menuTap:function(e){
    // console.log(e);
    var current=e.currentTarget.dataset.current;
    if (current == 2) {
      //调用路线数据函数
      this.requsetroute();
    }
    else if(current==1){
      //调用酒店数据函数
      this.requesthotel();
    }
    else if(current==3){
      //调用美食数据函数
      this.requestfood();
    }
    this.setData({
      menuTapCurrent:current
    })
  },
  onLoad: function (options) {
    var that = this;

    var l = that.data.tourlist;
    var Arr = [];
    for(var n =0;n<l.length;n+=9)
    {
      var arr = l.slice(n,n+9);
      Arr.push(arr);
    }
    this.setData({
      Alllist:Arr,
      tourlist:Arr[0]
    })
  },
  // // 请求攻略数据
  // requesttour: function () {
  //  wx.request({
  //    url: `${that.data.tourlist}`,
  //    success: function (res) {
  //      console.log(res);
  //      that.setData({
  //        tourlist: that.data.tourlist
  //      })
  //    }
  //  })
  // },
  // 请求美食数据
  requestfood:function(){
    //刷新信息
    wx.showLoading({
      title: "正在加载中……"
    })
    var that=this;
    wx.request({
      url: 'https://gz.meituan.com/meishi/api/poi/getPoiList?cityName=%E5%B9%BF%E5%B7%9E&cateId=0&areaId=0&sort=&dinnerCountAttrId=&page='+that.data.page+'&userId=&uuid=5ca45af9a0954cd8ad9d.1540341550.1.0.0&platform=1&partner=126&originUrl=https%3A%2F%2Fgz.meituan.com%2Fmeishi%2F&riskLevel=1&optimusCode=1&_token=eJx1j81ugkAUhd9lthK5AzqCSReoSCkUAa2mbVxYHH4VBUZAmr57x9Quumhyk%2FPNuScndz5Rae7RGAOoAAKqaYnGCPehT5CAWMU3wwHIQ5BlCUaKgIK%2FniypAvoo1zM0fscyAUHCo%2B3N8bnx44yIshXuKHGUBnxuGZNHUMzYuRqLYtT1jzRhl13eD05HkXMVJyK%2F4Z8A4g3HFW%2Fgmt11d1f2%2B37mf%2BEVVRLlnOhTc0hXuNA63fMvYuIV601yCGIDT2IWnfR9l2vVpKhj0vYME6bKZn5N37TiLOqqPQ33g57b1jE0TVY3fgJRT1OyHKhJLEWs1bC225fTE%2FWG7Oo96pQsrtnLiaVlHjmk6Gx%2FSS%2Buk8PaCn1iqDszzVLfpNWhJfPOdaxoSlSoG8ey5XSgFKU1yWf2o5u6axWHSmPhrlu2lL2exT3BvmKQCQTzs5YuhoF3cHVrF5V%2B7YTlamFsJAybN1kjH8ulHj2gr2%2FnNJKf',
      success:function(res){
        // console.log(res.data.data.poiInfos);
        that.setData({
          foodlist: that.data.foodlist.concat(res.data.data.poiInfos)
        })
        wx.hideLoading();
      }
    })
  },
  requsetroute:function(){
    //请求路线数据
    var that = this;
    wx.request({
      url: 'https://travel.qunar.com/travelbook/note/6869325/images.json?type=allView',
      success: function (res) {
        // console.log(res.data.data.imageList.slice(1, 11));
        that.setData({
          routelist: res.data.data.imageList.slice(1, 11)
        })
        var a = [];
        for (var i = 0; i < that.data.routelist.length; i++) {
          a.push(that.data.routelist[i].elements);
        }
        that.setData({
          ii: a
        })
        wx.hideLoading();
        // console.log(that.data.ii);
        // console.log(a[0][0].images[0].bigImageURL); //图片
        // console.log(a[0][0].memo); //图片
      }
    })
  },
  requesthotel:function(){
    //刷新信息
      wx.showLoading({
        title: "正在加载中……"
      })
    var that = this;
    //请求酒店数据
    wx.request({
      url: "https://hotels.ctrip.com/Domestic/tool/AjaxGetCPTList.ashx?advpositioncode=HTL_LST_001,HTL_LST_002,HTL_LST_004&city=32&checkin=2018-10-22&checkout=2018-10-23&star=" +that.data.start,
      success: function (res) {
        // console.log(res.data.advertisingqualityhotels);
        that.setData({
          hotellist: that.data.hotellist.concat(res.data.advertisingqualityhotels)
        })
        wx.hideLoading();
      }
    })
  },
  toastShow:function(event){
    status = false;
    this.setData({
      status: status 
    })
  },
  toastHide: function (event) {
    // console.log("触发bindchange，隐藏toast")
    status = true;
    this.setData({
       status: status 
    })
  },
  showtip:function(){
    var that=this;
    wx.showModal({
      title: '预定提示',
      content: '确定预定酒店?',
      cancelText:'不了不了',
      confirmText:'就是你了',
      success:function(res){
        if(res.cancel){
          
        }
        if(res.confirm){
          
        }
      }
    })
  },
  /**
* 页面相关事件处理函数--监听用户下拉动作
*/
  lower: function () {
    var that=this;
    this.setData({
      start:this.data.start+1,
      page:this.data.page+1,
    })
    console.log(that.data.tourlist)
    this.requesthotel();
    this.requestfood();
    index++;
    if(index>this.data.Alllist.length-1)
    {
      return
    } 

    this.setData({
      tourlist: this.data.tourlist.concat(this.data.Alllist[index])
    })

  }
})
