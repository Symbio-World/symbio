This was an experiment of trying to implement core of product scraping logic in clojurescript

# Pros & Cons

Pros:
REPL - faster feedback loop than with tests
Clojure Spec - more powerful than types for modelling
Advanced community
Nice phylosophy overall

Cons:
have to hack to make it work
Libraries are old
Little documentation
No tutorials
Eco system not as big
Team has to spend time on learning
JSON has to be transformed from camelCase to kebab-case and back to be idiomatic
New workflow, has to spend time on configuration
Editor support is not as great for working with javascript libraries

# Decision
Overall decision continue with typescript, reevaluate after some time. 
Main drawback: cannot cmd click into javascript function to see how to use them


# Style guide
Naming functions - https://stuartsierra.com/2016/01/09/how-to-name-clojure-functions

When unsure about the style refer to
https://guide.clojure.style/#introduction

# VS Code plugins
Required:
- Calva

Optional
- Clojure Lint

# Workflow

- Open a project in a new VS Code window
- In VS Code open any ClojureScript file
- Press CMD SHIFT p and select Calva: Start a project REPL and connect (aka Jack-in). Make sure the checkbox is ticked
- Wait until the REPL window opens
- Only then, open a new terminal and require your build artefact so that a connect to the REPL is made. e.g. `node -e "require('./build')"`
- Open any ClojureScript file you want to evaluate in the REPL, press CMD SHIFT p and select Calva: Load current namespace in the REPL window

More info here
https://stackoverflow.com/questions/58060822/how-to-connect-a-clojurescript-node-repl-to-my-node-library-shadow-cljs-project



# Shadow-cljs
It uses shadow-cljs to compile clojurescript to javascript. https://shadow-cljs.github.io/docs/UsersGuide.html#_command_line

Project setup was done based on following tutorials https://stackoverflow.com/questions/52894430/how-to-author-agnostic-javascript-library-in-clojurescript
