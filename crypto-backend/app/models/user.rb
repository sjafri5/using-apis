class User < ApplicationRecord
  has_many :user_crypto
  has_many :cryptos, through: :user_crypto
end
