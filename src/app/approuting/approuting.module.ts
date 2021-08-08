import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';
import { MatautocomComponent } from '@app/matautocom/matautocom.component';
import { MatautoobjectComponent } from '@app/matautoobject/matautoobject.component';
import { MatautotriggerComponent } from '@app/matautotrigger/matautotrigger.component';
import { MultiautocompleteComponent } from '@app/multiautocomplete/multiautocomplete.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'auto', component: MatautocomComponent },
  { path: 'autoobj', component: MatautoobjectComponent },
  { path: 'autotrigger', component: MatautotriggerComponent  },
  { path: 'multiauto', component: MultiautocompleteComponent  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApproutingModule { }
