class Api::V1::JepsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    jep = Jep.all.order(created_at: :desc)
    render json: jep
  end

  def create
    jep = Jep.create!(jep_params)
    if jep
      render json: jep
    else
      render json: jep.errors
    end
  end

  def edit
  end
  
  def update
    jep = Jep.find(params[:id])
    jep.update(jep_params)
    if jep.valid? 
        render json: jep
    else
        render json: { error: 'failed to update jep' }, status: :not_acceptable
    end
end
  private

  def jep_params
    params.permit(:topic, :question, :answer, :point)
  end
  

end
