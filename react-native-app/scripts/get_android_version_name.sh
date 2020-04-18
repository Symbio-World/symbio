#!/bin/bash

grep "^version.name=" "./android/gradle.properties" | cut -d'=' -f2 | tr -d "\n"
