#!/bin/bash

echo "Updating version code to $1"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $1" "./ios/Runner/Info.plist"
