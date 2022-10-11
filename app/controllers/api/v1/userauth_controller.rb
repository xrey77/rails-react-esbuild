class Api::V1::UserauthController < ApplicationController
    # skip_before_action :verify_authenticity_token
    self.per_form_csrf_tokens = true

    # GET /users or /users.json
    def index
      @users = User.all
    end
      
    def LOGIN
      @usrname = params[:username]
      @pwd = params[:passwd]
      @uname = User.find_by(username: @usrname)
      if @uname

        if @uname.isactivated == 0
          render json: {"statuscode": "401","message": "Account is not yet activated, plese check your registered email address."}, status: 401
        else

          # COMPARE PASSWORD
          @hashinputpwd = BCrypt::Password.create(@pwd)      
          @crypted_password = @uname.passwd.to_s
          if BCrypt::Password.new(@crypted_password) == @pwd
            @secret = SecureRandom.hex(32)
  
            render json: { "userid": @uname.id, "username": @uname.username, "secretkey": @secret }, status: 200
            return
          else          
            render json: { "message": "Password not matched..."}, status: 401
            return
          end

        end

      else
        render json: { "message": "username not found"}, status: 401
        return        
      end

    end

    # POST USER REGISTRATION
    def REGISTER
      @lname = params[:lastname]
      @fname = params[:firstname]
      @email = params[:emailadd]
      @mobile = params[:mobileno]
      @usrname = params[:username]
      @pwd = params[:passwd]
      @hashpwd = BCrypt::Password.create(@pwd)      
      @secret = SecureRandom.hex(32)
      @mailtoken = rand.to_s[2..7].to_i
      begin  
        @xuname = User.find_by(username: @usrname)
        # VALIDATE USERNAME
        if @xuname
          render json: {"statuscode": "404","message": "Username has already been taken."}, status: 404
          return
        end
  
        # # VALIDATE EMAIL ADDRESS
        @xemail = User.find_by(emailadd: @email)
        if @xemail
          render json: {"statuscode": "404","message": "Email Address has already been taken."}, status: 404
          return
        end        

        # INSERT DATA            
        @users = User.create(lastname: @lname,firstname: @fname,emailadd: @email,mobileno: @mobile,username: @usrname,passwd: @hashpwd, secretkey: @secret, mailtoken: @mailtoken)

        if @users.save
          # SEND EMAIL
          UserMailer.signup_confirmation(@email)
          return render json: {"statuscode": "200", "message": "You have registered successfully, please check your email address and activate."}, status: 200
        end

      rescue => error
        return render json: {"statuscode": "204", "message": "Error"}, status: 204
      end
    
    end

    def SIGNUPMAIL
      @users = User.new(user_params)
      if @users.save
         #send email
         UserMailer.signup_confirmation(@users).deliver
         redirect_to @users, notice: "Signed up successfully."
      else
         render :new
      end
  end    

    private

    def user_params
      params.permit(:id, :lastname, :firstname, :emailadd, :mobileno, :username, :passwd)
      # params.require(:user).permit(:id, :lastname, :firstname, :emailadd, :mobileno, :username, :passwd)
    end


end
