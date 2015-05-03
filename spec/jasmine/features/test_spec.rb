describe 'Test' ,:js do
  specify 'success' do
    run_specs 'MatcherSpec'
    visit '/'

    # puts js_html

    # save_and_open_screenshot
    # sleep 5
  end

  xspecify 'failure' do
    skip 'This spec should fail.'

    run_specs 'LoginSpec'
    visit '/'
  end
end
