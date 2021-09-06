import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from "../../Task";
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  //Passing task as an input
  @Input() task: Task;
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleDone : EventEmitter<Task> = new EventEmitter();
  // @Output() onTaskSelect : EventEmitter<Task> = new EventEmitter();
  faTrash = faTrash;
  faCircle = faCircle;
  faCheckCircle = faCheckCircle; 
  value: boolean
  constructor() { }

  ngOnInit(): void {
  }

  onClick(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.faCircle = faCheckCircle;
    this.onToggleDone.emit(task);
  }
  // onDone() {
  //   this.faCircle = faCheckCircle;
  // }
  // onTaskClick(task: Task) {
  //   this.onTaskSelect.emit(task);
  //   // console.log(task);
  // }

}
