import { Component } from '@angular/core';
import { TaskComponent } from "../task/task.component";

@Component({
    selector: 'app-tasks-column',
    imports: [TaskComponent],
    templateUrl: './tasks-column.component.html',
    styleUrl: './tasks-column.component.scss',
})
export class TasksColumnComponent {}
