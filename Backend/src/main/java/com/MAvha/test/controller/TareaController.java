package com.MAvha.test.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MAvha.test.model.Tarea;
import com.MAvha.test.model.TareaFilter;
import com.MAvha.test.repo.TareaRepository;
import com.MAvha.test.service.TareaService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class TareaController {

	@Autowired
	TareaService tareaService;
	
	@Autowired
	TareaRepository repository;

	@GetMapping("/tareas")
	public List<Tarea> getAllTask() {
		System.out.println("Get all Tasks...");
		return tareaService.getAllTasks();
	}

	@PostMapping(value = "/tareas/create")
	public Tarea postTarea(@RequestBody Tarea tarea) {
		Tarea _tarea = tareaService.createTask(new Tarea(tarea.getDescripcion(), tarea.getEstado(),tarea.getImagen()));
		return _tarea;
	}

	@DeleteMapping("/tareas/{id}")
	public ResponseEntity<String> deleteTarea(@PathVariable("id") long id) {
		System.out.println("Delete Tarea con ID = " + id + "...");
		tareaService.deleteTask(id);
		return new ResponseEntity<>("Tarea has been deleted!", HttpStatus.OK);
	}

	@DeleteMapping("/tareas/delete")
	public ResponseEntity<String> deleteAllTasks() {
		System.out.println("Delete All Tasks...");
		tareaService.deleteAll();
		return new ResponseEntity<>("All tasks have been deleted!", HttpStatus.OK);
	}

	@PostMapping(value = "/tareas/searchByFilter")
	public List<Tarea> searchByFilter(@RequestBody TareaFilter filter) {
		return tareaService.searchByFilter(filter);
	}

	@PutMapping("/tareas/{id}")
	public ResponseEntity<Tarea> updateTarea(@PathVariable("id") long id, @RequestBody Tarea tarea) {
		System.out.println("Update Task with ID = " + id + "...");
		Tarea tareaUpdate = tareaService.updateTask(id, tarea);
		if (tareaUpdate!=null) {
			return new ResponseEntity<>(tareaUpdate, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}