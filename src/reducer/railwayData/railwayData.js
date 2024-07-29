import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getData = createAsyncThunk(
    "railwayData/getData",
    async () => {
        try {
            let { data } = await axios.get('http://localhost:3000/data')
            return data
        } catch (error) {
            console.error(error);
        }
    }
)
export const getMode = createAsyncThunk(
  "railwayData/getMode",
  async () => {
    try {
      let { data } = await axios.get("http://localhost:3000/darkmode")
      return data
    } catch (error) {
      console.error(error);
    }
  }
)
export const changeMode = createAsyncThunk(
  "railwayData/changeMode",
  async (mode, {dispatch}) => {
    try { 
      
      await axios.put(`http://localhost:3000/darkmode/1`, {
        id: mode.id,
        lightDarkMode: !mode.lightDarkMode
      })
      dispatch(getMode())
    } catch (error) {
      console.error(error);
    }
  }
)

export const railwaySlice = createSlice({
  name: 'railway',
  initialState: {
    data: [],
    isDarkMode: [],
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload?.news;
    }); 
    builder.addCase(getMode.fulfilled, (state, action) => {
      action.payload.forEach((el) => {
        state.isDarkMode = el
      })
    })

}

})

// export const {  } = railwaySlice.actions

export default railwaySlice.reducer