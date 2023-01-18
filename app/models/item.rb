class Item < ApplicationRecord
  has_many :todolists
  has_many :users, through: :todolists
  validates :name, presence: true, length: {maximum: 50}
  validates :quantity, presence: true, numericalty: {only_integer: true}
  
end
