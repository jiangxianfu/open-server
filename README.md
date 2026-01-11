# open-server

### Push images
```
export GITHUB_PUSTH_TOKEN="xxx"
echo $GITHUB_PUSTH_TOKEN | docker login ghcr.io -u your-github-username --password-stdin
```

Open Server

### Git checkout with only Hasura V3 engine code

```
git clone --no-checkout https://github.com/hasura/graphql-engine.git --depth 1
cd graphql-engine
git sparse-checkout init --cone
git sparse-checkout set v3
git checkout @
```

