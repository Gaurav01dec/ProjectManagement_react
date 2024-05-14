import noprojectimage from "../assets/no-projects.png"
import Button from "./Button.jsx"
export default function NoProjectSelected({onStartAddProject}) {
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={noprojectimage} className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
            <p>Select a project or get started with a new one...</p>
            <p className="my-8">
                <Button onClick={onStartAddProject}>Create a new project</Button>
            </p>
        </div>
    )
};
// 