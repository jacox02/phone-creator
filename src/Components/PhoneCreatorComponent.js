import React, { Component } from "react";
import {
  MDBContainer,
  MDBInputGroup,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
} from "mdbreact";
class PhoneForm extends Component {
  state = {};
  render() {
    return (
      <MDBContainer className="border border-primary rounded mb-0">
        <MDBInputGroup
          material
          containerClassName="mb-3 mt-0"
          hint="Nombre del equipo"
        />
        <div>
          <MDBSelect>
            <MDBSelectInput selected="Choose your option" />
            <MDBSelectOptions>
              <MDBSelectOption disabled>Choose your option</MDBSelectOption>
              <MDBSelectOption value="1">Option 1</MDBSelectOption>
              <MDBSelectOption value="2">Option 2</MDBSelectOption>
              <MDBSelectOption value="3">Option 3</MDBSelectOption>
              <MDBSelectOption value="4">Option 4</MDBSelectOption>
              <MDBSelectOption value="5">Option 5</MDBSelectOption>
            </MDBSelectOptions>
          </MDBSelect>
        </div>
      </MDBContainer>
    );
  }
}

export default PhoneForm;
