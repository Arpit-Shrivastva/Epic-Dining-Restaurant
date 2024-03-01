package com.example.MenuService.Service;

import com.example.MenuService.Model.Menu;
import com.example.MenuService.Repository.UserMenuRepository;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
public class MenuServiceImpl implements MenuService{

    private final UserMenuRepository userMenuRepository;

    @Autowired
    public MenuServiceImpl(UserMenuRepository userMenuRepository) {
        this.userMenuRepository = userMenuRepository;
    }

    @Override
    public Menu saveMenuWithPhoto(Menu menu) {
            return userMenuRepository.save(menu);
    }

    @Override
    public Menu getProductByName(String productName) {
        return userMenuRepository.findByProductName(productName);
    }

    @Override
    public List<Menu> getAllMenus() {
        return userMenuRepository.findAll();
    }

    @Override
    public Menu updateDescription(String productId, Menu menu) {
        Optional<Menu> menuOptional = userMenuRepository.findById(productId);

        Menu existingMenu = menuOptional.get();
        existingMenu.setProductDescription(menu.getProductDescription());
        return existingMenu;
    }

    @Override
    public Menu updatePrice(String productId, Menu menu) {
        Optional<Menu> menuOptional = userMenuRepository.findById(productId);

        Menu existingMenu = menuOptional.get();
        existingMenu.setProductPrice(menu.getProductPrice());
        return existingMenu;
    }

    @Override
    public boolean deleteProduct(String productId) {
        userMenuRepository.deleteById(productId);
        return true;
    }
}
