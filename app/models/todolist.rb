class Todolist < ApplicationRecord
  belongs_to :user
  belongs_to :item, dependent: :destroy
  validates :title, presence: true, length: {maximum: 50}
end
