package com.MAvha.test.model;

import java.io.Serializable;

public class TareaFilter implements Serializable {

	private String descripcion;

	private Boolean estado;

	private long id;

	public TareaFilter() {
	}
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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


	@Override
	public String toString() {
		return "TareaFilter [id=" + id + ", descripcion=" + descripcion + ", estado=" + estado  + "]";
	}
}
