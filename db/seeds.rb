# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Item.destroy_all
Category.destroy_all

puts "🌱 Seeding spices..."

user1 = User.create(username: "user_1", password: "pass123")
user2 = User.create(username: "user_2", password: "pass123")

cat1 = Category.create(name: "Food")
cat2 = Category.create(name: "Tech")

item1 = Item.create(name: "Buy Milk", quantity: 1, user_id: user1.id, category_id: cat1.id)
item2 = Item.create(name: "Buy Cheese", quantity: 1, user_id: user2.id, category_id: cat1.id)
item3 = Item.create(name: "Buy RAM", quantity: 1, user_id: user2.id, category_id: cat2.id)


