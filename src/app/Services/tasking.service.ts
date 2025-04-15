import { inject, Injectable, OnInit, signal } from '@angular/core';
import {
    Project,
    TaskSeverity,
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
        console.log("load");
        this.tasksData.set(this.sessionService.loadTasksData('tasksData'));
        this.projectsData.set(this.sessionService.loadTasksData('projectsData'));
    }

    // Updates Task with the given status
    updateTaskStatus(task: Task | undefined, status: TaskStatus) {
        let rec: Task | undefined = this.tasksData().find(
            (x: Task) => x.taskID === task?.taskID
        );
        if (rec) rec.status = status;
        this.sessionService.saveData(this.tasksData(), 'tasksData');
    }

    addTask() {
        let rand = Math.floor(Math.random() * 10000);
        let newTask: Task = {
            projectID: this.selectedProjectID()!,
            taskID: this.tasksData().length,
            desc: `This is Task-${rand}, bla bla bla bla bla bla`,
            severity: Math.floor(Math.random() * 4),
            assignee: 'BEL',
            status: 0,
        };

        let currentTasks = this.tasksData();

        this.tasksData.set([...currentTasks, newTask]);
        console.log(this.tasksData());
        this.sessionService.saveData(this.tasksData(), 'tasksData');
    }

    addProject() {
        let newProject: Project = {
            projectID: this.projectsData().length + 1,
            desc: 'This project consists of many tasks!',
        };
        let currentProjects = this.projectsData();

        this.projectsData.set([...currentProjects, newProject]);
        console.log(this.projectsData());
        this.sessionService.saveData(this.projectsData(), 'projectsData');
    }

    selectProject(projectID: number | null) {
        this.selectedProjectID.set(projectID);
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
