function Button(){
  function handleClick(){
    alert('OMG! You can\'t just click other people\'s buttons!!');
  }
  return(
    <button onClick={handleClick}> 
    Button!
    </button>
    );
}

export default function myApp(){
  return(
    <div>
      <h1>Welcome to my react? app</h1>
      <Button/>
    </div>
  );
}