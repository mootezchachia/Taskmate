import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  // Mock data for analytics
  taskCompletionRate = 75;
  tasksCompletedThisWeek = 15;
  averageTaskCompletionTime = '2.5 days';
  upcomingDeadlines = 3;
}