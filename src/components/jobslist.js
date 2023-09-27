import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage } from "react-intl";
const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      Views:1000000

    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      Views:3

    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      Views:1000
    },
  ]);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
        <tr>


        <th scope="col">#</th>

        
      <th scope="col">
        <FormattedMessage id="Nombre del cargo" />
      </th>
      <th scope="col">
        <FormattedMessage id="Empresa" />
      </th>
      <th scope="col">
        <FormattedMessage id="Salario" />
      </th>
      <th scope="col">
        <FormattedMessage id="Ciudad" />
      </th>
      <th scope="col">
        <FormattedMessage id="Fecha de publicación" />
      </th>
      <th scope="col">
        <FormattedMessage id="No. de visitas" />
      </th>
    </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
