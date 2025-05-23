package com.oriantar.barapp.model;

/**
 *
 * @author Tim Maurizio
 */
import java.io.Serializable;
import jakarta.persistence.*;
import jakarta.persistence.Column;

@Entity
public class Product implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true, updatable = false)
    private Long id;
    private String name;
    private String description;
    private float price;
    private int quantity;
    private String imageUrl;
    private int categoryId;

    public Product() {}

    public Product(Long id, String name, String description, float price, int quantity, String imageUrl, int categoryId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
        this.categoryId = categoryId;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public float getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    @Override
    public String toString() {
        return "Product{id=" + id +
                ", name=" + name +
                ", description=" + description +
                ", price=" + price +
                ", quantity=" + quantity +
                ", imageUrl=" + imageUrl +
                ", categoryId=" + categoryId +
                "}";

    }
}
