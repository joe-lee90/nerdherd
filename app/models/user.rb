class User < ApplicationRecord
    has_many :tickets
    has_many :events, through: :tickets
    
    
    validates :username, presence: true
end
