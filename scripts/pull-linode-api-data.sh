#!/usr/bin/env bash

# Looks for new Linode distributions data
wget "https://api.linode.com/?api_key=${LINODE_API_KEY}&api_action=avail.distributions" -O hugo/data/linode-distributions.json
