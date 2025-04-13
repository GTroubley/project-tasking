import { Injectable, signal } from '@angular/core';
import { TaskSeverity, TaskStatus, type Task, type TaskColumn } from '../Types/types.model';

@Injectable({ providedIn: 'root' })
export class TaskingService {
    tasksData = signal<Task[]>([]);
    taskColumnData = signal<TaskColumn[]>([
        { title: 'Waiting', status: TaskStatus.Waiting },
        { title: 'Working On', status: TaskStatus.WorkingOn },
        { title: 'Completed', status: TaskStatus.Completed },
    ]);

    // Updates Task with the given status
    updateTaskStatus(task: Task|undefined, status: TaskStatus) {
        let rec:Task|undefined = this.tasksData().find((x:Task)=> x.taskID === task?.taskID);
        if(rec)
            rec.status = status;
    }

    addTask() {
        let rand = Math.floor(Math.random() * 10000);
        let newTask: Task = {
            projectID: 1,
            taskID: rand,
            desc: `This is Task-${rand}, bla bla bla bla bla bla`,
            severity: Math.floor(Math.random() * 4),
            assignee: 'BEL',
            status: 0,
        };

        let currentTasks = this.tasksData();

        this.tasksData.set([...currentTasks, newTask]);
        console.log(this.tasksData());
    }
}
