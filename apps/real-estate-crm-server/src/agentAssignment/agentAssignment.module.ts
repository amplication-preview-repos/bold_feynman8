import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AgentAssignmentModuleBase } from "./base/agentAssignment.module.base";
import { AgentAssignmentService } from "./agentAssignment.service";
import { AgentAssignmentController } from "./agentAssignment.controller";
import { AgentAssignmentResolver } from "./agentAssignment.resolver";

@Module({
  imports: [AgentAssignmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [AgentAssignmentController],
  providers: [AgentAssignmentService, AgentAssignmentResolver],
  exports: [AgentAssignmentService],
})
export class AgentAssignmentModule {}
