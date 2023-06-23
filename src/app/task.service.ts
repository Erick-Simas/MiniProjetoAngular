import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: any[] = [];
  addTask(task: any) {
    this.tasks.push(task);
  }
  getTasksByColumn(column: string) {
    return this.tasks.filter(task => task.column === column);
  }
  moveTask(task: any, newColumn: string) {
    task.column = newColumn;
  }
  createTask(task: any) {
    this.tasks.push(task);
  }
  constructor() {
    this.tasks = [];
  }
  addExampleTasks() {
    this.tasks.push(
      { title: 'Tarefa 1', description: 'Descrição da Tarefa 1', category: 'Categoria 1', column: 'TO DO' },
      { title: 'Tarefa 2', description: 'Descrição da Tarefa 2', category: 'Categoria 2', column: 'DOING' },
      { title: 'Tarefa 3', description: 'Descrição da Tarefa 3', category: 'Categoria 3', column: 'DONE' }
    );
  }    
}
