import {countries} from "../countries"

const $container = $("#container")
countries.forEach(c=>$container.append(`<h2>${c}</h2>`))