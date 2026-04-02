import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/newProject";

  
function App() { 
  const [projectsState, serProjectsState] = useState({     
    selectedProjectId: undefined,
    projects: []
  }); 
  
  function handleStartAddProject() {
    serProjectsState(prevState => {
      return { 
        ...prevState,
        selectedProjectId: null,
      }
    });
  } 

  function handleAddProject (projectDate) {
    serProjectsState(prevState => { 
      const newProject = {
        ...projectDate, 
        id: Math.random()
      };

       return {
        ...prevState, 
        projects: [...prevState.projects, newProject]   
       }; 
    });
  } 

  console.log(projectsState);

  let content;  

  if(projectsState.selectedProjectId === null) {
    content =  <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='flex h-screen gap-8 my-8' >
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />      
      {content}
    </main>
  );
}

export default App;
