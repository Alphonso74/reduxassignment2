
const initialState = {

    persons: []

};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PERSON':

            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Alphonso',
                age: Math.floor(Math.random() * 40)
            };

            return {
                ...state,
                persons: state.persons.concat(newPerson)

            };


        case 'DELETE_PERSON':
            const updatedArray = state.persons.filter(result  => result.id !== action.resultId);
            console.log(action.resultId)
            return {
                ...state,
                persons: updatedArray

            }

    }


    return state;
};

export default reducer;
