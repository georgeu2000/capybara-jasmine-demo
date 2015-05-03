class App
  class << self
    def call env
      if env[ 'PATH_INFO' ] == '/'
        found
      else
        not_found
      end
    end

    def found
      html = '<html><head></head><body>Welcome to the app.</body></html>'
      Rack::Response.new( html, 200, { 'Content-Type' => 'text/html; charset=utf-8' }).finish
    end

    def not_found
      Rack::Response.new( '404', 404, { 'Content-Type' => 'text/html; charset=utf-8' }).finish
    end
  end
end