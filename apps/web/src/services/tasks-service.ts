import api from '@/lib/api';

export async function getTasks(projectId: string) {
  const { data } = await api.get(`/projects/${projectId}/tasks`);
  return data;
}

export async function updateTaskPosition(taskId: string, columnId: string) {
  const { data } = await api.patch(`/tasks/${taskId}`, { columnId });
  return data;
}
