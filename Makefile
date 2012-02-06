TESTS = $(wildcard test/*.test.js) $(wildcard test/readers/*.test.js)
REPORTER = dot

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--timeout 10000 \
		--reporter $(REPORTER) \
		$(TESTS)

.PHONY: test init