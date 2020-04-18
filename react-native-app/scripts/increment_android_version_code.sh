#!/bin/bash

echo "Incrementing Android version code"
GRADLE_PROPERTIES="./android/gradle.properties"
VERSION=$(grep "^version.code=" $GRADLE_PROPERTIES | cut -d'=' -f2)
echo "Old version $VERSION"
let NEW_VERSION=VERSION+1
echo "New version $NEW_VERSION"
sed -i.bak "s/\(version\.code=\).*\$/\1$NEW_VERSION/" $GRADLE_PROPERTIES
