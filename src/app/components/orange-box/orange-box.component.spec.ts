import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeBoxComponent } from './orange-box.component';

describe('OrangeBoxComponent', () => {
  let component: OrangeBoxComponent;
  let fixture: ComponentFixture<OrangeBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrangeBoxComponent]
    });
    fixture = TestBed.createComponent(OrangeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
