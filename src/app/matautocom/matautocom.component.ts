import { EventEmitter, Component, Input, OnInit, Output, ViewEncapsulation, QueryList, ViewChildren, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatOption } from '@angular/material/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-matautocom',
  templateUrl: './matautocom.component.html',
  styleUrls: ['./matautocom.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
  //encapsulation: ViewEncapsulation.None
})
export class MatautocomComponent implements OnInit {

  names: string[] = ['ghuidjfkjdfkjfdkjfkfjdkfdjkfjd', 'ustu', 'caty','momo', 'rekh', 'john', 'kemp'];
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]> | undefined;
  @Input() disableRipple = true;
  @Input() panelWidth = "200px";
  item = "80px";
 

  constructor() { }
  //api
  @Input() autoActiveFirstOption = false;
  @Input('class') classList = ['boldOptions', 'coloroptions'];
  @Output() opened: EventEmitter<void> = new EventEmitter();
  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() optionSelected: EventEmitter<MatAutocompleteSelectedEvent> = new EventEmitter();
  
 @ViewChildren(MatOption) optionsQ = new QueryList();
 
 @ViewChild("auto")
  autocomplete!: MatAutocomplete;

  //@Input() showPanel = true;

  disable = true;
  @Input('matAutocompleteDisabled') autocompleteDisabled: boolean = this.disable;
  
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.names.filter(option => option.toLowerCase().includes(filterValue));
     /* return this.names.filter((option) =>  {
       console.log(filterValue)
      return option.toLowerCase().includes(filterValue);
    })    */
   
  }
   

  private isOpened() {
    console.log("panel is open");
    
  }

  private isClosed() {
    console.log("panel is closed");
    /* console.log("component instance:", this.autocomplete.panel);
    console.log("component instance:", this.autocomplete.panel.nativeElement.innerHTML);
    console.log("component instance:", this.autocomplete.panel.nativeElement.className); */
    
  }

  private optionSelectedLocal(val:any) {
    console.log("option selected ");
  }

  private optionSelect(val:any) {
    console.log("option selected " + val);
  }
  

  ngAfterViewInit() {
    this.optionsQ.forEach((matoptions:any) => console.log(matoptions.value));
    
  }
}



