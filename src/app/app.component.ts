import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, HostListener } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dynamicForm:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.dynamicForm =  this.formBuilder.group({
      fields:this.formBuilder.array([])
    })
  }


  get fields(){
    return this.dynamicForm.get('fields') as FormArray;
  }

  addField(){
    const field = this.formBuilder.group({
      name:['',Validators.required],
      value:['',Validators.required]
    })
    this.fields.push(field);
  }

  removeField(index: number) {
    this.fields.removeAt(index);
  }
}
