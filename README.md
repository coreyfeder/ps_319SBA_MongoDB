# SBA 319: MongoDB Database Application
https://www.canva.com/design/DAFrigp0V5U/76Et4j_4KjlIyGSiv6gNsw/view
https://perscholas.instructure.com/courses/1923/assignments/355838
b. 2024-03-12


## Ongoing notes
Why was it so much harder to create a repo without a template?

Can't find the stupid directions for Express setup
got these, to set up the system: https://www.canva.com/design/DAFrioYleHo/n00cM_6gH8OdQXpaAxUrrA/  

Okay, resurrect instructions for setup, since I can't find them.
0. make the repo git-happy
0. `npm init -y` ?
0. `npm i nodemon`
0. `npm i express`
0. `npm i mongodb` for this?
0. add an index.js (hello world is fine)
0. 
Hey! Found instrux at ps_rest-express/README.md.
* in package.json, get rid of `test` and add `"start": "nodemon index.js"`
* if necessary: add a `.gitignore`, and add `node_modules` to it

OFFS. Where's my package.json? Where's my node_modules/?
It gave succeessful result messages, so it _thinks_ it satisfied the command. Why would it think that?
[...]
Looks like I had somehow `npm init`-ed my home directory. I suspect `npm` assumes it doesn't need to `init` the subdirectory of an `init`ed folder.
Deleted all those files, tried again...success!

## Endpoints
Ah, shit. Abstract, "do whatever you want" content...

Okay, let's be generic. Use the sample data, or else I'll be waffling forever. _Again._


