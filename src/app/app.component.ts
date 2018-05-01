import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  resume = '';
  text = `测试测
  测试测
  测试测
  
  测试测测试测测试测测试测
  `;
  temp: string[];
  index = 0;

  ngOnInit(): void {
    this.temp = this.text.split('');
    console.log(JSON.stringify(this.temp));
    setInterval(()=>this.printing(), 300);
  }

  /**
   *
   */
  private printing() {
    this.resume += this.temp[this.index];
    this.index++;
  }

}
