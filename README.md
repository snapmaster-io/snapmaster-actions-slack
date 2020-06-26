![SnapMaster](https://github.com/snapmaster-io/snapmaster/raw/master/public/SnapMaster-logo-220.png)
# SnapMaster 
## Master your DevOps toolchain

SnapMaster is the definitive DevOps integration platform.  

## Purpose

This repository contains SnapMaster Actions for Slack.  It utilizes 
the [SnapMaster Actions](https://github.com/snapmaster-io/snapmaster-actions) package for all the scaffolding.

## Actions

| Action | Path  | Parameters | Type   | Required |
|--------|-------|------------|--------|----------|
| send   | /send | workspace  | string | true     |
|        |       | channel    | string | true     |
|        |       | message    | string | true     |
|        |       | token      | string | true     |

## Running / testing locally

`npm run dev` in the root directory of this project will run an HTTP server on localhost:5555.

## Invoking

```bash
curl http://localhost:5555/send -X POST \ 
  -H 'content-type: application/json' \
  -d '{ "channel": "general", "message": "hello", "token": "xoxp-..." }'
```

## Deploying to Google Cloud Functions

`./deploy.sh` will deploy this SnapMaster Action to the current GCP 
project using the `gcloud` CLI.
