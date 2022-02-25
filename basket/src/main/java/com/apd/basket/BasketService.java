package com.apd.basket;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BasketService {

    private final BasketRepository basketRepository;

    public List<Basket> getBaskets() {
        return basketRepository.findAll();
    }
}
