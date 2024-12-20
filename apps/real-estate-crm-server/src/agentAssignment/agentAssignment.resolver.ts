import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AgentAssignmentResolverBase } from "./base/agentAssignment.resolver.base";
import { AgentAssignment } from "./base/AgentAssignment";
import { AgentAssignmentService } from "./agentAssignment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AgentAssignment)
export class AgentAssignmentResolver extends AgentAssignmentResolverBase {
  constructor(
    protected readonly service: AgentAssignmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
