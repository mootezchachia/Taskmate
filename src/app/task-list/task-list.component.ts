import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

interface Task {
  id: number;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
  dueDate: Date;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  displayedColumns: string[] = ['title', 'status', 'priority', 'dueDate', 'actions'];
  tasks: Task[] = [
    { id: 1, title: 'Complete project proposal', status: 'In Progress', priority: 'High', dueDate: new Date('2024-10-01') },
    { id: 2, title: 'Review code changes', status: 'Pending', priority: 'Medium', dueDate: new Date('2024-09-25') },
    { id: 3, title: 'Update documentation', status: 'Completed', priority: 'Low', dueDate: new Date('2024-09-20') },
  ];
}