package com.example.CafeService.Service;

import com.example.CafeService.Model.Query;
import com.example.CafeService.Repository.QueryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QueryServiceImpl implements QueryService{

    private final QueryRepository queryRepository;
    @Autowired
    public QueryServiceImpl(QueryRepository queryRepository) {
        this.queryRepository = queryRepository;
    }

    @Override
    public Query saveQuery(Query query) {
        return queryRepository.save(query);
    }

    @Override
    public List<Query> allQuery() {
        return queryRepository.findAll();
    }
}
