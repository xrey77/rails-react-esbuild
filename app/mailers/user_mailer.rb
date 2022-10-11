class UserMailer < ApplicationMailer
  default from: "Web Master"
  def signup_confirmation(user)
      @users = user
      mail to: @users.emailadd, subject: "Sign Up Confirmation"
  end
end
