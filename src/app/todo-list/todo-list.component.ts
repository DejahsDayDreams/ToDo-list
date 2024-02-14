import { Component } from '@angular/core';

// Define Task interface
interface Task {
  name: string;
  priority: 'Low' | 'Medium' | 'High';
  dueDate: Date | null;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // An array to store tasks
  tasks: Task[] = [
    {
      name: 'Task 1',
      priority: 'High',
      dueDate: new Date('2023-09-30'), 
    },
    {
      name: 'Task 2',
      priority: 'Medium',
      dueDate: new Date('2023-10-15'), 
    },
  ];

  // Represents a new task being added
  newTask: Task = { name: '', priority: 'Low', dueDate: null };

  // To track the task being edited
  editedTask: Task | null = null;

  // Selected priority for filtering tasks
  selectedPriority: string = 'All';

  // Function to edit a task
  editTask(task: Task) {
    // Your editTask function remains the same
  }

  // Function to handle the addition of a new task
  onTaskAdded(newTask: Task): void {
    // Your onTaskAdded function remains the same
  }

  // Function to delete a task
  deleteTask(task: Task): void {
    // Your deleteTask function remains the same
  }

  // Function to filter tasks based on priority
  get filteredTasks(): Task[] {
    if (this.selectedPriority === 'All') {
      return this.tasks; // Show all tasks
    } else {
      return this.tasks.filter((task) => task.priority === this.selectedPriority);
    }
  }
}
