import { Data } from './Models/Data';
import { Fish } from './Models/Fish';
import { LocationData } from './Models/LocationData';
import { Location } from './Models/Location';

const spring: string = "Spring";
const summer: string = "Summer";
const autumn: string = "Autumn";
const winter: string = "Winter";

export function getFishes(): Fish[] {
    var data: Data = require("./data/FishData.json");

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

        if (fish.seasons) {
            fish.seasons = fish.seasons.sort(function(a, b) { return sortBySeason(a, b)});
        }
    });

    return fishes.sort((a,b) => a.name > b.name ? 1 : -1);
}

function addLocation(fish: Fish, locationName: string, season: string)
{
    if (!fish.seasons) {
        fish.seasons = [];
    }

    fish.seasons.push(season);

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

function sortBySeason(a: string, b: string) : number{
    // TODO - Sort seasons into order
    // Use fish.seasons in results
    // How the fuck does this sorting work?
    // Example: catfish

    // Idea:
    const seasonOrder = [spring, summer, autumn, winter];
    return seasonOrder.indexOf(a) > seasonOrder.indexOf(b) ? 1 : -1; // Check -1s and 1s

    // Console testing code:
    // const seasonOrder = ["spring", "summer", "autumn", "winter"]
    // const moo = ["spring", "autumn", "winter", "summer"]
    // const moo2 = moo.sort(function(a,b) { return seasonOrder.indexOf(a) > seasonOrder.indexOf(b)})
}