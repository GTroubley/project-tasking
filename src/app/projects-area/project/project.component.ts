import { Component, inject, Input } from '@angular/core';
import { Project } from '../../Types/types.model';
import { CommonModule } from '@angular/common';
import { TaskingService } from '../../Services/tasking.service';

@Component({
    selector: 'app-project',
    imports: [CommonModule],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss',
})
export class ProjectComponent {
    taskingService = inject(TaskingService);
    @Input({ required: true }) project!: Project;
}
