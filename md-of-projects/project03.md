# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Remotes

This repository has an additional remote called `mad` that points to the project's GitHub mirror at [Mad-marketing-git/FinTrack](https://github.com/Mad-marketing-git/FinTrack).

To push the current branch to that remote and set it as upstream:

```bash
git push -u mad <branch>
```

To list remotes:

```bash
git remote -v
```
