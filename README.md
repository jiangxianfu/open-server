# Open Server

Development environment for building Docker images and testing open-source applications.

## Prerequisites

- Docker
- Git
- GitHub account with access to GitHub Container Registry (ghcr.io)

## Push Images to GitHub Container Registry

First, create a [Personal Access Token](https://github.com/settings/tokens/new) with `write:packages` permission.

```bash
# Set your GitHub Personal Access Token
export GITHUB_PUSH_TOKEN="your_personal_access_token_here"

# Login to GitHub Container Registry
echo $GITHUB_PUSH_TOKEN | docker login ghcr.io -u your-github-username --password-stdin

# Push your images
docker push ghcr.io/your-github-username/image-name:tag
```

## Hasura V3 Engine Setup

### Git checkout with only Hasura V3 engine code

```
git clone --no-checkout https://github.com/hasura/graphql-engine.git --depth 1
cd graphql-engine
git sparse-checkout init --cone
git sparse-checkout set v3
git checkout @
```

