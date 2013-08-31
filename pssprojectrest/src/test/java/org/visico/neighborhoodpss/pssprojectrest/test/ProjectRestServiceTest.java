package org.visico.neighborhoodpss.pssprojectrest.test;

import static org.junit.Assert.*;

import java.util.ArrayList;


import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.client.ClientResponse;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Test;


import org.visico.neighborhoodpss.domain.project.ProjectDTO;
import org.visico.neighborhoodpss.pssprojectrest.ProjectRestService;

public class ProjectRestServiceTest extends JerseyTest{
	
		
	 protected Application configure()
	 {
		 return new ResourceConfig(ProjectRestService.class);
	 }
	 
	 @Test
	 public void getProjectTest() {
		Invocation invocation = target("project").request().header("id", "1").buildGet();
		ProjectDTO responseMsg = invocation.invoke(ProjectDTO.class);
        assertNotNull(responseMsg);
	 }
	 
	 @Test
	 public void addProjectTest() {
		ProjectDTO project = new ProjectDTO();
		project.setName("Test");
		GenericEntity<ProjectDTO> entity = new GenericEntity<ProjectDTO>(project) { };
    	Response r = Response.ok(entity).build();
		Invocation invocation = target("project/saveProject").request().header("project", r).
				buildPost(Entity.entity(project, MediaType.APPLICATION_JSON_TYPE));
		invocation.invoke();
        
	 }
	 
	 /*@Test
	 // this test does not work as it is not possible to inject a security context with the grizley server
	 public void getProjectListTest() {
		 Invocation invocation = target("project/list").request()
				 .header("user", "Timo")
				 .header("pass", "timopass")
				 .buildGet();
		 ArrayList<ProjectDTO> projectList = invocation.invoke(new GenericType<ArrayList<ProjectDTO>>() {});
		 assertNotNull(projectList);
	 }*/
}
