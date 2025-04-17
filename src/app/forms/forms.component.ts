import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskingService } from '../Services/tasking.service';
import { FormsService } from '../Services/forms.service';
import { ProjectFormInput, TaskFormInput } from '../Types/types.model';

@Component({
    selector: 'app-forms',
    imports: [FormsModule],
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.scss',
})
export class FormsComponent {
    taskingService = inject(TaskingService);
    formsService = inject(FormsService);

    projectTitle = signal<string>('');
    taskTitle = signal<string>('');
    taskSeverity = signal<number>(0);
    taskAssignee = signal<string>('');

    onProjectFormSubmit() {
        let data: ProjectFormInput = { projectTitle: this.projectTitle() };
        this.taskingService.addProject(data);
        this.closeForm();
    }

    onTaskFormSubmit() {
        let data: TaskFormInput = {
            taskTitle: this.taskTitle(),
            taskSeverity: +this.taskSeverity(),
            taskAssignee: this.taskAssignee(),
        };
        this.taskingService.addTask(data);
        this.closeForm();
    }

    tryCloseForm(event: any) {
        if (event.target.id == 'outsideArea') this.closeForm();
    }

    private closeForm() {
        this.formsService.form().form = undefined;
        this.formsService.form().isOpen = false;
    }
}
