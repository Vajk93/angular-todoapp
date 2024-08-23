import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { IToDo } from '../interfaces/globals';

@Injectable({
  providedIn: 'root'
})
export class IndexDbService {

  constructor(private dbService: NgxIndexedDBService) {}

	addTodo(todo: IToDo): Observable<IToDo> {
		return this.dbService.add('todos', todo);
	}

	getTodoById(id: number): Observable<IToDo> {
		return this.dbService.getByID<IToDo>('todos', id);
	}

	getAllTodos(): Observable<IToDo[]> {
		return this.dbService.getAll<IToDo>('todos');
	}

	updateTodo(todo: IToDo): Observable<any> {
		return this.dbService.update('todos', todo);
	}

	deleteTodoById(id: number): Observable<any> {
		return this.dbService.delete('todos', id);
	}
}
