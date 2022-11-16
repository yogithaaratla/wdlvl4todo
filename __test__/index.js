/* eslint-disable no-undef */
const todoList=require('../todo');
const{all, markAsComplete,add,overdue,dueToday,dueLater}=todoList();
const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  let dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
describe("To do list testing",()=>{
    beforeAll(()=>{
        add({
            title:"Test todo task0",
            completed: false,
            dueDate:new Date().toLocaleDateString("en-CA")
        }); 
    })
    test("Add a new todo in list",()=>{
        const tdCount=all.length;
        add({
            title:"Test todo task1",
            completed:false,
            dueDate:today,
        });
        expect(all.length).toBe(tdCount+1);
    })
    test("Marking to-do as Complete",()=>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
  
    })
    test("Should retrieve overdue todos",()=>{
        let overduelist=overdue();
        let count=overduelist.length;
        add({
            title:"Test todo task2",
            completed:false,
            dueDate:yesterday
        });
        overduelist=overdue();
        expect(overduelist.length).toBe(count+1);
    })
    test("Should retrieve todos due today",()=>{
        let todaydue=dueToday();
        let count=todaydue.length;
        add({
            title:"Test todo task3",
            completed:false,
            dueDate:today,
        });
        todaydue=dueToday();
        expect(todaydue.length).toBe(count+1);
    })
    test("Should retrieve due later items",()=>{
        let tomodue=dueLater();
        let count=tomodue.length;
        add({
            title:"Test todo4",
            completed:false,
            dueDate:tomorrow,
        });
        tomodue=dueLater();
        expect(tomodue.length).toBe(count+1);
    })

})
