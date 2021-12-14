import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  innerValue:boolean = true;

  updateInnerValue(newValue:boolean){
    this.innerValue = newValue;
  }
  form:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.form = formBuilder.group({
      toggle:[true]
    });
  }

  ngOnInit(): void {
  }

}
