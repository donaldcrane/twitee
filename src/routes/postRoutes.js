import { Router } from "express";
import PostController from "../controllers/post";
import Authentication from "../middlewares/auth";
import validator from "../middlewares/validator";
import { validatePost, validateId, validateComment } from "../validators/post";

const router = Router();

const { authenticate } = Authentication;
const {
  createPost, likePost, deletePost, addComment, getPosts, getPostById
} = PostController;

router.get("/", authenticate, getPosts);
router.get("/:postId", authenticate, validator(validateId, false), getPostById);

router.post(
  "/", authenticate,
  validator(validatePost, false),
  createPost
);

router.post(
  "/:postId/comment", authenticate,
  validator(validateComment, false),
  addComment
);

router.patch(
  "/:postId/like", authenticate,
  validator(validateId, false), likePost
);

router.delete(
  "/:postId", authenticate,
  validator(validateId, false), deletePost
);

module.exports = router;
