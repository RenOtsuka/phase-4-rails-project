class User < ApplicationRecord
  has_secure_password
  has_many :items
  has_many :categories, through: :items
  validates :username, presence: true, uniqueness: true
end
