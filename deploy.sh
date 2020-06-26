#!/bin/bash

# this deploys the SnapMaster Actions as a Google Cloud Function
gcloud functions deploy slack --trigger-http --entry-point snapmaster \
  --allow-unauthenticated --runtime=nodejs12

