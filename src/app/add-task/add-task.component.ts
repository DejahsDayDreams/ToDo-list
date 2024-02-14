import { Component, EventEmitter, Output } from '@angular/core';


// Define Task interface
interface Task {
  name: string;
  priority: 'Low' | 'Medium' | 'High';
  dueDate: Date | null;
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();
  newTask: Task = { name: '', priority: 'Low', dueDate: null };

  constructor() { }

  addTask() {
    // Check if a task name is provided (you can add more validation if needed)
    if (this.newTask.name.trim() === '') {
      alert('Please provide a task name.');
      return;
    }
  
    // Assign a default due date if none is selected
    if (this.newTask.dueDate === null) {
      this.newTask.dueDate = new Date(); // Set it to the current date or another default value
    }
  
    // Emit the new task
    this.taskAdded.emit(this.newTask);
  
    // Reset the newTask object for the next task
    this.newTask = { name: '', priority: 'Low', dueDate: null };
  }
}

