/*
  Title:
    Supernatural

  Description:
    Balls!

    Those wayward Winchester boys are in trouble again, hunting something down in New Orleans. You are Bobby Singer, you know how "idjits" they can be, so you have to prepare. They will call you any minute with the race of the thing, and you want to answer as soon as possible. By answer, I mean: tell them how to kill, or fight it.

    You have something like a database (more like drunken doodling) to help them:

        werewolf : Silver knife or bullet to the heart
        vampire : Behead it with a machete
        wendigo : Burn it to death
        shapeshifter : Silver knife or bullet to the heart
        angel : Use the angelic blade
        demon : Use Ruby's knife, or some Jesus-juice
        ghost : Salt and iron, and don't forget to burn the corpse
        dragon : You have to find the excalibur for that
        djinn : Stab it with silver knife dipped in a lamb's blood
        pagan god : It depends on which one it is
        leviathan : Use some Borax, then kill Dick
        ghoul : Behead it
        jefferson starship : Behead it with a silver blade
        reaper : If it's nasty, you should gank who controls it
        rugaru : Burn it alive
        skinwalker : A silver bullet will do it
        phoenix : Use the colt
        witch : They are humans
        else : I have friggin no idea yet

    You can access the database as drunkenDoodling/drunken_doodling/DrunkenDoodling depending on your language.

    So a call would go down like this:

    The guys call you:


    ...and you reply (return) with the info, and your signature saying of yours!
    ```Burn it alive, idjits!

  Kata Link:
    https://www.codewars.com/kata/supernatural

  Discuss Link:
    https://www.codewars.com/kata/supernatural/discuss

  Solutions Link:
    https://www.codewars.com/kata/supernatural/solutions
*/

// Preloaded Data
const drunkenDoodling = {
  werewolf: 'Silver knife or bullet to the heart',
  vampire: 'Behead it with a machete',
  wendigo: 'Burn it to death',
  shapeshifter: 'Silver knife or bullet to the heart',
  angel: 'Use the angelic blade',
  demon: "Use Ruby’s knife, or some Jesus-juice",
  ghost: "Salt and iron, and don’t forget to burn the corpse",
  dragon: 'You have to find the excalibur for that',
  djinn: "Stab it with silver knife dipped in a lamb’s blood",
  'pagan god': 'It depends on which one it is',
  leviathan: 'Use some Borax, then kill Dick',
  ghoul: 'Behead it',
  'jefferson starship': 'Behead it with a silver blade',
  reaper: "If it’s nasty, you should gank who controls it",
  rugaru: 'Burn it alive',
  skinwalker: 'A silver bullet will do it',
  phoenix: 'Use the colt',
  witch: 'They are humans',
  else: 'I have friggin no idea yet',
}

// Long Solution
const bob = word => `${drunkenDoodling[word] || 'I have friggin no idea yet'}, idjits!`

// Function Export
module.exports = bob
