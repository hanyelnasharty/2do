const Tasks = (props) => {
 
    return (
        <>
            <h3>Title: {props.tasks.title}</h3>
            <h3>Description: {props.tasks.description}</h3>
            <h3>completed: {props.tasks.completed}</h3>
            <h3>Created: {props.tasks.createdAt}</h3>
        </>
    )
}

export default Tasks