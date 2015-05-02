def app
  Rack::Builder.new{
    use Rack::Static, root:'public'
    
    run app
  }.to_app
end
