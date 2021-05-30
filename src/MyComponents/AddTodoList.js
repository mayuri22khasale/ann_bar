import React ,{useState}from 'react'

export default function AddTodoList({addToDoList}) {
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");

let submit=(e) => {
    e.preventDefault();
    if(!title||!desc){
        alert("Please enter all data");
    }
    addToDoList(title,desc);
}
    return (
        <div className="container">
<form onSubmit={submit}>
  <div>
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" value ={title} onChange={e=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div >
    <label for="exampleInputPassword1" className="form-label">Desccription</label>
    <input type="string" className="form-control" value={desc}  onChange={e=>setDesc(e.target.value)} id="exampleInputPassword1"/>
  </div>
  <br></br>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

