# Mlpg-Panchang

A Node.js package to calculate detailed Malayalam Hindu Panchang (lunar calendar) elements such as Tithi, Nakshatra, Karna, Yoga, Raasi, Ayanamsa, Kollavarsham, and Ritu. Also provides sunrise/sunset, solar events, and Julian dates.

---

## 📦 Installation

```bash
npm install --save mlpg-panchang
```

---

## 🔌 Usage

### Import the package

```js
// ES6 Import
import { MlpgPanchang } from 'mlpg-panchang';

// CommonJS
const { MlpgPanchang } = require('mlpg-panchang');
```

### Create instance and calculate

```js
const obj = new MlpgPanchang();

// Basic calculation
const mlpgObj = obj.calculate(new Date('2022-02-21T11:34:11.000Z'));
console.log(mlpgObj);

// Calendar with location
const mlpgCal = obj.calendar(
  new Date('2022-02-27T05:22:43.984Z'),
  11.0737,
  76.2860
);
console.log(mlpgCal);
```

---

## 📑 Sample Outputs by Feature

### 🗓️ Day
```js
console.log(mlpgObj.Day);
```
```json
{ "ino": 1, "name": "തിങ്കളാഴ്ച", "name_en_UK": "Monday" }
```

### 🌙 Paksha
```js
console.log(mlpgObj.Paksha);
```
```json
{ "ino": 1, "name": "കൃഷ്ണ", "name_en_IN": "Krishna", "name_en_UK": "Waning Moon" }
```

### 📆 Tithi
```js
console.log(mlpgObj.Tithi);
```
```json
{
  "name": "പഞ്ചമി",
  "name_en_IN": "Panchami",
  "ino": 19,
  "start": "2022-02-20T15:35:33.000Z",
  "end": "2022-02-21T14:27:50.000Z"
}
```

### 🌟 Nakshatra
```js
console.log(mlpgObj.Nakshatra);
```
```json
{
  "name": "ചോതി",
  "name_en_IN": "Swati",
  "ino": 14,
  "start": "2022-02-21T10:46:30.000Z",
  "end": "2022-02-22T10:05:49.000Z"
}
```

### 🔪 Karna
```js
console.log(mlpgObj.Karna);
```
```json
{
  "name": "കഴുത",
  "name_en_IN": "Taitula",
  "ino": 3,
  "start": "2022-02-21T03:03:39.000Z",
  "end": "2022-02-21T14:27:50.000Z"
}
```

### 🧘 Yoga
```js
console.log(mlpgObj.Yoga);
```
```json
{
  "name": "വൃദ്ധി",
  "name_en_IN": "Vridhi",
  "ino": 10,
  "start": "2022-02-21T07:34:10.000Z",
  "end": "2022-02-22T05:20:00.000Z"
}
```

### 📐 Ayanamsa
```js
console.log(mlpgObj.Ayanamsa);
```
```json
{ "name": "24 9'48\"" }
```

### ♎ Raasi
```js
console.log(mlpgObj.Raasi);
```
```json
{ "name": "തുലാം", "ino": 6, "name_en_UK": "Libra" }
```

### 📅 Julian Date
```js
console.log(mlpgObj.Julian);
```
```json
{ "date": 2459632.211111111, "day": 2459632 }
```

### 🧬 Gana
```js
console.log(mlpgObj.Gana);
```
```json
{
  "ino": 0,
  "name_en_IN": "Devata",
  "name_en_UK": "God",
  "name": "ദേവത"
}
```

### 🔥 Guna
```js
console.log(mlpgObj.Guna);
```
```json
{
  "ino": 0,
  "name_en_IN": "Rajas",
  "name_en_UK": "passion, activity, movement",
  "name": "രജസ്"
}
```

### 🔱 Trinity
```js
console.log(mlpgObj.Trinity);
```
```json
{
  "ino": 1,
  "name_en_IN": "Vishnu",
  "name": "വിഷ്ണു"
}
```

---

## 🕉️ Features Summary

- 🌒 Tithi, 🌌 Nakshatra, ⚔️ Karna, 🧘 Yoga, ♎ Raasi calculations
- 🕊️ Gana, 🔥 Guna, 🔱 Trinity categorizations
- 🌄 Sunrise, 🌇 Sunset, 🕛 Solar Noon, and other solar events
- 📅 Julian Date computation
- 📍 Custom latitude/longitude support
- 📚 Masa and Ritu detection
- 📝 Localized name customizations

---

## ⚖️ License

Licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)
