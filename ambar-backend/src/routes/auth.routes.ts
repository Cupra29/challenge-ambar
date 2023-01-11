import express from 'express';
import { AuthController } from '../controllers';

export default express
  .Router()
  .post('/signup', AuthController.signup)
  .put('/signin', AuthController.signin);
