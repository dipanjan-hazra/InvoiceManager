package com.invoicedata.server.dao;

import com.invoicedata.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice,Long> {
//    custom implementation
}
