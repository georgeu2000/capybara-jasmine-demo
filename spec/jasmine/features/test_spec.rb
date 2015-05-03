describe 'Test' ,:js do
  specify 'success' ,:focus do
    run_specs 'MatcherSpec'
    visit '/'
    
    # save_and_open_screenshot
    # sleep 5
    # puts js_html

    display_js_console
  end

  xspecify 'failure' do
    pending 'This spec should fail.'

    run_specs 'FormSpec'
    visit '/'
  end
end
