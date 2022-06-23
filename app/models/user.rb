class User < ApplicationRecord
    include Pay::Billable
    pay_customer default_payment_processor: :stripe

    has_many :tickets
    has_many :events, through: :tickets
    
    has_secure_password
    validates :username, presence: true

    def pay_proc
        @user.payment_processor 
    end
end
