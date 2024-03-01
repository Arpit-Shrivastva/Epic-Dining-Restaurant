package com.example.PaymentService.domain;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
public class Payment {
    private String orderAmount;
    private String orderInfo;
}
