import { Component, Input } from '@angular/core';
import { Project } from '../../Types/types.model';

@Component({
    selector: 'app-project',
    imports: [],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss',
})
export class ProjectComponent {
    @Input({ required: true }) project!: Project;
}
