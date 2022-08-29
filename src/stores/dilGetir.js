import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { createdAPIEndpoint, ENDPOINTS } from '../api/index'

const initialState ={
    data :[],
    loading: false,
    error:""
};

export const fetchDil = createAsyncThunk('fetchDil',async()=>{
    const res =await  createdAPIEndpoint(ENDPOINTS.YABANCIDILLER).fetchAll();
    return res.data;
})

export const dilGetir = createSlice({
  name: 'dilGetir',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchDil.pending,(state,action)=>{
        state.loading=true;
        state.error="";
    });

    builder.addCase(fetchDil.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.loading=false;
    });

    builder.addCase(fetchDil.rejected,(state,action)=>{
        state.loading=false;
        state.error="Hata";
    });
  }
  });

export default dilGetir.reducer
