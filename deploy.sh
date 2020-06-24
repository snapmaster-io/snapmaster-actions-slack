#!/bin/bash

gcloud functions deploy slack --trigger-http --entry-point actions \
  --allow-unauthenticated --runtime=nodejs12

