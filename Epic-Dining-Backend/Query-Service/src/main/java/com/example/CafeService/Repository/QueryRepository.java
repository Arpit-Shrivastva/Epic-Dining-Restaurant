package com.example.CafeService.Repository;

import com.example.CafeService.Model.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QueryRepository extends MongoRepository<Query, String> {
}
