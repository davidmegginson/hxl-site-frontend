FROM public.ecr.aws/unocha/debian-snap-base:12-debian

WORKDIR /srv/www

COPY . .

RUN apt-get -qy update && \
    apt-get -qy upgrade && \
    apt-get -qy install \
        build-essential \
        curl \
        git \
        net-tools \
        rsync \
        software-properties-common && \
    git config --global user.email "$GIT_AUTHOR_EMAIL" && \
    git config --global user.name "$GIT_AUTHOR_NAME" && \
    npm install && \
    # seriosly, we need 2.0.1 or it breaks
    npm install gatsby-source-filesystem@2.0.1 && \
    apt-get -qy remove build-essential && \
    apt-get -qy autoremove && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /root/.npm
