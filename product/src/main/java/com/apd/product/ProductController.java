package com.apd.product;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("api/products")
@CrossOrigin(
        origins = "http://localhost:3000",
        methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
        allowedHeaders = "*",
        allowCredentials = "true")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getProducts(
            @RequestParam("searchTerm") Optional<String>  searchTerm,
            @RequestParam("orderBy") Optional<String> orderBy
    ) {
        return ResponseEntity.ok(productService.getProducts(searchTerm, orderBy));
    }

    @GetMapping("/filters")
    public ResponseEntity testProducts() {
        HashMap<String, List<String>> response = new HashMap<>();
        response.put("brands", productService.getBrands());
        response.put("types", productService.getTypes());
        return ResponseEntity.ok(response);
    }
}
