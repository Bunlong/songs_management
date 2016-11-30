class Api::ArtistsController < ApplicationController
  def artists
    begin
      @artists = Artist.all.select('id, name')
      render json: { status: 200, data: @artists }
    rescue Exception => e
      render json: { status: 504 }
    end
  end
end
