package com.MAvha.test.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MAvha.test.model.Tarea;
import com.MAvha.test.model.TareaFilter;
import com.MAvha.test.repo.TareaRepository;

@Service
public class TareaServiceImpl implements TareaService{
	
	@Autowired
	TareaRepository repository;
	
	public List<Tarea> getAllTasks(){
		List<Tarea> tareas = new ArrayList<>();
		repository.findAll().forEach(tareas::add);

		return tareas;
	}
	
	public Tarea createTask(Tarea tarea) {
		Tarea _tarea = repository.save(tarea);
		return _tarea;
	}
	
	public void deleteTask(Long id) {
		repository.deleteById(id);
	}
	
	public void deleteAll() {
		repository.deleteAll();
	}
	
	public List<Tarea> searchByFilter(TareaFilter filter){
		List<Tarea> tareas = repository.findByFilter(filter);
		return tareas;
	}
	
	public Tarea updateTask(long id,Tarea tarea) {
		Optional<Tarea> tareaData = repository.findById(id);
		if (tareaData.isPresent()) {
			Tarea _tarea = tareaData.get();
			_tarea.setDescripcion(tarea.getDescripcion());
			_tarea.setEstado(tarea.getEstado());
			_tarea.setImagen(tarea.getImagen());
			return repository.save(tarea);
		} else {
			return null;
		}
	}
}
