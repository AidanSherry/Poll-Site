class Poll < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true
    validates :option_1, presence: true
    validates :option_2, presence: true

    has_many :comments
end