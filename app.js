// Collaborated with Brittany.

// Crates an array of objects with different items in each one.
var tweets = [
  {
    tweet: `Getting older. I used to be able to run a 4-minute mile, bench press 380 pounds, and tell the truth.`,
    username: `@ConanOBrien`,
    created_at: `10-25-2020`,
    age: 57,
  },

  {
    tweet: `Women get to smell like real things (vanilla, lavender) but men have to smell like concepts. What the fuck is "cool sport rush"`,
    username: `@ronnui_`,
    created_at: `08-15-2020`,
    age: 17,
  },

  {
    tweet: `Me: i have a headache WebMD: and it’ll be your last`,
    username: `@YRN_Jay15`,
    created_at: `12-16-2020`,
    age: 27,
  },

  {
    tweet: `Feel bad for the person who has to type all those words so fast every time I turn on subtitles`,
    username: `@Sonny5ideUp`,
    created_at: `05-14-2019`,
    age: 43,
  },

  {
    tweet: `[prounounces molecules like hercules]`,
    username: `@notviking`,
    created_at: `04-02-2019`,
    age: 10,
  },

  {
    tweet: `To the guy who stole my antidepressants, I hope you're happy now.`,
    username: `@EddyElfenbein`,
    created_at: `07-29-2018`,
    age: 18,
  },

  {
    tweet: `Why don't crabs give to charity? Because they're shellfish. #dadjokes`,
    username: `@DaddyPoppinsBlg`,
    created_at: `04-20-2017`,
    age: 22,
  },

  {
    tweet: `I was addicted to the hokey pokey... But, I turned myself around.`,
    username: `@RedShiningStar`,
    created_at: `04-21-2017`,
    age: 27,
  },

  {
    tweet: `Do they allow loud laughing in Hawaii, or just a low ha?`,
    username: `@trawwithtweets`,
    created_at: `11-15-2020`,
    age: 16,
  },

  {
    tweet: `Millenials. Walking around like they rent the place.`,
    username: `@SpenceDen`,
    created_at: `01-03-2018`,
    age: 19,
  },
];

// Function to check if age is greater than or equal to 18, if so, return true. if not, return false.
// added error else block
function checkIfBoomer(tweet) {
  if (tweet.age >= 18) {
    return true;
  } else if (tweet.age < 18) {
    return false;
  } else {
    console.log("ERROR");
  }
}

// the filter method will store the full objects that return true for the age Key Value Pair.
var defBoomer = tweets.filter(checkIfBoomer);

// console logging new object.
console.log(defBoomer);

// crates a variable for the number of objects in the array.... this is still called an array, right? an array of objects?????

// var tweetsLength = tweets.length;

// for loop that iterates on "i" as long as it is less than the tweetsLength variable(10). and runs the console log.
// used /n to create new lines in the console to make it more readable.
// [i] accesses the object at the current position of the i variable. "i++" increments on the variable i after each loop.

// for (var i = 0; i < tweetsLength; i++) {
//   console.log(
//     `Tweet: ${tweets[i].tweet} \n By: ${tweets[i].username} \n On: ${tweets[i].created_at} \n User Age: ${tweets[i].age}`
//   );
// }
