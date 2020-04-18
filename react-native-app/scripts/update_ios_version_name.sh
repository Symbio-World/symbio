#!/bin/bash

echo "Updating version name to $1"
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString $1" "./ios/Runner/Info.plist"
