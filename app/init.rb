# Gems
require 'rack'

# App
require_relative 'app'
require_relative 'builder'

puts "Started app in #{ ENV[ 'RACK_ENV' ]} environment."