
import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import AddInvoice from '../components/AddInvoice'
import Invoices from '../components/Invoices'
import { getAllInvoice,deleteInvoice} from '../services/api'
import {Box,Typography,Button} from "@mui/material"



const Home = ()=>{
      const [addInvoice,setAddInvoice]=useState(false);
      const [invoices,setInvoices] = useState([]);
    
      useEffect(()=>{
          const getData = async()=>{
              const response = await getAllInvoice();
              setInvoices(response.data);
            }
          getData();
      },[addInvoice])
const toogleInvoice = ()=>{
      setAddInvoice(true);
    }

const removeInvoice=async(id)=>{
  await deleteInvoice(id);
 const UpdatedInvoice =  invoices.filter(invoice => invoice.id !=id);
  setInvoices ( UpdatedInvoice);
}



    return(
        <>
        <Header/>
            <Box>
                <Typography style={{marginTop:10, marginLeft:30,color:'black',}}>Pending Invoices</Typography>
              {!addInvoice &&<Button variant='contained' style={{marginTop : 15,marginLeft:30}} onClick={()=>toogleInvoice()}>Add Invoice</Button>}
                 {addInvoice && <AddInvoice setAddInvoice={setAddInvoice}/>}
            
                <Box>
                  <Invoices 
                  invoices={invoices}
                  removeInvoice={removeInvoice}/>
                </Box>
            </Box>
           
        </>
    )
}

export default Home;