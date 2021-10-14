export const AgendaReducer = (state, action) => {
    
    //TODO: this could be in an array
    switch (action.type) {
        case "agenda/add":
            return [...state, action.payload];
        case "agenda/delete":
            return state.filter(agenda => agenda.id !== action.payload.id);
        default:
            return state;
    }
}
