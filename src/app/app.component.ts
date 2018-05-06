import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  //页面初始化，sayHello
  nzXs = 0;//默认左边栏宽度（4个栅格大小）
  nzMd = 0;
  nzXl = 0;
  helloText = `  您好，这是我的简历...
    接下来，启动一个命令行窗口:)`;
  //打印方式显示简历
  resume = '';
  private resumeText = `
  # 联系方式
  手机/微信/钉钉： 18864830605
  邮      箱：    liupeng328@aliyun.com
  QQ：           1029538990 (@qq.com)
  
  
  # 个人信息
  基本信息：    刘鹏/男/1994年/24岁
  专   业：    本科/软件工程专业
  工作年限：    3年
  Github：     https://github.com/liupeng328
  开源中国：    https://gitee.com/lovepeng
  博   客：    今日头条（大括号） / 简书（互联网编程） / 自建博客（https://lpeng.top）
  应聘职位：    架构师/高级程序员
  期望薪资：    30-35k（阿里除外）
  期望城市：    杭州（其实都行）
  
  
  # 工作经历
  倒序谈下最近做的几个项目：
  
  1.阅览室数据统计分析项目。
       原阅览室系统是一个全国的、公益性的项目，公众可以免费到阅览室上网（类似网吧管理系统），该系统是公司六年前开发的，目前运行在全国15个省市地区的阅览室和图书馆，系统运行多年，沉淀了大量数据，原系统的数据存储为阿里云rds（mysql版）和mongodb，现在rds查询速度缓慢，mongodb集群因自建长久没有维护（历史原因，当年编写此系统的人员都已经离职）也十分缓慢，随着数据的增长，无法满足实时的数据统计和简单分析，为了方便后期扩展，今年3月份开始重构这个项目。
  到现在为止，我帮公司搭建了hadoop为基础的hbase存储集群，已经完成千万级数据的存储和简单统计分析。我统一封装了数据库操作接口工具类，并增加了一个支持SQL的中间件，封装了hbase的复杂性，使其对开发人员友好，减少开发小组学习成本，可以使用Mybatis等常见ORM框架操作hbase数据集群，使数据存储和业务开发完全分离开。该项目为我总体设计，hbase集群也是我边学边踩坑搭建的，系统技术框架主要使用Hadoop，ZooKeeper，Hbase，Sqoop，Phoenix，Spring-boot，Mybatis（Mybatis-plus），druid，angular5，Ant Design (ng-zorro)，AntV(G2/G6/F2)，ECharts,目前项目正在开发中。
  
  2.公共文化云项目。
  这个是一个全国的，文化行业的项目，开发时间为2017年3月到现在，第一期同时开发的为5个省，目前山东、宁夏、吉林已经上线运行，还有2个省正在开发中。系统总体为文化资源的管理平台，各省之间略微有差异，涉及文章（博客），图片，视频，音频等多种资源的管理和统计分析，系统包括当下火热的直播、点播和文章（博客、新闻、动态）等多个模块，同时也支持线上活动和线下活动，涉及文化行业的方方面面。
     该系统开发时已经有一个老版本的系统（并未完全开发完毕），架构采用jFinal+Bootstarp+mysql开发，新系统为一个迭代升级用于替换老版系统，新系统从技术选型和总体设计由我完成，系统采用angular5.x+spring-boot+mysql+mongodb等一系列技术框架开发完成，是一个标准的前后端分离开发项目，说下项目开发中，我利用合适的技术帮公司解决的一些问题吧（也是国内很多公司存在的问题）：
    
    （1.）公司没有前端团队，所有的工作都由后台程序员完成
  后台程序员既编写后端也编写前端，同时还要设计数据库，大量时间浪费在页面修改、创作上，而且后端程序员多数美感不强，前端技术弱，难以实现美工的设计稿，经常一个页面改好多遍，效率低，团队痛苦。
  2017年8月份，前端组件化思想火热，谷歌的angular2.x版本发布一年左右，阿里的基于angular2的组件库zorro准备发布，我学习了下angular这个框架，帮助公司组建了前端开发团队。PC和手机web页面实现了统一技术栈，利用媒体自适应技术，一套代码，多屏显示，同时“前后台分离模式”使开发更加快速，功能迭代更加容易，问题解决。
  
    （2.）前端人员过多，android组、ios组，web网页组并行存在，重复工作多
  web网页端统一了开发技术，但是手机app端是个问题，android一个小组，ios一个小组，web网页开发一个小组，开发成本较高，软件迭代速度很慢。公司想把统一前端技术栈，然后我学习了ionic，帮助三个小组整合为一个小组，统一前端开发技术为angular，加快产品迭代速度，降低了开发成本。
  后由于小组多数成员ionic不熟悉，学习成本较高，而且ionic跨平台打包App费时费力。我们的app多以展示为主，功能较简单，于是我们借助apicloud开发平台，只使用angular技术编写页面，然后利用平台打包成不同的App。至此，实现了pc，app，h5的统一开发，大大节省了公司成本，问题解决。
  
    （3.）都喜欢写代码，没人愿意维护文档，文档经常修改是个难题
  前端开发统一后，项目都改为前后台分离开发，速度提升了很多，但是新的问题又来了，前后台分离开，后端接口维护文档费事费力，尤其接口经常改，文档就要跟随着经常改，开发者都喜欢写代码，没人愿意维护文档。在以前团队一直用“小妖鸡”作为文档管理工具，每次修改接口都要修改文档，费事费力且易出错。
  为了解决这个问题，我抽空写了一个Java版的api文档自动生成工具。工具扫描Java代码自动生成文档，开发者修改接口也就修改了文档，易于维护，节省了开发成本和时间成本，文档工具自带测试功能，带来了另一个意想不到的好处是规范了接口风格（RESTful）和代码风格，多人写出的代码如出一辙。目前该工具已经开源，在我的github可以看到。
  
    （4.）开发环境和发布环境不一致，每次发布都要修改，公司来新人第一天就是配置环境，费事费时费劲
  互联网公司，人员流动频繁，经常会有辞职和入职的人员，而每次有新成员入职，第一天一定是配置开发环境，每次都是，又繁琐又浪费时间。
  项目代码开发环境运行好好的，一到上线就出问题，开发环境（多为windows或mac）和发布环境（多为ctenos）不一致导致各种问题。
      我的解决方式是引入docker，利用docker搭建了一个公司的开发平台，使代码和开发环境完全分离开，开发机器只需装一个ide（集成开发环境，比如IDEA）即可。而且docker的使用，方便了测试团队随时跟进和切入，也为后期项目的持续化部署和集成提供了条件，问题解决。
  
  3.山东省和济南市安监局（全称：国家安全生产监督管理局）的安监系统。
  该系统主要是方便政府监督企业进行安全生产，方便企业进行自我隐患排查。系统主要围绕企业的“风险管控”和“隐患排查”两大关键展开（ “风险管控”和“隐患排查”都是国家标准关键词，还有很多不展开说了）。
      开发时间2016年9月到2017年4月，目前已经上线运行一年多，已成为山东省安监系统的标准，该项目采用angularJs1.x+ssm（spring/spring mvc/mybatis）+mysql+缓存ignite技术架构开发，缓存的增加主要是为了方便多机器部署，系统是跟深圳一家公司（没记错应该是“天维思 Skywares”）还有“浪潮”合作开发的。
  2016年正好是前端大变革（大混乱）的时候，各种前端技术层出不穷，比较幸运接触angularJs等一系列前端新技术，这个项目我从开始参与开发到最后参与系统设计，从开发到上线运行再到后来翻版给各个市使用，我都跟随开发维护，我从一个纯后台开发者慢慢转变为一个全栈开发者，是一个小菜鸟到合格开发者的蜕变过程。当时刚接触前端，用ng的指令封装了整个系统的搜索组件，封装ztree提供了一个tree的组件，封装了一个类似excel的变态表格Table（拖拽排序，合并单元格，动态显示/隐藏列，不同行号显示不同背景色等等），算是现在前端“组件化”的另类表现形式吧（虽然当时也不知道），当时的双向绑定确实比jQuary单向绑定方便了很多，尤其是大量表单的处理，2016年还是很时髦的技术，当然现在看来也不过了了，既然如此，那就不提了吧。


  # 技能清单
  主技能：    java 熟练掌握
  常用后端框架：  spring/spring-boot/mybatis/jfinal 熟练掌握
  数据库：    mysql/oracle/sql server 熟练掌握
  NoSQL:     redis/mongodb/hbase 熟练使用
  前端：      angular/html5/css/js 熟练掌握
  App:   ionic/android 熟练使用
  大数据相关：hadoop/hbase/hive/zookeeper/phoenix/sqoop 熟练使用
  常用集成开发工具： eclipse/intellij idea 熟练掌握
  常用版本控制工具： svn/git 熟练掌握
  容器技术:        docker 熟练使用
  常用项目管理工具： maven 熟练掌握
  操作系统：   windows/mac/centos/ubuntu 熟练使用
  
 
  # 致谢：
  感谢您花时间阅读我的简历，期待能有机会与您共事。
   
  # 最后，
  这样看着不舒服，下边我把github页面搬过来，做个简明的展示，如下：
  

  `;
  temp: string[];
  index = 0;
  timer;//计时器
  line = 0;//记录打印的行数
  bannerShow=false;//是否显示命令行头
  show=false;//是否显示github简版简历

  pre;//pre对象
  div1;//body对象
  prediv;//prediv对象

  //注入elementRef
  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit() { // 模板中的元素已创建完成
    this.pre = this.elementRef.nativeElement.querySelector('pre');
    this.div1 = this.elementRef.nativeElement.querySelector('#div1');
    this.prediv = this.elementRef.nativeElement.querySelector('#prediv');
    // console.dir(this.pre);
    // console.dir(this.div1);
  }

  ngOnInit(): void {
    this.temp = this.helloText.split('');
    // console.log(JSON.stringify(this.temp));
    this.timer = setInterval(() => this.sayHello(), 200);
  }

  /**
   *初始化，hello打招呼
   */
  private sayHello() {
    if (this.temp[this.index]) {
      this.resume += this.temp[this.index];
      this.index++;
    } else {
      clearInterval(this.timer);
      //设置左边div宽度
      this.nzXs = 1;
      this.nzMd = 4;
      this.nzXl = 8;
      //初始化数据
      this.index = 0;
      this.timer = null;
      this.resume = '';
      this.temp = null;
      setTimeout(() => {
        this.renderer.addClass(this.div1, 'div1');//半秒后初始化div1白色背景
        //300毫秒延时后设置 命令行弹窗样式
        setTimeout(() => {
          //显示命令行头
          this.bannerShow = true;
          //设置pre样式
          this.renderer.addClass(this.pre, 'pre1');
          //调用打印简历
          setTimeout(() => {
            this.temp = this.resumeText.split('');
            // console.log(JSON.stringify(this.temp));
            this.timer = setInterval(() => this.printing(), 40);
            //延时3秒 命令行下移30px
            setTimeout(()=>{
              this.renderer.addClass(this.prediv,'prediv');
            },3000);
          }, 400);
        }, 400);
      }, 500);
    }
  }

  /**
   *打印简历
   */
  private printing() {
    if (this.temp[this.index]) {
      if (this.temp[this.index] === '\n') {
        this.line++;
      }
      //打印到6行的时候，改变字体颜色
      if (this.line === 6) {
        this.renderer.addClass(this.pre, 'div2');
      }
      //打印到11行的时候，显示滚动条
      if (this.line === 17 ) {
        this.renderer.addClass(this.pre, 'div3');
      }
      if(this.line >20){
        //保持滚动条在最底部
        this.pre.scrollTop = this.pre.scrollHeight;
      }
      this.resume += this.temp[this.index];
      this.index++;
    } else {
      clearInterval(this.timer);
      //显示github的简历
      this.show = true;
    }
  }

}
