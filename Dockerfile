FROM unocha/nodejs:8.11.3

WORKDIR /srv/www

COPY . .

RUN cp deploy_script /etc/services.d/node/run && \
    cp finish_script /etc/services.d/node/finish && \
    apk add -U --virtual .build-dependencies \
        build-base \
        autoconf \
        automake \
        libtool \
        nasm && \
    npm install && \
    apk del .build-dependencies && \
    apk add -U rsync && \
    rm -rf /var/cache/apk/*
