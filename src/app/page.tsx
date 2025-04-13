import Link from "next/link";
import { Sparkles, FolderPlus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-red-500">
            Simmi Electronics
          </h1>
          
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Project Task Manager
          </h1>
          <p className="text-lg text-gray-600">
            Organize and track your project tasks efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link 
            href="/projects"
            className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">View Projects</h2>
                <p className="text-gray-600">Access and manage existing projects</p>
              </div>
            </div>
          </Link>

          <Link 
            href="/projects/add"
            className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                <FolderPlus className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">New Project</h2>
                <p className="text-gray-600">Create and set up a new project</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}