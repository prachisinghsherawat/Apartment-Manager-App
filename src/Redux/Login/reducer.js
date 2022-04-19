import { LOGIN_LOADING , LOGIN_SUCCESS , LOGIN_ERROR} from "./action"


const initState = {
  
    loading:false,
    isAuth:false,
    token:"",
    error:false

}




const Loginreducer = (store=initState , {type,payload})=>{

      switch(type){
        case LOGIN_LOADING:
            return {...store , loading:true}
          case LOGIN_SUCCESS:
              return {...store , loading:false , isAuth:true , token:payload , error:false }
              case LOGIN_ERROR:
                  return {...store, loading:false , isAuth:false , error:true} 
                  default:
                      return store
      }

}

export {Loginreducer}