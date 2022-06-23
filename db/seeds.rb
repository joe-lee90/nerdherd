puts "🗑 Clearing database"

User.destroy_all
Event.destroy_all
Ticket.destroy_all

puts "✅ Done cleaning!"

puts "Seeding..."

# Users
# username, image
nerdherd = User.create(username: "nerdherd", password_digest: BCrypt::Password.create("nerdherd"), email: 'nerdherd.proj@gmail.com')
zamboni  = User.create(username: "zamboni", password_digest: BCrypt::Password.create("zamboni"), email: 'zvmboni@gmail.com')

# Events
# name, game, image, location, date, description, sponsors, price
# datetime (year, month, day, hour, minute, second)
league   = Event.create(name: "2021 World Championship",
                        game: "League of Legends",
                        image: "https://resources.esportsinsider.com/esportsinsider/2021/08/WORLDS_EUROPE.png",
                        location: "Laugardalshöll, Reykjavík, Iceland",
                        date: DateTime.new(2021, 10, 5, 12),
                        description: "24 teams from all regions of the world duke it out in a months-long campaign for the Summoner's Cup!",
                        sponsors: "AXE, Bose, Cisco, MasterCard, Mercedes-Benz, OPPO, RedBull, Secretlab, Spotify, State Farm, Verizon",
                        price: 89)

                        
comiccon = Event.create(name: "2022 Comic-Con International: San Diego",
                        game: "Convention",
                        image: "https://www.comic-con.org/sites/default/files/CCILogo-R-LG.png",
                        location: "San Diego Convention Center",
                        date: DateTime.new(2022, 7, 24, 8),
                        description: "The SAN DIEGO COMIC CONVENTION (Comic-Con International) is a California Nonprofit Public Benefit Corporation organized for charitable purposes and dedicated to creating the general public’s awareness of and appreciation for comics and related popular art forms, including participation in and support of public presentations, conventions, exhibits, museums and other public outreach activities which celebrate the historic and ongoing contribution of comics to art and culture.",
                        sponsors: "",
                        price: 90)

pax       = Event.create(name: "PAX West 2022",
                        game: "Convention",
                        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAZlBMVEUAfbv///8Ae7oAgb3J4u+z1ukAerrf7vYPhsDn8/gskMQdiMHr9fry+fyWxuAAf7w8l8inz+XU6PO82uuJv9xystaeyuJ/udlRos1Dmsldp9CQwt5prtTA3ezM5PC11+lUps96tdenLWnvAAAEb0lEQVR4nO3b6XaiMACGYRNkC1JZLMGVcv83OYSKkg3oqW2HnO/5aZAp74kKgdlsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgVajJN3b3ur/sv7NnJhOHTBNmHwzYXts+SlzpF912uvgQ2LanNC/3toMPjuFZ3T4qC2bd27pEITE5WHOcUvJuOfYuFSFyLBo1hLgSy9KKHMyb06QgJDYfe59KjtXNKvGSI7FsrSwzi76Jsdz0fXZP1cV6fGfdU7kSy9rKGCuo037soh/6I9UzFvWa4aVt4kAseytDLBptP4dC7bdtlGqIRb38+dLVgVgTrbpYSpHgMAxVypCU6jOWlMqJWFOt1JlFs90wktbSkdOjspvzXkklPoa/emA/YLJVKB+ed30O3aJxR3pW33qOcvWly9rPSb/QirZSDGli7Sv1vYVWz3oKuxbLWwUsHo+lx3EsqsdSU6291Bda0Y0vD1698X7mYlkvBFZkcavgXR3l8tf7ZCwXUi1uRZm24S5bHMuJVEtbUar9rBHSyN/W9lhupFraSiwv6JQFB7oxBHUn1cJW/fKCYVy5JKaRb9jKlVTLWtHP5QWduuAQeHosZ1ItazUsL+hOysQytHrTlpXXakmrx/KCrpAWHLRrwM9Yf3Nkr7ek1XN5QTdecDCncifWglb0uLNvMlpwMH0Ah1hOfGctaDVeXtA9Fhxss6qPtfrrZmG+FeVTqR4LDvZZ5Uys2VZBFk9sQcSCg8hgPrVyK9ZcK7pvJjboiQWH6VklVOuPNdOKUm15QccDfVal2mnGm7f2WFKrVNGdPUXGixs1aaCtIfO9dqrv1hryKZOx7nPT2k7Zn4XbDc2UpJwGGyVW49S9iZQFMiouBd9nYqVtdzoayLG4eKccq4nWPq3kVpnhcOZi9ak2cize70eK5a8/1XyrmVj3VFIsPpyd7h9np6UDqRa0moz1SDWKxUdXPfdYTjzOsKTVRKxRqkcsPtrJPdbWicdk5N9BSytrLCmVuINYaHd3RCxHUolnIONBaH0StIsVG7TqEyDZjStZuhP6qyOpulgj9q0ojQy0B5Zpol3JUM+ZZ2t/fmXJmVIAAOth/P84P+Kvj/T7vF+z9nuqNPK3v+TWrn1mTa4hv9YbWi1vtfZLHbRaDq2We0Wra0nIriEkzcPdtSzLLSFhdbimpKzyqsqHpyHQSkRgKcm7HV2jIvfqur6QG/u4ME54nUT1x/AvoBURj3/cSOv55JCRnPWLgu2xm1pilZSPnnJDKyLuleXpR8tJzUmeFGERkspry/6jx+vnZmgltJfb6VaHSUnyDWPJhZDqGDEfrQz8jJ/TjwOLu89gGMf9jAp5EqKVLmbdlOLJiQzfV2WZkgatjE7JjvhB1bUKsiw7EZ+xLBF3ndFKI37z0m332QubpvG7062wbIphAK2+Dq3QCq0MopknZ1/ZauXrV9SrGv93NJe/Ptjvw80JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw+wcBdUatRH1z0gAAAABJRU5ErkJggg==",
                        location: "Seattle, WA",
                        date: DateTime.new(2022, 9, 2, 9),
                        description: "Penny Arcade Expo is a series of gaming culture festivals involving tabletop, arcade, and video gaming",
                        sponsors: "",
                        price: 62)

valorant = Event.create(name: "VALORANT Champions Tour 2022",
                        game: "VALORANT",
                        image: "https://sm.ign.com/ign_in/screenshot/default/valorant-champions-tour-the-2022-vct-format-valorant-champio_z5d4.png",
                        location: "Istanbul, Turkey",
                        date: DateTime.new(2022, 9, 18, 12),
                        description: "The best 16 world-class VALORANT organizations all seek the crown, but only one can be king.",
                        sponsors: "Red Bull, Verizon, Aim Lab, Secretlab.",
                        price: 76)
                        
cs       = Event.create(name: "Intel Extreme Masters Season XVI - Katowice",
                        game: "Counter-Strike: Global Offensive",
                        image: "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2022/02/IEM-Katowice-2022-1.jpg",
                        location: "Spodek Arena, Katowice",
                        date: DateTime.new(2022, 9, 27, 16),
                        description: "24 of the best CSGO teams in the world battle it out for a $1,000,000 prize pool!",
                        sponsors: "Intel, Predator Gaming, 1xBet, DHL, Monster Energy, Coinbase, U.S. Air Force",
                        price: 59)
                        
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
# t1 = Ticket.create(active: true, event_id: comiccon.id, user_id: nerdherd.id)
# t2 = Ticket.create(active: true, event_id: cs.id, user_id: nerdherd.id)
# t3 = Ticket.create(active: true, event_id: league.id, user_id: nerdherd.id)



puts "Finished seeding"