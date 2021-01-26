Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'jeps/index'
      post 'jeps/create'
      get '/show/:id', to: 'jeps#show'
      patch 'jeps/:id', to: 'jeps#update'
    end
  end
 root 'homepage#index'
match '*path', to: 'homepage#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
