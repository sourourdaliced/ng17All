import { Component, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from "../todos/todos.component";
import { Todo, TodoService, TodoStatusEnum } from '../todo/todo.service';



@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [FormsModule, TodosComponent],
})
export class TodoListComponent {
  todoService = inject(TodoService);
  todos: Signal<Todo[]>;
  todo = signal(new Todo());
  constructor() {
    this.todos = this.todoService.todos;
  }
  waitingTodos = computed(() =>
    this.todos().filter((todo) => todo.status === TodoStatusEnum.WAITING)
  );
  doneTodos = computed(() =>
    this.todos().filter((todo) => todo.status === TodoStatusEnum.DONE)
  );
  inProgressTodos = computed(() =>
    this.todos().filter((todo) => todo.status === TodoStatusEnum.IN_PROGRESS)
  );

  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }

  updateTodo(todoInfos: { id: number; status: TodoStatusEnum }) {
    this.todoService.updateTodoStatus(todoInfos.id, todoInfos.status);
  }
}
