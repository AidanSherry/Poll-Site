class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :comment, null: false
      t.belongs_to :poll, null: false

      t.timestamps null:false
    end
  end
end
