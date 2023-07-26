import { Component } from '@angular/core';

@Component({
  selector: 'app-blue-box',
  templateUrl: './blue-box.component.html',
  styleUrls: ['./blue-box.component.css']
})
export class BlueBoxComponent {
  borderColorOptions = ['blue', 'green', 'purple'];
  selectedBorderColor = 'blue';
}
