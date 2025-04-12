import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProjectsAreaComponent } from './projects-area/projects-area.component';
import { TasksColumnComponent } from './tasks/tasks-column/tasks-column.component';

@Component({
    selector: 'app-root',
    imports: [
        /*RouterOutlet,*/
        HeaderComponent,
        ProjectsAreaComponent,
        TasksColumnComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'project-tasking';
}
