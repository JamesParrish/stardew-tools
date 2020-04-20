import { Data } from './Models/Data';
import { Fish } from './Models/Fish';
import { LocationData } from './Models/LocationData';
import { Location } from './Models/Location';

const spring: String = "Spring";
const summer: String = "Summer";
const autumn: String = "Autumn";
const winter: String = "Winter";

export function getFishes(): Fish[] {
    var data: Data = require("./data/FishData.json");

    console.log("There are " + data.fishes.length + " fish from the importer");

    if (!data.fishes || !data.locations) {
        return [];
    }

    const fishes: Fish[] = data.fishes;

    const locations: LocationData[] = data.locations;

    fishes.forEach((fish) => {        
        locations.forEach((location) => {
            if (location.spring.includes(fish.id)) {
                addLocation(fish, location.prettyName, spring);
            }
            
            if (location.summer.includes(fish.id)) {
                addLocation(fish, location.prettyName, summer);
            }
            
            if (location.autumn.includes(fish.id)) {
                addLocation(fish, location.prettyName, autumn);
            }
            
            if (location.winter.includes(fish.id)) {
                addLocation(fish, location.prettyName, winter);
            }
        });
    });

    return fishes;
}

function addLocation(fish: Fish, locationName: String, season: String)
{
    if (!fish.locations) {
        fish.locations = [];
    }

    var location: Location = fish.locations.find(l => l.name === locationName);

    if (location) {
        location.seasons.push(season);
        return;
    }

    fish.locations.push({
        name: locationName,
        seasons: [season],
    });
}