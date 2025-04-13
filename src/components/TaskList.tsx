'use client';

import { CheckCircle, Circle } from 'lucide-react';
import { Task } from '@/utils/storage';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
}

export default function TaskList({ tasks, onToggleTask }: TaskListProps) {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <button
            onClick={() => onToggleTask(task.id)}
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
  );
}