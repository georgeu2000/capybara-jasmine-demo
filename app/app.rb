class App
  class << self
    def call env
      Rack::Response.new( 'Welcome to the app.', 200 ).finish
    end
  end
end