# SQL Rest API usig NodeJS
A simple example of how to create a local REST API for making calls into a SQL database.

# Prerequisites
* NodeJS 16.2 (<a href="https://nodejs.org/en/">NodeJS site</a>)
* "express" module for NodeJS (install using: npm install express)
* "msnodesqlv8 module for NodeJS (install using: npm install msnodesqlv8)

# Instructions
After installing NodeJS and its subsequent modules, from a command prompt type:

```
> node SQL_RestAPI.js <dbserver> <db> <user> <password>
```

You can use PowerShell or an OpCon Web Services connector job to test the API.  Here's an example in PowerShell:

```
Invoke-RestMethod -Method Get -URI "http://localhost:8081"
```

The response back should be: "Welcome to SQL API!"

Some ideas for this would be to launch it from an OpCon job and then with a Web Services job you could do API calls and retrieve data to pass onto other API's, databases, OpCon jobs.


# Disclaimer
No Support and No Warranty are provided by SMA Technologies for this project and related material. The use of this project's files is on your own risk.

SMA Technologies assumes no liability for damage caused by the usage of any of the files offered here via this Github repository.

# License
Copyright 2019 SMA Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

# Contributing
We love contributions, please read our [Contribution Guide](CONTRIBUTING.md) to get started!

# Code of Conduct
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code-of-conduct.md)
SMA Technologies has adopted the [Contributor Covenant](CODE_OF_CONDUCT.md) as its Code of Conduct, and we expect project participants to adhere to it. Please read the [full text](CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.
