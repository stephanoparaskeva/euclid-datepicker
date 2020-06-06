require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "datepicker"
  s.version      = package['version']
  s.summary      = "React Native Date Picker component for Android and iOS"

  s.platform     = :ios, "8.0"

  s.source       = { :git => "https://github.com/stephanoparaskeva/datepicker.git" }
  s.source_files  = "ios/RNDatePicker/*.{h,m}"

  s.dependency 'React'
end