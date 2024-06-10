import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.interface';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
  animations: [
    trigger("toggleView", [
      state("void", style({ opacity: 0, transform: 'scale(0.95)' })),
      transition("void => *", [
        animate("500ms ease-out", style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
  ],
})
export class ComponentListComponent implements OnInit {
  components!: Image[];
  isLoading = true;

  constructor(private componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.getAllComponents().subscribe(componentsResult => {
      this.components = componentsResult;
      this.isLoading = false;
    });
  }
}
