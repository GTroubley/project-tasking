import { Component } from '@angular/core';
import type { Task } from '../../Types/types.model';

@Component({
    selector: 'app-task',
    imports: [],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss',
})
export class TaskComponent {
    task!: Task;
}
