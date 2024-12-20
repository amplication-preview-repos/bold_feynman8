import { AgentAssignment as TAgentAssignment } from "../api/agentAssignment/AgentAssignment";

export const AGENTASSIGNMENT_TITLE_FIELD = "agentName";

export const AgentAssignmentTitle = (record: TAgentAssignment): string => {
  return record.agentName?.toString() || String(record.id);
};
