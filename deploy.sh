#!/bin/bash

NAME=slack

# this deploys the SnapMaster Actions as a Google Cloud Function 
gcloud functions deploy ${NAME} --trigger-http --entry-point snapmaster \
  --allow-unauthenticated --runtime=nodejs12

