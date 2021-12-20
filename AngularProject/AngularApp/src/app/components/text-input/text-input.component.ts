import {Component, OnInit, ChangeDetectionStrategy, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {FilmService} from "../../services/film.service";

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

  @Input() placeholder = "";
  @Input() name = "";
  @Input() value = ""


  constructor(
    )
  {
  }

  writeValue(obj: any): void {
        this.value = obj
    }
    registerOnChange(fn: any): void {
    }
    registerOnTouched(fn: any): void {
    }

  ngOnInit(): void {
  }

}
