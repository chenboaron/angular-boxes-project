import { Component, OnInit } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-yellow-box',
  templateUrl: './yellow-box.component.html',
  styleUrls: ['./yellow-box.component.css']
})
export class YellowBoxComponent implements OnInit {
  yellowValue: string = ''


  constructor(private boxService: BoxService) {

  }
  ngOnInit(): void {
    this.boxService.text$.subscribe((res: string) => {
      this.yellowValue = res;

    })
  }



}
