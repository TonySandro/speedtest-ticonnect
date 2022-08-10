import { makeSpeedTestController } from '../../factories/speed-test/speed-test-factory';
import { adaptRoute } from "../../adapters/express/express-routes-adapter";

import { Router } from "express";

export default (router: Router): void => {
    router.get('/speed-test', adaptRoute(makeSpeedTestController()))
}