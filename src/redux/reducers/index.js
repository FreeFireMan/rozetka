const initialState={
    favorites:[12],
    inBasket:[12]
}
export const reducer=(state=initialState,action)=>{
    switch (action.type){
        case 'SAY':
            console.log(state.favorites)
            return {...state};
        default:
            return state;
    }
}
