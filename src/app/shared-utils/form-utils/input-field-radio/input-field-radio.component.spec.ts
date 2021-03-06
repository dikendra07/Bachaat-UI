import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InputFieldRadioComponent } from './input-field-radio.component';

describe('InputFieldRadioComponent', () => {
  let component: InputFieldRadioComponent;
  let fixture: ComponentFixture<InputFieldRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldRadioComponent ],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the Input Radio Component', () => {
    expect(component).toBeTruthy();
  });
  it('should check whether the radio button type is present or not', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.data = ['male', 'female'];
    fixture.detectChanges();
    const input = compiled.querySelector('input');
    expect(input).toBeTruthy();
  });
  it('should show radio input options as inline elements when input type is given inline', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.data = ['male', 'female'];
    component.viewType = 'inline';
    fixture.detectChanges();
    const input = compiled.querySelector('input');
    expect(input).toBeTruthy();
    const lineBreak = compiled.querySelector('br');
    expect(lineBreak).toBeFalsy();
  });
  it('should show radio input options as block elements when input type is given block', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.data = ['male', 'female'];
    component.viewType = 'block';
    fixture.detectChanges();
    const input = compiled.querySelector('input');
    expect(input).toBeTruthy();
    const lineBreak = compiled.querySelector('br');
    expect(lineBreak).toBeTruthy();
  });
});
