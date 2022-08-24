Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  get '/polls', to: "homes#index"
  get '/polls/new', to: "homes#index"
  get '/polls/:id', to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :polls, only: [:index, :show, :create] do 
        resources :comments, only: [:create]
      end
    end
  end

end
