import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenHomeComponent } from './screen-home.component';

describe('ScreenHomeComponent', () => {
  let component: ScreenHomeComponent;
  let fixture: ComponentFixture<ScreenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
