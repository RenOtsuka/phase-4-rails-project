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
user3 = User.create(username: "user_3", password: "pass123")
user4 = User.create(username: "user_4", password: "pass123")

cat1 = Category.create(name: "Food")
cat2 = Category.create(name: "Tech")
cat3 = Category.create(name: "House")
cat4 = Category.create(name: "Landscape")


item1 = user1.items.create(name: "Buy Milk", quantity: 1, category_id: cat1.id)
item2 = user2.items.create(name: "Buy Cheese", quantity: 2, category_id: cat1.id)
item3 = user1.items.create(name: "Buy Soup", quantity: 3, category_id: cat1.id)
item4 = user2.items.create(name: "Buy RAM", quantity: 1, category_id: cat2.id)
item5 = user3.items.create(name: "Fix Roof", quantity: 0, category_id: cat3.id)
item6 = user4.items.create(name: "Buy Mulch", quantity: 4, category_id: cat4.id)
item7 = user4.items.create(name: "Buy Paint", quantity: 1, category_id: cat3.id)




