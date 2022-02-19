package com.example.SPRING_PERRO.models;

import javax.persistence.*;
@Entity
@Table(name="perros")
public class Dog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true , nullable = false )
    
    private Long id;
    private String nombre;
    private String color;
    private String raza;
    private String token;
    public String getNombre() {
        return nombre;
    }
    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
    public String getRaza() {
        return raza;
    }
    public void setRaza(String raza) {
        this.raza = raza;
    }
    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
