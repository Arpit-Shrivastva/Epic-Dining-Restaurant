package com.example.CafeService.Model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Query")
public class Query {

    @Id
    private String queryId;
    private String fullName;
    private String email;
    private long mobileNumber;
    private String message;
}
