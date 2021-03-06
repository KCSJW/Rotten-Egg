class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :top_critic, inclusion: [true, false] 
    
    has_many :reviews,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Review
    
    has_many :interested_movies,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Interested
    
    has_many :movies,
    through: :interested_movies,
    source: :movie

    has_one_attached :user_photo
    
    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        return nil if @user.nil?
        @user.password_is?(password) ? @user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def password_is?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end    

end
