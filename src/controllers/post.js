import models from "../models";
import { successResponse } from "../utils/responses";

/**
 * @class PostController
 * @description create, seller Post
 * @exports PostController
 */
export default class PostController {
  /**
   * @param {object} req - The reset request object
   * @param {object} res - The reset errorResponse object
   * @returns {object} Success message
   */
  static async createPost(req, res) {
    const { post } = req.body;
    const Posts = await models.Posts.create({ post, userId: req.user.id });
    return successResponse(
      res,
      201,
      "Posts created successfully",
      Posts
    );
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async likePost(req, res) {
    const { postId } = req.params;
    const Post = await models.Posts.findOne({ where: { id: postId } });
    if (!Post) { return res.status(404).json({ status: 404, error: "Post not found." }); }
    const liked_Post = await models.Posts.increment(
      { likes: +1 },
      {
        where: { id: postId },
        returning: true,
        plain: true
      }
    );
    return successResponse(
      res,
      200,
      "Successfully liked Post.",
      liked_Post
    );
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async deletePost(req, res) {
    const { postId } = req.params;
    const Post = await models.Posts.findOne({ where: { id: postId } });
    if (!Post) { return res.status(404).json({ status: 404, error: "Post not found." }); }
    if (req.user.id !== Post.userId) {
      return res.status(409).json({
        status: 409, error: "Unauthorized Access."
      });
    }
    await Post.destroy({ cascade: true });
    return successResponse(
      res,
      200,
      "Successfully Deleted Post.",
    );
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async addComment(req, res) {
    const { comment } = req.body;
    const { postId } = req.params;
    const Post = await models.Posts.findOne({ where: { id: postId } });
    if (!Post) { return res.status(404).json({ status: 404, error: "Post not found." }); }
    const newComment = { comment, postId, userId: req.user.id };
    const createdComment = await models.Comments.create(newComment);
    return successResponse(
      res,
      201,
      "Comment added successfully.",
      createdComment
    );
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getPosts(req, res) {
    const Posts = await models.Posts.findAll({
      include: [
        { model: models.Comments, as: "comments" },
      ]
    });
    return successResponse(
      res,
      200,
      "Successfully retrieved all Posts.",
      Posts
    );
  }

  /**
   * @param {object} req - The user request object
   * @param {object} res - The user response object
   * @returns {object} Success message
   */
  static async getPostById(req, res) {
    const { postId } = req.params;
    const Post = await models.Posts.findOne({
      where: { id: postId },
      include: [
        { model: models.Comments, as: "comments" },
      ]
    });
    if (!Post) { return res.status(404).json({ status: 404, error: "Post not found." }); }
    return successResponse(
      res,
      200,
      "Successfully retrieved Post.",
      Post
    );
  }
}
