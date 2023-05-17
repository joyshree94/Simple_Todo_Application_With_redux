import {ADDED,TOGGOLED,COLOURSELECTED,DELETED,ALLCOMPLETED,CLEARCOMPLETED,LOADED} from './actionTypes'; 
 const initialState = [
   /* {
        id: 1,
        text: "Learn React JS",
        completed: true,
    },
    {
        id: 2,
        text: "Learn Redux",
        completed: false,
        color: "red",
    },*/
];
const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOADED:
            return [
                ...action.payload,action.payload
                
            ];
           // return action.payload;
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false,
                },
            ];

        case TOGGOLED:
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed,
                };
            });

        case COLOURSELECTED:
            const { todoId, color } = action.payload;
            return state.map((todo) => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color: color,
                };
            });

        case DELETED:
            return state.filter((todo) => todo.id !== action.payload);

        case ALLCOMPLETED:
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: true,
                };
            });

        case CLEARCOMPLETED:
            return state.filter((todo) => !todo.completed);

        default:
            return state;
    }

}

export default reducer;