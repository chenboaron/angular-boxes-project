import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  private textSubject = new BehaviorSubject<string>('');
  public text$ = this.textSubject.asObservable();

  constructor() { }

  updateText(text: string) {
    this.textSubject.next(text);
  }
}
