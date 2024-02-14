import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo-list', pathMatch: 'full' }, // Redirect empty path to todo-list
{path: 'todo-list', component: TodoListComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
