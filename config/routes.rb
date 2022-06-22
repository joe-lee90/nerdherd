Rails.application.routes.draw do
  resources :tickets
  resources :events
  resources :users

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show" 

end
