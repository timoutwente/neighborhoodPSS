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
	ProjectMediator projectMed;
	ScenarioEditMediator scenarioMed;
	
	public ScenarioPanel(ScenarioDTO s, ScenarioEditMediator scenarioMed, ProjectMediator indMed) 
	{
		super(Unit.EX);
		this.projectMed = indMed;
		this.scenarioMed = scenarioMed;
		this.setTitle("Scenarios");
		draw();
	}
	
	public void draw()
	{
		this.clear();
		map = new Map(scenarioMed);
		addWest(new EditMapPanel(this, scenarioMed), 35);
		addSouth(new DataPanel(this, scenarioMed, projectMed), 35);
	    add(map);
	    scenarioMed.initializeOverlays();
	}
	
	public Map getMap()
	{
		return map;
	}
	
	public void updateData()
	{
		//dataPanel.updateData();
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
	
	
	/*public ModePanel getModePanel() {
		return modePanel;
	}

	public void setModePanel(ModePanel modePanel) {
		this.modePanel = modePanel;
	}
*/
	

	public ScenarioEditMediator getScenarioMed() {
		return scenarioMed;
	}



	private Map map; 
	/*private ModePanel modePanel;*/
	private ArrayList<BuildingPolygon> buildingPlgs = new ArrayList<BuildingPolygon>();

	
}
