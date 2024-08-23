import { Component, OnInit, DoCheck  } from '@angular/core';
import { IToDo } from 'src/app/interfaces/globals';
import { IndexDbService } from 'src/app/services/index-db.service';

@Component({
  selector: 'app-ng-to-do',
  templateUrl: './ng-to-do.component.html',
  styleUrls: ['./ng-to-do.component.css']
})
export class NgToDoComponent implements OnInit, DoCheck {

	constructor(private indexDBService: IndexDbService){}

	ngOnInit(): void {
		this.getTodos();
		this.initTheme();
	}

	ngDoCheck() {
		this.calcLeftItemsNumber()
	}

	protected initTheme(){
		let _theme = localStorage.getItem('to_do_app_theme');
		_theme ?
			this.theme = _theme :
			localStorage.setItem('to_do_app_theme', 'dark');
		this.applyTheme();
	}
	
	// ?select todo with hover effect:
	protected selectToDo(id:number){
		this.selectedToDoId = id;
	}

	protected removeSelectedToDo(){
		this.selectedToDoId = null;
	}

	protected addToDo(){
		if(this.inputValue !== ""){
			const _todo: any = { 
				name: this.inputValue, 
				completed: false
			}

			this.indexDBService.addTodo(_todo).subscribe(() => {
				this.inputValue = '';
				this.getTodos();
			})
		}
	}

	protected getTodos(){
		this.indexDBService.getAllTodos().subscribe((todos:IToDo[]) => this.toDos = todos);
	}

	protected deleteToDo(id:number){
		this.indexDBService.deleteTodoById(id).subscribe(() => this.getTodos())
	}

	protected toggleTodoCompletion(todo:IToDo){
		todo.completed = !todo.completed;
		this.indexDBService.updateTodo(todo).subscribe();
	}

	protected changeTheme(){
		this.theme = this.theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('to_do_app_theme', this.theme);
		this.applyTheme();
	}

	// button functions on the bottom:
	protected showCompleted(){
		this.isCompletedClicked = true;
		this.indexDBService.getAllTodos().subscribe((todos:IToDo[]) => {
			this.toDos = todos;
			this.toDos = this.toDos.filter((todo:IToDo)=> todo.completed === true);
			this.itemCompleted = this.toDos.length;
		});
	}

	protected showNotCompleted(){
		this.isCompletedClicked = false;
		this.indexDBService.getAllTodos().subscribe((todos:IToDo[]) => {
			this.toDos = todos;
			this.toDos = this.toDos.filter((todo:IToDo)=> todo.completed === false)
		});
	}

	protected deleteCompleted(){
		this.isCompletedClicked = false;
		this.indexDBService.getAllTodos().subscribe((todos:IToDo[]) => {
			this.toDos = todos;
			this.toDos.forEach((todo:IToDo)=> todo.completed ? this.deleteToDo(todo.id) : '')
		});
	}

	private applyTheme() {
		const htmlElement = document.documentElement;
		this.theme === 'dark' ?
			htmlElement.classList.add('dark') :
			htmlElement.classList.remove('dark');
	}

	private calcLeftItemsNumber() {
		let _notCompletedTodo = this.toDos.filter((todo:IToDo)=> todo.completed === false);
		this.itemLeft = _notCompletedTodo.length
	}

	protected toDos: IToDo[] = [];
	protected selectedToDoId:number | null = null;
	protected inputValue:string = "";
	protected theme:string = 'dark';
	protected itemLeft: number = 0;
	protected itemCompleted: number = 0;
	protected isCompletedClicked:boolean = false;
}
