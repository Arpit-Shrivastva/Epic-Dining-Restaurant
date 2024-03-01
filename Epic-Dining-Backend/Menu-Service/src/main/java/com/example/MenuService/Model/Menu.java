package com.example.MenuService.Model;

import lombok.Data;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@Document(collection = "user_menu")
public class Menu {
    @Id
    private String productId;
    private String category;
    private String productName;
    private String productPrice;
    private String productDescription;
    private String productPhoto;
}
