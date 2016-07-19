.PHONY: all

all:
	@echo "make <cmd>"
	@echo ""
	@echo "commands:"
	@echo "  build       - build the public folder"
	@echo "  clean       - remove the public folder"
	@echo "  install     - npm i"
	@echo "  run         - start webpack dev server"
	@echo "  test        - run test suite"

build: clean
	mkdir ./public
	cp -R ./assets ./public/assets
	@NODE_ENV='production' ./node_modules/.bin/webpack --config webpack.config.prod.js

clean:
	rm -Rf public

install:
	npm i --progress=false

run: clean
	@NODE_ENV="development" ./node_modules/.bin/nodemon server.js

test: