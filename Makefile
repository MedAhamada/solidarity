install:
	cp .env.example .env
	make backend-install
	make frontend-install

backend-install:
	docker-compose up -d
	cd ./backend && yarn
	docker-compose down

backend-start:
	docker-compose up -d
	cd ./backend && yarn start:debug

frontend-install:
	cd ./frontend && yarn

frontend-start:
	cd ./frontend && yarn start


