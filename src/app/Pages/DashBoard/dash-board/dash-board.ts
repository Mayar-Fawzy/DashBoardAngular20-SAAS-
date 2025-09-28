import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  imports: [NgClass, RouterOutlet],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.scss'
})
export class DashBoard {
isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
