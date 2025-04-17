// Type for Project - describes a single project
export interface Project{
    projectID: number;      // Project ID must be unique
    desc: string;           // Project title/description
}

// TYPE for Task - describes a single task
export interface Task{
    projectID: number;          // Project ID which this task belongs to
    taskID: number;             // Task ID must be unique
    desc: string;               // Task title/description
    severity: TaskSeverity;     // Task severity
    assignee: string;           // Task assignee
    status: TaskStatus;         // Task status(Waiting, WorkingOn, Completed)
}

// TYPE for TaskColumn - describes a column task 
// Status of a task column must be unique
export interface TaskColumn{
    title: string;              // Task column title (Waiting, WorkingOn, Completed)
    status: TaskStatus;         // (Waiting=0, WorkingOn=1, Completed=2)
}

// ENUMERATION for TaskStatus - describes the status of a task
export enum TaskStatus{
    Waiting,                // 0
    WorkingOn,              // 1
    Completed               // 2
}

// ENUMERATION for task severity - categorizes the urgency of a task
export enum TaskSeverity{
    Low,                    // 0
    Medium,                 // 1
    High,                   // 2
    Critical                // 3
}

// ENUMERATION for form type for Project and Task creation
export enum FormType{
    Project,            // 0
    Task                // 1
}

// TYPE for forms Service
export interface FormView{
    form?: FormType;            // type of active form
    isOpen: boolean;            // is open flag
}

// TYPE of Project Form Input for project creation
export interface ProjectFormInput{
    projectTitle: string;
}

// TYPE of Task Form Input for task creation
export interface TaskFormInput{
    taskTitle: string;
    taskSeverity: number;
    taskAssignee: string;
}