let myresume = {
    "name": "Raghul S",
    "address": {
        "no": 40,
        "street": "Angamuthu Street",
        "town": "Alangayam",
        "District": "Thirupathur"
    },
    "email": "sairaghul1999@gmil.com",
    "ph number": 9790587505,
    "skills": ["Python", "javascript"],
    "college": "Thanthai periyar govt. institue of technology engineering college,vellore",
    "school": "St.Francis De sales hr sec school,Alangayam",
    "additional skills": "Tamil nadu state level volleyball player",
    "profiles": {
        "network": "A social media or other profile that you would like to include (e.g. LinkedIn, Twitter)",
        "username": "Your username on this network",
        "url": "A URL to your user profile page"
    },
    "work": {
        "company": "Your employer name",
        "position": "Your job title",
        "website": "The URL for the employer's website",
        "startDate": "Your start date, in YYYY-MM-DD format",
        "endDate": "Your end date, in YYY-MM-DD format (leave blank for a current position)",
        "summary": "A one-sentence to one-paragraph summary of this employer or position"
    },
    "languages": ["Tamil", "English"]
};

// 1. Using for Loop
console.log("Using for Loop:");
var keys = Object.keys(myresume);
for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    console.log(key + ": " + JSON.stringify(myresume[key]));
}

// 2. Using for...in Loop
console.log("Using for...in Loop:");
for (var key in myresume) {
    if (myresume.hasOwnProperty(key)) {
        console.log(key + ": " + JSON.stringify(myresume[key]));
    }
}

// 3. Using for...of Loop with Object.entries()
console.log("Using for...of Loop with Object.entries():");
for (var entry of Object.entries(myresume)) {
    var key = entry[0];
    var value = entry[1];
    console.log(key + ": " + JSON.stringify(value));
}

// 4. Using forEach Method with Object.keys()
console.log("Using forEach Method with Object.keys():");
Object.keys(myresume).forEach(function(key) {
    console.log(key + ": " + JSON.stringify(myresume[key]));
});