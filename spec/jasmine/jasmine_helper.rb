require 'capybara/rspec'
require 'capybara-webkit'

require './spec/jasmine/app/init'
require './spec/jasmine/shared/helpers'
require './spec/jasmine/shared/matchers'

Capybara.save_and_open_page_path = './tmp'
Capybara.app = capybara_app

RSpec.configure do |config|
  config.include Capybara::DSL
  
  config.before( :each, js:true ) do
    Capybara.current_driver = :webkit
    page.driver.block_unknown_urls if Capybara.current_driver.match( /webkit/ )
  end

  config.after( :each, js:true ) do
    # save_and_open_screenshot
    display_js_console
    display_js_errors
    display_jasmine_specs
    
    expect( page    ).to have_content 'finished in'
    expect( js_body ).to jasmine_success
  end
end