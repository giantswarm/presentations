build:
	docker build -t presentations .
	docker run -p 8000:8000 -v ${PWD}/layout:/usr/src/app/layout -v ${PWD}/content:/usr/src/app/content -v ${PWD}/exports:/usr/src/app/exports presentations gulp

serve:
	docker build -t presentations .
	docker run -p 8000:8000 -p 35729:35729 -v ${PWD}/layout:/usr/src/app/layout -v ${PWD}/content:/usr/src/app/content -v ${PWD}/exports:/usr/src/app/exports presentations gulp serve

clean:
	rm -rf exports/*