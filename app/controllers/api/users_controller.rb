class Api::UsersController < ApplicationController

    def new 
        @user = User.new
    end

    
    def create
        @user = User.new(user_params)
        if @user.save
            sign_in(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show 
        @user = User.with_attached_user_photo.all.find(params[:id])
        render "api/users/show"
    end

    def update
        @user = User.with_attached_user_photo.all.find(params[:id])
        if @user.update_attributes(user_params)
            render :show
        else 
            render json: @user.errors.full_messages
        end 
    end 

    private

    def user_params
        params.require(:user).permit(:username, :password, :user_photo)
    end
end
