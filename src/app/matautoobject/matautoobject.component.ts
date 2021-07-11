import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Person {
  name: string;
  age: Number;
 }

@Component({
  selector: 'app-matautoobject',
  templateUrl: './matautoobject.component.html',
  styleUrls: ['./matautoobject.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  //encapsulation: ViewEncapsulation.None
  //picks the local style of template
  
})



export class MatautoobjectComponent implements OnInit {

  names: Person[] = [{name: 'kar', age: 22}, {name: 'poo', age: 21}, {name: 'smi', age: 16}];
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<Person[]> | undefined;
  @Input() autoActiveFirstOption = false;
  
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.names.slice())
    );
  }
  
  displayFn(user: Person): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): Person[] {
    const filterValue = name.toLowerCase();

    return this.names.filter(option => option.name.toLowerCase().includes(filterValue));
  }


}


