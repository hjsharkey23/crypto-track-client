#!/bin/bash

curl --include --request POST "http://localhost:4741/coins" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "coin": {
      "name": "'"${NAME}"'",
      "quantity":  "'"${QUANTITY}"'"
    }
  }'

echo
