//轮播图的数据图片
function getBannerData(){
    var arr=[
        'https://p3.pstatp.com/large/43700001e49d85d3ab52',
        'https://p3.pstatp.com/large/39f600038907bf3b9c96',
        'https://p3.pstatp.com/large/31fa0003ed7228adf421',
    ]
    return arr
}
//导航数据
function getIndexNavData() {
    var arr = [
        {
            id:1,
            icon:'../../images/nav_icon_01.png',
            title:'推存'
          },
          {
            id: 2,
            icon: '../../images/nav_icon_02.png',
            title: '美甲'
          },
          {
            id: 3,
            icon: '../../images/nav_icon_03.png',
            title: '美容'
          },
          {
            id: 4,
            icon: '../../images/nav_icon_04.png',
            title: '美发'
          },
          {
            id: 5,
            icon: '../../images/nav_icon_05.png',
            title: '美睫'
          }
    ]
    return arr
}
//list
function getIndexNavSectionData() {
    var arr = [
    [
        {

            subject: "睫毛稀疏 种睫毛来帮忙",
            civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027592793&di=101339d7cbaf94ea2e6097ba24d6fc0b&imgtype=0&src=http%3A%2F%2Fwww.xiaohei.com%2Fd%2Ffile%2Fxiaochengxu%2Fsuoluetu%2F2018-07-02%2F2018-07-02%2F4samvpjhtjr_11848.png",
            price: "￥100",
            message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'
    
          },
    
          {
    
            subject: "爱丽克EircParisSalon",
            civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027592793&di=101339d7cbaf94ea2e6097ba24d6fc0b&imgtype=0&src=http%3A%2F%2Fwww.xiaohei.com%2Fd%2Ffile%2Fxiaochengxu%2Fsuoluetu%2F2018-07-02%2F2018-07-02%2F4samvpjhtjr_11848.png",
            price: "￥1150",
            message: '的PaaS云服务.七牛存储 七牛云为企业提供对象存储服'
    
          },
    
          {
    
            subject: "伊本造型",
            civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
            price: "￥1047",
            message: '伊本造型是由著名形象设计师杨进先生创办。'
    
          },
          {
    
            subject: "秋季自然特价美甲",
            civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
            price: "￥187",
            message: '我们最求得是没有最长的时间特价'
    
          },
    
          {
    
            subject: "画对了妆，微微一笑颜值倍儿高！",
            civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
            price: "￥87",
            message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'
    
          }
    ],
    [
        {

            subject: "秋季自然特价美甲",
            civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
            price: "￥187",
            message: '我们最求得是没有最长的时间特价'
    
          },
    
          {
    
            subject: "睫毛稀疏 种睫毛来帮忙",
            civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
            price: "￥100",
            message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'
    
          },
    
          {
    
            subject: "爱丽克EircParisSalon",
            civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027592793&di=101339d7cbaf94ea2e6097ba24d6fc0b&imgtype=0&src=http%3A%2F%2Fwww.xiaohei.com%2Fd%2Ffile%2Fxiaochengxu%2Fsuoluetu%2F2018-07-02%2F2018-07-02%2F4samvpjhtjr_11848.png",
            price: "￥1150",
            message: '的PaaS云服务.七牛存储 七牛云为企业提供对象存储服'
    
          },
          {
    
            subject: "画对了妆，微微一笑颜值倍儿高！",
            civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
            price: "￥87",
            message: '《微微一笑很倾城》的剧照简直美腻到不要不要的'
    
          }
    ],
    [
        {
  
          subject: "秋季自然特价美甲",
          civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
          price: "￥187",
          message: '我们最求得是没有最长的时间特价'
  
        },
  
        {
  
          subject: "睫毛稀疏 种睫毛来帮忙",
          civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
          price: "￥100",
          message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'
  
        },
  
        {
  
          subject: "爱丽克EircParisSalon",
          civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027592793&di=101339d7cbaf94ea2e6097ba24d6fc0b&imgtype=0&src=http%3A%2F%2Fwww.xiaohei.com%2Fd%2Ffile%2Fxiaochengxu%2Fsuoluetu%2F2018-07-02%2F2018-07-02%2F4samvpjhtjr_11848.png",
          price: "￥1150",
          message: '的PaaS云服务.为企业提供对象存储服'
  
        }
  
      ],
      [
        {
  
          subject: "秋季自然特价美甲",
          civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
          price: "￥187",
          message: '我们最求得是没有最长的时间特价'
  
        },
  
        {
  
          subject: "睫毛稀疏 种睫毛来帮忙",
          civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
          price: "￥100",
          message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'
  
        }
  
      ],
      [
        {
  
          subject: "睫毛稀疏 种睫毛来帮忙",
          civerpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
          price: "￥100",
          message: '先的企业级云服务商,致力于打造以数据为核心的场景化 PaaS服务'
  
        }
    ]
  ]
return arr
}

// 技师
function getSkillData(){

    var arr=[
      {
        company:"广州美容美发有限公司",
        avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
        nickname:'张技师',
        price:"￥500",
        message:"从事美发行有40余年，有丰富的经验,淑娴上手",
      },
      {
        company: "广州美容美发有限公司",
        avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
        nickname: '张技师',
        price: "￥500",
        message: "从事美发行有40余年，有丰富的经验,淑娴上手",
      },
      {
        company: "广州美容美发有限公司",
        avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
        nickname: '张技师',
        price: "￥500",
        message: "从事美发行有40余年，有丰富的经验,淑娴上手",
      },
      {
        company: "广州美容美发有限公司",
        avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
        nickname: '张技师',
        price: "￥500",
        message: "从事美发行有40余年，有丰富的经验,淑娴上手",
      },
      {
        company: "广州美容美发有限公司",
        avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
        nickname: '张技师',
        price: "￥500",
        message: "从事美发行有40余年，有丰富的经验,淑娴上手",
      },
      {
        company: "广州美容美发有限公司",
        avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549027687915&di=1aa992243bfae4be5893d8cf13a4d229&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fpcdlc%2F1708%2F14%2Fc99%2F55612289_1502698820806.jpg",
        nickname: '张技师',
        price: "￥500",
        message: "从事美发行有40余年，有丰富的经验,淑娴上手",
      }
  
    ]
    return arr
}

  //暴露接口
  module.exports = {
      getBannerData: getBannerData,
      getIndexNavData: getIndexNavData,
      getIndexNavSectionData: getIndexNavSectionData,
      getSkillData: getSkillData
  }