import { Component, inject } from '@angular/core';
import { TaskingService } from '../Services/tasking.service';
import { ProjectComponent } from "./project/project.component";

@Component({
    selector: 'app-projects-area',
    imports: [ProjectComponent],
    templateUrl: './projects-area.component.html',
    styleUrl: './projects-area.component.scss',
})
export class ProjectsAreaComponent {
    taskingService = inject(TaskingService);

    onCreateTaskClicked(){
        this.taskingService.addTask();
    }

    onAddProjectClicked(){
        this.taskingService.addProject();
    }
}
