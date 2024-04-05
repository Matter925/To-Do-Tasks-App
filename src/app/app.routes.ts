import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { ToDoComponent } from './Components/to-do/to-do.component';
import { TodoDetailsComponent } from './Components/todo-details/todo-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
    {path:'',redirectTo:"/to-do",pathMatch:'full'},
    {path:'home',component:ToDoComponent,title:'Home'},
    {path:'aboutus',component:AboutusComponent,title:'About Us'},
    {path:'contactus',component:ContactusComponent,title:'Contact Us'},
    {path:'to-do',component:ToDoComponent,title:'ToDo'},
    {path:'to-do/:id',component:TodoDetailsComponent,title:'To Do Details'},
    {path:'**',component:NotFoundComponent,title:'Not Found'},
];
