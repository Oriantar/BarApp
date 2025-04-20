package com.oriantar.barapp.model;

/**
 *
 * @author Tim Maurizio
 */
import java.io.Serializable;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Products implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true, updatable = false)
    private Long id;
    private String name;
    private String description;
    private int price;
    private int quantity;
    private String imageUrl;
    private int categoryId;

    
}
