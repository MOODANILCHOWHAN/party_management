import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { AddPartyDetailsComponent } from './add-party-details/add-party-details.component';
import { PartyListComponent } from './party-list/party-list.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:LogInComponent},
  {path:'home',component:HomeComponent},
  {path:'partList',component:PartyListComponent},
  {path:'addparty',component:AddPartyDetailsComponent},
  {path:'details',component:DetailsComponent},
  {path:'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
