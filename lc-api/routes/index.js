/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /match              ->  index
 * POST    /match              ->  create
 * GET     /match/:id          ->  show
 * PUT     /match/:id          ->  update
 * DELETE  /match/:id          ->  destroy
 */

import express from 'express';
import MatchController from './../controllers/match/match.controller';

let routes = express.Router();

routes.get( '/api/v1/ping', ( req, res ) => {
    res.status( 200 ).send({
        success: 'true',
        message: 'pong!',
    });
});

routes.post( '/api/v1/match', MatchController.getCalculation );

export default routes;
