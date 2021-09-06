import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[] = [];
  faCircle = faCircle;
  faCheckCircle = faCheckCircle; 
  constructor(private taskService: TaskService) { }
  title: string;
  due: string;
  description: string;
  done: boolean;
  boolean: any;
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t) => t.id!==task.id)));

  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));

  }

  ToggleDone(task: Task) {
    task.done = !task.done;
    // this.faCheckCircle = faCircle;
    this.taskService.updateTaskDone(task).subscribe();
    
  }

  

  


}
