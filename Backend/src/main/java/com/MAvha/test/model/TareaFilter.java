package com.MAvha.test.model;

import java.io.Serializable;

public class TareaFilter implements Serializable {

	private long id;

	private String descripcion;

	private Boolean estado;


	public TareaFilter() {
	}

	public TareaFilter(long id, String descripcion, Boolean estado) {
		this.id = id;
		this.descripcion = descripcion;
		this.estado = estado;
	}
	
	public long getId() {
		return id;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Boolean getEstado() {
		return estado;
	}

	public void setEstado(Boolean estado) {
		this.estado = estado;
	}


	public void setId(long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "TareaFilter [id=" + id + ", descripcion=" + descripcion + ", estado=" + estado  + "]";
	}
}
