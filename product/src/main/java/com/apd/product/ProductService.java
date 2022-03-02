package com.apd.product;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductService {
    private final ProductRepository productRepoitory;

    public List<Product> getProducts(Optional<String> searchTerm, Optional<String> orderBy) {
        if (searchTerm.isPresent()) {
            return productRepoitory.findByName(searchTerm.get().toLowerCase());
        }

        if (orderBy.isPresent() && orderBy.get().equalsIgnoreCase("pricedesc")) {
            System.out.println("priceDesc");
            return productRepoitory.findAllProductDESC();
        } else if (orderBy.isPresent() && orderBy.get().equalsIgnoreCase("price")) {
            System.out.println("price");
            return productRepoitory.findAllProductASC();
        }
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
