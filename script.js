const commonPlants = [
  // Trees
  "White Oak", "Sugar Maple", "Weeping Willow", "Paper Birch", "Eastern White Pine",
  "American Beech", "Southern Magnolia", "American Sycamore", "Sweetgum", "Apple Tree",
  "Flowering Dogwood", "Coconut Palm", "Coast Redwood", "Blue Gum Eucalyptus", "Olive Tree",
  "Umbrella Thorn Acacia", "Sakura", "Mango Tree", "Jacaranda", "Pear Tree",
  "Peach Tree", "Citrus Tree", "Ginkgo Tree", "Bald Cypress", "Palmetto", "Sago Palm",

  // Shrubs
  "Common Lilac", "Bigleaf Hydrangea", "Mountain Laurel", "Boxwood", "Elderberry",
  "Forsythia", "Staghorn Sumac", "Winterberry Holly", "Common Juniper", "Rose of Sharon",
  "Witch Hazel", "Rosemary", "Tea Plant", "Coffea arabica", "Pomegranate",
  "Lavender", "Tropical Hibiscus", "Blueberry", "Wild Blackberry", "Garden Rose",

  // Vines & Climbers
  "Grapevine", "English Ivy", "Chinese Wisteria", "Virginia Creeper", "Morning Glory",
  "Japanese Honeysuckle", "Clematis", "Poison Ivy", "Bougainvillea", "Kudzu",
  "Golden Pothos", "Black Pepper", "Passion Fruit", "Common Jasmine", "Vanilla Orchid",

  // Herbs, Forbs & Groundcovers
  "Common Sunflower", "Common Dandelion", "Sacred Lotus", "Opium Poppy", "Garden Tulip",
  "Bird of Paradise", "Peace Lily", "African / French Marigold", "Moth Orchid", "Aloe Vera",
  "Snapdragon", "Wild Carrot", "Carnation", "Saffron Crocus", "White Clover",
  "Broadleaf Plantain", "Common Purslane", "Wild Strawberry", "Creeping Thyme", "Hen and Chicks",
  "Stinging Nettle", "Spearmint", "Beach Morning Glory", "Gotu Kola", "Common Wood Sorrel",
  "Inchplant", "Sweet Violet", "Globe Thistle",

  // Grasses, Rushes & Reeds
  "Giant Bamboo", "Corn / Maize", "Pampas Grass", "Sugar Cane", "Wheat",
  "Paddy Rice", "Common Reed", "Lemongrass", "Purple Fountain Grass", "Barley",
  "Giant River Cane", "Kentucky Bluegrass",

  // Ferns & Lycophytes
  "Boston Fern", "Bracken Fern", "Australian Tree Fern", "Maidenhair Fern", "Bird's Nest Fern",
  "Staghorn Fern", "Ostrich Fern", "Rabbit's Foot Fern", "Field Horsetail",

  // Succulents & Cacti
  "Prickly Pear Cactus", "Jade Plant", "American Agave", "Mother-in-Law's Tongue", "Golden Barrel Cactus",
  "Holiday Cactus", "Crown of Thorns", "String of Pearls", "Zebra Haworthia", "Saguaro Cactus",
  "Pencil Cactus",

  // Garden Vegetables & Crops
  "Garden Tomato", "Banana", "Garden Pea", "Pumpkin", "Potato",
  "Chili / Bell Pepper", "Pineapple", "Beetroot", "Globe Artichoke", "Eggplant",
  "Cabbage", "Watermelon", "Sweet Potato", "Soybean", "Garden Strawberry",
  "Broccoli", "Cauliflower", "Lettuce", "Cucumber", "Elephant Ear / Taro",
  "Ginger / Turmeric", "Onion / Allium",

  // Aquatics & Marine
  "White Water Lily", "Water Hyacinth", "Giant Kelp", "Common Cattail", "Common Duckweed",
  "Water Lettuce", "Sargassum", "Eelgrass", "Bull Kelp", "Hornwort",
  "Water Chestnut", "Sea Lettuce", "Red Mangrove",

  // Mosses, Lichens & Bryophytes
  "Haircap Moss", "Sphagnum Moss", "Reindeer Lichen", "Common Liverwort", "Old Man's Beard",
  "Common Sunburst Lichen", "Pincushion Moss", "Oakmoss", "British Soldiers Lichen",

  // Carnivorous Plants
  "Venus Flytrap", "Tropical Pitcher Plant", "Yellow Trumpet / Purple Pitcher Plant", "Round-leaved Sundew", "Common Butterwort",
  "Common Bladderwort", "Cobra Lily / California Pitcher Plant", "Australian Pitcher Plant",

  // Epiphytes & Air Plants
  "Blushing Air Plant", "King Air Plant", "Silver Vase Bromeliad", "Monstera deliciosa", "Tail Flower",
  "Scarlet Star Bromeliad", "Mistletoe Cactus", "Hoya carnosa", "European / American Mistletoe"
]

const baseOddities = [
 "Spanish Moss", "Strangler Fig", "Baobab Tree", "Dodder / Witch's Hair",
  "Ghost Plant / Indian Pipe", "Rafflesia", "Yareta", "Welwitschia",
  "Dragon's Blood Tree", "Hydnora africana", "Boojum Tree", "Tumbleweed",
  "Toothwort", "Socotra Bottle Tree", "Sensitive Plant", "Red Mangrove",
  "Bald Cypress", "Australian Tree Fern", "European Mistletoe", "String of Pearls",
  "Giant Kelp", "Saguaro Cactus", "Goblin Gold / Luminous Moss", "Cup Lichen", "Map Lichen", "Resurrection Fern"
]

const stemOddities = [
  "Monkey Ladder Vine", "Greenbrier", "Jewelweed", "Papyrus",
  "Teasel", "Field Horsetail", "Banana", "Giant Bamboo",
  "Elephant's Foot", "Brain Cactus", "Tapeworm Plant / Ribbon Bush", "Giant Carrion Flower",
  "Winged Euonymus / Burning Bush", "Flying Dragon Citrus", "Wild Blackberry", "Rainbow Eucalyptus",
  "Silk Floss Tree", "African Baobab", "Cork Oak", "Striped Maple",
  "Strangler Fig", "Prickly Cycad"
]

const foliageOddities = [
  "Madagascar Lace Plant", "Giant Water Lily", "Fishbone Cactus", "Interrupted Leaf Croton",
  "Traveler's Palm", "Living Stones", "Baby Toes", "Horse's Teeth Haworthia",
  "Sweetheart Hoya", "Ferocious Begonia", "Dragon Scale Alocasia", "Network Calathea",
  "Velvet Black Alocasia", "Prayer Plant", "Resurrection Fern", "Ant Leaf Dischidia",
  "Waterwheel Plant", "Air Plant Xerographica", "Palm Leaf Oxalis"
];

const flowerOddities = [
  "Umbrella Liverwort", "Buxbaumia / Bug Moss", "Cinnamon Fern", "Adder's-tongue Fern",
  "Staghorn Fern", "Bunya Pine", "Breadtree Cycad", "Bristlecone Pine",
  "Welwitschia", "Titan Arum", "Bat Plant", "Pelican Flower",
  "Jack-in-the-Pulpit", "Voodoo Lily", "Flying Duck Orchid", "Bee Orchid",
  "Hot Lips Plant", "Ghost Orchid", "Jabuticaba", "Parrot Flower", "Bird of Paradise"
];

const extras = [
  "unicorn horn", "nose horn", "reindeer antlers", "long eyelashes",
  "huge ears", "cactus spikes", "huge eyes", "piebaldism", "insect antennae", "moose antlers",
  "bee stinger", "glowing eyes", "iridescence", "long whiskers", "fangs", "extra eyes",
  "sheep horns", "albinism", "melanism", "spines along the back", "bioluminescent",
  "erythrism", "heterochromia", "leucism", "xanthochromish", "hairless", "embedded gems", "plants", "mushrooms",
  "alien antennae", "sparkles", "ear tufts", "dragon wings", "bird wings", "multiple tails", "long claws", "mane",
  "fluffy cheeks", "fluffy ears", "colourful spots", "colourful stripes", "tusks", "roe deer antlers", "slime",
  "ankole watusi horns", "gills", "anglerfish lure", "crest feathers", "none"
];

// Trigger words for warning
const arachnidTriggers = [
  "spider", "tarantula", "whip spider", "arachnid",
  "scorpion", "centipede", "millipede", "tick", "mite"
];

function showArachnophobiaWarning(animal) {
  alert("WARNING: Arachnophobia generated");
  console.warn("Arachnophobia Warning Triggered for:", animal);
}

function closeWarning() {
  document.getElementById("warningOverlay").style.display = "none";
}

function checkForArachnids(animal) {
  return arachnidTriggers.some(trigger => animal.toLowerCase().includes(trigger));
}

// Each slot gets its own small pool of 15-25 oddities
const partMap = [
  baseOddities,    // slot 0: Base / Habit
  trunkOddities,   // slot 1: Trunk / Stem
  foliageOddities,    // slot 2: Leaves
  flowerOddities,   // slot 3: Bloom / Fertile Part
  fruitOddities,   // slot 4: Fruit / Seed Pod
  rootOddities,    // slot 5: Roots
  surfaceOddities  // slot 6: Surface / Armor
  foliageColorOddities
  bloomColorOddities
];

function rollSlot(commonArray, oddityArray) {
  const rollOddity = Math.random() >= 0.60;
  if (rollOddity && oddityArray && oddityArray.length > 0) {
    return oddityArray[Math.floor(Math.random() * oddityArray.length)];
  }
  return commonArray[Math.floor(Math.random() * commonArray.length)];
}

function generateAnimalWithAnimation(index) {
  const button = document.querySelector(`button[onclick='generateAnimalWithAnimation(${index})']`);
  const element = document.getElementById(`num${index}`);
  const arr = partMap[index]; // Pulls the exact oddity array for this button
  button.disabled = true;
  let count = 0;
  const interval = setInterval(() => {
    element.textContent = rollSlot(commonPlants, arr);
    count++;
    if (count > 20) {
      clearInterval(interval);
      const final = rollSlot(commonPlants, arr);
      element.textContent = final;
      button.disabled = false;
      if (checkForArachnids(final)) showArachnophobiaWarning(final);
    }
  }, 20);
}

function generateExtraWithAnimation(index) {
  const button = document.querySelector(`button[onclick='generateExtraWithAnimation(${index})']`);
  const element = document.getElementById(`num${index}`);
  button.disabled = true;
  let count = 0;
  const interval = setInterval(() => {
    element.textContent = extras[Math.floor(Math.random() * extras.length)];
    count++;
    if (count > 20) {
      clearInterval(interval);
      element.textContent = extras[Math.floor(Math.random() * extras.length)];
      button.disabled = false;
    }
  }, 20);
}
