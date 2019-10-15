import React from 'react'
import { render } from 'react-dom'
import MyApp from './MyApp'
import AppTitle from './AppTitle'
import Lab2 from './Lab2';

render(<MyApp />, document.getElementById('reactinjectedhere'));
render(<AppTitle />, document.getElementById('apptitle'));
render(<Lab2 />, document.getElementById('lab2'));

