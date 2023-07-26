import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowBoxComponent } from './yellow-box.component';

describe('YellowBoxComponent', () => {
  let component: YellowBoxComponent;
  let fixture: ComponentFixture<YellowBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YellowBoxComponent]
    });
    fixture = TestBed.createComponent(YellowBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
