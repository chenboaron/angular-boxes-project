import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-orange-box',
  templateUrl: './orange-box.component.html',
  styleUrls: ['./orange-box.component.css'],
})
export class OrangeBoxComponent implements OnInit {

  constructor(private boxService: BoxService) {

  }

  ngOnInit() {

  }

  onChangeInput(event: any) {
    setTimeout(() => {
      this.boxService.updateText(event.target.value)
    }, 500);
  }

}
