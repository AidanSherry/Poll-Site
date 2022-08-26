class PollSerializer < ActiveModel::Serializer
    attributes :id, :title, :body, :option_1, :option_2, :comments

    # has_many :comments
    def comments 
        object.comments
    end
end 