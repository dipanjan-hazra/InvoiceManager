package com.invoicedata.server.Controler;

import com.invoicedata.server.model.Invoice;
import com.invoicedata.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {
    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public  Invoice addInvoice(@RequestBody Invoice invoice){
        return  this.invoiceService.addInvoice(invoice);
    }
    @GetMapping("/invoice")
    public List<Invoice> getAllInvoices(){
        return this.invoiceService.getInvoices();
    }
    @DeleteMapping ("/invoice/{id}")
    public Invoice deleteInvoice(@PathVariable String id){
        return  this.invoiceService.deleteInvoice(Long.parseLong(id));
    }
}
