import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {
  component!: Image;
  panelOpenState = false;

  constructor(private componentService: ComponentService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');  
    
    if(id){
      this.componentService.getComponentById(id).subscribe(componentResult => {
        this.component = componentResult;
      })
    }
  }

  back(): void {
    this.router.navigateByUrl('');
  }
}
