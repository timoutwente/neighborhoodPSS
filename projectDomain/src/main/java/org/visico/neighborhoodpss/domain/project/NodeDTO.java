package org.visico.neighborhoodpss.domain.project;

import com.google.gwt.user.client.rpc.IsSerializable;


public class NodeDTO implements IsSerializable
{
	private int id;
	private double longitude;
	private double latitude;
	private double inflow;
	private double outflow;
	
	public NodeDTO()
	{
		
	}
	
	public NodeDTO(NodeDTO toCopy)
	{
		// do not copy id - id is assigned by a database
		// the copy should not have yet an id to signify 
		// that it is not yet in the db and has to created
		// instead of updated
		
		this.setLatitude(toCopy.getLatitude());
		this.setLongitude(toCopy.getLongitude());
		this.setInflow(toCopy.getInflow());
		this.setOutflow(toCopy.getOutflow());
	
	}
	
	public int getId() {
		return id;
	}
	public double getInflow() {
		return inflow;
	}
	public void setInflow(double inflow) {
		this.inflow = inflow;
	}
	public double getOutflow() {
		return outflow;
	}
	public void setOutflow(double outflow) {
		this.outflow = outflow;
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
	
	
}
