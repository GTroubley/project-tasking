import { Component, inject } from '@angular/core';
import { TaskingService } from '../Services/tasking.service';
import { ProjectComponent } from "./project/project.component";
import { FormType, Project } from '../Types/types.model';
import { CommonModule } from '@angular/common';
import { FormsService } from '../Services/forms.service';

@Component({
    selector: 'app-projects-area',
    imports: [ProjectComponent, CommonModule],
    templateUrl: './projects-area.component.html',
    styleUrl: './projects-area.component.scss',
})
export class ProjectsAreaComponent {
    taskingService = inject(TaskingService);
    formsService = inject(FormsService);
    selectedProject?: Project = undefined;

    onCreateTaskClicked(){
        this.formsService.form().form = FormType.Task;
        this.formsService.form().isOpen = true;
    }

    onAddProjectClicked(){
        this.formsService.form().form = FormType.Project;
        this.formsService.form().isOpen = true;
    }
}
