import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";

import localeEsMessages from "./locales/es";
import localInMessages from './locales/en'

const userLanguage = navigator.language || navigator.userLanguage;


const json_touse = userLanguage==="es-ES"?localeEsMessages:localInMessages;

ReactDOM.render(
    <IntlProvider locale={userLanguage} messages={json_touse}>
        <JobsList />
    </IntlProvider>,
    document.getElementById("root")
);
