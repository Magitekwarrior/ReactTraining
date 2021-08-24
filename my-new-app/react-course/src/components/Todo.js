function Todo(props) {

  function deleteHandler(){
    console.log('Clicked delete for: ', props.text);
  }

  return(
    <div>
      <h1>A Todo</h1>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler} >Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;