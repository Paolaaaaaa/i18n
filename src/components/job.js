import React from "react";
import {FormattedDate} from 'react-intl';
import { FormattedMessage } from "react-intl";
import { FormattedNumber } from "react-intl";

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary} {props.offer.salary>1?<p><FormattedMessage id="Millions"/></p>: <p><FormattedMessage id="Million"/></p>}</td>
      <td>{props.offer.city}</td>


      <td>
  <FormattedDate
        value={new Date(props.offer.date)}
        year='numeric'
        month='long'
        day='numeric'
        weekday='long'
      />  
        </td>

        <td>
        <FormattedNumber value={props.offer.Views} />
        </td>
   
    </tr>
  );
};

export default Job;
