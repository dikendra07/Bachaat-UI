import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-field-text',
  templateUrl: './input-field-text.component.html',
  styleUrls: ['./input-field-text.component.css']
})
export class InputFieldTextComponent implements OnInit {
  @Input() labelName: string;
  @Input() inputType: string;
  @Input() isRequired?: boolean;
  @Input() minLength?: number;
  @Input() maxLength?: number;
  constructor() {
    this.isRequired = true;
  }
  ngOnInit() {
  }
}