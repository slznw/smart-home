// Обработчики событий для настроек умных устройств
document.getElementById('tempInput').addEventListener('input', function() {
    document.getElementById('setTemp').innerText = this.value;
    updateStatistics(); // Обновляем статистику
  });
  
  document.getElementById('autoMode').addEventListener('click', function() {
    document.getElementById('mode').innerText = 'Автоматический';
    updateStatistics(); // Обновляем статистику
  });
  
  document.getElementById('manualMode').addEventListener('click', function() {
    document.getElementById('mode').innerText = 'Ручной';
    updateStatistics(); // Обновляем статистику
  });
  
  document.getElementById('lock').addEventListener('click', function() {
    document.getElementById('lockStatus').innerText = 'Заблокировано';
    updateStatistics(); // Обновляем статистику
  });
  
  document.getElementById('unlock').addEventListener('click', function() {
    document.getElementById('lockStatus').innerText = 'Разблокировано';
    updateStatistics(); // Обновляем статистику
  });
  
  document.getElementById('turnOn').addEventListener('click', function() {
    document.getElementById('lightStatus').innerText = 'Включено';
    updateStatistics(); // Обновляем статистику
  });
  
  document.getElementById('turnOff').addEventListener('click', function() {
    document.getElementById('lightStatus').innerText = 'Выключено';
    updateStatistics(); // Обновляем статистику
  });
  
  document.getElementById('brightnessSlider').addEventListener('input', function() {
    document.getElementById('brightness').innerText = this.value;
    updateStatistics(); // Обновляем статистику
  });
  
  document.getElementById('colorPicker').addEventListener('input', function() {
    document.getElementById('color').innerText = this.value;
    updateStatistics(); // Обновляем статистику
  });
  
  // Функция для обновления статистики
  function updateStatistics() {
    // Получаем значения настроек
    var currentTemp = document.getElementById('tempInput').value;
    var mode = document.getElementById('mode').innerText;
    var lockStatus = document.getElementById('lockStatus').innerText;
    var lightStatus = document.getElementById('lightStatus').innerText;
    var brightness = document.getElementById('brightnessSlider').value;
    var color = document.getElementById('colorPicker').value;
  
    // Обновляем статистику
    document.getElementById('currentTemp').innerText = currentTemp;
    document.getElementById('mode').innerText = mode;
    document.getElementById('lockStatus').innerText = lockStatus;
    document.getElementById('lightStatus').innerText = lightStatus;
    document.getElementById('brightness').innerText = brightness;
    document.getElementById('color').innerText = color;
  }

// Функция для генерации случайной температуры в диапазоне от минимальной до максимальной
function getRandomTemperature(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для плавного изменения значения
function smoothChangeValue(start, end, duration, callback) {
    var range = end - start;
    var stepTime = Math.abs(Math.floor(duration / range));
    var currentValue = start;
    var timer = setInterval(function () {
        if (currentValue === end) {
            clearInterval(timer);
            callback();
        } else {
            currentValue += (start < end) ? 1 : -1;
            document.getElementById('currentTemp').innerText = currentValue;
            updateStatistics();
        }
    }, stepTime);
}

// Обработчик события для кнопки "Автоматический режим"
document.getElementById('autoMode').addEventListener('click', function () {
    document.getElementById('mode').innerText = 'Автоматический';
    // Генерируем случайную температуру и плавно изменяем её каждую секунду
    var currentTempElement = document.getElementById('currentTemp');
    var randomTemperature = getRandomTemperature(10, 30);
    var currentTemp = parseInt(currentTempElement.innerText);
    // Вызываем функцию для плавного изменения температуры
    smoothChangeValue(currentTemp, randomTemperature, 2000, function () {
        currentTempElement.innerText = randomTemperature;
        updateStatistics(); // Обновляем статистику
    });
});


// Функция для включения/выключения устройства с задержкой
function toggleDeviceWithDelay(deviceElement, status, callback) {
  setTimeout(function () {
      deviceElement.innerText = status;
      callback(); // Вызываем функцию обратного вызова
  }, 1); // Задержка в 1 секунду
}

// Обработчики для переключения между главной комнатой и кухней
document.getElementById('mainRoomLink').addEventListener('click', function () {
  document.getElementById('mainRoom').style.display = 'flex';
  document.getElementById('kitchen').style.display = 'none';
});

document.getElementById('kitchenLink').addEventListener('click', function () {
  document.getElementById('mainRoom').style.display = 'none';
  document.getElementById('kitchen').style.display = 'flex';
});

// Обработчики для главной комнаты
document.getElementById('turnOn').addEventListener('click', function () {
  var lightStatusElement = document.getElementById('lightStatus');
  toggleDeviceWithDelay(lightStatusElement, 'Включено', function () {
      updateStatistics();
  });
});

document.getElementById('turnOff').addEventListener('click', function () {
  var lightStatusElement = document.getElementById('lightStatus');
  toggleDeviceWithDelay(lightStatusElement, 'Выключено', function () {
      updateStatistics();
  });
});

document.getElementById('lock').addEventListener('click', function () {
  var lockStatusElement = document.getElementById('lockStatus');
  toggleDeviceWithDelay(lockStatusElement, 'Заблокировано', function () {
      updateStatistics();
  });
});

document.getElementById('unlock').addEventListener('click', function () {
  var lockStatusElement = document.getElementById('lockStatus');
  toggleDeviceWithDelay(lockStatusElement, 'Разблокировано', function () {
      updateStatistics();
  });
});

// Обработчики для кухни

document.getElementById('applyFridgeSettings').addEventListener('click', function () {
  var fridgeTemp = document.getElementById('fridgeTempInput').value;
  document.getElementById('fridgeTemp').innerText = fridgeTemp;
  updateStatistics();
});

document.getElementById('stoveOn').addEventListener('click', function () {
  var stoveStatusElement = document.getElementById('stoveStatus');
  toggleDeviceWithDelay(stoveStatusElement, 'Включено', function () {
      updateStatistics();
  });
});

document.getElementById('stoveOff').addEventListener('click', function () {
  var stoveStatusElement = document.getElementById('stoveStatus');
  toggleDeviceWithDelay(stoveStatusElement, 'Выключено', function () {
      updateStatistics();
  });
});

document.getElementById('kitchenLightOn').addEventListener('click', function () {
  var kitchenLightStatusElement = document.getElementById('kitchenLightStatus');
  toggleDeviceWithDelay(kitchenLightStatusElement, 'Включено', function () {
      updateStatistics();
  });
});

document.getElementById('kitchenLightOff').addEventListener('click', function () {
  var kitchenLightStatusElement = document.getElementById('kitchenLightStatus');
  toggleDeviceWithDelay(kitchenLightStatusElement, 'Выключено', function () {
      updateStatistics();
  });
});

document.getElementById('kitchenBrightnessSlider').addEventListener('input', function() {
  document.getElementById('kitchenBrightness').innerText = this.value;
  updateStatistics(); // Обновляем статистику
});

document.getElementById('kitchenColorPicker').addEventListener('input', function() {
  document.getElementById('kitchenColor').innerText = this.value;
  updateStatistics(); // Обновляем статистику
});

// Обновленная функция для обновления статистики
function updateStatistics() {
  // Получаем значения настроек
  var currentTemp = document.getElementById('currentTemp').innerText;
  var mode = document.getElementById('mode').innerText;
  var lockStatus = document.getElementById('lockStatus').innerText;
  var lightStatus = document.getElementById('lightStatus').innerText;
  var brightness = document.getElementById('brightnessSlider').value;
  var color = document.getElementById('colorPicker').value;
  var fridgeTemp = document.getElementById('fridgeTemp').innerText;
  var stoveStatus = document.getElementById('stoveStatus').innerText;
  var kitchenLightStatus = document.getElementById('kitchenLightStatus').innerText;
  var kitchenBrightness = document.getElementById('kitchenBrightnessSlider').value;
  var kitchenColor = document.getElementById('kitchenColorPicker').value;

  // Обновляем статистику
  document.getElementById('currentTemp').innerText = currentTemp;
  document.getElementById('mode').innerText = mode;
  document.getElementById('lockStatus').innerText = lockStatus;
  document.getElementById('lightStatus').innerText = lightStatus;
  document.getElementById('brightness').innerText = brightness;
  document.getElementById('color').innerText = color;
  document.getElementById('fridgeTemp').innerText = fridgeTemp;
  document.getElementById('stoveStatus').innerText = stoveStatus;
  document.getElementById('kitchenLightStatus').innerText = kitchenLightStatus;
  document.getElementById('kitchenBrightness').innerText = kitchenBrightness;
  document.getElementById('kitchenColor').innerText = kitchenColor;
}

document.addEventListener('DOMContentLoaded', function () {
  // Функции для отображения блоков
  function showBlock(blockId) {
      document.querySelectorAll('.main-container').forEach(function (block) {
          block.style.display = 'none';
      });
      document.getElementById(blockId).style.display = 'flex';
  }

  // Переход к спальне
  document.getElementById('bedroomLink').addEventListener('click', function () {
      showBlock('bedroom');
  });

  // Обработчики для умного обогревателя
  document.getElementById('heaterOn').addEventListener('click', function () {
      var heaterStatusElement = document.getElementById('heaterStatus');
      toggleDeviceWithDelay(heaterStatusElement, 'Включено', function () {
          updateStatistics();
      });
  });

  document.getElementById('heaterOff').addEventListener('click', function () {
      var heaterStatusElement = document.getElementById('heaterStatus');
      toggleDeviceWithDelay(heaterStatusElement, 'Выключено', function () {
          updateStatistics();
      });
  });

  document.getElementById('applyHeaterSettings').addEventListener('click', function () {
      var heaterTemp = document.getElementById('heaterTempInput').value;
      document.getElementById('heaterStatus').innerText = `Включено (${heaterTemp} °C)`;
      updateStatistics();
  });

  // Обработчик для умного будильника
  document.getElementById('applyAlarmSettings').addEventListener('click', function () {
      var alarmTime = document.getElementById('alarmTimeInput').value;
      document.getElementById('alarmTime').innerText = alarmTime;
      updateStatistics();
  });

  // Обновленная функция для обновления статистики
  function updateStatistics() {
      var heaterStatus = document.getElementById('heaterStatus').innerText;
      var alarmTime = document.getElementById('alarmTime').innerText;

      document.getElementById('heaterStatus').innerText = heaterStatus;
      document.getElementById('alarmTime').innerText = alarmTime;
  }

  // Функция для включения/выключения устройства с задержкой
  function toggleDeviceWithDelay(deviceElement, status, callback) {
      setTimeout(function () {
          deviceElement.innerText = status;
          callback();
      }, 1);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  // Функции для отображения блоков
  function showBlock(blockId) {
      document.querySelectorAll('.main-container').forEach(function (block) {
          block.style.display = 'none';
      });
      document.getElementById(blockId).style.display = 'flex';
  }

  // Переход к настройкам
  document.getElementById('settingsLink').addEventListener('click', function () {
      showBlock('settings');
  });

  // Обработчик для кнопки "Перезагрузить систему"
  document.getElementById('rebootSystem').addEventListener('click', function () {
      setTimeout(function () {
          location.reload();
      }, 1000); // Задержка в 1 секунду перед перезагрузкой страницы
  });

  // Пример обновления uptime (можно обновлять каждую секунду)
  function updateUptime() {
      let uptimeElement = document.getElementById('systemUptime');
      let startTime = Date.now();
      setInterval(function () {
          let elapsed = Math.floor((Date.now() - startTime) / 1000);
          let hours = Math.floor(elapsed / 3600);
          let minutes = Math.floor((elapsed % 3600) / 60);
          let seconds = elapsed % 60;
          uptimeElement.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }, 1000);
  }

  updateUptime();

  // Обработчик для кнопки "Обновить прошивку" (заглушка)
  document.getElementById('updateFirmware').addEventListener('click', function () {
      alert('Прошивка обновлена до последней версии.');
  });
});

