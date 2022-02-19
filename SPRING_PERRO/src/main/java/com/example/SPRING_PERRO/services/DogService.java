package com.example.SPRING_PERRO.services;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

import com.example.SPRING_PERRO.models.Dog;
import com.example.SPRING_PERRO.respositories.DogResposity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class DogService {
  @Autowired  
   DogResposity DogRepo; 


   public ArrayList<Dog> todolosperros(){
       
        return (ArrayList<Dog>) DogRepo.findAll();
   }

   public String guardar(Dog dog){
       DogRepo.save(dog);
       return "guardado correctamente";
   }
public Optional<Dog> buscarporid(Long id){
    return DogRepo.findById(id);
}
public List buscarporpalabra(String query){
    List<Dog> perro= DogRepo.findByKeyword(query);
return perro;
}

}