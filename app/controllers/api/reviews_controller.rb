class Api::ReviewsController < ApplicationController
    before_action :require_logged_in  

    def index
        @reviews = Review.all
    end

    def create
        @review = Review.new(review_params)
        @review.author_name = current_user.username
        @review.author_id = current_user.id

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find(params[:id])
    end

    def edit
        @review = Review.find(params[:id])
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if current_user.id == @review.user.id
            @review.destroy
            render :show
        else
            render json: ['Must be owner of comment to destroy'], status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:body, :rating, :author_id, :movie_id)
    end

end