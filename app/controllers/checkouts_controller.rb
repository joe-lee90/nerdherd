class CheckoutsController < ApplicationController
    # before_action :authenticate_user!

    def show
        current_user.processor = :stripe
        current_user.customer

        @checkout_session = current_user.payment_processor.checkout(
            mode: "payment",
            line_items: "price_1LDJEYBuKnbh1WfqJw3L16aC"
        )
    end 
end