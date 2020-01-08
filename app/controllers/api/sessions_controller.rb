class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user 
            sign_in(@user)
            render 'api/user/movie'
        else
            render(
            json: ['Invalid Credentials'],
            status: 401
            )
        end

    end

    def destroy
        @user = current_user

        if @user 
            sign_out
            render {}
        else
            render(
                json: ['Not sign in yet'],
                status: 404
            )
        end
    end

end
