export interface Project{
    projectID: number;
    desc: string;
}

// TYPE for Task - describes a single task
// Task ID must be unique
export interface Task{
    projectID: number;
    taskID: number;         
    desc: string;
    severity: TaskSeverity;
    assignee: string;
    status: TaskStatus;
}

// TYPE for TaskColumn - describes a column task 
// Status of a task column must be unique
export interface TaskColumn{
    title: string;
    status: TaskStatus;     
}

// ENUMERATION for TaskStatus - describes the status of a task
export enum TaskStatus{
    Waiting,
    WorkingOn,
    Completed
}

// ENUMERATION for task severity - categorizes the urgency of a task
export enum TaskSeverity{
    Low,
    Medium,
    High,
    Critical
}