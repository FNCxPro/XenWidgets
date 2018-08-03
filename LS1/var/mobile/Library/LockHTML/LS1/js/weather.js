// Not finished
class RelativeWeather {
  /**
   * Create a new RelativeWeather
   * @param {Number} latitude - Latitude
   * @param {Number} longitude - Longitude
   */
  constructor(latitude, longitude) {
    /**
     * Position latitude
     * @type {Number}
     */
    this.latitude = latitude

    /**
     * Position longitude
     * @type {Number}
     */
    this.longitude = longitude

    this.apiKey = window.wxk
  }
}