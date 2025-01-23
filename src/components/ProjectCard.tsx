// components/ProjectCard.tsx
'use client';
import Link from 'next/link';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { Project } from '@/utils/storage';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const completedTasks = project.tasks.filter(t => t.completed).length;

  return (
    <Link 
      href={`/projects/${project.id}`}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{completedTasks}/{project.tasks.length} tasks</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{new Date(project.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
}