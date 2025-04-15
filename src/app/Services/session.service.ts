import { Injectable } from '@angular/core';
import { Project, Task } from '../Types/types.model';

@Injectable({ providedIn: 'root' })
export class SessionService {
    saveData(data: Task[] | Project[], key: string) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    loadTasksData(key: string) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
}
