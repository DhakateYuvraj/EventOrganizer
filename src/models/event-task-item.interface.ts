export interface TaskItem{
    taskName: string,
    severity: string
}

export interface EventTaskItem{
    eventId: string,
    task: [TaskItem]
}