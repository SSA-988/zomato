let defaultState = {
    selectedItems:{items:[],restaurentName:""}
}
const cartReducer = (state = defaultState,action) => {
    let newState = { ...state };
    switch (action.type)
    {
        case "ADD_TO_CART":{
            //  let newState = { ...state };
             newState.selectedItems = {
               items: [...newState.selectedItems.items, action.payload],
               restaurentName: action.payload.restaurentName,
             };
        console.log(newState, "👉");
        return newState;
            
        }
        case "REMOVE_FROM_CART": {
         
            newState.selectedItems = {
              items: [
                ...newState.selectedItems.items.filter(
                  (item) => item.id !== action.payload.id
                ),
              ],
            //   restaurantName: action.payload.restaurantName,
            };
           
            return newState;
            console.log(newState, "👌");
           
        }
        
            
        default:
            return state;
           
    }
}

export default cartReducer;