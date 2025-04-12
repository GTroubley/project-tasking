import { Component, inject } from '@angular/core';
import { TaskingService } from '../Services/tasking.service';

@Component({
    selector: 'app-projects-area',
    imports: [],
    templateUrl: './projects-area.component.html',
    styleUrl: './projects-area.component.scss',
})
export class ProjectsAreaComponent {
    taskingService = inject(TaskingService);

    onCreateTaskClicked(){
        this.taskingService.addTask();
    }
}
