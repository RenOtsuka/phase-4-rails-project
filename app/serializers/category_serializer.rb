class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :items

  def catitems
    self.items.map do |item|
      if item.id == category.id
        return item
      else
        next
      end
    end

  end


end
