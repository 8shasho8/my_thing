const API_KEY_WEATHER = 'a3940d35b7cbf0d7199654651541f7f6';
const URL = "https://api.openweathermap.org/data/2.5/weather?";
const CITY = 'q=Sado'; 

const url = URL + CITY + '&appid=' + API_KEY_WEATHER;

fetch(url)
  .then(response => response.json())
  .then((data) => {
    // 天気情報の取得
    const weather = data.weather[0].main;   // 天気
    const city = data.name;                 // 都市名
    const maxTempKelvin = data.main.temp_max; // 最高気温 (ケルビン)
    const maxTempCelsius = (maxTempKelvin - 273.15).toFixed(1); // 摂氏変換

    // 日時のフォーマット
    const dateObj = new Date(data.dt * 1000); // APIのdtをミリ秒に変換
    const formattedDate = `${dateObj.getMonth() + 1}月${dateObj.getDate()}日 ${dateObj.getHours()}時${dateObj.getMinutes()}分`;

    // 天気の日本語変換
    let weatherJapanese = '';
    switch (weather) {
      case 'Clear':
        weatherJapanese = '晴れ';
        break;
      case 'Rain':
        weatherJapanese = '雨';
        break;
      case 'Clouds':
        weatherJapanese = '曇り';
        break;
      case 'Snow':
        weatherJapanese = '雪';
        break;
      case 'Thunderstorm':
        weatherJapanese = '雷';
        break;
      default:
        weatherJapanese = 'その他の天気';
        break;
    }

    // HTMLへの反映
    const weatherElement = document.getElementById("weather");
    const dateElement = document.getElementById("date");
    const weatherImageElement = document.getElementById("weather-image");

    let weatherImage = '';

    // 天気に応じて画像を変更
    switch (weather) {
      case 'Clear':
        weatherImage = 'https://img.icons8.com/?size=100&id=n8viW0X2OYKw&format=png&color=000000';  // 晴れ
        break;
      case 'Rain':
        weatherImage = 'https://img.icons8.com/?size=100&id=pMGukwJCfgd0&format=png&color=000000';   // 雨
        break;
      case 'Clouds':
        weatherImage = 'https://img.icons8.com/?size=100&id=69bf287oWHbX&format=png&color=000000'; // 曇り
        break;
      case 'Snow':
        weatherImage = 'https://img.icons8.com/?size=100&id=GMLfiiwrC4PS&format=png&color=000000';   // 雪
        break;
      case 'Thunderstorm':
        weatherImage = 'https://img.icons8.com/?size=100&id=GH8NkpA3qHRX&format=png&color=000000'; // 雷
        break;
      default:
        weatherImage = 'https://img.icons8.com/?size=100&id=fTt1KFKoL8IW&format=png&color=000000'; // その他の天気
        break;
    }

    if (weatherElement && dateElement && weatherImageElement) {
      dateElement.innerHTML = `<p>日時: ${formattedDate}</p>`;
      weatherElement.innerHTML = `
      <p>最高気温: ${maxTempCelsius}℃</p>
      <p>天気: ${weatherJapanese}</p>
      `;
      weatherImageElement.innerHTML = `<img src="${weatherImage}" alt="${weatherJapanese}" />`;
    } else {
      console.error("HTMLに必要な要素が見つかりません");
    }

    // コンソール出力（デバッグ用）
    console.log(`都市: ${city}, 天気: ${weatherJapanese}, 最高気温: ${maxTempCelsius}℃, 日時: ${formattedDate}`);
  })
  .catch(error => {
    console.error("データの取得中にエラーが発生しました:", error);
  });
