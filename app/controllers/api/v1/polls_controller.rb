class Api::V1::PollsController < ApiController

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
        # ser = PollSerializer.new(poll)
        render json: poll
    end

    private

    def poll_params
        params.require(:poll).permit(:title, :body, :option_1, :option_2)
    end

end