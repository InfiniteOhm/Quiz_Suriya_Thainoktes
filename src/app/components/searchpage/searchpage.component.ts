import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit{
@ViewChild('mapDiv') mapDiv !: ElementRef;
textsearch :string = ''
constructor(private searchService: SearchService){
  
}
ngOnInit(): void {
  
}
ngAfterViewInit() {
  this.searchService.initialMap(this.mapDiv);
 }
}
