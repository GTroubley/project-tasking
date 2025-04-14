import { Component, inject } from '@angular/core';
import { TaskingService } from '../Services/tasking.service';
import { ProjectComponent } from "./project/project.component";
import { Project } from '../Types/types.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects-area',
    imports: [ProjectComponent, CommonModule],
    templateUrl: './projects-area.component.html',
    styleUrl: './projects-area.component.scss',
})
export class ProjectsAreaComponent {
    taskingService = inject(TaskingService);
    selectedProject?: Project = undefined;

    onCreateTaskClicked(){
        this.taskingService.addTask();
    }

    onAddProjectClicked(){
        this.taskingService.addProject();
    }

    onProjectClick(project:Project){
        this.taskingService.selectProject(project.projectID);
    }
}
