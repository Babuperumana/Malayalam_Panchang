# Malayalam Panchangam

Its a cool package build to calculate Tithi (Moon), Nakshatram, Karnam, Yogam, Raasi (Zodic Sign) and Ayanamsa. It can also be use to predict Masam(Kollavarsham) and Ritu (season).

<!-- ![Build Status](https://github.com/omkarpattanaik/mlpg-panchanga/actions/workflows/main.yml/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![NPM](https://nodei.co/npm/mlpg-panchang.png?compact=true)](https://nodei.co/npm/mlpg-panchang/) -->

### Installation 🧱

Via npm:

```bash
npm install --save mlpg-panchang
```

### Usage 🔌

```javascript
// ES6 Import
import { MlpgPanchang } from 'mlpg-panchang';

// CommonJS
const { MlpgPanchang } = require('mlpg-panchang');
```

### Sample code 📑

```javascript
const { MlpgPanchang } = require('mlpg-panchang');

var obj = new MlpgPanchang();

// Based current date and time : calculate(date)
var mlpgObj = obj.calculate(new Date('2022-02-21T11:34:11.000Z'));
console.log(mlpgObj);

// Based regular Hindu Calendar details : calendar(date, latitude, longitude)
let mlpgCal = obj.calendar(
  new Date('2022-02-27T05:22:43.984Z'),
  12.972,
  77.594
);
console.log(mlpgCal);
```

<a name="Content"></a>

## Content 📖

- [Mlpg-Panchang](#mlpg-panchang)
    - [Installation 🧱](#installation-)
    - [Usage 🔌](#usage-)
    - [Sample code 📑](#sample-code-)
  - [Content 📖](#content-)
  - [Calculate](#calculate)
    - [Day](#day)
    - [Paksha](#paksha)
    - [Tithi](#tithi)
    - [Nakshatra](#nakshatra)
    - [Karna](#karna)
    - [Yoga](#yoga)
    - [Ayanamsa](#ayanamsa)
    - [Raasi](#raasi)
    - [Julian Date](#julian-date)
    - [Gana](#gana)
    - [Guna](#guna)
    - [Trinity](#trinity)
  - [Calendar](#calendar)
    - [Tithi](#tithi-1)
    - [Paksha](#paksha-1)
    - [Nakshatra](#nakshatra-1)
    - [Yoga](#yoga-1)
    - [Karna](#karna-1)
    - [Masa](#masa)
    - [Raasi](#raasi-1)
    - [Ritu](#ritu)
    - [Gana](#gana-1)
    - [Guna](#guna-1)
    - [Trinity](#trinity-1)
  - [Customize Name](#customize-name)
    - [setMlpgConstant](#setmlpgconstant)
    - [getMlpgConstant](#getmlpgconstant)
  - [Sun and Moon Timer](#sun-and-moon-timer)
    - [solarNoon](#solarnoon)
    - [nadir](#nadir)
    - [sunRise](#sunrise)
    - [sunSet](#sunset)
    - [sunRiseEnd](#sunriseend)
    - [sunSetStart](#sunsetstart)
    - [dawn](#dawn)
    - [dusk](#dusk)
    - [nauticalDawn](#nauticaldawn)
    - [nauticalDusk](#nauticaldusk)
    - [nightEnd](#nightend)
    - [night](#night)
  - [License ⚖️](#license-️)

<a name="calculate"></a>

## Calculate

Here the Panchang calculation is focused on Date and Time taking in consideration the Julian Date, Sun and Moon.

```javascript
//calculate(date)
//Example
var mlpgObj = obj.calculate(new Date('2022-02-21T11:34:11.000Z'));
console.log(mlpgObj.Day);
```

**Inputs**

| Parameter | Type   | Description                      |
| :-------- | :----- | :------------------------------- |
| `date`    | `Date` | Date for which details is needed |

<a name="calculate+Day"></a>

### Day

**Example**

```javascript
console.log(mlpgObj.Day);
```

**Output**

```chef
{ ino: 1, name: 'തിങ്കളാഴ്ച്ച', name_en_UK: 'Monday' }
```

| Parameter    | Type     | Description                              |
| :----------- | :------- | :--------------------------------------- |
| `name`       | `string` | Day in custom language (_default_: Odia) |
| `name_en_UK` | `string` | Day in English (UK)                      |
| `ino`        | `number` | Index no. of Day                         |

<a name="calculate+Paksha"></a>

### Paksha

**Example**

```javascript
console.log(mlpgObj.Paksha);
```

**Output**

```chef
{
    ino: 1,
    name: 'കൃഷ്ണ',
    name_en_IN: 'Krishna',
    name_en_UK: 'Waning Moon'
}
```

| Parameter    | Type     | Description                                |
| :----------- | :------- | :----------------------------------------- |
| `name`       | `string` | Tithi in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Tithi in English (India)                   |
| `name_en_UK` | `string` | Tithi in English (UK)                      |
| `ino`        | `number` | Index no. of Tithi                         |

<a name="calculate+Tithi"></a>

### Tithi

**Example**

```javascript
console.log(mlpgObj.Tithi);
```

**Output**

```chef
{
    name: 'പഞ്ചമി',
    name_en_IN: 'Panchami',
    ino: 19,
    start: 2022-02-20T15:35:33.000Z,
    end: 2022-02-21T14:27:50.000Z
}
```

| Parameter    | Type     | Description                                |
| :----------- | :------- | :----------------------------------------- |
| `name`       | `string` | Tithi in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Tithi in English (India)                   |
| `ino`        | `number` | Index no. of Tithi                         |
| `start`      | `Date`   | Start time of Tithi                        |
| `end`        | `Date`   | end time of Tithi                          |

<a name="calculate+Nakshatra"></a>

### Nakshatra

**Example**

```javascript
console.log(mlpgObj.Nakshatra);
```

**Output**

```chef
{
    name: 'ചോതി',
    name_en_IN: 'Swati',
    ino: 14,
    start: 2022-02-21T10:46:30.000Z,
    end: 2022-02-22T10:05:49.000Z
}
```

| Parameter    | Type     | Description                                    |
| :----------- | :------- | :--------------------------------------------- |
| `name`       | `string` | Nakshatra in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Nakshatra in English (India)                   |
| `ino`        | `number` | Index no. of Nakshatra                         |
| `start`      | `Date`   | Start time of Nakshatra                        |
| `end`        | `Date`   | end time of Nakshatra                          |

<a name="calculate+Karna"></a>

### Karna

**Example**

```javascript
console.log(mlpgObj.Karna);
```

**Output**

```chef
{
    name: 'തൈതുല',
    name_en_IN: 'Taitula',
    ino: 3,
    start: 2022-02-21T03:03:39.000Z,
    end: 2022-02-21T14:27:50.000Z
}
```

| Parameter    | Type     | Description                                |
| :----------- | :------- | :----------------------------------------- |
| `name`       | `string` | Karna in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Karna in English (India)                   |
| `ino`        | `number` | Index no. of Karna                         |
| `start`      | `Date`   | Start time of Karna                        |
| `end`        | `Date`   | end time of Karna                          |

<a name="calculate+Yoga"></a>

### Yoga

**Example**

```javascript
console.log(mlpgObj.Yoga);
```

**Output**

```chef
{
    name: 'വൃദ്ധി',
    name_en_IN: 'Vridhi',
    ino: 10,
    start: 2022-02-21T07:34:10.000Z,
    end: 2022-02-22T05:20:00.000Z
}
```

| Parameter    | Type     | Description                               |
| :----------- | :------- | :---------------------------------------- |
| `name`       | `string` | Yoga in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Yoga in English (UK)                      |
| `ino`        | `number` | Index no. of Yoga                         |
| `start`      | `Date`   | Start time of Yoga                        |
| `end`        | `Date`   | end time of Yoga                          |

<a name="calculate+Ayanamsa"></a>

### Ayanamsa

**Example**

```javascript
console.log(mlpgObj.Ayanamsa);
```

**Output**

```chef
{ name: `24 9'48"` }
```

<a name="calculate+Raasi"></a>

### Raasi

**Example**

```javascript
console.log(mlpgObj.Raasi);
```

**Output**

```chef
{ name: 'തുലാം', ino: 6, name_en_UK: 'Libra' }
```

| Parameter    | Type     | Description                                      |
| :----------- | :------- | :----------------------------------------------- |
| `name`       | `string` | Zodiac sign in custom language (_default_: Odia) |
| `name_en_UK` | `string` | Zodiac sign in English (UK)                      |
| `ino`        | `number` | Index no. of Zodiac sign                         |

<a name="calculate+Juldate"></a>

### Julian Date

**Example**

```javascript
console.log(mlpgObj.Julian);
```

**Output**

```chef
{ date: 2459632.211111111, day: 2459632 }
```

### Gana

**Example**

```javascript
console.log(mlpgObj.Gana);
```

**Output**

```chef
{
    "ino": 0,
    "name_en_IN": "Devata",
    "name_en_UK": "God",
    "name": "ദേവത"
}
```

| Parameter    | Type     | Description                                 |
| :----------- | :------- | :------------------------------------------ |
| `name`       | `string` | Gana in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Gana in English (India)                   |
| `name_en_UK` | `string` | Gana in English (UK)                      |
| `ino`        | `number` | Index no. of Gana                         |

### Guna

**Example**

```javascript
console.log(mlpgObj.Guna);
```

**Output**

```chef
{
  "ino": 0,
  "name_en_IN": "Rajas",
  "name_en_UK": "passion, activity, movement",
  "name": "രജസ്‌"
}
```

| Parameter    | Type     | Description                                 |
| :----------- | :------- | :------------------------------------------ |
| `name`       | `string` | Guna in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Guna in English (India)                   |
| `name_en_UK` | `string` | Guna in English (UK)                      |
| `ino`        | `number` | Index no. of Guna                         |

### Trinity

**Example**

```javascript
console.log(mlpgObj.Trinity);
```

**Output**

```chef
{
  "ino": 1,
  "name_en_IN": "Vishnu",
  "name": "വിഷ്‌ണു"
}
```

| Parameter    | Type     | Description                                 |
| :----------- | :------- | :------------------------------------------ |
| `name`       | `string` | Trinity in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Trinity in English (India)                   |
| `ino`        | `number` | Index no. of Trinity                         |

<a name="calendar"></a>

## Calendar

Here the Panchang calculation is focused on Hindu Calendar.

```javascript
//calendar(date, latitude, longitude)
// Example
let mlpgCal = obj.calendar(
  new Date('2022-02-27T05:22:43.984Z'),
  12.972,
  77.594
);

console.log(mlpgCal);
`````

**Inputs**

| Parameter   | Type     | Description                      |
| :---------- | :------- | :------------------------------- |
| `date`      | `Date`   | Date for which details is needed |
| `latitude`  | `number` | Latitude coordinate of Place     |
| `longitude` | `number` | Longitude coordinate of Place    |

<a name="calendar+Tithi"></a>

### Tithi

**Example**

```javascript
console.log(mlpgCal.Tithi);
```

**Output**

```chef
{ name: 'ദ്വാദശി', name_en_IN: 'Dvadasi', ino: 26 }
```

| Parameter    | Type     | Description                                |
| :----------- | :------- | :----------------------------------------- |
| `name`       | `string` | Tithi in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Tithi in English (IN)                      |
| `ino`        | `number` | Index no. of Tithi                         |

<a name="calendar+Paksha"></a>

### Paksha

**Example**

```javascript
console.log(mlpgCal.Paksha);
```

**Output**

```chef
{
    ino: 1,
    name: 'കൃഷ്‌ണ',
    name_en_IN: 'Krishna',
    name_en_UK: 'Waning Moon'
}
```

| Parameter    | Type     | Description                                 |
| :----------- | :------- | :------------------------------------------ |
| `name`       | `string` | Paksha in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Paksha in English (India)                   |
| `name_en_UK` | `string` | Paksha in English (UK)                      |
| `ino`        | `number` | Index no. of Paksha                         |

<a name="calendar+Nakshatra"></a>

### Nakshatra

**Example**

```javascript
console.log(mlpgCal.Nakshatra);
```

**Output**

```chef
{ name: 'പൂരാടം', name_en_IN: 'Purva Ashadha', ino: 19 }
```

| Parameter    | Type     | Description                                    |
| :----------- | :------- | :--------------------------------------------- |
| `name`       | `string` | Nakshatra in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Nakshatra in English (India)                   |
| `ino`        | `number` | Index no. of Nakshatra                         |

<a name="calendar+Yoga"></a>

### Yoga

**Example**

```javascript
console.log(mlpgCal.Yoga);
```

**Output**

```chef
{ name: 'ബ്യാഘാത്', name_en_IN: 'Vyatipata', ino: 16 }
```

| Parameter    | Type     | Description                               |
| :----------- | :------- | :---------------------------------------- |
| `name`       | `string` | Yoga in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Yoga in English (UK)                      |
| `ino`        | `number` | Index no. of Yoga                         |

<a name="calendar+Karna"></a>

### Karna

**Example**

```javascript
console.log(mlpgCal.Karna);
```

**Output**

```chef
{ name: 'ബാലവ', name_en_IN: 'Balava', ino: 1 }
```

| Parameter    | Type     | Description                                |
| :----------- | :------- | :----------------------------------------- |
| `name`       | `string` | Karna in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Karna in English (India)                   |
| `ino`        | `number` | Index no. of Karna                         |

<a name="calendar+Masa"></a>

### Masa

**Example**

```javascript
console.log(mlpgCal.Masa);
```

**Output**

```chef
{
    ino: 10,
    name: 'ഫാൽഗുനം',
    name_en_UK: 'Phalguna'
}
```

| Parameter    | Type     | Description                                      |
| :----------- | :------- | :----------------------------------------------- |
| `name`       | `string` | Zodiac sign in custom language (_default_: Odia) |
| `name_en_UK` | `string` | Zodiac sign in English (UK)                      |
| `ino`        | `number` | Index no. of Zodiac sign                         |

<a name="calendar+Raasi"></a>

### Raasi

**Example**

```javascript
console.log(mlpgCal.Raasi);
```

**Output**

```chef
{ ino: 10, name_en_UK: 'Aquarius', name: 'കുംഭം' }
```

| Parameter    | Type     | Description                                      |
| :----------- | :------- | :----------------------------------------------- |
| `name`       | `string` | Zodiac sign in custom language (_default_: Odia) |
| `name_en_UK` | `string` | Zodiac sign in English (UK)                      |
| `ino`        | `number` | Index no. of Zodiac sign                         |

<a name="calendar+Ritu"></a>

### Ritu

**Example**

```javascript
console.log(mlpgCal.Ritu);
```

**Output**

```chef
{ ino: 5, name: 'ശീതം', name_en_UK: 'Winter' }
```

| Parameter    | Type     | Description                                    |
| :----------- | :------- | :--------------------------------------------- |
| `name`       | `string` | Ritu sign in custom language (_default_: Odia) |
| `name_en_UK` | `string` | Ritu sign in English (UK)                      |
| `ino`        | `number` | Index no. of Ritu                              |

### Gana

**Example**

```javascript
console.log(mlpgObj.Gana);
```

**Output**

```chef
{
  "ino": 1,
  "name_en_IN": "Manushya",
  "name_en_UK": "Human",
  "name": "മനുഷ്യൻ"
}
```

| Parameter    | Type     | Description                               |
| :----------- | :------- | :---------------------------------------- |
| `name`       | `string` | Gana in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Gana in English (India)                   |
| `name_en_UK` | `string` | Gana in English (UK)                      |
| `ino`        | `number` | Index no. of Gana                         |

### Guna

**Example**

```javascript
console.log(mlpgObj.Guna);
```

**Output**

```chef
{
    "ino": 1,
    "name_en_IN": "Tamas",
    "name_en_UK": "ignorance, inertia, laziness",
    "name": "തമസികം"
}
```

| Parameter    | Type     | Description                               |
| :----------- | :------- | :---------------------------------------- |
| `name`       | `string` | Guna in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Guna in English (India)                   |
| `name_en_UK` | `string` | Guna in English (UK)                      |
| `ino`        | `number` | Index no. of Guna                         |

### Trinity

**Example**

```javascript
console.log(mlpgObj.Trinity);
```

**Output**

```chef
{
  "ino": 2,
  "name_en_IN": "Shiva",
  "name": "ശിവ"
}
```

| Parameter    | Type     | Description                                 |
| :----------- | :------- | :------------------------------------------ |
| `name`       | `string` | Trinity in custom language (_default_: Odia) |
| `name_en_IN` | `string` | Trinity in English (India)                   |
| `ino`        | `number` | Index no. of Trinity                         |

## Customize Name

Name variable can be customize with users own value.

### setMlpgConstant

To set custome variable
**Example**

```javascript
import { MlpgPanchang } from 'mlpg-panchanga';
let obj = new MlpgPanchang();
let customArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
obj.setMlpgConstant('Day', 'name', customArray);
var mlpgObj = obj.calculate(new Date('2022-02-21T11:34:11.000Z'));
console.log(mlpgObj.Day.name); // Mon
```

### getMlpgConstant

To get custome variable after its set or to see default variable
**Example**

```javascript
import { MlpgPanchang } from 'mlpg-panchanga';
let obj = new MlpgPanchang();
console.log(obj.getMlpgConstant('Day', 'name'));
```

## Sun and Moon Timer

```javascript
import { MlpgPanchang } from 'mlpg-panchanga';
let obj = new MlpgPanchang();

// Based Day important timing : calendar(date, latitude, longitude)
let mlpgCal = obj.sunTimer(
  new Date('2022-02-26T05:22:43.984Z'),
  12.972,
  77.594
);
```

### solarNoon

Time when sun is in the highest position.

**Example**

```javascript
console.log(mlpgCal.solarNoon).toEqual(new Date('2022-02-26T07:04:04.744Z'));
```

### nadir

Time when darkest moment of the night, sun is in the lowest position.

**Example**

```javascript
console.log(mlpgCal.nadir).toEqual(new Date('2022-02-25T19:04:04.744Z'));
```

### sunRise

Top edge of the sun appears on the horizon

**Example**

```javascript
console.log(mlpgCal.sunRise);
```

### sunSet

Sun disappears below the horizon, evening civil twilight starts

**Example**

```javascript
console.log(mlpgCal.sunSet);
```

### sunRiseEnd

Bottom edge of the sun touches the horizon

**Example**

```javascript
console.log(mlpgCal.sunRiseEnd);
```

### sunSetStart

Bottom edge of the sun touches the horizon

**Example**

```javascript
console.log(mlpgCal.sunSetStart);
```

### dawn

Morning nautical twilight ends, morning civil twilight starts

**Example**

```javascript
console.log(mlpgCal.dawn);
```

### dusk

Evening nautical twilight starts

**Example**

```javascript
console.log(mlpgCal.dusk);
```

### nauticalDawn

Morning nautical twilight starts

**Example**

```javascript
console.log(mlpgCal.nauticalDawn);
```

### nauticalDusk

Evening astronomical twilight starts

**Example**

```javascript
console.log(mlpgCal.nauticalDusk);
```

### nightEnd

Morning astronomical twilight starts

**Example**

```javascript
console.log(mlpgCal.nightEnd);
```

### night

Dark enough for astronomical observations

**Example**

```javascript
console.log(mlpgCal.night);
```

## License ⚖️

MPL
