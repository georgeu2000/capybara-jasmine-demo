def app
  Rack::Builder.new do
    use Rack::Static, root:'public'
    run App
  end.to_app
end
