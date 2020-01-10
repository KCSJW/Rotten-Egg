class Api::InterestedsController < ApplicationController

    def create
        @interested = Interested.new(interested_params)
        @interested.save
    end

    def destory
        @interested = Interested.where(interested_params)
        @interested.destory!
    end

    private

    def interested_params
        params.require(:interested).permit(:user_id, :movie_id)
    end

end