import {Component, OnInit, ChangeDetectionStrategy, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {FilmService} from "../../services/film.service";
import {BindingType} from "@angular/compiler";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextInputComponent),
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor {

  inputControl:FormControl = new FormControl("");

  @Input() placeholder = "";
  @Input() name = "";

  constructor(){}

  onChangeCallback = (v:string)=>{};
  onTouchedCallback = ()=>{};

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(val: any): void {
      this.inputControl.setValue(val);
  }

  ngOnInit(): void {
  }

  setValue(){
    console.log(this.inputControl.value);
    this.onChangeCallback(this.inputControl.value);
    this.onTouchedCallback();
  }
}
