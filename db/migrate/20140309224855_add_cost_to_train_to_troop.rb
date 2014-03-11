class AddCostToTrainToTroop < ActiveRecord::Migration
  def change
    add_column :troops, :costToTrain, :integer
  end
end
