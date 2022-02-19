package com.example.SPRING_PERRO.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.SPRING_PERRO.models.Dog;
import com.example.SPRING_PERRO.respositories.DogResposity;
import com.example.SPRING_PERRO.services.DogService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController 
@RequestMapping("/Perro") 
public class DogController {
    @Autowired
    DogService dogService;

    @GetMapping()
    public ArrayList<Dog> obtenerperros(){
        return dogService.todolosperros();
    }

    @PostMapping()
    public String guardar(@RequestBody Dog dog){
        return dogService.guardar(dog);
    }

    @GetMapping("/{id}")
    public String buscarporid(@PathVariable("id")Long id){
    Optional<Dog> perro=dogService.buscarporid(id);
       System.out.println(perro);
       if(perro.isPresent()){
           Dog dog =perro.get();
           
           return "Si existe este perro con el Nombre-"+ dog.getNombre()+"     ,Color-   "+dog.getColor()+"    ,Raza-"+dog.getRaza();
       } else{
           return "No existe ningun perro con este id";
       }
    }
    
    @PostMapping("search")
    public List<Dog> buscar(@RequestParam("query")String query){
        var perro=dogService.buscarporpalabra(query);
        System.out.println(perro);
        return perro;
    }

    


}
