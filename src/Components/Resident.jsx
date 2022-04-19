
import {useParams} from "react-router"
import {useDispatch, useSelector} from "react-redux"
import { ResidentSuccessDetails } from "../Redux/Resident/action";
import { useEffect } from "react";


export const Resident = () => {

    const {id} = useParams();

    useEffect(() =>{gettingData()},[])
    const dispatch = useDispatch()
    //console.log(id)

    const store = useSelector((store)=>store.resident.flat)
    //console.log(store)

    const gettingData =() => {
        dispatch(ResidentSuccessDetails(id))
    }

    return(
        <div>

            <img id="mainImg" src={store.imgUrl} />
            <h1 id="pro">{store.name}</h1>
            <h3 id="pro">{store.gender}</h3>
            <h3 id="pro">{store.age}</h3>
        </div>
    )
}