import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
private apiUrl='http://localhost:3000/todos'
  constructor(private httpClient:HttpClient) { }

  // get all
  getToDos():Observable<ToDo[]>
  {
   return this.httpClient.get<ToDo[]>(this.apiUrl)
  }

  // create todo
  createToDo(todo:ToDo):Observable<ToDo>
  {
    return this.httpClient.post<ToDo>(this.apiUrl,JSON.stringify(todo));
  }

  // get by Id

  getToDoById(id:string):Observable<ToDo>
  {
    return this.httpClient.get<ToDo>(`${this.apiUrl}/${id}`);
  }

   // update todo
   updateToDo(todo:ToDo):Observable<ToDo>
   {
     return this.httpClient.put<ToDo>(`${this.apiUrl}/${todo.id}`,JSON.stringify(todo));
   }

   // delete todo by Id

   deleteToDo(id:string):Observable<void>
  {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
