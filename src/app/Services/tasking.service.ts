import { inject, Injectable, signal } from '@angular/core';
import {
    Project,
    ProjectFormInput,
    TaskFormInput,
    TaskStatus,
    type Task,
    type TaskColumn,
} from '../Types/types.model';
import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class TaskingService {
    sessionService = inject(SessionService);
    projectsData = signal<Project[]>([]);
    tasksData = signal<Task[]>([]);
    taskColumnData = signal<TaskColumn[]>([
        { title: 'Waiting', status: TaskStatus.Waiting },
        { title: 'Working On', status: TaskStatus.WorkingOn },
        { title: 'Completed', status: TaskStatus.Completed },
    ]);
    selectedProjectID = signal<number | null>(null);

    constructor() {
        let tasks = this.sessionService.loadTasksData('tasksData');
        let projects = this.sessionService.loadTasksData('projectsData');
        if (tasks) this.tasksData.set(tasks);
        if (projects) this.projectsData.set(projects);
    }

    // Updates Task with the given status
    updateTaskStatus(task: Task | undefined, status: TaskStatus) {
        let rec: Task | undefined = this.tasksData().find(
            (x: Task) => x.taskID === task?.taskID
        );
        if (rec) rec.status = status;
        this.sessionService.saveData(this.tasksData(), 'tasksData');
    }

    addTask(data: TaskFormInput) {
        let newTask: Task = {
            projectID: this.selectedProjectID()!,
            taskID: this.tasksData().length,
            desc: data.taskTitle,
            severity: data.taskSeverity,
            assignee: data.taskAssignee,
            status: 0,
        };

        let currentTasks = this.tasksData();

        this.tasksData.set([...currentTasks, newTask]);
        console.log(this.tasksData());
        this.sessionService.saveData(this.tasksData(), 'tasksData');
    }

    addProject(data: ProjectFormInput) {
        let newProject: Project = {
            projectID: this.projectsData().length + 1,
            desc: data.projectTitle,
        };
        let currentProjects = this.projectsData();

        this.projectsData.set([...currentProjects, newProject]);
        console.log(this.projectsData());
        this.sessionService.saveData(this.projectsData(), 'projectsData');
    }

    selectProject(projectID: number | null) {
        this.selectedProjectID.set(projectID === this.selectedProjectID() ? null : projectID);
    }

    getSelectedProjectTasks() {
        return this.tasksData().filter(
            (task) => task.projectID === this.selectedProjectID()
        );
    }

    shouldDisable() {
        return this.selectedProjectID() === null;
    }
}
