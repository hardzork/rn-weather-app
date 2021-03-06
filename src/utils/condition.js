// storm - tempestade
// snow - neve
// hail - granizo
// rain - chuva
// fog - neblina
// clear_day - dia limpo
// clear_night - noite limpa
// cloud - nublado
// cloudly_day - nublado de dia
// cloudly_night - nublado de noite
// none_day - erro ao obter mas está de dia
// none_night - erro ao obter mas está de noite

import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export function condition(condition, size, isHome) {
  switch (condition) {
    case "storm":
      return (
        <Ionicons
          name="thunderstorm-outline"
          size={size}
          color={isHome ? "#fff" : "#1ec9ff"}
        />
      );
      break;
    case "snow":
      return (
        <Ionicons
          name="snow-outline"
          size={size}
          color={isHome ? "#fff" : "#1ec9ff"}
        />
      );
      break;
    case "hail":
      return (
        <MaterialCommunityIcons
          name="weather-hail"
          size={size}
          color={isHome ? "#fff" : "#1ec9ff"}
        />
      );
      break;
    case "rain":
      return (
        <Ionicons
          name="rainy-outline"
          size={size}
          color={isHome ? "#fff" : "#1ec9ff"}
        />
      );
      break;
    case "fog":
      return (
        <MaterialCommunityIcons
          name="weather-fog"
          size={size}
          color={isHome ? "#fff" : "#1ec9ff"}
        />
      );
      break;
    case "clear_day":
      return (
        <Ionicons
          name="sunny-outline"
          size={32}
          color={isHome ? "#fff" : "#ffb300"}
        />
      );
      break;
    case "clear_night":
      return (
        <MaterialCommunityIcons
          name="weather-night"
          size={size}
          color={isHome ? "#fff" : "#1ec9ff"}
        />
      );
      break;
    case "cloud":
      return (
        <Ionicons
          name="cloudy"
          size={size}
          color={isHome ? "#fff" : "#1ec9ff"}
        />
      );
      break;
    case "cloudly_day":
      return (
        <Ionicons
          name="partly-sunny-outline"
          size={size}
          color={isHome ? "#fff" : "#1ec9ff"}
        />
      );
      break;
    case "cloudly_night":
      return (
        <Ionicons
          name="cloudy-night-outline"
          size={size}
          color={isHome ? "#fff" : "#1ec9ff"}
        />
      );
      break;
    case "none_day":
      return (
        <MaterialCommunityIcons
          name="weather-cloudy-alert"
          size={size}
          color={isHome ? "#fff" : "#1ec9ff"}
        />
      );
      break;
    case "none_night":
      return (
        <MaterialCommunityIcons
          name="weather-cloudy-alert"
          size={size}
          color={isHome ? "#fff" : "#1ec9ff"}
        />
      );
      break;
  }
}
