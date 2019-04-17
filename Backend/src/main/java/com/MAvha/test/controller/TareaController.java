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
import org.springframework.web.bind.annotation.RequestParam;
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
	public ResponseEntity<Tarea> postTarea(@RequestBody Tarea tarea) throws Exception{
		Tarea _tarea = tareaService.saveTask(new Tarea(tarea.getDescripcion(), tarea.getEstado(),tarea.getImagen()));
		return new ResponseEntity<Tarea>(_tarea,HttpStatus.OK);
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
		return new ResponseEntity<String>("All tasks have been deleted!", HttpStatus.OK);
	}

	@GetMapping(value = "/tareas/searchByFilter")
	public List<Tarea> searchByFilter(TareaFilter filter) {
		return tareaService.searchByFilter(filter);
	}

	@PutMapping("/tareas/update")
	public ResponseEntity<Tarea> updateTarea(@RequestBody Tarea tarea) throws Exception {
		System.out.println("Update Task with ID = " + tarea.getId() + "...");
		Tarea tareaUpdate = tareaService.updateTask(tarea);
			return new ResponseEntity<Tarea>(tareaUpdate, HttpStatus.OK);
	}
}
