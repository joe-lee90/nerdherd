class ChangeDateToTimeEvents < ActiveRecord::Migration[7.0]
  def change
    change_column :events, :date, :datetime
  end
end
