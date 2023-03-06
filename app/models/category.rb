class Category < ApplicationRecord
  has_many :items
  has_many :users, through: :items
  validates :name, presence: true, length: {maximum: 50}

end
