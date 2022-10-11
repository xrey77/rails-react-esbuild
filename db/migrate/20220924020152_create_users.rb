class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.index [:lastname, :firstname],unique: true
      t.string :lastname
      t.string :firstname
      t.string :emailadd, unique: true
      t.index :emailadd, unique: true
      t.string :mobileno
      t.string :username, unique: true
      t.index :username, unique: true
      t.string :passwd
      t.string :role, default: 'USER'
      t.text :secretkey
      t.integer :mailtoken, default: 0
      t.datetime :mailtokencreated, default: -> { 'CURRENT_TIMESTAMP' }
      t.datetime :mailtokenexpiry
      t.text :qrcode_url, null: true
      t.integer :mfa, default: 0
      t.integer :isactivated, default: 0
      t.text :picture
      t.datetime :datecreated, default: -> { 'CURRENT_TIMESTAMP' }
      t.datetime :dateupdated
    end
  end
end
