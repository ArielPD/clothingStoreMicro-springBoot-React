package com.apd.basket;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
@Data
public class Basket {

    @Id
    private Integer id;
}
