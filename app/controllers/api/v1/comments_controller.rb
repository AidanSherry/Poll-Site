class Api::V1::CommentsController < ApiController

    def create
        comment = Comment.new(comment_params)
        comment.poll_id = poll.id
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

end