class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :user_id, :category_id
  belongs_to :user
  belongs_to :category
end
