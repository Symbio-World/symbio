#!/bin/bash

echo "Incrementing Android version number"
GRADLE_PROPERTIES="./android/gradle.properties"
VERSION=$(grep "^version.name=" $GRADLE_PROPERTIES | cut -d'=' -f2 | cut -d'.' -f1)
echo "Old version $VERSION"
let NEW_VERSION=VERSION+1
echo "New version $NEW_VERSION"
sed -i.bak "s/\(version\.name=\).*\$/\1$NEW_VERSION.0/" $GRADLE_PROPERTIES
