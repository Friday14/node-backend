import * as express from 'express';
import * as userController from '../controllers/user';

const router = express.Router();

router.post('/user/create', userController.create);
router.post('/user/update', userController.update);

export default router;
