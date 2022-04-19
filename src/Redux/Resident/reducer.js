import { RESIDENT_LOADING , RESIDENT_SUCCESS , RESIDENT_ERROR} from "./action"


const initState = {
  
    loading:false,
    flat :[],
    error:false

}


const Residentreducer = (store=initState , {type,payload})=>{

    switch(type){
        case RESIDENT_LOADING:
            return {...store , loading:true}
          case RESIDENT_SUCCESS:
              //console.log(payload)
              return {...store , loading:false ,flat:{...payload}, error:false }
              case RESIDENT_ERROR:
                  return {...store, loading:false , error:true} 
                  default:
                      return store
    }

}

export {Residentreducer}