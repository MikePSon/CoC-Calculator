CoCCalc::Application.routes.draw do
  resources :troops
 
  root to: "welcome#index"
end
