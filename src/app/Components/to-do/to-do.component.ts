import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
 Title:string="To Do List App";
 imageLink:string="https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319_640.png";

 tasks:string[]=[];
 newTask:string="";
 isAvalible:boolean=false;
 addTask(){
  if(this.newTask.trim() !=="")
  {
    this.tasks.push(this.newTask);
    this.newTask="";
    this.isAvalible=true;
  }
 }
 EditTask(index:number,newTaskEdit:string) :string | void{

  if(newTaskEdit.trim() !=="")
 {
  this.tasks[index]=newTaskEdit;
 }else{
  newTaskEdit=this.tasks[index];
  return this.newTask=newTaskEdit;

 }
 this.newTask="";

 }
 RemoveTask(index:number){
  this.tasks.splice(index,1);
  this.isAvalible=this.tasks.length >0;
 }
}
