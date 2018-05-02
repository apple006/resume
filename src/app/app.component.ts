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
  手机/微信/钉钉：   18864830605
  邮        箱：  liupeng328@aliyun.com
  QQ（QQ邮箱）:    1029538990 (@qq.com)
  
  
  # 个人信息
  基本信息：    刘鹏/男/1994年/24岁
  专   业：    本科/软件工程专业
  工作年限：    3年
  Github：    https://github.com/liupeng328
  开源中国：    https://gitee.com/lovepeng
  博   客：  今日头条 / 简书 / 自建博客
  期望薪资：    30-35k（阿里除外）
  期望城市：    杭州（其实都行）
  
  
  # 工作经历
    大三下学期
  
  
  # 技能清单
  主  技   能：  java 熟练掌握
  常用后端框架：  spring/springboot/mybatis/jfinal 熟练掌握
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
      if (this.line === 12) {
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
