package com.MAvha.test.repo;

import java.util.List;


import com.MAvha.test.model.Tarea;
import com.MAvha.test.model.TareaFilter;

public interface TareaRepositoryCustom{
	List<Tarea> findByFilter(TareaFilter descripcion);
	
}
