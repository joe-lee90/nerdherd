puts "🗑 Clearing database"

User.destroy_all
Event.destroy_all
Ticket.destroy_all

puts "✅ Done cleaning!"

puts "Seeding..."

# Users
# username, image
nerdherd = User.create(username: "nerdherd", password_digest: BCrypt::Password.create("nerdherd"))
zamboni  = User.create(username: "zamboni", password_digest: BCrypt::Password.create("zamboni"))

# Events
# name, game, image, location, date, description, sponsors, price
# datetime (year, month, day, hour, minute, second)
valorant = Event.create(name: "Intel Extreme Masters Season XVI - Katowice",
                        game: "Counter-Strike: Global Offensive",
                        image: "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/02/IEM-Katowice-2022-1.jpg",
                        location: "Spodek Arena, Katowice",
                        date: DateTime.new(2022, 9, 27, 16),
                        description: "24 of the best CSGO teams in the world battle it out for a $1,000,000 prize pool!",
                        sponsors: "Intel, Predator Gaming, 1xBet, DHL, Monster Energy, Coinbase, U.S. Air Force",
                        price: 59)

league   = Event.create(name: "2021 World Championship",
                        game: "League of Legends",
                        image: "https://resources.esportsinsider.com/esportsinsider/2021/08/WORLDS_EUROPE.png",
                        location: "Laugardalshöll, Reykjavík, Iceland",
                        date: DateTime.new(2021, 10, 5, 12),
                        description: "24 teams from all regions of the world duke it out in a months-long campaign for the Summoner's Cup!",
                        sponsors: "AXE, Bose, Cisco, MasterCard, Mercedes-Benz, OPPO, RedBull, Secretlab, Spotify, State Farm, Verizon",
                        price: 89)

dota     = Event.create(name: "The International 2022",
                        game: "Dota 2",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfJAD_Tj07ROBIKcnfHsCbGfzJWsFvr0xTQ&usqp=CAU",
                        location: "Indoor Stadium & Suntec Singapore, Singapore",
                        date: DateTime.new(2022, 10, 15, 18),
                        description: "The top 20 teams fight to be world champions over a $1,600,000 prize pool",
                        sponsors: "MSI, TCL, DHL, HyperX, Rivalry",
                        price: 45)

# Tickets
# active, event_id, user_id
# tickets that belong to nerdherd are unsold tickets
t1 = Ticket.create(active: true, event_id: valorant.id, user_id: zamboni.id)
t2 = Ticket.create(active: true, event_id: valorant.id, user_id: nerdherd.id)
t3 = Ticket.create(active: true, event_id: league.id, user_id: nerdherd.id)



puts "Finished seeding"