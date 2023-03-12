cleanup:
	rm -rf _site
	rm -rf .parcel-cache

cleanup-all:
	rm -rf _site
	rm -rf .parcel-cache
	rm -rf node_modules

install:
	@if [ ! -d "node_modules" ]; then \
		echo "node_modules directory not found. Running 'npm ci'..."; \
		npm ci; \
	else \
		echo "node_modules directory found. Skipping 'npm ci'..."; \
	fi

reinstall:
	make cleanup-all
	make install

dev:
	make cleanup
	make install
	npm run dev

build:
	make cleanup
	make install
	npm run build
