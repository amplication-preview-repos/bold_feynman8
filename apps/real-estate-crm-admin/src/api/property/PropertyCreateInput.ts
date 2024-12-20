import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  price?: number | null;
  size?: number | null;
  title?: string | null;
  typeField?: "Option1" | null;
};
