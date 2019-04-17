package com.MAvha.test.repo;

import java.util.List;

import com.MAvha.test.model.Tarea;
import com.MAvha.test.model.TareaFilter;

public interface TareaRepositoryCustom{
	<T> List<Tarea> findByFilter(T filter);
	public int updateTaks(Tarea t);
}
