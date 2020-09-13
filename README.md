[![Build Status](https://travis-ci.com/GitHug/roster-converter.svg?branch=master)](https://travis-ci.com/GitHug/roster-converter)
[![codecov](https://codecov.io/gh/GitHug/roster-converter/branch/master/graph/badge.svg)](https://codecov.io/gh/GitHug/roster-converter)

# Roster Converter
Converts Battlescribe roster files to Javascript.

### Usage

#### Container Parameters

```shell
docker container run -d -p 49160:8000 githug/roster-converter
```

```shell
docker container run -d -e SILENT=true -e PORT=8080 -p 49160:8080 githug/roster-converter
```

#### Environment Variables

* `PORT` - Port that the application listens to.
* `SILENT` - Set to suppress logging.

### Endpoints
The application has two endpoints.

* `GET /ping` - Used for health check.
* `POST /conversion` - Expects `multipart/form-data` with an attached [Battlescribe](https://battlescribe.net) roster file.

#### Example
```shell
docker container run -d -p 49160:8000 githug/roster-converter

curl -v -i -F "data=@rosterFile.rosz" -H "Content-Type: multipart/form-data" -X POST http://localhost:49160/conversion
```

## Versioning

[SemVer](http://semver.org/) for versioning. For the versions available, see the 
[tags on this repository](https://github.com/githug/roster-converter/tags). 

## Authors

* **Fredrik Mäkilä** - [GitHug](https://github.com/githug)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/githug/roster-converter/blob/master/LICENSE) file for details.
