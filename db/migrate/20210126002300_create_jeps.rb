class CreateJeps < ActiveRecord::Migration[6.1]
  def change
    create_table :jeps do |t|
      t.string :topic, null: false
      t.text :question, null: false
      t.text :answer, null: false
      t.integer :point, null: false

      t.timestamps
    end
  end
end
