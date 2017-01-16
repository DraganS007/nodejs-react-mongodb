import express from 'express';

const router = express.Router();

router.get('/', (req, res) =>{
	res.send({randomNumber: [Math.random()]});
});

export default router;