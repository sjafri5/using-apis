class CreateCryptos < ActiveRecord::Migration[6.0]
  def change
    create_table :cryptos do |t|
      t.string :name
      t.string :ticker

      t.timestamps
    end
  end
end
