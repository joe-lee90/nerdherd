class Ticket < ApplicationRecord
    belongs_to :event
    belongs_to :user

    validates :active, presence: true
    validates :price, presence: true
    validates :event_id, presence: true
    validates :user_id, presence: true
end
