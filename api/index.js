import express from 'express';
import data from '../src/testData';

const router = express.Router();;
const contests = data.contests.reduce((obj, contest) =>{
	obj[contest.id] = contest;
	return obj;
}, {});

router.get('/contests', (req, res) =>{
	res.send({
		contests: contests
	});
});

router.get('/contests/:contestId', (req, res) =>{
	let contest = contests[req.params.contestId];
	contest.description = 'Bacon ipsum dolor amet fatback leberkas salami andouille, shankle turducken landjaeger. Bresaola short loin porchetta pork chop, ham hock capicola sausage. Drumstick jerky salami andouille tongue bresaola ribeye sausage. Short loin strip steak sausage prosciutto, turkey corned beef flank. Ground round frankfurter capicola pork chop pig sausage beef meatloaf. Pork belly alcatra picanha meatball, ribeye pork pastrami pork chop tongue fatback sausage.';
	res.send(contest);
});

export default router;