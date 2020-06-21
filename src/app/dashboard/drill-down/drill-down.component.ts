import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Colors, Color } from 'ng2-charts';

@Component({
  selector: 'app-drill-down',
  templateUrl: './drill-down.component.html',
  styleUrls: ['./drill-down.component.css']
})
export class DrillDownComponent implements OnInit {
  showLine =true;
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    
    
  };
  public chartLabels: Label[] = [['India'], ['Srilanka'], 'Pakisthan'];
  public chartData: any[] = [50, 250, 50];
  public chartType: ChartType = 'pie';
  public chartLegend = true;
  public pieChartPlugins = [];

 

chartClicked(e:any){
  console.log(e);

  let label = e.active[0]._model.label;
  console.log(label);
  this.showLine = !this.showLine;
  this.plotLineChart(label);
  }

 
       
  plotLineChart(cdata:any){
    
    this.chartType = 'bar'; 
    // let india = [
    //   {
    //   data: [
    //     { x: 10, y: 10, r: 10 },
    //     { x: 15, y: 5, r: 15 },
    //     { x: 26, y: 12, r: 23 },
    //     { x: 7, y: 8, r: 8 },
    //   ],
    //   label: 'Series A',           
    // }
    // ];
    let india = [
      { data: [40, 5, 5, 45, 56, 55, 40], label: ' srilanka' },   
    ];
    let srilanka = [
      { data: [40, 5, 5, 45, 56, 55, 40], label: ' srilanka' },   
    ];
    let china = [ 
      { data: [40, 5, 5, 45, 56, 55, 40], label: 'Series africa ' },   
    ];
 
    let data = null;
    if(cdata == "India"){
      data =india;
    }
    else{
  data =srilanka ;
    }
    this.chartData = data;
  this.chartLabels= [
    'kerala',
    'karnataka',
    'Tamilnadu',
    'Andrapradesh',
    'Delhi',
    'Maharashtra',
    'Rajasthan',
  
  ];
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
