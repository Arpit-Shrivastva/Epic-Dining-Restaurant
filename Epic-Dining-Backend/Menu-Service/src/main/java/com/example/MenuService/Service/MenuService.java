package com.example.MenuService.Service;

import com.example.MenuService.Model.Menu;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MenuService {
    Menu saveMenuWithPhoto(Menu menu);

    Menu getProductByName(String productName);
    List<Menu> getAllMenus();

    Menu updateDescription(String productId, Menu menu);

    Menu updatePrice(String productId, Menu menu);

    boolean deleteProduct(String productId);
}
