import { Component } from '@angular/core';

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
    // Extract initial values of the task
    let updatedTaskName = task.name;
    let updatedTaskPriority = task.priority;
    let updatedTaskDueDate: string | null = task.dueDate ? task.dueDate.toISOString().split('T')[0] : '';
  
    // Prompt the user for updated task details
    const userInput = prompt('Edit task details:', 
      `Name: ${updatedTaskName}\n` +
      `Priority: ${updatedTaskPriority}\n` +
      `Due Date: ${updatedTaskDueDate}`
    );
  
    if (userInput !== null) {
      // Split user input into sections
      const sections = userInput.split('\n');
      updatedTaskName = sections[0].replace('Name: ', '');
      updatedTaskPriority = sections[1].replace('Priority: ', '');
      updatedTaskDueDate = sections[2].replace('Due Date: ', '');
  
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        // Update the task properties
        this.tasks[index].name = updatedTaskName;
  
        if (['Low', 'Medium', 'High'].includes(updatedTaskPriority)) {
          this.tasks[index].priority = updatedTaskPriority;
        } else {
          alert('Invalid priority. Priority must be Low, Medium, or High.');
        }
  
        if (updatedTaskDueDate !== null && updatedTaskDueDate !== '') {
          const newDueDate = new Date(updatedTaskDueDate);
          if (!isNaN(newDueDate.getTime())) {
            this.tasks[index].dueDate = newDueDate;
          } else {
            alert('Invalid due date format. Please use YYYY-MM-DD.');
          }
        } else {
          this.tasks[index].dueDate = null;
        }
      }
    }
  }

  // Function to handle the addition of a new task
  onTaskAdded(newTask: Task): void {
    console.log('Received task:', newTask);
    this.tasks.push(newTask);

    // Reset the newTask object
    this.newTask = { name: '', priority: '', dueDate: null };
  }

  // Function to delete a task
  deleteTask(task: Task): void {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
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
