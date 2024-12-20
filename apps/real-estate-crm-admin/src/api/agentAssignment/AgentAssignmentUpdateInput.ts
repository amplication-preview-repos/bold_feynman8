import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agentName?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
