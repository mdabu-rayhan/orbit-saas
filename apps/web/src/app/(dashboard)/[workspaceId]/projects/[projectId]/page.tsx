export default function KanbanBoardPage({
  params,
}: {
  params: { workspaceId: string; projectId: string };
}) {
  return (
    <div>
      <h1>Kanban Board</h1>
      <p>Workspace: {params.workspaceId}</p>
      <p>Project: {params.projectId}</p>
    </div>
  );
}
