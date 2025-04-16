import { Component, Input } from '@angular/core';
import type { Task, TaskSeverity } from '../../Types/types.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-task',
    imports: [CommonModule],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss',
})
export class TaskComponent {
    @Input({ required: true }) task!: Task;

    getSeverityClass(severity: TaskSeverity) {
        switch (severity) {
            case 0:
                return 'low';
            case 1:
                return 'medium';
            case 2:
                return 'high';
            case 3:
                return 'critical';
            default:
                return 'low';
        }
    }

    getSeverityText(severity: TaskSeverity) {
        switch (severity) {
            case 0:
                return 'Low';
            case 1:
                return 'Medium';
            case 2:
                return 'High';
            case 3:
                return 'Critical';
            default:
                return 'Low';
        }
    }
}
