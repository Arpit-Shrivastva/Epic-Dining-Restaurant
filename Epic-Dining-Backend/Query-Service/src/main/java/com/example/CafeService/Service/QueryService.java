package com.example.CafeService.Service;

import com.example.CafeService.Model.Query;

import java.util.List;

public interface QueryService {

    Query saveQuery(Query query);
    List<Query> allQuery();
}
