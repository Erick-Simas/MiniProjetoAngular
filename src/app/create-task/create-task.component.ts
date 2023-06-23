import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  task: any = {};

  constructor(private taskService: TaskService) { }

  createTask() {
    this.taskService.addTask({ ...this.task });
    this.task = {};
  }
}
