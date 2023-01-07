import Task from './Task';

function List({ tasks }) {

  return (
    <div className="ListOfTasks">

        {tasks.map(task => {
            return <Task task={task}/>
        })}
        
    </div>
  );
}

export default List;
