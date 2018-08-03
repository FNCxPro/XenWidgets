/**
 * LS One
 * Designed by relative
 * keybase.io/relative
 * =======================
 * Uses XenInfo from Junesiphone
 * =======================
 * Version 1.0.0
 *   * Initial release
 */
const STATES          = {TIME: 0, WEATHER: 1}
const condStrings     = [
  'Tornado',
  'Tropical Storm',
  'Hurricane',
  'Strong Storms',
  'Thunderstorms',
  'Rain / Snow',
  'Rain / Sleet',
  'Wintry Mix',
  'Freezing Drizzle',
  'Drizzle',
  'Freezing Rain',
  'Showers',
  'Rain',
  'Flurries',
  'Snow Showers',
  'Blowing / Drifting Snow',
  'Snow',
  'Hail',
  'Sleet',
  'Blowing Dust / Sandstorm',
  'Foggy',
  'Haze',
  'Smoke',
  'Breezy',
  'Windy',
  'Frigid / Ice Crystals',
  'Cloudy',
  'Mostly Cloudy',
  'Mostly Cloudy',
  'Partly Cloudy',
  'Partly Cloudy',
  'Clear',
  'Sunny',
  'Fair / Mostly Clear',
  'Fair / Mostly Clear',
  'Mixed Rain and Hail',
  'Hot', 
  'Isolated Thunderstorms',
  'Scattered Thunderstorms',
  'Scattered Showers',
  'Heavy Rain',
  'Scattered Snow Showers',
  'Heavy Snow',
  'Blizzard',
  'Not Available',
  'Scattered Showers',
  'Scattered Snow Showers',
  'Scattered Thunderstorms'
]
let   widgetElement   = document.querySelector('div.widget'),
      weatherElement  = document.querySelector('div.widget > div.weather'),
      homeElement     = document.querySelector('div.widget > div.home'),
      timeElement     = document.querySelector('div.widget > div.home > span.time'),
      dateElement     = document.querySelector('div.widget > div.home > span.date'),

      iconElement     = document.querySelector('div.widget > div.weather > div.left > img.icon'),
      tempElement     = document.querySelector('div.widget > div.weather > div.right > span.temp'),
      condElement     = document.querySelector('div.widget > div.weather > div.right > span.conditions')
let state = STATES.TIME
let loaded = false
function onLoad() {
  widgetElement   = document.querySelector('div.widget')
  weatherElement  = document.querySelector('div.widget > div.weather')
  homeElement     = document.querySelector('div.widget > div.home')
  timeElement     = document.querySelector('div.widget > div.home > span.time')
  dateElement     = document.querySelector('div.widget > div.home > span.date')
  iconElement     = document.querySelector('div.widget > div.weather > div.left > img.icon')
  tempElement     = document.querySelector('div.widget > div.weather > div.right > span.temp')
  condElement     = document.querySelector('div.widget > div.weather > div.right > span.conditions')
  loaded = true
  update()
  if (!DarkMode) {
    widgetElement.classList.remove('dark')
    widgetElement.classList.add('light')
  }
  widgetElement.addEventListener('click', (e) => {
    console.log('sup')
    console.log(state)
    state = (state === STATES.TIME) ? STATES.WEATHER : STATES.TIME
    console.log(state)
    switch (state) {
      case STATES.TIME:
        homeElement.classList.remove('hidden')
        weatherElement.classList.add('hidden')
        break
      case STATES.WEATHER:
        homeElement.classList.add('hidden')
        weatherElement.classList.remove('hidden')
        break
    }
  })
}

function update() {
  if (!loaded) return
  let time = new timelib.DateTime(new Date())
  timeElement.innerHTML = time.format('hrs:minp ampm')//'da time'//getTime(time)
  dateElement.innerHTML = time.format('DOW, MNTHN ORDY')//'da date'//getDate(time)
}
function mainUpdate(type) {
  switch(type) {
    case 'battery':
      break
    case 'weather':
      iconElement.setAttribute('src', `icons/${weather.conditionCode}.svg`)
      tempElement.innerHTML = `${weather.temperature}&deg;`
      condElement.innerHTML = `${condStrings[weather.conditionCode]}`
      break
  }
}

window.setInterval(update, 1000)
