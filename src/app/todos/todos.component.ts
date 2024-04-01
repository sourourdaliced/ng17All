import { Component, EventEmitter, Output, input } from '@angular/core';

import { RemoveTableElementPipe } from "../pipes/remove-table-element.pipe";
import { Todo, TodoStatusEnum } from '../todo/todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  imports: [RemoveTableElementPipe],
})
export class TodosComponent {
  @Output() changeTodoEvent = new EventEmitter<{
    id: number;
    status: TodoStatusEnum;
  }>();
  todos = input.required<Todo[]>();
  status = Object.values(TodoStatusEnum);
  onChangeStatus(updateInfos: { id: number; status: string }) {
    this.changeTodoEvent.emit({
      id: updateInfos.id,
      status: updateInfos.status as TodoStatusEnum
    });;
  }
}
