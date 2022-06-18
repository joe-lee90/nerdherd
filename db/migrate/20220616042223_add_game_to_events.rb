class AddGameToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :game, :string
  end
end
