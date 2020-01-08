class ApplicationController < ActionController::Base
  
    skip_before_action :verify_authenticity_token
    helper_method :logged_in?, :current_user

    private

    def current_user
      return nil unless session[:session_token]
      @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
      !!current_user
    end

    def sign_in(user)
      @current_user = user
      user.reset_session_token!
      session[:session_token] = user.session_token
    end

    def sign_out
      current_user.reset_session_token!
      session[:session_token] = nil
      @current_user = nil
    end

    def require_logged_in
      render json: { base: ['invalid credentials'] }, status: 401 unless current_user
    end

end
