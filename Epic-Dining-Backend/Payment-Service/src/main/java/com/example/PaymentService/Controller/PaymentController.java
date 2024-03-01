package com.example.PaymentService.Controller;

import com.example.PaymentService.domain.Payment;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
public class PaymentController {
    @PostMapping("/createOrder")
    @ResponseBody
    public ResponseEntity<?> createOrder(@RequestBody Payment payment){
        com.razorpay.Order order1;
        try {
            var client=new RazorpayClient("rzp_test_pVaEM3TS2Oh7JN","KuubExufG6n0XJJ70YNwv7yU");
            JSONObject orderRequest=new JSONObject();
            orderRequest.put("amount", payment.getOrderAmount());
            orderRequest.put("currency","INR");
            orderRequest.put("receipt", "tnx_235425");
            System.out.println(orderRequest);
            //creating new order
            order1=client.orders.create(orderRequest);
            System.out.println(order1);
        } catch (RazorpayException e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>(order1.toString(), HttpStatus.CREATED);
    }
}
