import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class AppListComponent {
  @Input() componentsInput!: Image[];

  constructor(private router: Router) {}

  showDetail(componentId: string): void {
    this.router.navigateByUrl('/detail/' + componentId);
  }
}
