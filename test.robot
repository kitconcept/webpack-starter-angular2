*** Variables ***

${HOSTNAME}             127.0.0.1
${PORT}                 8080
${SERVER}               http://${HOSTNAME}:${PORT}/
${BROWSER}              firefox


*** Settings ***

Documentation   Webpack Starter Angular 2 Acceptance Tests
Library         DebugLibrary
Library         OperatingSystem
Library         Selenium2Library  timeout=10  implicit_wait=0
Library         WebpackLibrary
Suite Setup     Test Setup
Suite Teardown  Test Teardown


*** Keywords ***

Test Setup
  Start Webpack  ${HOSTNAME}  ${PORT}  config=webpack.config.js  webpack_bin_path=node_modules/webpack-dev-server/bin/webpack-dev-server.js  content_base=src  debug=True
  Open Browser  ${SERVER}  ${BROWSER}
  Set Window Size  1280  1024

Test Teardown
  Stop Webpack
  Close Browser


*** Test Cases ***

Scenario: As a visitor I can visit the front page
  Go To  ${SERVER}
  Wait until page contains  Webpack Starter Angular 2
  Page Should Contain  Webpack Starter Angular 2

Scenario: As a visitor I can navigate to the about page
  Go To  ${SERVER}
  Wait until page contains  Webpack Starter Angular 2
  Click Link  About
  Wait until page contains  About Component
  Location should be  http://127.0.0.1:8080/about
