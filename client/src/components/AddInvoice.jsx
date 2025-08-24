import{useState} from 'react'

import {Box, Typography,TextField, Button, styled} from "@mui/material"

import { saveInvoice } from '../services/api'

const Component = styled(Box)({
    marginTop:20,
    marginLeft:30,
    '&>p':{
        fontSize:26,
        marginBottom:10,
    },
    '&>div>div':{
        marginRight:20,
        minWidth: 200
    }
})
const defaultObj ={
    vendor: '',
    product : '',
    amount : 0,
    date : '',
    action : 'pending'
}

const AddInvoice =({setAddInvoice})=>{
    const[invoice,setInvoice]=useState(defaultObj);
    const onValueChange = (e)=>{
        setInvoice({...invoice,[e.target.name]: e.target.value})
    };

    const addNewInvoice= async()=>{
      await  saveInvoice({...invoice,amount: Number(invoice['amount'])});
        setAddInvoice(false);
    }
    return (
        <Component>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField variant="standard" placeholder="Enter Vendor Name"
                onChange={(e)=>onValueChange(e)}
                name='vendor'/>
                <TextField variant="standard" placeholder="Enter Product Name"
                onChange={(e)=>onValueChange(e)}
                name='product'/>
                <TextField variant="standard" placeholder="amount"
                type="number"
                onChange={(e)=>onValueChange(e)}
                name='amount'/>

                <TextField variant="standard" placeholder="Enter Date"
                type="Date"
                onChange={(e)=>onValueChange(e)}
                name='Date'/>
                <Button variant="contained"
                onClick={()=>addNewInvoice()}> Save </Button>
            </Box>
        </Component>
    )
}

export default AddInvoice;