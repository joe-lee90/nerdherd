Rails.application.routes.draw do
  resources :tickets
  resources :events
  resources :users

  post "/login", to: "session#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "session#destroy"
  get "/me", to: "users#show"

end
