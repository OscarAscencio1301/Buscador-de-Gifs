import './index.css';
import React from 'react';
import reactDom from 'react-dom';
import { Principal } from './Principal';

const divroot = document.querySelector("#root")

reactDom.render(<Principal />,divroot);