class App
  class << self
    def call env
      Rack::Response.new( '<html><head></head><body>Welcome to the app.</body></html>', 200 ).finish
    end
  end
end