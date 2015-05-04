def app
  Rack::Builder.new do
    use Rack::Static, root:'public', index:'index.html', urls:['/']
    run App
  end.to_app
end
