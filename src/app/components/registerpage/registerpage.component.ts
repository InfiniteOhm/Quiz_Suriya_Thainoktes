import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent  implements OnInit{

@ViewChild('mapDiv') mapDiv !: ElementRef;

constructor(private mapService: MapService){}
ngOnInit(): void {}
ngAfterViewInit() {
 this.mapService.initialMap(this.mapDiv);
}
}
