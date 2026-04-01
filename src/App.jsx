import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  return (
    <main className='flex h-screen gap-8 my-8' >
      <ProjectsSidebar />      
      <NoProjectSelected />
    </main>
  );
}

export default App;
