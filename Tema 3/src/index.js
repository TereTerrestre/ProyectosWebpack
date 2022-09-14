import _ from 'lodash';

import './style.css';
import Icon from './icon.png';
import Data from './data.csv';
import yaml from './data.yaml';
import json from './data.json5';

 function component() {
   const element = document.createElement('div');

   element.innerHTML = _.join(['Hello', Data[0][1]], ' ');

  element.classList.add('hello');
  const myIcon = new Image();

  myIcon.src = Icon;


  element.appendChild(myIcon);

  console.log(yaml.title); 

  console.log(json.owner.name); 

  console.log(Data);

   return element;
 }

 document.body.appendChild(component());