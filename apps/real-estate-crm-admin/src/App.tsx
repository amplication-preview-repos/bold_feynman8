import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PropertyList } from "./property/PropertyList";
import { PropertyCreate } from "./property/PropertyCreate";
import { PropertyEdit } from "./property/PropertyEdit";
import { PropertyShow } from "./property/PropertyShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { AgentAssignmentList } from "./agentAssignment/AgentAssignmentList";
import { AgentAssignmentCreate } from "./agentAssignment/AgentAssignmentCreate";
import { AgentAssignmentEdit } from "./agentAssignment/AgentAssignmentEdit";
import { AgentAssignmentShow } from "./agentAssignment/AgentAssignmentShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"RealEstate CRM"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name="Property"
            list={PropertyList}
            edit={PropertyEdit}
            create={PropertyCreate}
            show={PropertyShow}
          />
          <Resource
            name="Client"
            list={ClientList}
            edit={ClientEdit}
            create={ClientCreate}
            show={ClientShow}
          />
          <Resource
            name="AgentAssignment"
            list={AgentAssignmentList}
            edit={AgentAssignmentEdit}
            create={AgentAssignmentCreate}
            show={AgentAssignmentShow}
          />
          <Resource
            name="Appointment"
            list={AppointmentList}
            edit={AppointmentEdit}
            create={AppointmentCreate}
            show={AppointmentShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
