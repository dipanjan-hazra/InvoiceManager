package com.invoicedata.server.services;

import com.invoicedata.server.model.Invoice;

import java.util.List;

public interface InvoiceService {

    public  Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoices();

    public Invoice deleteInvoice(Long id);
}
