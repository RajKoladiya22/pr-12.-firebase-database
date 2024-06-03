import { toast } from "react-toastify";
import { app } from "../../../firebase";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { App } from "../../../app";

export const GET_TASK = () => {
    return async (dispatch) => {
        try {
            let db = getFirestore(app);
            let task = await getDocs(collection(db, "task"));
            console.log(task);
            dispatch({
                type: 'getTask',
                payload : task
            })
        } catch (err) {
            toast.error(`Error ${err}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              console.log(err);
              return false;
        }
    }
}



export const ADD_TASK = (task) => {
  return async(dispatch) => {
    try {
        const db = getFirestore(app);
        const data = await addDoc(collection(db, 'task'),{ task: task.task });
        toast.success('Task Added!!')
    } catch (err) {
        toast.error(`Error ${err}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(err);
      return false;
    }
  };
};
