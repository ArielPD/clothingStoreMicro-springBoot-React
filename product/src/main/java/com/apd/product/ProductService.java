package com.apd.product;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {
    private final ProductRepoitory productRepoitory;

    public List<Product> getProducts() {
        return productRepoitory.findAll();
    }
}
