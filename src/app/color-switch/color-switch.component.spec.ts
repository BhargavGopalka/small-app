import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSwitchComponent } from './color-switch.component';

describe('ColorSwitchComponent', () => {
  let component: ColorSwitchComponent;
  let fixture: ComponentFixture<ColorSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});