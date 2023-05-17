import {loaded} from "../actions";

const fetchtodos=async(dispatch,getstate)=>{
    const response=await fetch("http://localhost:9000/todos");
    const todos = await response.json();
    dispatch(loaded(todos));

}
export default fetchtodos;