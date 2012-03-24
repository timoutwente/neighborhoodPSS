package org.visico.neighborhoodpss.client;

import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.TabPanel;

public class DataPanel extends TabPanel 
{
/*	static private DataPanel instance = null;
	
	static public  DataPanel getInstance()
	{
		if (instance == null)
			instance = new DataPanel();
		return instance;
	}
*/
	public DataPanel()
	{
		this.setWidth("20px");
		buildingTable = new BuildingTable();
		indicatorPanel = new IndicatorPanel();
		add(buildingTable, "Buildings");
	    add(indicatorPanel, "Inidcators");

	    // Show the 'bar' tab initially.
	    selectTab(0);
	}
	
	public void updateData()
	{
		buildingTable.draw();
		indicatorPanel.draw();
	}
	
	BuildingTable buildingTable;
	IndicatorPanel indicatorPanel;
}
