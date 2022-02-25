package com.apd.basket;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/baskets")
@AllArgsConstructor
public class BasketController {

    private final BasketService basketService;

    @GetMapping
    public ResponseEntity<String> getBaskets() {
        return ResponseEntity.ok("Baskets.....");
    }
}
