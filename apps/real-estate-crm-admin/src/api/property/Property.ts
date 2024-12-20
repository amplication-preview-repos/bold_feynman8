import { AgentAssignment } from "../agentAssignment/AgentAssignment";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  agentAssignments?: Array<AgentAssignment>;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  price: number | null;
  size: number | null;
  title: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
