
const initialState = {

    persons: []

};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PERSON':

            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            };

            return {
                ...state,
                persons: state.persons.concat(newPerson)

            };


        case 'DELETE_PERSON':
            const updatedArray = state.persons.filter(result  => result.id !== action.resultId);
            return {
                ...state,
                results: updatedArray

            }

        // case actionTypes.DECREMENT:
        //     return {
        //         ...state,
        //         counter: state.counter - 1
        //     };
        // case actionTypes.ADD_FIVE:
        //     return {
        //         ...state,
        //         counter: state.counter + action.value
        //     };
        // case actionTypes.SUB_FIVE:
        //     return {
        //         ...state,
        //         counter: state.counter - action.value
        //     };
        //
        // case actionTypes.STORE_RESULT:
        //     return{
        //         ...state,
        //         results: state.results.concat({id: new Date(), value: state.counter})
        //     };
        // case actionTypes.DELETE_RESULT:
        //     // const id = 2;
        //     // const newArray = [...state.results];
        //     // newArray.result.splice(id,1);
        //
        //     const updatedArray = state.results.filter(result  => result.id !== action.resultId);
        //     return {
        //         ...state,
        //         results: updatedArray
        //
        //     }


    }


    return state;
};

export default reducer;
