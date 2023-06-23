import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent {
  constructor(private taskService: TaskService) {}

  getTasksByColumn(column: string) {
    return this.taskService.getTasksByColumn(column);
  }

  moveTask(task: any, newColumn: string) {
    this.taskService.moveTask(task, newColumn);
  }
}
