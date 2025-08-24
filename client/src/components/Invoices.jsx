 
 import{Table,TableHead,TableBody,TableCell,TableRow,Button,styled, Typography} from '@mui/material';

const StyledTable = styled(Table)({
    width:'80%',
    margin: 40,
    marginLeft:40,
    marginTop :20,
    '&>thead>tr>th':{
        background:'grey',
        color: '#ffffff',
        fontSize: 18
    },
    '&>tbody>tr>td':{
        fontSize: 16,
    },
      '&>tbody>tr>td.button:hover':{
        background:'grey'
      },
      '&>tbody >p':{
        fontSize:25,
        marginTop:20,
        

      }
})


 const Invoice=({invoices,removeInvoice})=>{
    return(
        <StyledTable>
            <TableHead>
                <TableRow>
                      <TableCell>Vendor</TableCell>
                      <TableCell>Product</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                   invoices && Array.isArray(invoices) &&invoices.length> 0 ?invoices.map(invoice =>(
                        <TableRow>
                            <TableCell>
                                {invoice.vendor}
                            </TableCell>
                             <TableCell>
                                {invoice.product}
                            </TableCell>
                             <TableCell>
                                {invoice.amount}
                            </TableCell>
                             <TableCell>
                                {invoice.date}
                            </TableCell>
                            <TableCell>{invoice.action}</TableCell>
                             <TableCell>
                                <Button variant='contained' color='success'
                                onClick={()=>removeInvoice(invoice.id)}
                                >Mark Done</Button>
                            </TableCell>
                        </TableRow>
                    ))
                    :
                    <Typography>No Pending Invoices </Typography>
                }
            </TableBody>
        </StyledTable>
    )
 }

 export default Invoice;