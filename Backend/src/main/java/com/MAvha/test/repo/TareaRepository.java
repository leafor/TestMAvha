package com.MAvha.test.repo;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.MAvha.test.model.Tarea;

@Repository
public interface TareaRepository extends CrudRepository<Tarea, Long>,TareaRepositoryCustom {
	
}
