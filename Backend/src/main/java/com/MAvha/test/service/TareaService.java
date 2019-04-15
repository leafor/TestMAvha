package com.MAvha.test.service;

import java.util.List;

import com.MAvha.test.model.Tarea;
import com.MAvha.test.model.TareaFilter;

public interface TareaService {
	public List<Tarea> getAllTasks();
	public Tarea createTask(Tarea tarea) throws Exception;
	public void deleteTask(Long id);
	public void deleteAll();
	public List<Tarea> searchByFilter(TareaFilter filtro);
	public Tarea updateTask(long id,Tarea tarea);
}