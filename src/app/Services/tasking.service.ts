import { Injectable, signal } from '@angular/core';
import { TaskStatus, type Task, type TaskColumn } from '../Types/types.model';

@Injectable({ providedIn: 'root' })
export class TaskingService {
    tasksData = signal<Task[]>([]);
    taskColumnData = signal<TaskColumn[]>([
        { title: 'Waiting', status: TaskStatus.Waiting },
        { title: 'Working On', status: TaskStatus.WorkingOn },
        { title: 'Completed', status: TaskStatus.Completed },
    ]);

    getTasks() {
        return this.tasksData;
    }

    addTask() {
        let rand = Math.floor(Math.random() * 10000);
        let newTask: Task = {
            projectID: 1,
            taskID: rand,
            desc: `Task ${rand}`,
            severity: 1,
            assignee: 'BEL',
            status: 0,
        };

        let currentTasks = this.tasksData();

        this.tasksData.set([...currentTasks, newTask]);
        console.log(this.tasksData());
    }
}
