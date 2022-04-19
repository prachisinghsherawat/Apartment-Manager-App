import axios from "axios";


export const RESIDENT_LOADING = "RESIDENT_LOADING";
export const RESIDENT_SUCCESS = "RESIDENT_SUCCESS";
export const RESIDENT_ERROR = "RESIDENT_ERROR";


export const residentLoading = ()=>({
    type:RESIDENT_LOADING
})

export const residentSuccess = (payload)=>({
    type:RESIDENT_SUCCESS,
    payload
})
export const residentError = ()=>({
    type:RESIDENT_ERROR
})




export const ResidentSuccessDetails = (id)=>(dispatch)=>{
   
      dispatch(residentLoading());
      axios.get(`https://apartment-manager-prachisingh.herokuapp.com/resident/${id}`).then((res)=>{
          
        dispatch(residentSuccess(res.data));
      }).catch(()=>{
        residentError()
      })
      
}