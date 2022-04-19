
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export const Home = () => {

    const navigate = useNavigate()

    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const [sort , setSort] = useState(0);
    const [type,setType] = useState("")

    useEffect(()=>{getData()},[page,sort,type])

    const getData = () => {

        axios.get(`https://apartment-manager-prachisingh.herokuapp.com/flat?page=${page}&sort=${sort}&type=${type}`).then((res)=>{
            setData(res.data)
        })
    }
    //console.log(page)
    //console.log(sort)

    return(

        <>
        <div className="main">

        {/* Filter Page ---------------------------------------------------------------> */}

        <div className="left">

        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Resident</FormLabel><br />
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group">
        <FormControlLabel onClick={()=>setType("Owner")} value="Owner" control={<Radio />} label="Owner" />
        <FormControlLabel onClick={()=>setType("Tenant")} value="Tenant" control={<Radio />} label="Tenant" />
        </RadioGroup>
       </FormControl><br /><br /><br />

       <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Flat Number</FormLabel><br />
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group">
        <FormControlLabel onClick={()=>setSort(1)} value={1} control={<Radio />} label="Acending" />
        <FormControlLabel onClick={()=>setSort(-1)} value={-1} control={<Radio />} label="Decending" />
        </RadioGroup>
       </FormControl>
        </div>

        {/* Product Page -------------------------------------------------------------------------> */}

        <div className="right">
            <table>
                <thead>
                    <tr>
                        <th>BLOCK</th>
                        <th>TYPE</th>
                        <th>HOUSE NUMBER</th>
                        <th>APARTMENT</th>
                    </tr>
                </thead>
                <tbody>
                   {data.map((el)=>(
                        <tr key={el._id}>
                            <td><button onClick={()=> navigate(`/resident/${el.resident_id}`)} id="btnName">{el.block}</button></td>
                            <td>{el.type}</td>
                            <td>{el.house_no}</td>
                            <td id="imgBox"><img src={el.imgUrl} /></td>
                        
                        </tr>
                   ))}
                </tbody>
            </table>


            {/* Pagination ---------------------------------------------------------------> */}

            <div id="pagination">
                <button id="pagebtn" disabled={page==1} onClick={()=>setPage(page-1)}>Prev</button>
                <button id="pagebtn" onClick={()=>setPage(page+1)}>Next</button>
            </div>

        
        </div>


        </div>
        </>
    )

}