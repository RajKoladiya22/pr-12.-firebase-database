import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useEffect, useState } from 'preact/hooks';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TASK, GET_TASK } from './assets/redux/action/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function App() {

  const record = useSelector((state)=>state.task.task)
  console.log(record);
  const dispatch = useDispatch();
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
       task : task
    }
    dispatch(ADD_TASK(obj));
    setTask('');
  }
  
  useEffect(()=>{
    dispatch(GET_TASK());
  },[])

  return (
    <>
      <Container>
        <div className="main col-lg-10 justify-content-center d-flex">
          <div className="header w-100">
            <h1 className="head  w-100 justify-content-center d-flex text-white">
              {" "}
              TO DO LIST
            </h1>
            <div>
              <form
                action=""
                className="d-flex justify-content-between"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Enter Task..."
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                >
                </input>
                <button className="btn btn-primary mx-1" type="submit">
                  Submit
                </button>

              </form>
            </div>
            <div className="box">
              <table className="table table-striped" border={"1px"}>
                <thead>
                  <tr>
                    <th className="work">Work</th>
                    <th className="action">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                   record && record.length > 0 && record.map(val =>{
                    return(
                      <>
                      {val.task}
                      </>
                    )
                   })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
}
