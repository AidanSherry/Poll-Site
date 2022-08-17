class PollQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :polls do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.string :option_1, null: false
      t.string :option_2, null: false

      t.timestamps
    end
  end
end
