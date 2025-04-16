import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProjectsAreaComponent } from './projects-area/projects-area.component';
import { TaskComponent } from './tasks/task/task.component';
import type { Task, TaskColumn, TaskStatus } from './Types/types.model';
import { TaskingService } from './Services/tasking.service';
import { FormsComponent } from "./forms/forms.component";
import { FormsService } from './Services/forms.service';

@Component({
    selector: 'app-root',
    imports: [
    /*RouterOutlet,*/
    HeaderComponent,
    ProjectsAreaComponent,
    TaskComponent,
    FormsComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'project-tasking';
    taskingService = inject(TaskingService);
    formsService = inject(FormsService);
    heldTask?: Task = undefined;

    onDragStart(event: DragEvent, task: Task) {
        this.heldTask = task;
        console.log('HOLDING: ' + this.heldTask.taskID);
    }

    onDragOver(event: DragEvent) {
        event.preventDefault();
    }

    onTaskDrop(event: DragEvent, taskColumnStatus: TaskStatus) {
        event.preventDefault();
        this.taskingService.updateTaskStatus(this.heldTask, taskColumnStatus);
        this.heldTask = undefined;
    }
}
