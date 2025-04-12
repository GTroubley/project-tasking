import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProjectsAreaComponent } from './projects-area/projects-area.component';
import { TaskComponent } from './tasks/task/task.component';
import type { TaskColumn, TaskStatus } from './Types/types.model';
import { TaskingService } from './Services/tasking.service';

@Component({
    selector: 'app-root',
    imports: [
        /*RouterOutlet,*/
        HeaderComponent,
        ProjectsAreaComponent,
        TaskComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'project-tasking';
    taskingService = inject(TaskingService);
}
