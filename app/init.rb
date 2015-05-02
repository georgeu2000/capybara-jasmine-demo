# Gems
require 'awesome_print'
require 'rack'

# App
require_relative 'app'
require_relative 'builder'

puts "Started in #{ ENV[ 'RACK_ENV' ]} environment."