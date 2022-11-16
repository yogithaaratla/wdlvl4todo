const todoList = () => {
    let all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        let overrdue=[]
        for(let i=0;i<all.length;i++){
            if(all[i].dueDate <today && all[i].completed==false){
                overrdue.push(all[i]);
            }
        }
        return overrdue;
    }
  
    const dueToday = () => {
        let dueT=[]
        for (let i=0;i<all.length;i++){
            if(all[i].dueDate==today){
                dueT.push(all[i]);
            }
        }
        return dueT;
    }
  
    const dueLater = () => {
        let dueL=[]
        for (let i=0;i<all.length;i++){
            if(all[i].dueDate>today && all[i].completed==false){
                dueL.push(all[i]);
            }
        }
        return dueL;
    }
  
    const toDisplayableList = (list) => {
        let str="";
        for(let i=0;i<list.length;i++){
            if(list[i].dueDate==today){
                if(list[i].completed==true){
                str=str+"[x] "+list[i].title;
                }
                else{
                    str=str+"[ ] "+list[i].title;  
                }
            }
            else{
                str=str+"[ ] "+list[i].title+" " +list[i].dueDate;
            }
            if(i==list.length-1){
                return str;
            }
            str=str+"\n";

        }
        return str;
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
   
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")

module.exports=todoList;


