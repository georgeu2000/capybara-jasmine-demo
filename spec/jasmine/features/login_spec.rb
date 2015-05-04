describe 'Login' ,:js do
  specify do
    run_specs 'LoginSpec'
    visit '/login.html'

    # save_and_open_screenshot
    # puts js_html
  end
end
