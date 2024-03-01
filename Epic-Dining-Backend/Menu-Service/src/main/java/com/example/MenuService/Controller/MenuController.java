package com.example.MenuService.Controller;

import com.example.MenuService.Model.Menu;
import com.example.MenuService.Service.MenuService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("menu")
public class MenuController {
    private final MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }


    @PostMapping("/save")
    public ResponseEntity<?> saveMenu(@RequestBody Menu menu) {
        Menu savedMenu = menuService.saveMenuWithPhoto(menu);
        return new ResponseEntity<>(savedMenu, HttpStatus.CREATED);
    }


    @GetMapping("/")
    public ResponseEntity<?> getMenu() {
        return new ResponseEntity<>(menuService.getAllMenus(), HttpStatus.OK);
    }

    @GetMapping("/productName/{productName}")
    public ResponseEntity<Menu> getProductByName(@PathVariable String productName) {
        Menu product = menuService.getProductByName(productName);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @PutMapping("/updateDescription/{productId}")
    public ResponseEntity<?> updateDescription(@PathVariable String productId, @RequestBody Menu menu) {
        Menu updatedMenu = menuService.updateDescription(productId, menu);
        if (updatedMenu != null) {
            return new ResponseEntity<>(updatedMenu, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Menu not found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updatePrice/{productId}")
    public ResponseEntity<?> updatePrice(@PathVariable String productId, @RequestBody Menu menu) {
        Menu updatedMenu = menuService.updatePrice(productId, menu);
        if (updatedMenu != null) {
            return new ResponseEntity<>(updatedMenu, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Menu not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteProduct/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable String productId) {
        if (menuService.deleteProduct(productId)) {
            return new ResponseEntity<>("Product deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Menu not found", HttpStatus.NOT_FOUND);
        }
    }
}
