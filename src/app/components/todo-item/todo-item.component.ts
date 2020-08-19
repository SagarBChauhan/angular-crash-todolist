import { Component, OnInit,Input, EventEmitter,Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo : EventEmitter<Todo> =new EventEmitter();

  constructor(private todoService:TodoService ) { }

  ngOnInit(): void {
  }
  
  SetClasses() {
    let classes = {
      todo : true,
      'is-complete' : this.todo.completed
    }
    return classes;
  }

  OnToggle(todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  OnDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
