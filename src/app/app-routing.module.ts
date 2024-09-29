import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './corefolder/add/add.component';
import { DetailsComponent } from './corefolder/details/details.component';
import { EditComponent } from './corefolder/edit/edit.component';


const routes: Routes = [
  { path: 'add-student', component: AddComponent },
  { path: 'edit-student/edit/:id', component: EditComponent},
  { path: 'details-students', component: DetailsComponent},
  { path: '', redirectTo: '/details-students', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  export class AppRoutingModule
 {
  
 }
