class Category < ApplicationRecord
  has_many :items
  has_many :todolists, through :items
  validates :name, presence: true, length: {maximum: 50}

end
