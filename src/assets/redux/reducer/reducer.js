const IntState = {
    task : []
}

export const TaskReducer = (state= IntState, action)=>{
    switch(action.type){
       case 'getTask':
        console.log(action.payload);
        const task = action.payload.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        console.log(task);
        return {
            ...state,
            task : task
        }

        default :
        return state
    }
}
