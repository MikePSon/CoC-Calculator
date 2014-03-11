class CreateTroops < ActiveRecord::Migration
  def change
    create_table :troops do |t|
      t.string :typeoftroop
      t.integer :level
      t.integer :quantity

      t.timestamps
    end
  end
end
