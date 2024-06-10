import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class AppGridComponent {
  @Input() componentsInput!: Image[];
  cols!: number;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target: Window = event.target as Window;
    this.calculateColumns(target.innerWidth);
  }

  constructor(private router: Router) {
    this.calculateColumns(window.innerWidth);
  }

  showDetail(componentId: string): void {
    this.router.navigateByUrl('/detail/' + componentId);
  }

  calculateColumns(width: number) {
    if (width <= 600) {
      this.cols = 1;
    } else if (width <= 960) {
      this.cols = 2;
    } else if (width <= 1280) {
      this.cols = 3;
    } else {
      this.cols = 4;
    }
  }
}
