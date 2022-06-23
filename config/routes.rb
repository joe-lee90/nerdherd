Rails.application.routes.draw do
  resources :tickets
  resources :events
  resources :users

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show" 
  get "mytix", to: "tickets#myTickets"
  get "myEvent/:id", to: "events#myEvent"

  get "checkout", to: "checkouts#show"
  get "billing", to: "billing#show"
end
