import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
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

  function handleSelectProject(id) {
    setProjectsState(prevstate => {
      return {
        ...prevstate,
        selectedProjectID: id,
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState(prevstate => {
      return {
        ...prevstate,
        selectedProjectID: undefined,
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

  function handleDeleteProject() {
    setProjectsState(prevstate => {
      return {
        ...prevstate,
        selectedProjectID: undefined,
        projects: prevstate.projects.filter(
          (project) => project.id !== prevstate.selectedProjectID
        )
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectID)

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;
  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject} />
      {content}
    </main>
  );
}

export default App;
