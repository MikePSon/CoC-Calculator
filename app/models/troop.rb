class Troop < ActiveRecord::Base
	validates :level, presence: true,
		length: { in: 0..9 }
	validates :quantity, presence: true,
		length: { in: 0..9 }
	validates :typeoftroop, presence:true
	validates :typeoftroop, uniqueness:true
end
