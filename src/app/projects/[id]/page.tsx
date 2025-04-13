'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProject, addTask, saveProject, Task, Project } from '@/utils/storage';
import { Plus, CheckCircle, Circle } from 'lucide-react';

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    if (params.id) {
      const projectData = getProject(params.id as string);
      setProject(projectData);
    }
  }, [params.id]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!project || !newTask.trim()) return;

    const task: Task = {
      id: Date.now().toString(),
      title: newTask,
      completed: false,
      createdAt: new Date().toISOString()
    };

    addTask(project.id, task);
    setProject({ ...project, tasks: [...project.tasks, task] });
    setNewTask('');
  };

  const toggleTask = (taskId: string) => {
    if (!project) return;

    const updatedTasks = project.tasks.map((task: Task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    const updatedProject = { ...project, tasks: updatedTasks };
    saveProject(updatedProject);
    setProject(updatedProject);
  };

  if (!project) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{project.title}</h1>
          <p className="text-gray-600">{project.description}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <form onSubmit={handleAddTask} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Task
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks</h2>
            
            <div className="space-y-2">
              {project.tasks.map((task: Task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {task.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                  <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {task.title}
                  </span>
                  <span className="text-sm text-gray-400">
                    {new Date(task.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}