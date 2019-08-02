FROM unocha/debian-base:9

WORKDIR /srv/www

COPY . .

RUN apt-get -qy update && \
    apt-get -qy upgrade && \
    apt-get -qy install \
        build-essential \
        curl \
        net-tools \
        rsync \
        software-properties-common && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -qy nodejs && \
    npm install -g yarn && \
    yarn && \
    yarn cache clean && \
    apt-get -qy remove build-essential && \
    apt-get -qy autoremove && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /root/.npm
