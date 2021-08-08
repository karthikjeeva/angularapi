import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

export interface Person {
  name: string;
  age: Number;
 }


@Component({
  selector: 'app-multiautocomplete',
  templateUrl: './multiautocomplete.component.html',
  styleUrls: ['./multiautocomplete.component.css']
})
export class MultiautocompleteComponent {
  
  names: Person[] = [{name: 'kar', age: 22}, {name: 'poo', age: 21}, {name: 'smi', age: 16}];
  filteredOptions: Observable<Person[] | null | undefined> [] = [];
  namesForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }
   
 
  createForm() {
    this.namesForm = this.fb.group ({
      names: this.initItems()
    })

    this.ManageNameControl(0);
    this.ManageNameControl(1);

  } 


  initItems() {
    var formArray = this.fb.array([]);
    
    for (let i = 0; i < 2; i++) {
      formArray.push(this.fb.group({
        name: ['', [Validators.required]],
      }));
    }
    return formArray;
  }

  ManageNameControl(index: number) {
    var arrayControl = this.namesForm.get('items') as FormArray;
  
    this.filteredOptions[index] = arrayControl.at(index).get('name')!.valueChanges
    .pipe(
      startWith<string | Person>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.names.slice())
    );  

    

  }

 /*  ngOnInit(): void {
    var arrayControl = this.namesForm.get('items') as FormArray;
    this.filteredOptions[index] = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.names.slice())
    );
  } */
  
  displayFn(user: Person): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): Person[] {
    const filterValue = name.toLowerCase();

    return this.names.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  newAutoComplete(): FormGroup {
    return this.fb.group({
     name: ''
    })
  }


  addnames() {
    //this.names.push(this.newAutoComplete());
  }

  removeSkill(i: number) {
    //this.names.removeAt(i);
  }

  onSubmit() {
    console.log(this.namesForm.value);
  }

}
