import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from '../../models/user.js';
import logout from '../../controller/auth/logout.js';
import verifyToken from '../../middleware/verifyToken.js';
import getUserData from '../../controller/user/getUserData.js';

const router = Router();

// intial step for the google auth and after seccess then we can implement our own logic
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// defining our own logic after getting user details 
// we are storing user deatils in db 
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
  res.cookie('accessToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'None',
  });
  res.redirect(`${process.env.FRONTEND_URL}/`);
});


// logout to user
router.get('/logout', logout);

router.get('/user', verifyToken, getUserData);

export default router;
