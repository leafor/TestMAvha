package com.MAvha.test.repo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.transaction.annotation.Transactional;

import com.MAvha.test.model.Tarea;
import com.MAvha.test.model.TareaFilter;


public class TareaRepositoryCustomImpl  implements TareaRepositoryCustom{
	
	@PersistenceContext
    private EntityManager entityManager;
	
	@Override
	public <T> List<Tarea> findByFilter(T filter){
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Tarea> query = cb.createQuery(Tarea.class);
        Root<Tarea> tarea = query.from(Tarea.class);

        Path<String> estadoPath = tarea.get("estado");
        Path<String> descripcionPath = tarea.get("descripcion");
        Path<String> idPath = tarea.get("id");
        
        List<Predicate> predicates = new ArrayList<>();

        if(((TareaFilter)filter).getEstado()!=null) {
        	predicates.add(cb.equal(estadoPath, ((TareaFilter)filter).getEstado()));
        }
        if(((TareaFilter) filter).getDescripcion()!=null && ((TareaFilter) filter).getDescripcion()!="") {
        	predicates.add(cb.like(descripcionPath, ((TareaFilter)filter).getDescripcion()));
        }
        if(((TareaFilter)filter).getId()!=0l) {
        	predicates.add(cb.equal(idPath, ((TareaFilter)filter).getId()));
        }
        query.select(tarea)
            .where(cb.and(predicates.toArray(new Predicate[predicates.size()])));
 
        return entityManager.createQuery(query)
	            .getResultList();
	}
	
	@Transactional
	@Override
	public int updateTaks(Tarea t) {
		return this.entityManager.
		createQuery("update Tarea set estado = "+t.getEstado()+" where id = "+t.getId()+"").executeUpdate();
	}

}
