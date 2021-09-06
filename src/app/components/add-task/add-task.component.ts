import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();
  
  title: string;
  due: string;
  description: string;
  done: boolean;
  boolean: any;

  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.title){
      alert('Please add a task!');
      return;
    }

    const newTask = {
      title : this.title,
      due : this.due,
      description: this.description,
      done: false
    };
    
    this.onAddTask.emit(newTask);

    this.title = '';
    this.due = '';
    this.description = '';
    this.done = false
  }
  

}
