import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setProjectsState(prevstate => {
      return {
        ...prevstate,
        selectedProjectID: null,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState(prevstate => {
      const projectID = Math.random()
      const newProject = {
        ...projectData,
        id: projectID
      }
      return {
        ...prevstate,
        selectedProjectID: undefined,
        projects: [...prevstate.projects, newProject]
      }
    })
  }


  let content;
  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
