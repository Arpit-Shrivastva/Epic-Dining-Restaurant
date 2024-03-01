package com.example.CafeService.controller;

import com.example.CafeService.Model.Query;
import com.example.CafeService.Service.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("query")
public class QueryController {
    private final QueryService queryService;

    @Autowired
    public QueryController(QueryService queryService) {
        this.queryService = queryService;
    }

    @PostMapping("/post")
    public ResponseEntity<?> postQuery(@RequestBody Query query){
        return new ResponseEntity<>(queryService.saveQuery(query), HttpStatus.CREATED);
    }

    @GetMapping("/fetch")
    public ResponseEntity<?> getQuery(){
        return new ResponseEntity<>(queryService.allQuery(), HttpStatus.OK);
    }
}
