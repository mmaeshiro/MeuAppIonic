import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlides: false,
    name: "",
    username: ""
  }

  constructor() {

  }

  //Recupera dado do localstorage
  getConfigData(): any {
    return localStorage.getItem(config_key_name);
  }

  //Gravar dados localstorage
  setConfigData(showSlides?: boolean, name?: string, username?: string) {
    let config = {
      showSlides: false,
      name: "",
      username: ""
    };

    if (showSlides) {
      config.showSlides = showSlides;
    }

    if (name) {
      config.name = name;
    }

    if (username) {
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));

  }

}
