# The News Aggregator app

This app was built using Next.js.

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git

cd your-repo-name
```

You will first need API keys from `News API`, `The Guardian API`, and `New York Times API`.

Please follow their documentation to get an API Key:

- [News API](https://newsapi.org/docs/get-started)
- [The Guardian API](https://open-platform.theguardian.com/access/)
- [New York Times API](https://developer.nytimes.com/apis)

Now, with the API keys ready, you'll need to fill out the environment variables `API keys` keys accordingly.

First, make a copy of the `.env.example` file and rename it to `.env.local`, and open `.env.local`.

```bash
# News API
NEWS_API_KEY="<your key for News API>"
# The Guardian API
THE_GUARDIAN_API_KEY="<your key for The Guardian>"
# New York Times API
NYT_API_KEY="<your key for New York Times>"
NYT_API_SECRET="<your secret for News API>"
NYT_APP_ID="<your app id for News API>"
```
