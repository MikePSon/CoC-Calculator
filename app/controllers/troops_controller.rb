class TroopsController < ApplicationController
	def new
	  @troop = Troop.new
	end

	def create
		@troop = Troop.new(params[:troop].permit(:typeoftroop, :level, :quantity, :costToTrain))
		if @troop.save
			redirect_to @troop
		else
			render 'new'
		end
	end

	def show
	  @troop = Troop.find(params[:id])
	end

	def index
	  @troops = Troop.all
	end

	def edit
	  @troop = Troop.find(params[:id])
	end

	def update
	  @troop = Troop.find(params[:id])

	  if @troop.update(params[:troop].permit(:typeoftroop, :level, :quantity, :costToTrain))
	    redirect_to @troop
	  else
	    render 'edit'
	  end
	end

	def destroy
	  @troop = Troop.find(params[:id])
	  @troop.destroy

	  redirect_to troops_path
	end

	private
	  def troop_params
	    params.require(:troop).permit(:typeoftroop, :level, :quantity)
	  end
end
