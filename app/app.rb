class App
  class << self
    def call env
      Rack::Response.new( '404', 404, { 'Content-Type' => 'text/html; charset=utf-8' }).finish
    end
  end
end