require 'rack'
require 'rspec'

ENV[ 'RACK_ENV'   ] = 'test'
 
require './app/init'


RSpec.configure do |config|
  config.filter_run focus:true
  config.run_all_when_everything_filtered = true
  config.color = true
  config.include FactoryGirl::Syntax::Methods

  include Rack::Test::Methods

  config.backtrace_exclusion_patterns = [
    /\/lib\d*\/ruby\//,
    /bin\//,
    /gems/,
    /spec\/spec_helper\.rb/,
    /lib\/rspec\/(core|expectations|matchers|mocks)/
  ]
  
  config.before( :each ) do
  end
end

require './spec/jasmine/jasmine_helper'
