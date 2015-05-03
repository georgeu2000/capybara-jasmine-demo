
guard :rspec, cmd: 'bundle exec rspec', all_on_start:true do
  watch(%r{^app/(.+)\.rb$})             { 'spec' }
  watch(%r{^config/(.+)$})              { 'spec' }
  
  watch(%r{^public/javascripts/(.+)\.js$}){ 'spec' }
  watch(%r{^public/(.+)$})              { 'spec' }
  
  watch(%r{^spec/(.+)\.rb$})            { 'spec' }
  watch(%r{^spec/jasmine/js/(.+)$})     { 'spec' }
  watch(%r{^spec/jasmine/feautes/(.+)$}){ 'spec' }
  watch(%r{^spec/jasmine/(.+)$})        { 'spec' }
  watch('spec/spec_helper.rb')          { 'spec' }

  watch('config.ru')                    { 'spec' }
  watch('Gemfile.lock')                 { 'spec' }
end