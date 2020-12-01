import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const PhoneTable = (props) => {
  let phoneRender = () => {};
  return (
    <MDBTable>
      <MDBTableHead color="purple-gradient">
        <tr>
          <th>ID #</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Camaras</th>
          <th>Pantalla</th>
          <th>Almacenamiento</th>
          <th>Bateria</th>
          <th>Camaras</th>
          <th>Pantalla</th>
          <th>Almacenamiento</th>
          <th>ID #</th>
          <th>Camaras</th>
          <th>Pantalla</th>
          <th>Almacenamiento</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default PhoneTable;
