import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {ControlValueAccessor, FormControl} from "@angular/forms";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputComponent implements ControlValueAccessor {

  textInput = new FormControl('');
  @Input() placeholder = "";
  @Input() name = "";
  @Input() controlName = "";

  constructor() { }

  writeValue(obj: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnChange(fn: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnTouched(fn: any): void {
        throw new Error('Method not implemented.');
    }

  ngOnInit(): void {
  }

}
