import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PropertyTitle } from "../property/PropertyTitle";

export const AgentAssignmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="agentName" source="agentName" />
        <ReferenceInput
          source="property.id"
          reference="Property"
          label="property"
        >
          <SelectInput optionText={PropertyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
