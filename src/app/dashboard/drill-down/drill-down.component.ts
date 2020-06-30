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
  public chartLabels: Label[] = [['India'], ['Srilanka'], 'China'];
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
    let india = [
      { data: [3, 5, 5, 45, 56, 55, 40], label: ' india' },   
    ];
    let srilanka = [
      { data: [15, 25, 35, 45, 56, 65, 70], label: ' srilanka' },   
    ];
    let china = [ 
      { data: [55, 45, 35, 25, 16, 5, 10], label: ' china ' },   
    ];
    
    let chartLabelsIndia= [
      'kerala',
      'karnataka',
      'Tamilnadu',
      'Andrapradesh',
      'Delhi',
      'Maharashtra',
      'Rajasthan',
    
    ];
    let chartLabelsChina= [
      'Hubei',
      'Hainan',
      'Henan',
      'Sechuan',
      'Yunnan',
      'Fujjan',
      'Zhehjian',
    
    ];
    let chartLabelsSrilanka= [
      'Western Province.',
      'North Province.',
      'Eastern Province.',
      'South Western Province.',
      'Uva Province.',
      'Central Province.',
      'State provinance',
    
    ];
    
 
    let data = null;
    let label =null;

    if(cdata == "India"){
      label =chartLabelsIndia;
      data =india;
    }
     
  
    if(cdata =="China"){
      label = chartLabelsChina ;
      data = china;
    }
    else{
      if(cdata =="Srilanka"){
      label = chartLabelsSrilanka;
       data = srilanka ;
    }}
    this.chartData = data;
    this.chartLabels = label;
  
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
