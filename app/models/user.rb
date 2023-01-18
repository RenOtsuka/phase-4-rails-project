class User < ApplicationRecord
  has_secure_password
  has_many :todolists
  has_many :items, through: :todolists
  validates :username, presence: true, uniqueness: true
end
