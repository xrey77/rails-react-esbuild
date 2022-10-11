# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_24_020152) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string "lastname"
    t.string "firstname"
    t.string "emailadd"
    t.string "mobileno"
    t.string "username"
    t.string "passwd"
    t.string "role", default: "USER"
    t.text "secretkey"
    t.integer "mailtoken", default: 0
    t.datetime "mailtokencreated", default: -> { "CURRENT_TIMESTAMP" }
    t.datetime "mailtokenexpiry"
    t.text "qrcode_url"
    t.integer "mfa", default: 0
    t.integer "isactivated", default: 0
    t.text "picture"
    t.datetime "datecreated", default: -> { "CURRENT_TIMESTAMP" }
    t.datetime "dateupdated"
    t.index ["emailadd"], name: "index_users_on_emailadd", unique: true
    t.index ["lastname", "firstname"], name: "index_users_on_lastname_and_firstname", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
