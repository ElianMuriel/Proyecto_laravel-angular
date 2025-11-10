import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  newTaskTitle = '';
  newTaskDescription = '';

  isLoading = false;
  errorMessage = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error al cargar tareas';
        this.isLoading = false;
      }
    });
  }

  addTask(): void {
    if (!this.newTaskTitle.trim()) {
      return;
    }

    const task: Task = {
      title: this.newTaskTitle,
      description: this.newTaskDescription,
      completed: false
    };

    this.taskService.createTask(task).subscribe({
      next: (created) => {
        this.tasks.push(created);
        this.newTaskTitle = '';
        this.newTaskDescription = '';
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error al crear tarea';
      }
    });
  }

  toggleCompleted(task: Task): void {
    if (!task.id) return;

    this.taskService.updateTask(task.id, {
      ...task,
      completed: !task.completed
    }).subscribe({
      next: (updated) => {
        task.completed = updated.completed;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error al actualizar tarea';
      }
    });
  }

  deleteTask(task: Task): void {
    if (!task.id) return;

    this.taskService.deleteTask(task.id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error al eliminar tarea';
      }
    });
  }
}
