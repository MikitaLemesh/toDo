const tasks: Array<Tasks> = [
    {
      id: 1,
      task: "HTML&CSS",
      isDone: true
    },
    {
      id: 2,
      task: "JS",
      isDone: true
    },
    {
      id: 3,
      task: "React",
      isDone: true
    },  
]

type Tasks = {
  id: number,
  task: string,
  isDone: boolean
}

export default tasks;