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
  手机/微信/钉钉：  18864830605
  邮        箱：   liupeng328@aliyun.com
  QQ （QQ邮箱）：   1029538990 (@qq.com)
  
  
  # 个人信息
  基本信息：    刘鹏/男/1994年/24岁
  专   业：    本科/软件工程专业
  工作年限：    3年
  Github：     https://github.com/liupeng328
  开源中国：    https://gitee.com/lovepeng
  博   客：    今日头条 / 简书 / 自建博客
  应聘职位：    架构师/高级程序员
  期望薪资：    30-35k（阿里除外）
  期望城市：    杭州（其实都行）
  
  
  # 工作经历
    谈下最近做的几个项目：
    
    1.山东省和济南市安监局（全称：国家安全生产监督管理局）的安监系统。主要是方便政府监督企业进行安全生产，统计企业的“风险点”和“危险源”，
    开发时间2016年9月到2017年4月，目前已经上线运行一年多，已成为山东省安监系统的标准，该项目采用angularjs1.x+ssm（spring/spring mvc/mybatis）+mysql+缓存ignite技术架构开发，2016年正好是前端大变革的时候，
    各种前端技术层出不穷，比较幸运接触了angularjs等一系列前端新技术，这个项目我从开始参与开发到最后参与系统设计，我从一个纯后台开发者慢慢转变为
    一个全栈开发者。
    
    2.公共文化云项目，这个是一个全国的，文化行业的项目，开发时间为2017年3月到2018年4月，目前山东、宁夏、吉林已经上线运行，还有2个省正在开发中，
    目前一期同时开发的为5个省，系统总体为文化资源的管理平台，涉及文章，图片，视频，音频等多种资源的管理和统计，系统包括直播、点播和文章等多个模块。
    系统采用angular5.x+spring-boot等一系列技术框架开发完成。
      该项目开发中，我利用合适技术帮助公司解决了以下问题（也是国内很多公司存在的共性问题）：
      （1.）首先公司没有前端团队，2017年4月份，前端组件化思想火热，谷歌的angular2.x版本发布一年左右，阿里的基于angular2的组件库zorro准备发布，
      我深入学习了angular这个框架，帮助公司组建了前端开发团队。pc和手机web页面实现了统一技术栈，快速开发。
      （2.）web端统一了开发技术，但是手机app端，android一个小组，ios一个小组，开发进度缓慢，开发成本较高，软件迭代速度很慢，而且mac和苹果手机/安卓手机等硬件支持成本较高，
      公司想把统一前端技术栈，然后我学习了ionic，帮助三个小组整合为一个小组，统一前端开发技术为angular，加快产品迭代速度，降低了开发成本。后由于小组成员
      ionic不熟悉，学习成本较高，且我们的app多以展示为主，功能较简单，于是改为apicloud技术开发，至此，实现了pc，app，h5的统一开发，大大节省了公司成本。
      （3.）前端开发统一后，项目都改为前后台分离开发，速度提升了很多，但是新的问题又来了，前后台分离开，后端接口维护文档费事费力，尤其是接口经常改
      文档就要跟随着经常改，我参与一起团队一直用“小妖鸡”作为文档管理工具，每次修改接口都要修改文档，费事费力且易出错，于是我写了一个Java版的api文档
      自动生成工具，文档根据代码自动生成，易于维护也节省了公司开发成本和时间成本，目前该工具已经开源，在我的github可以看到。
      （4.）互联网公司，人员流动频繁，经常会有辞职和入职的人员，而每次有新成员入职，第一天一定是配置开发环境，每次都是，又繁琐又浪费时间，
      于是我利用docker搭建了一个公司的开发平台，使代码和开发环境完全分离开，开发机器只需装一个ide（集成开发环境）即可。而且docker的使用，方便
      了测试团队随时跟进和切入，也为后期项目的持续化部署和集成提供了条件。
      
    3.阅览室项目数据统计分析。阅览室项目是一个全国性的项目，公司六年前开发的系统，目前运行在全国15个省市地区，主要是提供一个类似网吧，供市民
    免费上网的服务，主体是国家各个地区的阅览室/图书馆。该系统运行多年，沉淀了大量数据，原有的数据库为阿里云rds和mongodb，rds查询速度缓慢，
    mongodb集群因自建长久没有维护也十分缓慢，于是我帮公司搭建了hadoop为基础的hbase集群，进行大数据的存储和简单统计分析。改项目目前正在开发中。
   
  
  # 技能清单
  主  技   能：  java 熟练掌握
  常用后端框架：  spring/spring-boot/mybatis/jfinal 熟练掌握
  数  据   库：  mysql/oracle/sql server 熟练掌握
  NoSQL     :   redis/mongodb/hbase 熟练使用
  前       端：  angular/html5/css/js 熟练掌握
  App       :   ionic/android 熟练使用
  大数据相关  ：    hadoop/hbase/hive/zookeeper/phoenix/sqoop 熟练使用
  常用集成开发工具： eclipse/intellij idea 熟练掌握
  常用版本控制工具： svn/git 熟练掌握
  容器技术:       docker 熟练使用
  常用项目管理工具： maven 熟练掌握
  操作系统：   windows/mac/centos/ubuntu 熟练使用
  
  
  # 最后，致谢：
    感谢您花时间阅读我的简历，期待能有机会与您共事。
  `;
  temp: string[];
  index = 0;
  timer;//计时器
  line = 0;//记录打印的行数

  pre;//pre对象
  div1;//body对象

  //注入elementRef
  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit() { // 模板中的元素已创建完成
    this.pre = this.elementRef.nativeElement.querySelector('pre');
    this.div1 = this.elementRef.nativeElement.querySelector('#div1');
    console.dir(this.pre);
    console.dir(this.div1);
  }

  ngOnInit(): void {
    this.temp = this.helloText.split('');
    console.log(JSON.stringify(this.temp));
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
      //初始化div酷黑样式
      setTimeout(() => {
        this.renderer.addClass(this.div1, 'div1');
        //300毫秒延时后设置 命令行弹窗样式
        setTimeout(() => {
          //设置pre样式
          this.renderer.addClass(this.pre, 'pre1');
          //调用打印简历
          setTimeout(() => {
            this.temp = this.resumeText.split('');
            console.log(JSON.stringify(this.temp));
            this.timer = setInterval(() => this.printing(), 60);
          }, 400);
        }, 400);
      }, 400);
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
      //打印到6行的时候，命令行下移50px
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
    }
  }

}
