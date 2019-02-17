import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        'Doors Closed',
        'Refused to Give',
        'Sagregated',
        'Not Sagregated'
    ];
 
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [65 ,34,53,67], label: 'Doors Closed' },
      
    


    ];

    // Doughnut
    public doughnutChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail-Order Sales'
    ];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string;

    // Radar
    public radarChartLabels: string[] = [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string;

    // Pie
    public pieChartLabels: string[] = [
        'Doors Closed',
        'Refused to Give',
        'Sagregated',
        'Not Sagregated'
    ];
    public pieChartData: number[] = [300, 500, 100,500];
    public pieChartType: string;

   
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean;

    public polarAreaChartType: string;

    // lineChart
   
    
    public lineChartLegend: boolean;
    public lineChartType: string;

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

   

    constructor() {}

    ngOnInit() {
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.doughnutChartType = 'doughnut';
        this.radarChartType = 'radar';
        this.pieChartType = 'pie';
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
}
