package org.visico.neighborhoodpss.server;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.visico.neighborhoodpss.shared.GeoPointDTO;

@Entity
@Table(name="BUILDING_COORDINATE")
public class GeoPoint implements Serializable
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 9143822400133445446L;

	@Id
	@GeneratedValue
	private int id;
	
	@Column
	private double longitude;
	
	@Column
	private double latitude;
	
	@Transient
	private GeoPointDTO dto_object;
	
	public GeoPoint()
	{
		
	}
	
	public GeoPoint(GeoPointDTO pt) 
	{
		this.dto_object = pt;
		this.setId(pt.getId());
		this.setLatitude(pt.getLatitude());
		this.setLongitude(pt.getLongitude());
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public void update_dtoIds() 
	{
		this.dto_object.setId(this.id);
		
	}
	
	
	
}
