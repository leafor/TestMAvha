package com.MAvha.test.repo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.MAvha.test.model.Tarea;
import com.MAvha.test.model.TareaFilter;


public class TareaRepositoryCustomImpl  implements TareaRepositoryCustom{
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Override
	public List<Tarea> findByFilter(TareaFilter filter){
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Tarea> query = cb.createQuery(Tarea.class);
        Root<Tarea> tarea = query.from(Tarea.class);
 
        Path<String> descripcionPath = tarea.get("descripcion");
        Path<String> idPath = tarea.get("id");
        Path<String> estadoPath = tarea.get("estado");
        
        List<Predicate> predicates = new ArrayList<>();
        if(filter.getDescripcion()!=null) {
        	predicates.add(cb.like(descripcionPath, filter.getDescripcion()));
        }
        if(filter.getId()!=0l) {
        	predicates.add(cb.equal(idPath, filter.getId()));
        }
        if(filter.getEstado()!=null) {
        	predicates.add(cb.equal(estadoPath, filter.getEstado()));
        }
        query.select(tarea)
            .where(cb.and(predicates.toArray(new Predicate[predicates.size()])));
 
        return entityManager.createQuery(query)
            .getResultList();
	}

}
