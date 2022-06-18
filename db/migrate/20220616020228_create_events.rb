class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :image
      t.string :location
      t.date   :date
      t.string :description
      t.string :sponsors

      t.timestamps
    end
  end
end
