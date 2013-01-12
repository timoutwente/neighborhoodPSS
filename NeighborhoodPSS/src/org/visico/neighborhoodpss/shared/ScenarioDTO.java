package org.visico.neighborhoodpss.shared;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import org.visico.neighborhoodpss.shared.BuildingDTO;



public class ScenarioDTO implements Cloneable, Serializable
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 732022436294521332L;
	
	public ScenarioDTO (String n)
	{
		label = "";
		name = n;
	}
	

	private ScenarioDTO()
	{
		
	}
	
	
	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public ScenarioDTO getParent() {
		return parent;
	}

	public void setParent(ScenarioDTO parent) {
		this.parent = parent;
	}

	
	public Set<ScenarioDTO> getChildren() {
		return children;
	}

	public void setChildren(Set<ScenarioDTO> children) {
		this.children = children;
	}

	public Set<NetworkDTO> getNetworkDTOs() {
		return NetworkDTOs;
	}

	public void setNetworkDTOSs(Set<NetworkDTO> networkDTOs) {
		NetworkDTOs = networkDTOs;
	}


	public Set<BuildingDTO> getBuildingDTOs() {
		return BuildingDTOs;
	}

	public void setBuilingDTOs(Set<BuildingDTO> BuildingDTOs) {
		this.BuildingDTOs = BuildingDTOs;
	}

	public void addBuilingDTO(BuildingDTO b)
	{
		BuildingDTOs.add(b);
	}
	
	public void addNetworkDTO(NetworkDTO n)
	{
		NetworkDTOs.add(n);
	}
	
	public String label()
	{
		return label;
	}
	
	public void addChild(ScenarioDTO child)
	{
		children.add(child);
	}
	
	public boolean hasParent()
	{
		if (parent == null)
			return false;
		else
			return true;
	}
	
	
	
	public ScenarioDTO createChild()
	{
		ScenarioDTO child;
		child = (ScenarioDTO)this.clone();
		return child;
	}
	
	protected ScenarioDTO clone()
	{
		// do not clone id - id is assigned by a database
				// the clone should not have yet an id to signify 
				// that it is not yet in the db and has to created
				// instead of updated
		ScenarioDTO child = new ScenarioDTO();
		
		if (parent == null)
		{
			child.label = Integer.toString(children.size());
		}
		else
		{
			child.label = label + "." +  Integer.toString(children.size());
		}
		
		
		child.name = this.getName();
		child.description = this.description;
		//child.id = this.id;
		child.parent = this;
		
		// need to clone the buildings and networks as well
		Iterator<BuildingDTO> bit = this.BuildingDTOs.iterator();
		while (bit.hasNext())
		{
			BuildingDTO b = bit.next();
			child.BuildingDTOs.add(b.clone());
		}
		
		Iterator<NetworkDTO> nit = this.NetworkDTOs.iterator();
		while (nit.hasNext())
		{
			NetworkDTO n = nit.next();
			child.NetworkDTOs.add(n.clone());
		}
		
		this.children.add(child);
		return child;
	}
	
	
	// label is automatically created
	private String label;
	private String name;
	private String description;
	private int id;
	private ScenarioDTO parent; 
	
	
	private Set<ScenarioDTO> children = new HashSet<ScenarioDTO>();;
	private Set<BuildingDTO> BuildingDTOs = new HashSet<BuildingDTO>();
	private Set<NetworkDTO> NetworkDTOs = new HashSet<NetworkDTO>();
}
