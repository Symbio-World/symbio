#!/bin/bash

grep "^version.code=" "./android/gradle.properties" | cut -d'=' -f2 | tr -d "\n"
