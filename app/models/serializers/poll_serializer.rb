class PollSerializer < ActiveModel::Serializer
    attributes :id, :title, :body, :option_1, :option_2

    has_many :comments
end 