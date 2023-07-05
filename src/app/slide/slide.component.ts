import { Component,AfterViewInit,OnInit,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements AfterViewInit,OnInit {
  constructor(private ref:ElementRef){}
  flag=0;
  @ViewChild('loading') span!:ElementRef;
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }
  change(){this.flag=1}
  public re=setTimeout(()=>{
    this.span.nativeElement.setAttribute('id', '');
  } , 400);

}
