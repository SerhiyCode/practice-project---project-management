import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/newProject";
import SelectedProject from "./components/SelectedProject";

  
function App() { 
  const [projectsState, serProjectsState] = useState({     
    selectedProjectId: undefined,
    projects: []
  });  

function handleSelectedProject(id) {
      serProjectsState(prevState => {
      return { 
        ...prevState,
        selectedProjectId: id,
      }
    });
  }

  
function handleStartAddProject() {
    serProjectsState(prevState => {
      return { 
        ...prevState,
        selectedProjectId: null,
      }
    });
  }  
  
  
function handleCancelAddProject() {
    serProjectsState(prevState => {
      return { 
        ...prevState,
        selectedProjectId: undefined,
      }
    });
 } 


function handleAddProject (projectDate) {
    serProjectsState((prevState) => { 
      const projectId =  Math.random(); 
      const newProject = {
        ...projectDate, 
        id: projectId,
      };          
    
       return {
        ...prevState, 
        selectedProjectId: undefined, 
        projects: [...prevState.projects, newProject]   
       }; 
    });
  } 


  const selectedProjectId = projectsState.projects.find(project =>  project.id === projectsState.selectedProjectId); 
  let content = <SelectedProject project={selectedProjectId} />;  

  if (projectsState.selectedProjectId === null) {
    content =  <NewProject onAdd={handleAddProject} onCancel={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='flex h-screen gap-8 my-8' >
      <ProjectsSidebar onStartAddProject={handleStartAddProject} 
      projects={projectsState.projects} 
      onSelectProject={handleSelectedProject} />  
            
      {content}
    </main>
  );
}

export default App;
