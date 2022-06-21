class Event < ApplicationRecord
    has_many :tickets
    has_many :users, through: :tickets

    validates :name, presence: true
    validates :image, presence: true
    validates :location, presence: true
    validates :date, presence: true
    validates :description, presence: true
    validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
end
