import axios from 'axios';
import { DEMO,  LOGOFF } from './types';

export const demoLogIn = () => ({
  type: DEMO
});

export const logOff = () => ({
  type: LOGOFF
});