import {Component, OnInit, ChangeDetectionStrategy, forwardRef, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>ToggleBtnComponent),
    multi:true,
  }]
})
export class ToggleBtnComponent implements ControlValueAccessor {
  innerValue: boolean = false;

  @Output() innerValueToParent = new EventEmitter<boolean>();
  onChangeCallback = (v:boolean)=>{};
  onTouchedCallback = ()=>{};

  updateInnerValueToParent(value: boolean) {
    this.innerValueToParent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(val: boolean): void {
    if(val !== this.innerValue){
      this.innerValue = val;
    }
  }

  toggle(val: boolean):void {
    if(val !== this.innerValue){
      this.innerValue = val;
      this.onChangeCallback(val);
      this.onTouchedCallback();
      this.updateInnerValueToParent(val);
    }
  }
}
