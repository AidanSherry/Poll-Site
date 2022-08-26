class Api::V1::CommentsController < ApiController
  before_action :authenticate_user_fetch!, except: [:index, :show]

  def create
      comment = Comment.new(comment_params)
      comment.poll_id = poll.id
      comment.user = current_user
      if comment.save
        render json: comment
      else
        render json: { errors: comment.errors.full_messages }, status: 400
      end
  end

  private

  def comment_params 
    params.require(:comment).permit(:comment, :poll_id)
  end

  def poll
    @poll = Poll.find(params[:poll_id])
  end

  def authorize_user
    if !user_signed_in? || !(current_user.role == "admin")
      render json: {error: ["Only admins have access to this feature"]}
    end
  end

  def authenticate_user_fetch!
    if !user_signed_in?
      render json: { error: "you must be signed in to submit a review"}, status: 401
    end
  end

end