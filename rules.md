# Github rules

**Github repos, names, merge requests (MR), reviews, homeworks**

Please find [project and `MR` example here](https://github.com/korzio/korzhikov-alex-otus/pull/1)

- *SHOULD* be one repo for all homeworks
- repo name *SHOULD* be named like `lastname-name(?:-otus)?.*`, `^(?:\w)+-(?:\w)+(?:-otus)?.*$`, f.e. `korzhikov-alex-otus`
- main branch *SHOULD* be `master`
- repo *SHOULD* exclude node_modules, editor files, bower_components, etc.

- each homework *SHOULD* be inside the folder named as a block (`javascript`, `node`, etc)
- each homework *SHOULD* be a separate `MR` (helps reviewing, adding comments) from the feature branch (branched from `master` or any other working branch) with a block name and a lesson number (javascript-1, node-3, react-4, angular-3) to `master`
- if any changes were requested, updates *SHOULD* be done inside the existing branch and `MR`
- each `MR` *SHOULD* be merged to `master` after the homework is accepted
(if a project contains many steps/homeworks - valid changes *SHOULD* be seen in the next `MR`)
(it is possible to make the other branch a target for `MR` to show actual changes)
- every scaffolding code *SHOULD NOT* be included into `MR`
- keys, passwords *SHOULD NOT* be included into `MR`

- test & build *SHOULD* pass
- *MAY* work with `git` from command line, not using `github` web interface
- While adding changes to already opened MR, please don't close the MR - commit to the same branch with homework. Then link to MR with home work will stay the same and all the previous comments will stay in place. Gihub UI is advaced enough to highlight the changed spots.
- if `MR` is more than 1 file, linter *SHOULD* be added to the project and enabled before commiting changes
