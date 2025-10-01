import { Component, signal } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { TableModule } from 'primeng/table';
import * as echarts from 'echarts/core';
import { CommonModule } from '@angular/common';
 interface OrderItem {
  trackingNo: string;
  productName: string;
  price: number;
  totalOrder: number;
  totalAmount: number;
}
@Component({
  selector: 'app-dashboardcomp',
  standalone: true,
  imports: [TableModule,NgxEchartsModule,CommonModule],
  templateUrl: './dashboardcomp.html',
  styleUrls: ['./dashboardcomp.scss'],
})
export class DashboardcompComponent {
  navItems: any[] = [
    { title: 'save Products', icon: 'fa-solid fa-heart', count: '178+', color: '#60A5FA' },
    { title: 'Stack Products', count: '20+', icon: 'fa-solid fa-cube', color: '#FBBF24' },
    { title: 'Sale Products', count: '190+', icon: 'fa-solid fa-bag-shopping', color: '#F87171' },
    { title: 'jop Application', count: '12+', icon: 'fa-solid fa-briefcase', color: '#818CF8' },
  ];

  lineChartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        color: '#A0AEC0',
        fontSize: 12,
      },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        color: '#A0AEC0',
        fontSize: 12,
      },
      axisLine: { show: false },
      splitLine: {
        lineStyle: {
          color: '#E2E8F0',
          type: 'dashed',
        },
      },
    },
    series: [
      {
        data: [20, 40, 30, 60, 80, 50, 70],
        type: 'line',
        smooth: true,
        symbol: 'none',
        itemStyle: {
          color: '#4C51BF',
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(76, 81, 191, 0.4)' },
            { offset: 1, color: 'rgba(76, 81, 191, 0)' },
          ]),
        },
        markPoint: {
          data: [
            {
              name: 'Peak',
              value: 80,
              xAxis: 4,
              yAxis: 80,
              label: {
                color: '#FFFFFF',
                backgroundColor: '#2D3748',
                padding: [4, 8],
                borderRadius: 4,
                fontSize: 12,
                formatter: '2,879',
              },
            },
          ],
        },
      },
    ],
    grid: {
      left: '5%',
      right: '5%',
      bottom: '10%',
      top: '10%',
      containLabel: true,
    },
    tooltip: { trigger: 'axis' },
    backgroundColor: 'transparent',
  };

  doughnutChartOption: EChartsOption = {
    series: [
      {
        name: 'Analytics',
        type: 'pie',
        radius: ['70%', '90%'],
        center: ['50%', '50%'], // Ensure centered
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            formatter: '{d}%',
            fontSize: 24,
            fontWeight: 'bold',
            color: '#2D3748',
          },
        },
        labelLine: { show: false },
        data: [
          { value: 85, name: 'Sale', itemStyle: { color: '#60A5FA' } }, // Blue
          { value: 10, name: 'Distribute', itemStyle: { color: '#FBBF24' } }, // Yellow
          { value: 5, name: 'Return', itemStyle: { color: '#F87171' } }, // Orange
        ],
      },
    ],
    legend: {
      orient: 'horizontal',
      left: 'center',
      top: '95%', // Position just below the chart
      itemGap: 30, // Increased gap to prevent overlap
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: '#4A5568',
        fontSize: 12,
      },
      data: [
        { name: 'Sale', icon: 'circle' },
        { name: 'Distribute', icon: 'circle' },
        { name: 'Return', icon: 'circle' },
      ],
    },
    backgroundColor: 'transparent',
  };
  stars = Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]     // 5 نجوم
  rating = signal(4);  
  setRating(value: number) {
    this.rating.set(value);
  }
   stars1 = Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]     // 5 نجوم
  rating1 = signal(4);  
  setRating1(value: number) {
    this.rating.set(value);
  }
 
orders: OrderItem[] = [
    { trackingNo: '#876364', productName: 'Camera Lens', price: 178, totalOrder: 325, totalAmount: 14660 },
    { trackingNo: '#876368', productName: 'Black Sleep Dress', price: 14, totalOrder: 53, totalAmount: 4660 },
    { trackingNo: '#876412', productName: 'Argan Oil', price: 21, totalOrder: 78, totalAmount: 3467.6 },
    { trackingNo: '#876621', productName: 'Eau De Parfum', price: 32, totalOrder: 98, totalAmount: 3469.81 }
  ];
}
