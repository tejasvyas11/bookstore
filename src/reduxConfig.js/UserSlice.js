import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name : 'user',
    initialState : {
        value : {
            name : undefined ,
            role : undefined ,
            token : undefined ,
            islogin : false
        }
    },
    reducers : {
        setUserInfo : (state,action)=>
        {
            state.value = action.payload;
        },
        delUserInfo : (state,action)=>
        {
            state.value = {
                name : undefined ,
                role : undefined ,
                token : undefined ,
                islogin : false
            }
        }
    }
})
export default slice.reducer;
 export const {setUserInfo,delUserInfo} = slice.actions;