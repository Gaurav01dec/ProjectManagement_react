import noprojectimage from "../assets/no-projects.png"
import Button from "./Button.jsx"
export default function NoProjectSelected({onStartAddProject}) {
    return(
        <div className="mt-24 text-center w-2/3">
            <h2 className="text-xl font-bold text-stone-700 my-4">YOUR PROJECT MANAGEMENT APPLICATION</h2>
            <img src={noprojectimage} className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-700 my-4">No project selected</h2>
            <p className="text-stone-600 mb-4">Select a project or get started with a new one...</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>Create a new project</Button>
            </p>
        </div>
    )
};
// 