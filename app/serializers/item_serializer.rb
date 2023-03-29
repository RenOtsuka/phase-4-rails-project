class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :category_id
  belongs_to :user
  belongs_to :category
end
