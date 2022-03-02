package com.apd.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("SELECT p FROM Product p WHERE LOWER(p.Name) LIKE %?1%")
    List<Product> findByName(String name);

    @Query("SELECT p FROM Product p ORDER BY p.Price ASC")
    List<Product> findAllProductASC();

    @Query("SELECT p FROM Product p ORDER BY p.Price DESC")
    List<Product> findAllProductDESC();

}
