describe 'Pages' do
  specify do
    get '/'
    
    expect( last_response.status ).to eq 200
    expect( last_response.body   ).to eq 'Welcome to the app.'
  end
end
