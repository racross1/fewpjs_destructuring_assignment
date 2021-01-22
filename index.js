const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  name: 'Kermit',
  color: 'green',
  album: {
    the_muppet_movie: {
      song_1: 'The Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

// Strings


// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo,,,,] = farmAnimals.split(' ')
const [,neigh,,,] = farmAnimals.split(' ')
const [,,baa,,] = farmAnimals.split(' ')
const [,,,oink,] = farmAnimals.split(' ')
const [,,,,cluck] = farmAnimals.split(' ')

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.
// Bessie, Dolly, Babe, and Little
const [Bessie,,,,] = farmAnimals.split(' ')
const [,,Dolly,,] = farmAnimals.split(' ')
const [,,,Babe,] = farmAnimals.split(' ')
const [,,,,Little] = farmAnimals.split(' ')

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.
const [black_and_white,,,,] = farmAnimals.split(' ')
const [,,black,,] = farmAnimals.split(' ')
const [,,,pink,] = farmAnimals.split(' ')

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red,,,,,,] = colors
const [,orange,,,,,] = colors
const [,,yellow,,,,] = colors
const [,,,green,,,] = colors
const [,,,,blue,,] = colors
const [,,,,,indigo,] = colors
const [,,,,,,violet] = colors

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r,,,,,,] = colors
const [,o,,,,,] = colors
const [,,y,,,,] = colors
const [,,,g,,,] = colors
const [,,,,b,,] = colors
const [,,,,,,v] = colors

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const [,,,,,indg,] = colors

// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names
const { name, color, job, partner } = k_muppet
const { song_1, song_2, song_4 } = k_muppet.album.the_muppet_movie

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner



// const l_muppet = {
//   k_name: 'Kermit',
//   k_color: 'green',
//   k_album: {
//     the_muppet_movie: {
//       song_1: 'Rainbow Connection',
//       song_2: 'Moving Right Along',
//       song_3: 'Never Before, Never Again',
//       song_4: 'I Hope That Something Better Comes Along',
//     },
//   },
//   k_job: 'Host of The Muppet Show',
//   k_partner: 'Miss Piggy'
// };
