# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.delete_all
Crypto.delete_all
UserCrypto.delete_all

user = User.create(username: 'satsoshi')

btc = Crypto.create(name: 'Bitcoin', ticker: 'btc' )
eth = Crypto.create(name: 'Ethereum', ticker: 'eth' )


UserCrypto.create(crypto_id: btc.id, user_id: user.id)
