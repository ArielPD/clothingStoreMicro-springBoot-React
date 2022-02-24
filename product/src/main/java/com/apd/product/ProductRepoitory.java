package com.apd.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepoitory extends JpaRepository<Product, Integer> {
}
