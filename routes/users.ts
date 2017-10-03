import {Router, Request, Response}  from 'express';

let router = Router();
/* GET users listing. */
router.get('/', function(req: Request, res: Response, next) {
  res.send('respond with a resource');
});

export const users: Router = router;
