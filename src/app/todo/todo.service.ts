import { Injectable, Signal, signal } from '@angular/core';

export enum TodoStatusEnum {
  WAITING = 'waiting',
  IN_PROGRESS = 'in progress',
  DONE = 'done',
}

export class Todo {
  constructor(
    public id = 0,
    public name = '',
    public content = '',
    public status: TodoStatusEnum = TodoStatusEnum.WAITING
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos = signal<Todo[]>([]);

  getTodosSignal(): Signal<Todo[]> {
    return this._todos.asReadonly();
  }
  get todos(): Signal<Todo[]> {
    return this._todos.asReadonly();
  }

  constructor() {}
  addTodo(todo: Todo): void {
    this.todos().length
      ? (todo.id = this.todos()[this.todos().length - 1]?.id + 1)
      : (todo.id = 1);

    todo.status = TodoStatusEnum.WAITING;
    this._todos.update((todos) => {
      const newTodos = [...todos, todo];
      return newTodos;
    });
    console.log({ todos: this.todos() });
  }
  updateTodoStatus(id: number, status: TodoStatusEnum) {
    console.log({ id, status });

    this._todos.update((todos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, status };
        }
        return todo;
      })
    );
  }
}
