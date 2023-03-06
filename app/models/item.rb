class Item < ApplicationRecord
  belongs_to :user
  belongs_to :category
  validates :name, presence: true, length: {maximum: 50}
  validates :quantity, presence: true, numericality: {only_integer: true}

  
end
