package com.example.MenuService.Repository;

import com.example.MenuService.Model.Menu;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMenuRepository extends MongoRepository<Menu, String> {
    Menu findByProductName(String productName);
}
