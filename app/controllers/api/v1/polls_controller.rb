class Api::V1::PollsController < ApiController
    before_action :authenticate_user_fetch!, except: [:index, :show]

    def index
        render json: { polls: Poll.all }
    end

    def create
        poll = Poll.new(poll_params)
        if poll.save
            render json: poll
        else
            render json: { errors: poll.errors.full_messages }, status: 400
        end
    end

    def show
        poll = Poll.find(params[:id])
        render json: poll
    end

    private

    def poll_params
        params.require(:poll).permit(:title, :body, :option_1, :option_2)
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