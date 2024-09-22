import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatButtonModule
  ],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  private fb = inject(FormBuilder);

  taskForm = this.fb.group({
    title: ['', [Validators.required]],
    description: [''],
    status: ['', [Validators.required]],
    priority: ['', [Validators.required]],
    dueDate: ['', [Validators.required]]
  });

  statusOptions = ['Pending', 'In Progress', 'Completed'];
  priorityOptions = ['Low', 'Medium', 'High'];

  onSubmit() {
    if (this.taskForm.valid) {
      console.log('Task form submitted', this.taskForm.value);
      // TODO: Implement task creation/update logic
    }
  }
}