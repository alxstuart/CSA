# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment',  __FILE__)

# require 'rack/cors'
# 
# config.middleware.insert_before 0, "Rack::Cors" do
# 	allow do
# 	    origins '*'
# 	    resource '*', :headers => :any, :methods => [:get, :post, :options]
# 	end
# end

run Rails.application
