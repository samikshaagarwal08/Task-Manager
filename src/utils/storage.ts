export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tasks: Task[];
  createdAt: string;
}

export const getProjects = (): Project[] => {
  if (typeof window === 'undefined') return [];
  const projects = localStorage.getItem('projects');
  return projects ? JSON.parse(projects) : [];
};

export const getProject = (id: string): Project | null => {
  const projects = getProjects();
  return projects.find(p => p.id === id) || null;
};

export const saveProject = (project: Project) => {
  const projects = getProjects();
  const index = projects.findIndex(p => p.id === project.id);
  
  if (index !== -1) {
    projects[index] = project;
  } else {
    projects.push(project);
  }
  
  localStorage.setItem('projects', JSON.stringify(projects));
};

export const addTask = (projectId: string, task: Task) => {
  const project = getProject(projectId);
  if (project) {
    project.tasks.push(task);
    saveProject(project);
  }
};