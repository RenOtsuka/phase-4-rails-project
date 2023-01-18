class Todolist < ApplicationRecord
  belongs_to :user
  belongs_to :item
  validates :title, presence: true, length: {maximum: 50}
end
