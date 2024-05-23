import { Router } from 'express';
import { sendMessage, getMessage } from '../../helper/slack.js';

const router = Router();

// posting the message in the channel
router.post('/message', sendMessage);

// getting all the message from the channel
router.get('/message', getMessage);

export default router;