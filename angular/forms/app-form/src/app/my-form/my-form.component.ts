import { Component, OnInit } from '@angular/core';
import { Model }    from './model';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  public model: Model
  public heroForm: FormGroup

  constructor() {
    this.model = new Model()
    // this.name = new FormControl();

   this.heroForm = new FormGroup ({
      name: new FormControl()
    });
  }

  onSubmit(form) {
    debugger;
  }

  ngOnInit() {
  }

}
