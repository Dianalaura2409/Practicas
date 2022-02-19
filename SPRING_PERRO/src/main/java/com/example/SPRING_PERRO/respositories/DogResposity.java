package com.example.SPRING_PERRO.respositories;

import com.example.SPRING_PERRO.models.Dog;

import org.springframework.data.repository.CrudRepository;

public interface DogResposity extends CrudRepository<Dog,Long> {
    
}