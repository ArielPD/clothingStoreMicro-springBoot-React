package com.apd.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;

@Data
@Builder
@AllArgsConstructor
@Entity
public class Product {

    @Id
    @SequenceGenerator(
            name = "product_id_sequence",
            sequenceName = "product_id_sequence"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "product_id_sequence"
    )
    private Integer Id;
    private String Name;
    private String Description;
    private double Price;
    private String PictureUrl;
    private String Type;
    private String Brand;
    private Integer quantityInStock;
    private String publicId;

}
