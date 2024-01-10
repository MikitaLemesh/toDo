export type Tasks = {
  id: number,
  task: string,
  isDone: boolean
}

export type PropsTypes = {
  tasks: Array<Tasks>,
  removeTask: (id: number) => void,
}