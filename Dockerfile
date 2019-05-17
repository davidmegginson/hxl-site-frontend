FROM unocha/nodejs:8.11.3

WORKDIR /srv/www

COPY . .

RUN cp run_node /etc/services.d/node/run && \
    apk add -U --virtual .build-dependencies \
        build-base \
        autoconf \
        automake \
        libtool \
        nasm && \
    npm install && \
    apk del .build-dependencies && \
    rm -rf /var/cache/apk/*
