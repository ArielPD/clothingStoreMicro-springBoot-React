package com.apd.product;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/products")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok(productService.getProducts());
    }

    @GetMapping("/filters")
    public ResponseEntity testProducts() {
        HashMap<String, List<String>> response = new HashMap<>();
        response.put("brands", productService.getBrands());
        response.put("types", productService.getTypes());
        return ResponseEntity.ok(response);
    }
}
