Can encode files as follows: 
1. Base64 encode the file and copy to clipboard
```
base64 -i filename.ext | pbcopy
```

2. Add it as a secret

3. Recreate the secret file
```
echo "${{secrets.SOME_SECRET}}" | base64 -d > test.json
```
