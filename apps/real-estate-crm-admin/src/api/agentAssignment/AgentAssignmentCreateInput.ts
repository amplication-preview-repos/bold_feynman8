import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentName?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
