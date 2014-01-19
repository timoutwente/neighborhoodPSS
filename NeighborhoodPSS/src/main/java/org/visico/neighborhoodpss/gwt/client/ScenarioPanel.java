package org.visico.neighborhoodpss.gwt.client;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import org.visico.neighborhoodpss.gwt.shared.patterns.ProjectMediator;
import org.visico.neighborhoodpss.gwt.shared.patterns.ScenarioEditMediator;
import org.visico.neighborhoodpss.domain.project.BuildingDTO;
import org.visico.neighborhoodpss.domain.project.ScenarioDTO;

import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.user.client.ui.DockLayoutPanel;

public class ScenarioPanel extends DockLayoutPanel
{	
	ProjectMediator indMed;
	
	public ScenarioPanel(ScenarioDTO s, ProjectMediator indMed) 
	{
		super(Unit.EX);
		this.indMed = indMed;
		scenario = s;
		this.setTitle("Scenarios");
		draw();
	}
	
	public void draw()
	{
		ScenarioEditMediator med = new ScenarioEditMediator(scenario, indMed.getProject());
		map = new Map(med);
		addWest(new EditMapPanel(this, med), 35);
		addSouth(new DataPanel(this, med, indMed), 35);
	    add(map);
	    med.initializeOverlays();
	}
	
	public Map getMap()
	{
		return map;
	}
	
	public void updateData()
	{
		//dataPanel.updateData();
	}
	
	public ScenarioDTO scenario()
	{
		return scenario;
	}

	
	
	public void addBuilding(BuildingPolygon p)
	{
		buildingPlgs.add(p);
	}
	
	public ArrayList<BuildingPolygon> getBuildingPlgs()
	{
		return buildingPlgs;
	}
	
	
	public Set<BuildingDTO> getBuildingDTOs()
	{
		HashSet<BuildingDTO> BuildingDTOs = new HashSet<BuildingDTO>();
		for (int i=0; i < getBuildingPlgs().size(); i++)
		{
			BuildingDTOs.add(getBuildingPlgs().get(i).setBuilding());
		}
		return BuildingDTOs;
	}
	
	
	public ModePanel getModePanel() {
		return modePanel;
	}

	public void setModePanel(ModePanel modePanel) {
		this.modePanel = modePanel;
	}


	private Map map; 
	private ModePanel modePanel;
	private ArrayList<BuildingPolygon> buildingPlgs = new ArrayList<BuildingPolygon>();
	private ScenarioDTO scenario;
	
}
