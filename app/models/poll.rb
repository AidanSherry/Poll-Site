class Poll < ApplicationRecord
    validates :title, presence: true
    validates :bio, presence: true
    validates :option_1, presence: true
    validates :option_2, presence: true
end