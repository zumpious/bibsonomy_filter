# How to get userdata?
Open ``getuser.pl``, add your API credentials, customize the URL-Path and set path to save the API response. 

Afterwards execute ``perl getuser.pl`` in your command file to fetch the API. 

# Working with userdata

Firstly you need to decide whether you want to dynamically fetch the bibsonomy API or only fetch it once and save the 
result into a local file. Nevertheless you need to load the data into your JavaScript files. 

Currently this projects contains a `user.json`, containing the first 20 Papers of the bibsonomy user AKSW. 

Due to lack of time currently the `index.js` doesn't load the data from the `user.json` file, instead a variable has 
been created, where the userdata was pasted into.

The logic (currently WIP) to filter the userdata therefore begins on line **870**. Currently only the available filters 
a created, containing **year** and **authors**. For here you can keep on implementing the filter loigc. 