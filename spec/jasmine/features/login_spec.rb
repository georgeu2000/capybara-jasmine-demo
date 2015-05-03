describe 'Login' ,:js do
  specify do
    run_specs 'LoginSpec'
    visit '/'

    # save_and_open_screenshot
    # puts js_html
    # sleep 10
  end
end
