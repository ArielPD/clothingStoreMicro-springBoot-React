package com.apd.product;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {
    private final ProductRepository productRepoitory;

    public List<Product> getProducts() {
        return productRepoitory.findAll();
    }

    public List<String> getBrands() {
        List<String> listBrands = new ArrayList<>();
        productRepoitory.findAll().stream().forEach(product -> {
            if (!listBrands.contains(product.getBrand())) {
                listBrands.add(product.getBrand());
            }
        });
        return listBrands;
    }

    public List<String> getTypes() {
        List<String> listTypes = new ArrayList<>();
        productRepoitory.findAll().stream().forEach(product -> {
            if (!listTypes.contains(product.getType())) {
                listTypes.add(product.getType());
            }
        });
        return listTypes;
    }
}
