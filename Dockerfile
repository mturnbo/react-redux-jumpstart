FROM nginx:1.15.2-alpine

COPY ./dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8081
ENTRYPOINT ["nginx","-g","daemon off;"]
