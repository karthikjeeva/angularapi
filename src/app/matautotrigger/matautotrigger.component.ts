import { Component, ViewChild ,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-matautotrigger',
  templateUrl: './matautotrigger.component.html',
  styleUrls: ['./matautotrigger.component.css']
})
export class MatautotriggerComponent implements OnInit {

  
  stateCtrl: FormControl = new FormControl();;
  filteredStates: any;
  

  
  @ViewChild('autoCompleteInput', { read: MatAutocompleteTrigger }) autoComplete!: MatAutocompleteTrigger;

  ngOnInit(): void {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(null),
      map(name => this.filterStates(name))
    )
  }
  

  close() {
    this.autoComplete.closePanel();
  }

  open(evt:any){
    evt.stopPropagation();
    this.autoComplete.openPanel();
  }

  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  constructor() {

  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.states;
  }
}
