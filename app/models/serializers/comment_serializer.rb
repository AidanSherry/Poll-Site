class CommentSerializer < ActiveModel::Serializer
    attributes :id, :poll_id, :comment
end