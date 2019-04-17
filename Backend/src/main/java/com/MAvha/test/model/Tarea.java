package com.MAvha.test.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.MAvha.test.model.json.adapter.JsonByteDeSerializer;
import com.MAvha.test.model.json.adapter.JsonByteSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@Entity
@Table(name = "tarea")
public class Tarea implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "descripcion")
	private String descripcion;

	@Column(name = "estado")
	private Boolean estado;

	@Lob
	@Column(name = "imagen", length = 20000)
	@JsonSerialize(using=JsonByteSerializer.class)
	@JsonDeserialize(using = JsonByteDeSerializer.class)
	private byte[] imagen;
	

	public Tarea() {
	}

	public Tarea(Long id, String descripcion, Boolean estado,byte[] imagen) {
		this.descripcion = descripcion;
		this.estado = estado;
		this.imagen = imagen;
		this.id = id;
	}
	
	public Tarea(String descripcion, Boolean estado,byte[] imagen) {
		this.descripcion = descripcion;
		this.estado = estado;
		this.imagen = imagen;
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

	public byte[] getImagen() {
		return imagen;
	}

	public void setImagen(byte[] imagen) {
		this.imagen = imagen;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Tarea [id=" + id + ", descripcion=" + descripcion + ", estado=" + estado  + "]";
	}
}
