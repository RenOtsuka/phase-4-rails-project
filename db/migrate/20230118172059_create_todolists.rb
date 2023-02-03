class CreateTodolists < ActiveRecord::Migration[6.1]
  def change
    create_table :todolists do |t|
      t.string :title
      t.integer :user_id
      t.integer :item_id

      t.timestamps
    end
  end
end
