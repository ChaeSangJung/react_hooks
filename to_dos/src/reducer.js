import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  toDos: [],
  completed: []
};

export const ADD = "add";
export const DEL = "del"
export const COMPLETE = "complete";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:      
      return { 
          ...state,
          toDos: [...state.toDos, { id: uuidv4(), text: action.payload }] 
        };
    case DEL:      
      return { 
        ...state,
        toDos: state.toDos.filter(toDo =>{
        console.log(toDo.id, action.payload);
        return toDo.id !== action.payload;
      })
    };
    case COMPLETE:
        const target = state.toDos.find(toDo => toDo.id === action.payload);        

        return{
            ...state,
            toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
            completed: [...state.completed, { ...target }]            
        };
    default:
      return;
  }  
};

export default reducer;