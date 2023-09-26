import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from "../controllers/controller.js";

/** Questions Routes API */

router.route("/english").get(controller.getenglish);
router.route("/hindi").get(controller.gethindi);
router.route("/cpp").get(controller.getcpp);

router
  .route("/javascript")
  .get(controller.getQuestions) /** GET Request */
  .post(
    controller.insertQuestions
  ) /** POST Request  other way to insert question with postman*/
  .delete(controller.dropQuestions); /** DELETE Request */

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

export default router;
