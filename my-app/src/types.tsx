export type Task = {
  id: number,
  task: string,
  isDone: boolean
}

export type PropsTypes = {
  tasks: Array<Task>,
  removeTask: (id: number) => void,
  addTask: (newTaskValue: string) => void,
}