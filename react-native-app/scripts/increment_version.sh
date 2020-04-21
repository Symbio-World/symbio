#!/bin/bash

bash ./scripts/increment_android_version_code.sh
bash ./scripts/increment_android_version_name.sh
bash ./scripts/update_ios_version_code.sh $(bash ./scripts/get_android_version_code.sh)
bash ./scripts/update_ios_version_name.sh $(bash ./scripts/get_android_version_name.sh)
