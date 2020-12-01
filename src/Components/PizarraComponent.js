import { MDBContainer, MDBRow } from "mdbreact";
import React, { Component } from "react";
import PhoneForm from "./PhoneCreatorComponent";
import PhoneTable from "./PhoneTableComponent";

class Pizarra extends Component {
  render(props) {
    return (
      <div className="PizarraComponent">
        <MDBContainer className="pt-4 d-flex flex-column">
          <PhoneForm />
          <PhoneTable phoneList={props.phoneArr} />
        </MDBContainer>
      </div>
    );
  }
}

export default Pizarra;
