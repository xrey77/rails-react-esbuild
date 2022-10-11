Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :users, only: [:LOGIN]
      post 'signin', action: :LOGIN, controller: :userauth

      resources :users, only: [:REGISTER]
      post 'signup', action: :REGISTER, controller: :userauth
    end
  end

  # get 'components/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


  # Defines the root path route ("/")  
  root 'components#index'

end

