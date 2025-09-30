import { Component } from '@angular/core';
import { count } from 'node:console';

@Component({
  selector: 'app-dashboardcomp',
  imports: [],
  templateUrl: './dashboardcomp.html',
  styleUrl: './dashboardcomp.scss'
})
export class Dashboardcomp {
navItems: any[] = [
   { title: 'save Products', icon: 'fa-solid fa-heart' ,count:'178+', color: '#3B82F6' },
   { title: 'Stack Products', count:'20+',icon: 'fa-solid fa-gamepad', color: '#F59E0B' },
   { title: 'Sale Products',count:'190+', icon: 'fa-solid fa-bag-shopping', color: '#EF4444'},
    { title: 'jop Application',count:'12+', icon: 'fa-solid fa-briefcase', color: '#605BFF' }
  ];
}
